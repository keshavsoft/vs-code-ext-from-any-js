/**
 * Pure function that generates schema option elements from schemas array.
 * @param {Array} schemas 
 * @returns {HTMLOptionElement[]}
 */
export function createSchemaOptions(schemas) {
    if (!schemas || schemas.length === 0) {
        const option = document.createElement("option");
        option.value = "";
        option.textContent = "-- No Tables Found --";
        return [option];
    }
    return schemas.map(schema => {
        const option = document.createElement("option");
        option.value = schema.tableName;
        option.textContent = `${schema.tableName} (${schema.name})`;
        return option;
    });
}

/**
 * Pure function that generates endpoint option elements from endpoint array.
 * @param {Array} endPoints 
 * @returns {HTMLOptionElement[]}
 */
export function createEndpointOptions(endPoints) {
    if (!endPoints || endPoints.length === 0) {
        const option = document.createElement("option");
        option.value = "";
        option.textContent = "-- No Endpoints Found --";
        return [option];
    }
    return endPoints.map(endpoint => {
        const option = document.createElement("option");
        option.value = endpoint;
        option.textContent = endpoint;
        return option;
    });
}
