import 'core-js/stable';
import 'regenerator-runtime/runtime';
import fs from 'fs';
import path from 'path';
import express from 'express';

export type FunFolHandler = (
	req: express.Request,
	res: express.Response
) => any;

export class FunctionFolderServer {
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
	private attachFunctionsEndpoint() {
		this.app.use('/functions/:function?', async (req, res) => {
			if (!req.params.function) {
				const fns = fs.readdirSync(this.fnDir);
				return res.send(/* HTML */ `
					<h1>Functions:</h1>
					<ul>
						${fns
							.map(
								fn => `<li>
								<a href="/functions/${fn}">${fn}</a>
							</li>`
							)
							.join('')}
					</ul>
				`);
			}
			console.log(/* template */ `running function: ${req.params.function}`);
			const body = await require(`./functions/${req.params.function}`).handler(
				req,
				res
			);
			res.send(body);
		});
	}
}
