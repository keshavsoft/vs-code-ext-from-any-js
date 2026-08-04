import { getTableNames } from 'kschema-fs-read-config';

export function getSchemaFiles(inTargetPath) {
    return getTableNames(inTargetPath);
}
