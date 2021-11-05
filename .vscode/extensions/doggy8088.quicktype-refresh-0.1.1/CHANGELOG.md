# Change Log

All notable changes to the "Paste JSON as Code (Refresh)" extension will be documented in this file.

## 0.1.1 - 2021-05-28

* Update README.md
* Update npm packages & fixes `npm audit` issues

    ```sh
    npm i node-persist@3 quicktype-core typescript@4
    npm i -D @types/node-persist@3 @types/node@14 esbuild
    npm audit fix
    ```

## 0.1.0 - 2021-05-28

* Initial version
  * This version is based on commit `c002e41919ccb60aada85b8f00399f59f2dc8358` from https://github.com/quicktype/quicktype-vscode
* devDependencies
  * Upgrade `vsce` and `vscode` package to the latest version
* Publishing
  * Use `esbuild-watch` for default build task (`tasks.json`)
* Bundling Extensions
  * [Bundling Extensions](https://code.visualstudio.com/api/working-with-extensions/bundling-extension) using [esbuild](https://github.com/evanw/esbuild)
  * Ignore `node_modules` from publish to VSCode Marketplace (`.vscodeignore`)
* Git
  * Ignore `.vscode-test` from git (`.gitignore`)
