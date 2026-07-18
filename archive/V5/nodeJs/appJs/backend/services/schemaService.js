import fs from 'fs';
import path from 'path';

export function getSchemaFiles(schemasPath) {
    if (schemasPath === undefined || !fs.existsSync(schemasPath)) {
        return [];
    }

    return fs.readdirSync(schemasPath, { withFileTypes: true })
        .filter((item) => item.isFile() && item.name.endsWith(".json"))
        .sort((first, second) => first.name.localeCompare(second.name))
        .map((item) => {
            const filePath = path.join(schemasPath, item.name);
            const fallbackTableName = path.basename(item.name, ".json");

            try {
                const schema = JSON.parse(fs.readFileSync(filePath, "utf8"));
                return {
                    name: item.name,
                    tableName: schema.tableName || fallbackTableName
                };
            } catch {
                return {
                    name: item.name,
                    tableName: fallbackTableName
                };
            }
        });
}
