"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
let terminal;
function sendText(text, cwd) {
    return __awaiter(this, void 0, void 0, function* () {
        if (terminal) {
            terminal.dispose();
        }
        terminal = vscode.window.createTerminal({
            name: 'LibMan',
            cwd: cwd
        });
        terminal.sendText(text, false);
        terminal.show();
    });
}
exports.sendText = sendText;
//# sourceMappingURL=terminal.js.map