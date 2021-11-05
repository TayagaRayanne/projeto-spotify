"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsProjWriter = exports.BuildActions = void 0;
const path = require("path");
const util = require("util");
const fs_1 = require("fs");
const findUpGlob = require('find-up-glob');
const xml2js = require("xml2js");
var BuildActions;
(function (BuildActions) {
    BuildActions["Folder"] = "Folder";
    BuildActions["Compile"] = "Compile";
    BuildActions["Content"] = "Content";
    BuildActions["EmbeddedResource"] = "EmbeddedResource";
    BuildActions["PRIResource"] = "PRIResource";
    BuildActions["Page"] = "Page";
    BuildActions["None"] = "None";
})(BuildActions = exports.BuildActions || (exports.BuildActions = {}));
class CsProjWriter {
    getProjFilePath(filePath) {
        return __awaiter(this, void 0, void 0, function* () {
            const projItems = yield findUpGlob('*.projitems', { cwd: path.dirname(filePath) });
            const csProj = yield findUpGlob('*.csproj', { cwd: path.dirname(filePath) });
            if (projItems !== null && projItems.length >= 1)
                return projItems[0];
            else if (csProj !== null && csProj.length >= 1)
                return csProj[0];
            return undefined;
        });
    }
    add(projPath, itemPaths, itemType) {
        return __awaiter(this, void 0, void 0, function* () {
            var paths = [];
            for (let itemPath of itemPaths) {
                let path = this.fixItemPath(projPath, itemPath);
                paths.push(path);
                let buildAction = yield this.get(projPath, path);
                if (buildAction !== undefined)
                    yield this.remove(projPath, path);
            }
            let parsedXml = yield this.parseProjFile(projPath);
            if (parsedXml === undefined)
                return;
            let items = Object(parsedXml).Project.ItemGroup;
            const obj = function (includePath) {
                return {
                    [itemType]: {
                        $: {
                            'Include': includePath
                        }
                    }
                };
            };
            for (let includePath of paths) {
                var item = obj(includePath);
                var itemGroup = this.getItemGroupByPath(items, includePath);
                if (itemType === BuildActions.Compile && includePath.endsWith('.xaml.cs')) {
                    let pagePath = includePath.replace('.cs', '');
                    let pageBuildAction = yield this.get(projPath, pagePath);
                    if (pageBuildAction === BuildActions.Page)
                        Object(item[itemType]).DependentUpon = path.basename(pagePath);
                }
                else if (itemType === BuildActions.Page) {
                    Object(item[itemType]).SubType = 'Designer';
                    Object(item[itemType]).Generator = 'MSBuild:Compile';
                }
                if (itemGroup != undefined) {
                    var actions = Object(itemGroup)[itemType];
                    if (actions == undefined) {
                        var array = [];
                        array[0] = item[itemType];
                        Object(itemGroup)[itemType] = array;
                    }
                    else {
                        actions.push(Object(item[itemType]));
                    }
                }
                else {
                    var array = [];
                    array[0] = item[itemType];
                    items.push({ [itemType]: array });
                }
            }
            yield fs_1.promises.writeFile(projPath, new xml2js.Builder().buildObject(parsedXml));
        });
    }
    get(projPath, itemPath) {
        return __awaiter(this, void 0, void 0, function* () {
            itemPath = this.fixItemPath(projPath, itemPath);
            let parsedXml = yield this.parseProjFile(projPath);
            if (parsedXml === undefined)
                return;
            let items = Object(parsedXml).Project.ItemGroup;
            for (let item of items) {
                let actions = Object.keys(item).map(key => Object(item)[key])[0];
                for (let action of actions) {
                    if (Object(action)["$"].Include === itemPath)
                        return BuildActions[Object.getOwnPropertyNames(item)[0]];
                }
            }
            return undefined;
        });
    }
    remove(projPath, itemPath) {
        return __awaiter(this, void 0, void 0, function* () {
            let isDir = false;
            try {
                let fileStat = yield fs_1.promises.lstat(itemPath);
                isDir = fileStat.isDirectory();
            }
            catch (_a) { }
            itemPath = this.fixItemPath(projPath, itemPath);
            let parsedXml = yield this.parseProjFile(projPath);
            if (parsedXml === undefined)
                return;
            let items = Object(parsedXml).Project.ItemGroup;
            for (let item of items) {
                let actionsArray = Object.keys(item).map(key => Object(item)[key]);
                for (let index = 0; index < actionsArray.length; index++) {
                    let actions = actionsArray[index];
                    for (let action = 0; action < actions.length; action++) {
                        let include = Object(actions[action])["$"].Include;
                        if (include === itemPath || (isDir && include.startsWith(itemPath))) {
                            actions.splice(action, 1);
                        }
                    }
                    if (actions.length === 0)
                        actionsArray.splice(actionsArray.indexOf(actions), 1);
                }
                if (actionsArray.length === 0)
                    items.splice(items.indexOf(item), 1);
            }
            yield fs_1.promises.writeFile(projPath, new xml2js.Builder().buildObject(parsedXml));
        });
    }
    rename(projPath, oldItemPath, newItemPath) {
        return __awaiter(this, void 0, void 0, function* () {
            let isDir = false;
            try {
                let fileStat = yield fs_1.promises.lstat(oldItemPath);
                isDir = fileStat.isDirectory();
            }
            catch (_a) { }
            oldItemPath = this.fixItemPath(projPath, oldItemPath);
            newItemPath = this.fixItemPath(projPath, newItemPath);
            let parsedXml = yield this.parseProjFile(projPath);
            if (parsedXml === undefined)
                return;
            let items = Object(parsedXml).Project.ItemGroup;
            for (let item of items) {
                let actionsArray = Object.keys(item).map(key => Object(item)[key]);
                for (let index = 0; index < actionsArray.length; index++) {
                    let actions = actionsArray[index];
                    for (let action = 0; action < actions.length; action++) {
                        let include = Object(actions[action])["$"].Include;
                        if (include === oldItemPath) {
                            Object(actions[action])["$"].Include = newItemPath;
                        }
                        else if (isDir && include.startsWith(oldItemPath)) {
                            Object(actions[action])["$"].Include = include.replace(oldItemPath, newItemPath);
                        }
                    }
                }
            }
            yield fs_1.promises.writeFile(projPath, new xml2js.Builder().buildObject(parsedXml));
        });
    }
    parseProjFile(projPath) {
        return __awaiter(this, void 0, void 0, function* () {
            const xml = yield fs_1.promises.readFile(projPath, 'utf8');
            const xmlParser = util.promisify(new xml2js.Parser().parseString);
            let parsedXml = yield xmlParser(xml);
            if (parsedXml === undefined || parsedXml.Project === undefined)
                return undefined;
            return parsedXml;
        });
    }
    getItemGroupByPath(itemGroups, itemPath) {
        for (let item of itemGroups) {
            let actionsArray = Object.keys(item).map(key => Object(item)[key]);
            for (let index = 0; index < actionsArray.length; index++) {
                let actions = actionsArray[index];
                for (let action = 0; action < actions.length; action++) {
                    let include = Object(actions[action])["$"].Include;
                    if (path.dirname(include) === path.dirname(itemPath)) {
                        return Object(item);
                    }
                }
            }
        }
        return undefined;
    }
    fixItemPath(projPath, itemPath) {
        return itemPath.replace(path.dirname(projPath) + path.sep, path.extname(projPath) == '.projitems' ? "$(MSBuildThisFileDirectory)" : "");
    }
}
exports.CsProjWriter = CsProjWriter;
//# sourceMappingURL=csprojWriter.js.map