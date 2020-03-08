import { FunctionFolderServer } from '.';

describe('FunctionFolderServer', () => {
	new FunctionFolderServer().start();
	it('cool', () => new Promise(r => setTimeout(r, 2000)));
});
