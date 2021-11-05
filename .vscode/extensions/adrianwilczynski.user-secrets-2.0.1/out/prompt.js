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
const config_1 = require("./config");
const answers = {
    yes: 'Yes',
    no: 'Not Now',
    dontAskAgain: "Yes, Don't Ask Me Again"
};
function shouldGenerate() {
    return __awaiter(this, void 0, void 0, function* () {
        if (config_1.shouldAsk()) {
            const answer = yield vscode.window.showWarningMessage('Unable to find a "UserSecretsId" in this ".csproj" file. Do you want us to try to generate it?', answers.no, answers.dontAskAgain, answers.yes);
            if (!answer || answer === answers.no) {
                return false;
            }
            else if (answer === answers.dontAskAgain) {
                yield config_1.dontAskAgain();
            }
        }
        return true;
    });
}
exports.shouldGenerate = shouldGenerate;
//# sourceMappingURL=prompt.js.map