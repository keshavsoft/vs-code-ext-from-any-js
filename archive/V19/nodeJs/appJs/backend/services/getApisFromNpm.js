// import extractApis from 'pattern-collector-appjs-use-extract';
import getAnyJsStory from 'pattern-collector-anyjs-story';

const getSchemaFiles = (activeEditorContect) => {
    // const apisPresent = extractApis({ fileContent: activeEditorContect });
    const anyJsStory = getAnyJsStory({
        fileContent: activeEditorContect,
        fileType: "fromAppJs"
    });

    // console.log("aaaaaaaa : ", anyJsStory.linesStory);
    const apisPresent = anyJsStory?.linesStory?.importLines.map(element => {
        return element?.part2;
    });

    return apisPresent;
    // return getTableNames(inTargetPath);
};

export default getSchemaFiles;
