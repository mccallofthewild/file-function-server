[![npm version](https://badge.fury.io/js/file-function-server.svg)](https://badge.fury.io/js/file-function-server)

# 🕊File Function Server

*No-Frills Node.js API Endpoints*

<!-- *So simple a neanderthal could use it*
 <img src="https://media.giphy.com/media/8xsrNAZGhTCW4/source.gif" height="200"/> -->

## ⏰ 60-Second Setup *Starting... Now!*
Requirements: `Node.js >=7`, `NPM` or `Yarn`

### ⬇️ Install
> `npm init` (if fresh project)


`
npm i file-function-server
`
or 
`
yarn add file-function-server
`

### 📂 Create Functions Folder
```
📦your-project
 ┣ 📂functions
 ┗ 📜package.json
``` 

### 👨‍🏭 Create File Function

Routes are defined by naming files & folders
```
📦your-project
 ┣ 📂functions
 ┃ ┗ 📜hello-world.js
 ┗ 📜package.json
``` 

The endpoint handler is the `default` node module export. It takes two arguments: 
1. `req` (<a href="https://expressjs.com/en/5x/api.html#req">`express.Request`</a> type) 
2. `res` (<a href="https://expressjs.com/en/5x/api.html#res">`express.Response`</a> type)

**hello-world.js** (JavaScript)
```javascript
module.exports.default = function (req, res) {
  return 'Hello World!';
};

```

<details>
 <summary><b>hello-world.js</b> (ES6)</summary>
<p>

```javascript
export default (req, res) => 'Hello World!';
```

</p>
</details>  

<details>
 <summary><b>hello-world.ts</b> (TypeScript)</summary>
<p>

```typescript
import { FileFunctionHandler } from 'file-function-server';

export default ((req, res) => {
 // Intellisense enabled!
 return 'Hello World!';
}) as FileFunctionHandler;
```

</p>
</details>  

### 📻 Generated API

| Endpoint| GET | POST | PUT | PATCH | DELETE |
|---------------------------------------|-----|------|-----|-------|--------|
| `/functions/stripe-subscribed--webhook` | ✅|✅| ✅|✅| ✅|
| `/functions/hello-world` |✅|✅|✅|✅|✅|

<!-- generated with https://www.tablesgenerator.com/markdown_tables# -->

## Usage

### ⚙️ Config Object 
| Property     | Description                         | Required | Default                                 |
|--------------|-------------------------------------|----------|-----------------------------------------|
| app          | Express App                         | 🚫        | New express app                         |
| functionsDir | Directory containing file functions | 🚫        | `<current-working-directory>/functions` |
| port         | Port to start server on             | 🚫        | `PORT` Environment Variable or `9000`   |

<!-- <img height="100" src="https://media.giphy.com/media/l41Yd4OGP1NDJRKdq/giphy.gif"/> -->
