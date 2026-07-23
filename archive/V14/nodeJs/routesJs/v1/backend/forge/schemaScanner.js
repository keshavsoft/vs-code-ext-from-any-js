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
                let columns = [];

                if (schema.columns) {
                    if (Array.isArray(schema.columns)) {
                        columns = schema.columns.map(c => {
                            if (typeof c === 'string') return c;
                            return c.columnName || c.name || JSON.stringify(c);
                        });
                    } else if (typeof schema.columns === 'object') {
                        columns = Object.keys(schema.columns);
                    }
                } else if (schema.properties) {
                    columns = Object.keys(schema.properties);
                } else if (schema.fields) {
                    if (Array.isArray(schema.fields)) {
                        columns = schema.fields.map(f => {
                            if (typeof f === 'string') return f;
                            return f.fieldName || f.name || JSON.stringify(f);
                        });
                    } else if (typeof schema.fields === 'object') {
                        columns = Object.keys(schema.fields);
                    }
                } else {
                    const keys = Object.keys(schema).filter(k => k !== 'tableName');
                    if (keys.length > 0 && keys.length < 50) {
                        columns = keys;
                    }
                }

                return {
                    name: item.name,
                    tableName: schema.tableName || fallbackTableName,
                    columns: columns.slice(0, 15) // limit size for UI preview
                };
            } catch {
                return {
                    name: item.name,
                    tableName: fallbackTableName,
                    columns: []
                };
            }
        });
}
