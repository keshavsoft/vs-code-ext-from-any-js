import { startOrchestration } from './orchestration/startOrchestration.js';

const addSubRoute = (context) => {
    return async (uri) => startOrchestration({ uri, extensionPath: context.extensionPath });
};

export default addSubRoute;