import showAllJsonAction from "../../actions/showAllJson.js";

export default function generate({ message, toPath, schemasPath, inTargetPath }) {
    return showAllJsonAction({
        inTableName: message.tableName,
        inCreateEndPoint: message.createEndPoint,
        inReadEndPoint: message.readEndPoint,
        inUpdateEndPoint: message.updateEndPoint,
        inDeleteEndPoint: message.deleteEndPoint,
        toPath, schemasPath, inTargetPath
    });
}
