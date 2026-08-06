import forgeSubRouteAction from "../../forge/actions/forgeSubRoute.js";

export default async function addTableName({ message, panel, toPath, schemasPath, inTargetPath, port }) {
    await forgeSubRouteAction({
        panel,
        tableName: message.tableName,
        toPath,
        schemasPath,
        inFolderName: message.inFolderName,
        inTargetPath,
        inPort: port
    });
}
