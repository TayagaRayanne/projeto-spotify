"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Debug = void 0;
class Debug {
    constructor() {
        this.processIdRegexp = /Process Id: (.*),/gm;
    }
    onData(data, debugRunnerInfo) {
        if (!debugRunnerInfo) {
            debugRunnerInfo = { isRunning: false, isSettingUp: true, waitingForAttach: false, processId: "" };
        }
        if (!debugRunnerInfo.waitingForAttach) {
            debugRunnerInfo.waitingForAttach = data.indexOf("Waiting for debugger attach...") > -1;
        }
        if (debugRunnerInfo.processId.length <= 0) {
            const match = this.processIdRegexp.exec(data);
            if (match && match[1]) {
                debugRunnerInfo.processId = match[1];
            }
        }
        if (debugRunnerInfo.waitingForAttach && debugRunnerInfo.processId.length > 0) {
            debugRunnerInfo.config = {
                name: "NET TestExplorer Core Attach",
                type: "coreclr",
                request: "attach",
                processId: debugRunnerInfo.processId,
            };
        }
        return debugRunnerInfo;
    }
}
exports.Debug = Debug;
//# sourceMappingURL=debug.js.map