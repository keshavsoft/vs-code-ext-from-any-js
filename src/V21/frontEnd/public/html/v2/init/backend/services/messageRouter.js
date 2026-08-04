import * as vscode from 'vscode';
import showAllJsonAction from "./actions/showAllJson.js";

import { getSchemaFiles } from "./schemaService.js";
import getEndPoints from "./endPointsService.js";

export async function handleWebviewMessage({ message, panel, toPath, schemasPath, inTargetPath }) {

    switch (message.action) {
        case "loadSchemas":

            const schemas = getSchemaFiles(inTargetPath);

            panel.webview.postMessage({
                type: "schemas",
                schemas
            });
            break;

        case "loadEndPoints":

            const endPoints = getEndPoints({ inTargetPath });

            panel.webview.postMessage({
                type: "endPoints",
                endPoints
            });
            break;
            
        case "showAllJson":
            panel.webview.postMessage({
                type: "status",
                text: "⏳ Generating showAll.json configurations..."
            });

            try {
                const fromShowAllJsonAction = showAllJsonAction({
                    inTableName: message.tableName,
                    inEndPoint: message.endPoint,
                    toPath, schemasPath, inTargetPath
                });

                const formatList = (arr) => {
                    if (!arr || !Array.isArray(arr) || arr.length === 0) {
                        return '<li class="text-gray-500 list-none">No items found</li>';
                    }
                    return arr.map(item => {
                        if (typeof item === 'string') {
                            const escapedFile = item.replace(/\\/g, '\\\\');
                            return `<li>
                                <a href="#" onclick="openFile('${escapedFile}'); return false;" class="text-blue-400 hover:text-blue-300 hover:underline break-all">
                                    ${item}
                                </a>
                            </li>`;
                        } else {
                            return `<li><pre class="bg-gray-800 p-2 rounded text-xs overflow-auto text-gray-300">${JSON.stringify(item, null, 2)}</pre></li>`;
                        }
                    }).join('');
                };

                const alteredFilesCount = fromShowAllJsonAction && fromShowAllJsonAction.alteredFiles ? fromShowAllJsonAction.alteredFiles.length : 0;
                const hiddenGemsCount = fromShowAllJsonAction && fromShowAllJsonAction.hiddenGems ? fromShowAllJsonAction.hiddenGems.length : 0;

                const alteredFilesList = formatList(fromShowAllJsonAction && fromShowAllJsonAction.alteredFiles);
                const hiddenGemsList = formatList(fromShowAllJsonAction && fromShowAllJsonAction.hiddenGems);

                panel.webview.postMessage({
                    type: "complete",
                    html: `
                        <div class="font-semibold mb-3 text-green-400 text-base">
                            ✅ Generation Complete
                        </div>
                        <div class="text-xs space-y-1 mb-4 text-gray-400">
                            <div><b>Endpoint:</b> <span class="text-gray-300">${message.endPoint}</span></div>
                            <div><b>Table:</b> <span class="text-gray-300">${message.tableName}</span></div>
                        </div>
                        
                        <div class="border-b border-gray-700 mb-4 flex space-x-2">
                            <button onclick="switchTab(event, 'tab-altered')" class="tab-btn px-3 py-1.5 font-medium text-xs rounded bg-blue-600 text-white transition-all duration-150" data-tab="tab-altered">
                                Altered Files (${alteredFilesCount})
                            </button>
                            <button onclick="switchTab(event, 'tab-hidden')" class="tab-btn px-3 py-1.5 font-medium text-xs rounded text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-150" data-tab="tab-hidden">
                                Hidden Gems (${hiddenGemsCount})
                            </button>
                        </div>

                        <div id="tab-altered" class="tab-content space-y-2">
                            <ul class="list-disc pl-5 text-sm space-y-1.5 text-gray-300">
                                ${alteredFilesList}
                            </ul>
                        </div>

                        <div id="tab-hidden" class="tab-content hidden space-y-2">
                            <ul class="list-disc pl-5 text-sm space-y-1.5 text-gray-300">
                                ${hiddenGemsList}
                            </ul>
                        </div>
                    `
                });
            } catch (error) {
                panel.webview.postMessage({
                    type: "status",
                    text: `❌ Generation failed: ${error.message}`
                });
            }
            break;

        case "openFile":
            if (message.filePath) {
                try {
                    const document = await vscode.workspace.openTextDocument(
                        vscode.Uri.file(message.filePath)
                    );
                    await vscode.window.showTextDocument(document);
                } catch (error) {
                    vscode.window.showErrorMessage(`Failed to open file: ${error.message}`);
                }
            }
            break;
        // case "insertGenPk":
        //     await insertGenPkAction({
        //         panel,
        //         tableName: message.tableName,
        //         toPath,
        //         schemasPath,
        //         inFolderName: message.inFolderName,
        //         inTargetPath,
        //         inPort: port
        //     });
        //     break;

    }
};
