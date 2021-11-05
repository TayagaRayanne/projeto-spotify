"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseResults = void 0;
const fs = require("fs");
const xmldom_1 = require("xmldom");
const testResult_1 = require("./testResult");
function findChildElement(node, name) {
    let child = node.firstChild;
    while (child) {
        if (child.nodeName === name) {
            return child;
        }
        child = child.nextSibling;
    }
    return null;
}
function getAttributeValue(node, name) {
    const attribute = node.attributes.getNamedItem(name);
    return (attribute === null) ? null : attribute.nodeValue;
}
function getTextContentForTag(parentNode, tagName) {
    const node = parentNode.getElementsByTagName(tagName);
    return node.length > 0 ? node[0].textContent : "";
}
function parseUnitTestResults(xml) {
    const results = [];
    const nodes = xml.getElementsByTagName("UnitTestResult");
    // TSLint wants to use for-of here, but nodes doesn't support it
    for (let i = 0; i < nodes.length; i++) { // tslint:disable-line
        results.push(new testResult_1.TestResult(getAttributeValue(nodes[i], "testId"), getAttributeValue(nodes[i], "outcome"), getTextContentForTag(nodes[i], "Message"), getTextContentForTag(nodes[i], "StackTrace")));
    }
    return results;
}
function updateUnitTestDefinitions(xml, results) {
    const nodes = xml.getElementsByTagName("UnitTest");
    const names = new Map();
    for (let i = 0; i < nodes.length; i++) { // tslint:disable-line
        const node = nodes[i];
        const id = getAttributeValue(node, "id");
        const testMethod = findChildElement(node, "TestMethod");
        if (testMethod) {
            names.set(id, {
                className: getAttributeValue(testMethod, "className"),
                method: getAttributeValue(node, "name"),
            });
        }
    }
    for (const result of results) {
        const name = names.get(result.id);
        if (name) {
            result.updateName(name.className, name.method);
        }
    }
}
function parseResults(filePath) {
    return new Promise((resolve, reject) => {
        let results;
        fs.readFile(filePath, (err, data) => {
            if (!err) {
                const xdoc = new xmldom_1.DOMParser().parseFromString(data.toString(), "application/xml");
                results = parseUnitTestResults(xdoc.documentElement);
                updateUnitTestDefinitions(xdoc.documentElement, results);
                try {
                    fs.unlinkSync(filePath);
                }
                catch (_a) { }
                resolve(results);
            }
        });
    });
}
exports.parseResults = parseResults;
//# sourceMappingURL=testResultsFile.js.map