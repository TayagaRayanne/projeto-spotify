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
const vscode = require("vscode");
function getCurrentCsprojPath(uri) {
    if (!uri) {
        if (!vscode.window.activeTextEditor) {
            return;
        }
        const path = vscode.window.activeTextEditor.document.fileName;
        if (!path.endsWith('.csproj')) {
            return;
        }
        return path;
    }
    return uri.fsPath;
}
exports.getCurrentCsprojPath = getCurrentCsprojPath;
function getOtherCsprojs(csproj) {
    return __awaiter(this, void 0, void 0, function* () {
        return (yield vscode.workspace.findFiles('**/*.csproj'))
            .map(c => c.fsPath)
            .filter(c => c !== csproj);
    });
}
exports.getOtherCsprojs = getOtherCsprojs;
//# sourceMappingURL=env.js.map