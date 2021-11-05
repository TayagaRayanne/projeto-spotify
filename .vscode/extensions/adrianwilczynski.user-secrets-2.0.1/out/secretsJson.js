"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const os = require("os");
const path = require("path");
const fse = require("fs-extra");
function getSecretsPath(id) {
    const platform = os.platform();
    if (platform === 'win32') {
        return path.join(os.homedir(), 'AppData', 'Roaming', 'Microsoft', 'UserSecrets', id, 'secrets.json');
    }
    else if (platform === 'linux' || platform === 'darwin') {
        return path.join(os.homedir(), '.microsoft', 'usersecrets', id, 'secrets.json');
    }
    else {
        return;
    }
}
exports.getSecretsPath = getSecretsPath;
function ensureSecretsExist(secretsPath) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!fse.existsSync(secretsPath)) {
            yield fse.outputFile(secretsPath, emptyJsonFileContent());
        }
    });
}
exports.ensureSecretsExist = ensureSecretsExist;
function emptyJsonFileContent() {
    return `{${os.EOL}    ${os.EOL}}`;
}
//# sourceMappingURL=secretsJson.js.map