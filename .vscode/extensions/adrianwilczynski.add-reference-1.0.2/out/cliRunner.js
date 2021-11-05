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
const cp = require("child_process");
const util = require("util");
const vscode = require("vscode");
function execCliCommand(command, project, projectReferences) {
    return __awaiter(this, void 0, void 0, function* () {
        const exec = util.promisify(cp.exec);
        const target = projectReferences.map(t => `"${t}"`).join(' ');
        let infoMessage;
        let errorMessage;
        try {
            const output = yield exec(`dotnet ${command} "${project}" reference ${target}`);
            infoMessage = output.stdout;
            errorMessage = output.stderr;
        }
        catch (e) {
            errorMessage = e.message;
        }
        if (infoMessage) {
            vscode.window.showInformationMessage(infoMessage);
        }
        if (errorMessage) {
            vscode.window.showWarningMessage(errorMessage);
        }
    });
}
//# sourceMappingURL=cliRunner.js.map