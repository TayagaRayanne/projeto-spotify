"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function matchMany(text, pattern) {
    const matches = [];
    let match;
    while (match = pattern.exec(text)) {
        matches.push(match);
    }
    return matches;
}
exports.matchMany = matchMany;
//# sourceMappingURL=regexUtils.js.map