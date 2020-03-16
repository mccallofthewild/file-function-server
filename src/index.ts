// import 'core-js/stable';
// import 'regenerator-runtime/runtime';
import fs from 'fs';
import path from 'path';
import express from 'express';

export type FileFunctionHandler = (
	req: express.Request,
	res: express.Response
) => number;

export class FileFunctionServer {
	private app: express.Express;
	private fnDir: string;
	public port: number;

	/**
	 * start
	 */
	public start() {
		this.app.listen(this.port, () =>
			console.log(`running on http://localhost:${this.port}`)
		);
	}
	constructor({
		app = express(),
		functionsDir = path.join(process.env.PWD || process.cwd(), '/functions'),
		port = process.env.PORT || 9000
	}: {
		app?: express.Express;
		functionsDir?: string;
		port?: string | number;
	} = {}) {
		this.app = app;
		this.fnDir = functionsDir;
		this.attachFunctionsEndpoint();
		this.port = +port;
	}
	private formatFunctionName(name: string) {
		return name.split('.')[0];
	}
	private attachFunctionsEndpoint() {
		this.app.use('/functions/:function?', async (req, res) => {
			const fnName = this.formatFunctionName(req.params.function);
			if (!fnName) {
				const fns = fs.readdirSync(this.fnDir);
				return res.send(/* HTML */ `
					<h1>Functions:</h1>
					<ul>
						${fns
							.map(fn => {
								fn = this.formatFunctionName(fn);
								return `<li>
									<a href="/functions/${fn}">${fn}</a>
								</li>`;
							})
							.join('')}
					</ul>
				`);
			}
			try {
				let fnModule;
				try {
					fnModule = require(path.relative(
						__dirname,
						path.join(this.fnDir, fnName)
					));
				} catch (e) {}
				if (!fnModule) {
					res.status(404);
					return res.send(`file/folder not found for function ${fnName}`);
				}
				const fnHandler = fnModule.default;
				if (!fnHandler) {
					res.status(404);
					return res.send(
						`handler not found in file/folder for function ${fnName}`
					);
				}
				console.log(/* template */ `running function: ${fnName}`);
				const body = await fnHandler(req, res);
				res.send(body);
			} catch (e) {
				console.log(e);
				res.status(500);
				res.send('failed');
			}
		});
	}
}
