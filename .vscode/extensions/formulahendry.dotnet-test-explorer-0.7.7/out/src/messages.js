"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesController = void 0;
const vscode = require("vscode");
const logger_1 = require("./logger");
const suppressedMessagesStateKey = "suppressedMessages";
const suppressMessageItem = "Don't show again";
class MessagesController {
    constructor(globalState) {
        this.globalState = globalState;
    }
    /**
     * @description
     * Displays the warning message that can be suppressed by the user.
     */
    showWarningMessage(message) {
        if (this.isSuppressed(message.type)) {
            return;
        }
        return vscode.window.showWarningMessage(message.text, suppressMessageItem)
            .then((item) => {
            if (item === suppressMessageItem) {
                this.setSuppressed(message.type);
            }
        });
    }
    isSuppressed(messageType) {
        const suppressedMessages = this.globalState.get(suppressedMessagesStateKey);
        return suppressedMessages && suppressedMessages.indexOf(messageType) > -1;
    }
    setSuppressed(messageType) {
        const suppressedMessages = this.globalState.get(suppressedMessagesStateKey) || [];
        if (suppressedMessages.indexOf(messageType) === -1) {
            suppressedMessages.push(messageType);
            this.globalState.update(suppressedMessagesStateKey, suppressedMessages)
                .then(() => { }, (reason) => {
                logger_1.Logger.LogError("Error while updating global state value", reason);
            });
        }
    }
}
exports.MessagesController = MessagesController;
//# sourceMappingURL=messages.js.map