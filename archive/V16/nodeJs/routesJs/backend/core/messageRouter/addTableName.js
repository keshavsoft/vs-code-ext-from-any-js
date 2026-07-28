import forgeEndpointAction from "../../forge/actions/forgeEndpoint.js";

export default async function addTableName({ message, panel, toPath, schemasPath, inTargetPath, port }) {
    await forgeEndpointAction({
        panel,
        tableName: message.tableName,
        toPath,
        schemasPath,
        inFolderName: message.inFolderName,
        inTargetPath,
        inPort: port
    });
}
