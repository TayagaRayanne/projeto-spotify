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
const env_1 = require("./env");
const csprojReader_1 = require("./csprojReader");
const quickPick_1 = require("./quickPick");
const cliExecutor_1 = require("./cliExecutor");
function activate(context) {
    context.subscriptions.push(vscode.commands.registerCommand('extension.addReference', addReference));
}
exports.activate = activate;
function addReference(uri) {
    return __awaiter(this, void 0, void 0, function* () {
        const csprojPath = env_1.getCurrentCsprojPath(uri);
        if (!csprojPath) {
            return;
        }
        const otherCsprojs = yield env_1.getOtherCsprojs(csprojPath);
        const currentReferences = yield csprojReader_1.readCurrentReferences(csprojPath);
        if (otherCsprojs.length === 0 && currentReferences.length === 0) {
            vscode.window.showWarningMessage('Unable to find any other projects in this workspace or project references in this .csproj file.');
            return;
        }
        const references = yield quickPick_1.showQuickPick(otherCsprojs, currentReferences);
        if (!references) {
            return;
        }
        if (references.add.length > 0) {
            yield cliExecutor_1.execReferenceCommand('add', csprojPath, references.add);
        }
        if (references.remove.length > 0) {
            yield cliExecutor_1.execReferenceCommand('remove', csprojPath, references.remove);
        }
    });
}
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map