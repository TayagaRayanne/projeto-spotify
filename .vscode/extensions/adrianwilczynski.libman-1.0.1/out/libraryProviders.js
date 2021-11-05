"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cdnjs = require("./cdnjs");
const npm = require("./npm");
exports.providers = [
    {
        label: 'cdnjs',
        searchResultProvider: cdnjs.search
    },
    {
        label: 'jsdelivr',
        searchResultProvider: npm.search
    },
    {
        label: 'unpkg',
        searchResultProvider: npm.search
    },
    {
        label: 'filesystem'
    }
];
//# sourceMappingURL=libraryProviders.js.map