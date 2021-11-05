"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Determine whether the specified Error is a NodeJS.ErrnoException.
 *
 * @param error The error to examine.
 * @returns true, if the error is a NodeJS.ErrnoException; otherwise, false.
 */
function isErrnoException(error) {
    return typeof error === 'object' && typeof error['code'] !== 'undefined';
}
exports.isErrnoException = isErrnoException;
//# sourceMappingURL=errors.js.map