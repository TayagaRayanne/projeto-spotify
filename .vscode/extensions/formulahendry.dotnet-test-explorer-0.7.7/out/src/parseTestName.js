"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseTestName = void 0;
function parseTestName(name) {
    let i = 0;
    const segments = [];
    while (i < name.length) {
        segments.push(parseSegment());
    }
    return { fullName: name, segments };
    function parseSegment() {
        const start = i;
        while (i < name.length) {
            if (tryParseBrackets()) {
                continue;
            }
            if (name[i] === "." || name[i] === "+") {
                break;
            }
            i++;
        }
        const end = i;
        i++;
        return { start, end };
    }
    function tryParseBrackets() {
        if (name[i] !== "(") {
            return false;
        }
        i++;
        while (i < name.length) {
            if (name[i] === ")") {
                i++;
                break;
            }
            const parsedSomething = tryParseBrackets()
                || tryParseLiteral('"', '"')
                || tryParseLiteral("'", "'");
            if (!parsedSomething) {
                i++;
            }
        }
        return true;
    }
    function tryParseLiteral(startChar, endChar) {
        if (name[i] !== startChar) {
            return false;
        }
        i++;
        while (i < name.length) {
            if (name[i] === "\\") {
                i += 2;
                continue;
            }
            else if (name[i] === endChar) {
                i++;
                break;
            }
            else {
                i++;
            }
        }
        return true;
    }
}
exports.parseTestName = parseTestName;
//# sourceMappingURL=parseTestName.js.map