"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const os = require("os");
const xml2js = require("xml2js");
const elements = {
    Project: 'Project',
    PropertyGroup: 'PropertyGroup',
    UserSecretsId: 'UserSecretsId'
};
function getUserSecretsId(csprojContent) {
    return __awaiter(this, void 0, void 0, function* () {
        const parsed = yield xml2js.parseStringPromise(csprojContent);
        const id = parsed &&
            parsed[elements.Project] &&
            parsed[elements.Project][elements.PropertyGroup] &&
            parsed[elements.Project][elements.PropertyGroup][0] &&
            parsed[elements.Project][elements.PropertyGroup][0][elements.UserSecretsId] &&
            parsed[elements.Project][elements.PropertyGroup][0][elements.UserSecretsId][0];
        return !!id && typeof id === 'string' ? id : undefined;
    });
}
exports.getUserSecretsId = getUserSecretsId;
function insertUserSecretsId(csprojContent, id) {
    return __awaiter(this, void 0, void 0, function* () {
        let parsed = yield xml2js.parseStringPromise(csprojContent);
        if (!parsed) {
            parsed = {};
        }
        if (!parsed[elements.Project] || typeof parsed[elements.Project] !== 'object') {
            parsed[elements.Project] = {};
        }
        if (!parsed[elements.Project][elements.PropertyGroup]) {
            parsed[elements.Project][elements.PropertyGroup] = [];
        }
        if (!parsed[elements.Project][elements.PropertyGroup][0]
            || typeof parsed[elements.Project][elements.PropertyGroup][0] !== 'object') {
            parsed[elements.Project][elements.PropertyGroup][0] = {};
        }
        if (!parsed[elements.Project][elements.PropertyGroup][0][elements.UserSecretsId]) {
            parsed[elements.Project][elements.PropertyGroup][0][elements.UserSecretsId] = [];
        }
        if (!parsed[elements.Project][elements.PropertyGroup][0][elements.UserSecretsId][0]
            || typeof !parsed[elements.Project][elements.PropertyGroup][0][elements.UserSecretsId][0] !== 'string') {
            parsed[elements.Project][elements.PropertyGroup][0][elements.UserSecretsId][0] = id;
        }
        const updatedContent = new xml2js.Builder({ headless: true }).buildObject(parsed)
            .replace(/&#xD;/g, '\r')
            .replace(/^(?=  <\w)/gm, os.EOL)
            .replace(/(?=<\/Project>$)/, os.EOL)
            .replace(/(?=\/>$)/gm, ' ');
        return updatedContent;
    });
}
exports.insertUserSecretsId = insertUserSecretsId;
//# sourceMappingURL=csproj.js.map