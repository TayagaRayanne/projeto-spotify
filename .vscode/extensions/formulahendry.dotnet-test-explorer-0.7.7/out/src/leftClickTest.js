"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeftClickTest = void 0;
const vscode = require("vscode");
const utility_1 = require("./utility");
class LeftClickTest {
    handle(test) {
        const leftClickAction = utility_1.Utility.getConfiguration().get("leftClickAction");
        if (leftClickAction === "gotoTest") {
            vscode.commands.executeCommand("dotnet-test-explorer.gotoTest", test);
        }
        else if (leftClickAction === "runTest") {
            vscode.commands.executeCommand("dotnet-test-explorer.runTest", test);
        }
    }
}
exports.LeftClickTest = LeftClickTest;
//# sourceMappingURL=leftClickTest.js.map