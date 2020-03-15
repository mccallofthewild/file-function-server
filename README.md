[![npm version](https://badge.fury.io/js/file-function-server.svg)](https://badge.fury.io/js/file-function-server)

# 🕊File Function Server

*No-Frills Node.js API Endpoints*

<!-- *So simple a neanderthal could use it*
 <img src="https://media.giphy.com/media/8xsrNAZGhTCW4/source.gif" height="200"/> -->

## ⏰ 60-Second Setup *Starting... Now!*
Requirements: `Node.js >=7`, `NPM` or `Yarn`

### ⬇️ Install
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

### 👨‍🏭 Create a File Function
Endpoints are defined by naming files & folders
```
📦your-project
 ┣ 📂functions
 ┃ ┣ 📂stripe-subscribed--webhook
 ┃ ┃ ┗ 📜index.js # Files named `index` resolve to their parent folder's name.
 ┃ ┗ 📜hello-world.js
 ┗ 📜package.json
``` 


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
