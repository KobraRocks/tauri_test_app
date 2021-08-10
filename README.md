# tauri_test_app
 a test app for experimenting Tauri

> Disclaimer: Tests executed are not automated. I followed Tauri documentation to build this app.

I've created a UI to show success or failure for tests. Just run `npm run tauri dev --verbose` to see the app in action.

## link and open a local html file
success

## load an external html file
success

## load a javascript module using
### default export
```javascript 
import moduleFunction from "./module.js"

// in module.js
export default () => 'I am a module content';
```
failed, not implemented yet ?
```
SyntaxError: Unexpected identifier 'moduleFunction'. import call expects exactly one argument.
```

### simple export
```javascript 
import { moduleFunction } from "./module.js"

// in module.js
export function moduleFunction () { return 'I am a module content';}
```
success


## invoke command promise no error handling
Success

## invoke command promise with error handling
Success


# My set up
```
Operating System - Linux, version Soaring X64

Node.js environment
Node.js - 16.6.1
@tauri-apps/cli - 1.0.0-beta.6
@tauri-apps/api - 1.0.0-beta.5

Global packages
npm - 7.20.5
yarn - Not installed

Rust environment
rustc - 1.54.0
cargo - 1.54.0

App directory structure
/dist
/src-tauri
/.git
/node_modules

App
tauri.rs - 1.0.0-beta.5
build-type - bundle
CSP - default-src blob: data: filesystem: ws: wss: http: https: tauri: 'unsafe-eval' 'unsafe-inline' 'self' img-src: 'self'
distDir - ../dist
devPath - ../dist
```
