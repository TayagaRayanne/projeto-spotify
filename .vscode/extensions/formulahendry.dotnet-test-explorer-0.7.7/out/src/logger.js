"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const vscode = require("vscode");
let Logger = /** @class */ (() => {
    class Logger {
        static Log(message, output = this.defaultOutput) {
            if (this.outputTerminals[output] === undefined) {
                this.outputTerminals[output] = vscode.window.createOutputChannel(output);
            }
            this.outputTerminals[output].appendLine(message);
        }
        static LogError(message, error) {
            Logger.Log(`[ERROR] ${message} - ${Logger.formatError(error)}`);
        }
        static LogWarning(message) {
            Logger.Log(`[WARNING] ${message}`);
        }
        static Show() {
            if (this.outputTerminals && this.outputTerminals[this.defaultOutput]) {
                this.outputTerminals[this.defaultOutput].show();
            }
        }
        static formatError(error) {
            if (error && error.stack) {
                return error.stack;
            }
            return error || "";
        }
    }
    Logger.defaultOutput = ".NET Test Explorer";
    Logger.outputTerminals = {};
    return Logger;
})();
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map