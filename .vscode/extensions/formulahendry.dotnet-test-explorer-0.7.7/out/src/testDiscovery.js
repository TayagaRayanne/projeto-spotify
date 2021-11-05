"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.discoverTests = void 0;
const fs = require("fs");
const os = require("os");
const path = require("path");
const executor_1 = require("./executor");
const logger_1 = require("./logger");
function discoverTests(testDirectoryPath, dotnetTestOptions) {
    return executeDotnetTest(testDirectoryPath, dotnetTestOptions)
        .then((stdout) => {
        const testNames = extractTestNames(stdout);
        if (!isMissingFqNames(testNames)) {
            return { testNames };
        }
        const assemblyPaths = extractAssemblyPaths(stdout);
        if (assemblyPaths.length === 0) {
            throw new Error(`Couldn't extract assembly paths from dotnet test output: ${stdout}`);
        }
        return discoverTestsWithVstest(assemblyPaths, testDirectoryPath)
            .then((results) => {
            return { testNames: results };
        })
            .catch((error) => {
            if (error instanceof ListFqnNotSupportedError) {
                return {
                    testNames,
                    warningMessage: {
                        text: "dotnet sdk >=2.1.2 required to retrieve fully qualified test names. Returning non FQ test names.",
                        type: "DOTNET_SDK_FQN_NOT_SUPPORTED",
                    },
                };
            }
            throw error;
        });
    });
}
exports.discoverTests = discoverTests;
function executeDotnetTest(testDirectoryPath, dotnetTestOptions) {
    return new Promise((resolve, reject) => {
        const command = `dotnet test -t -v=q${dotnetTestOptions}`;
        logger_1.Logger.Log(`Executing ${command} in ${testDirectoryPath}`);
        executor_1.Executor.exec(command, (err, stdout, stderr) => {
            if (err) {
                logger_1.Logger.LogError(`Error while executing ${command}`, stdout);
                reject(err);
                return;
            }
            resolve(stdout);
        }, testDirectoryPath);
    });
}
function extractTestNames(testCommandStdout) {
    return testCommandStdout
        .split(/[\r\n]+/g)
        /*
        * The dotnet-cli prefixes all discovered unit tests
        * with whitespace. We can use this to drop any lines of
        * text that are not relevant, even in complicated project
        * structures.
        **/
        .filter((item) => item && item.startsWith("    "))
        .sort()
        .map((item) => item.trim());
}
function extractAssemblyPaths(testCommandStdout) {
    /*
    * The string we need to parse is localized
    * (see https://github.com/microsoft/vstest/blob/018b6e4cc6e0ea7c8761c2a2f89c3e5032db74aa/src/Microsoft.TestPlatform.Build/Resources/xlf/Resources.xlf#L15-L18).
    **/
    const testRunLineStrings = [
        "Testovací běh pro {0} ({1})",
        "Testlauf für \"{0}\" ({1})",
        "Test run for {0} ({1})",
        "Serie de pruebas para {0} ({1})",
        "Série de tests pour {0} ({1})",
        "Esecuzione dei test per {0} ({1})",
        "{0} ({1}) のテスト実行",
        "{0}({1})에 대한 테스트 실행",
        "Przebieg testu dla: {0} ({1})",
        "Execução de teste para {0} ({1})",
        "Тестовый запуск для {0} ({1})",
        "{0} ({1}) için test çalıştırması",
        "{0} ({1})的测试运行",
        "{0} 的測試回合 ({1})" // zh-Hant
    ];
    // construct regex that matches any of the above localized strings
    const r = "^(?:" + testRunLineStrings
        .map((s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')) // escape characters
        .map((s) => s.replace("\\{0\\}", "(.+\\.dll)").replace("\\{1\\}", ".+"))
        .join("|")
        + ")$";
    const testRunLineRegex = new RegExp(r, "gm");
    const results = [];
    let match = null;
    do {
        match = testRunLineRegex.exec(testCommandStdout);
        if (match) {
            const assemblyPath = match.find((capture, i) => capture && i != 0); // first capture group is the whole match
            results.push(assemblyPath);
        }
    } while (match);
    return results;
}
function isMissingFqNames(testNames) {
    return testNames.some((name) => !name.includes("."));
}
function discoverTestsWithVstest(assemblyPaths, testDirectoryPath) {
    const testOutputFilePath = prepareTestOutput();
    return executeDotnetVstest(assemblyPaths, testOutputFilePath, testDirectoryPath)
        .then(() => readVstestTestNames(testOutputFilePath))
        .then((result) => {
        cleanTestOutput(testOutputFilePath);
        return result;
    })
        .catch((err) => {
        cleanTestOutput(testOutputFilePath);
        throw err;
    });
}
function readVstestTestNames(testOutputFilePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(testOutputFilePath, "utf8", (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            const results = data
                .split(/[\r\n]+/g)
                .filter((s) => !!s)
                .sort();
            resolve(results);
        });
    });
}
function prepareTestOutput() {
    const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "test-explorer-discover-"));
    return path.join(tempDir, "output.txt");
}
function cleanTestOutput(testOutputFilePath) {
    if (fs.existsSync(testOutputFilePath)) {
        fs.unlinkSync(testOutputFilePath);
    }
    fs.rmdirSync(path.dirname(testOutputFilePath));
}
function executeDotnetVstest(assemblyPaths, listTestsTargetPath, testDirectoryPath) {
    return new Promise((resolve, reject) => {
        const testAssembliesParam = assemblyPaths.map((f) => `"${f}"`).join(" ");
        const command = `dotnet vstest ${testAssembliesParam} /ListFullyQualifiedTests /ListTestsTargetPath:"${listTestsTargetPath}"`;
        logger_1.Logger.Log(`Executing ${command} in ${testDirectoryPath}`);
        executor_1.Executor.exec(command, (err, stdout, stderr) => {
            if (err) {
                logger_1.Logger.LogError(`Error while executing ${command}.`, err);
                const flagNotRecognizedRegex = /\/ListFullyQualifiedTests/m;
                if (flagNotRecognizedRegex.test(stderr)) {
                    reject(new ListFqnNotSupportedError());
                }
                else {
                    reject(err);
                }
                return;
            }
            resolve(stdout);
        }, testDirectoryPath);
    });
}
class ListFqnNotSupportedError extends Error {
    constructor() {
        super("Dotnet vstest doesn't support /ListFullyQualifiedTests switch.");
        Error.captureStackTrace(this, ListFqnNotSupportedError);
    }
}
//# sourceMappingURL=testDiscovery.js.map