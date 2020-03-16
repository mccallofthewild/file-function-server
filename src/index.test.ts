import { FileFunctionServer, FileFunctionHandler } from '.';

describe('FunctionFolderServer', () => {
	new FileFunctionServer().start();
	it('cool', () => new Promise(r => setTimeout(r, 2000)));
});

export default ((req, res) => {}) as FileFunctionHandler;
