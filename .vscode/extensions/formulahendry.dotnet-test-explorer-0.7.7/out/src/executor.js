"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Executor = void 0;
const child_process_1 = require("child_process");
const os_1 = require("os");
const vscode = require("vscode");
const debug_1 = require("./debug");
const logger_1 = require("./logger");
let Executor = /** @class */ (() => {
    class Executor {
        static runInTerminal(command, cwd, addNewLine = true, terminal = ".NET Test Explorer") {
            if (this.terminals[terminal] === undefined) {
                this.terminals[terminal] = vscode.window.createTerminal(terminal);
            }
            this.terminals[terminal].show();
            if (cwd) {
                this.terminals[terminal].sendText(`cd "${cwd}"`);
            }
            this.terminals[terminal].sendText(command, addNewLine);
        }
        static exec(command, callback, cwd, addToProcessList) {
            // DOTNET_CLI_UI_LANGUAGE does not seem to be respected when passing it as a parameter to the exec
            // function so we set the variable here instead
            process.env.DOTNET_CLI_UI_LANGUAGE = "en";
            process.env.VSTEST_HOST_DEBUG = "0";
            const childProcess = child_process_1.exec(this.handleWindowsEncoding(command), { encoding: "utf8", maxBuffer: 5120000, cwd }, callback);
            if (addToProcessList) {
                logger_1.Logger.Log(`Process ${childProcess.pid} started`);
                this.processes.push(childProcess);
                childProcess.on("close", (code) => {
                    const index = this.processes.map((p) => p.pid).indexOf(childProcess.pid);
                    if (index > -1) {
                        this.processes.splice(index, 1);
                        logger_1.Logger.Log(`Process ${childProcess.pid} finished`);
                    }
                });
            }
            return childProcess;
        }
        static debug(command, callback, cwd, addToProcessList) {
            // DOTNET_CLI_UI_LANGUAGE does not seem to be respected when passing it as a parameter to the exec
            // function so we set the variable here instead
            process.env.DOTNET_CLI_UI_LANGUAGE = "en";
            process.env.VSTEST_HOST_DEBUG = "1";
            const childProcess = child_process_1.exec(this.handleWindowsEncoding(command), { encoding: "utf8", maxBuffer: 5120000, cwd }, callback);
            if (this.debugRunnerInfo && this.debugRunnerInfo.isSettingUp) {
                logger_1.Logger.Log("Debugger already running");
                return;
            }
            const debug = new debug_1.Debug();
            if (addToProcessList) {
                logger_1.Logger.Log(`Process ${childProcess.pid} started`);
                this.processes.push(childProcess);
                childProcess.stdout.on("data", (buf) => {
                    if (this.debugRunnerInfo && this.debugRunnerInfo.isRunning) {
                        return;
                    }
                    logger_1.Logger.Log(`Waiting for debugger to attach`);
                    const stdout = String(buf);
                    this.debugRunnerInfo = debug.onData(stdout, this.debugRunnerInfo);
                    if (this.debugRunnerInfo.config) {
                        logger_1.Logger.Log(`Debugger process found, attaching`);
                        this.debugRunnerInfo.isRunning = true;
                        vscode.debug.startDebugging(vscode.workspace.workspaceFolders[0], this.debugRunnerInfo.config).then((c) => {
                            // When we attach to the debugger it seems to be stuck before loading the actual assembly that's running in code
                            // This is to try to continue past this invisible break point and into the actual code the user wants to debug
                            setTimeout(() => {
                                vscode.commands.executeCommand("workbench.action.debug.continue");
                            }, 1000);
                        });
                    }
                });
                childProcess.on("close", (code) => {
                    logger_1.Logger.Log(`Debugger finished`);
                    this.debugRunnerInfo = null;
                    vscode.commands.executeCommand("workbench.view.extension.test", "workbench.view.extension.test");
                    const index = this.processes.map((p) => p.pid).indexOf(childProcess.pid);
                    if (index > -1) {
                        this.processes.splice(index, 1);
                        logger_1.Logger.Log(`Process ${childProcess.pid} finished`);
                    }
                });
            }
            return childProcess;
        }
        static onDidCloseTerminal(closedTerminal) {
            delete this.terminals[closedTerminal.name];
        }
        static stop() {
            this.processes.forEach((p) => {
                logger_1.Logger.Log(`Stop processes requested - ${p.pid} stopped`);
                p.kill("SIGKILL");
            });
            this.processes = [];
            this.debugRunnerInfo = null;
        }
        static handleWindowsEncoding(command) {
            return this.isWindows ? `chcp 65001 | ${command}` : command;
        }
    }
    Executor.terminals = {};
    Executor.isWindows = os_1.platform() === "win32";
    Executor.processes = [];
    return Executor;
})();
exports.Executor = Executor;
//# sourceMappingURL=executor.js.map