import { FileFunctionServer } from '.';

describe('FunctionFolderServer', () => {
	new FileFunctionServer().start();
	it('cool', () => new Promise(r => setTimeout(r, 2000)));
});
