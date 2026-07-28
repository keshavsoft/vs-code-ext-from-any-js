import path from "path";
import getEndPoints from 'kschema-build-endpoints';
import extractRegex from './extractRegex.js';

const startFunc = ({ inTargetPath }) => {
    const endPointsArray = getEndPoints({
        inTargetPath,
        toPath: path.join(inTargetPath, "api"),
        extractRegex: extractRegex.fromEndPointsJs
    });

    //    toPath: appJsPath,
    // inTargetPath: __dirname,
    // extractRegex: extractRegex.fromEndPointsJs

    const onlyEndPoints = endPointsArray.map(element => {
        return element?.methodsContent?.forRestClientFull;
    });

    return onlyEndPoints;
};

export default startFunc;
