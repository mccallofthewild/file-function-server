// @ts-nocheck
const { FileFunctionServer } = require('../../lib');
const path = require('path');
new FileFunctionServer({
	port: 10101,
	functionsDir: path.join(__dirname, '/functions')
}).start();
