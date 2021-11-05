"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ext = {
    cs: '.cs',
    cshtml: '.cshtml',
    cshtmlCs: '.cshtml.cs',
    razor: '.razor',
    razorCs: '.razor.cs'
};
exports.dirs = {
    views: 'Views',
    controllers: 'Controllers',
    pages: 'Pages',
    shared: 'Shared'
};
exports.controllerSuffix = 'Controller';
exports.messages = {
    unableToFind: (name) => `Unable to find a matching ${name}.`,
    viewAlreadyExists: 'View already exists.',
    unableToFindAction: "Unable to find an action method declaration."
};
//# sourceMappingURL=constants.js.map