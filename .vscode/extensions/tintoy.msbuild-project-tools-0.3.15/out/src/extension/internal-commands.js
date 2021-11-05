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
/**
 * Register the extension's internal commands.
 *
 * @param context The current extension context.
 */
function registerInternalCommands(context) {
    context.subscriptions.push(vscode.commands.registerTextEditorCommand('msbuildProjectTools.internal.moveAndSuggest', moveAndSuggest));
}
exports.registerInternalCommands = registerInternalCommands;
/**
 * Move the cursor and trigger completion.
 *
 * @param editor The text editor where the command was invoked.
 * @param edit The text editor's edit facility.
 * @param moveTo The logical direction in which to move (e.g. 'left', 'right', 'up', 'down', etc).
 * @param moveBy The unit to move by (e.g. 'line', 'wrappedLine', 'character', 'halfLine').
 * @param moveCount The number of units to move by.
 */
function moveAndSuggest(editor, edit, moveTo, moveBy, moveCount) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!moveTo || !moveBy || !moveCount)
            return;
        // Move.
        yield vscode.commands.executeCommand('cursorMove', {
            value: moveCount,
            to: moveTo,
            by: moveBy
        });
        // Trigger completion.
        yield vscode.commands.executeCommand('editor.action.triggerSuggest');
    });
}
//# sourceMappingURL=internal-commands.js.map