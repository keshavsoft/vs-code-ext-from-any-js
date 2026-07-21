import addListenersCommands from './addListeners/registerCommands.js';
import publicCommands from './public/registerCommands.js';

const registerAllCommands = (context) => {
    addListenersCommands(context);
    publicCommands(context);
};

export default registerAllCommands;