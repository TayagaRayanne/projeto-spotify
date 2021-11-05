"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const os = require("os");
//TODO: Extract regexps
class CodeActionProvider {
    constructor() {
        this._commandIds = {
            ctorFromProperties: 'csharpextensions.ctorFromProperties',
            initializeMemberFromCtor: 'csharpextensions.initializeMemberFromCtor',
        };
        this._readonlyRegex = new RegExp(/(public|private|protected)\s(\w+)\s(\w+)\s?{\s?(get;)\s?(private\s)?(set;)?\s?}/g);
        this._classRegex = new RegExp(/(private|internal|public|protected)\s?(static)?\sclass\s(\w*)/g);
        this._generalRegex = new RegExp(/(public|private|protected)\s(.*?)\(([\s\S]*?)\)/gi);
        vscode.commands.registerCommand(this._commandIds.initializeMemberFromCtor, this.initializeMemberFromCtor, this);
        vscode.commands.registerCommand(this._commandIds.ctorFromProperties, this.executeCtorFromProperties, this);
    }
    provideCodeActions(document, range, context, token) {
        let commands = new Array();
        const addInitalizeFromCtor = (type) => {
            const cmd = this.getInitializeFromCtorCommand(document, range, context, token, type);
            if (cmd) {
                commands.push(cmd);
            }
        };
        addInitalizeFromCtor(MemberGenerationType.privateField);
        addInitalizeFromCtor(MemberGenerationType.readonlyProperty);
        addInitalizeFromCtor(MemberGenerationType.property);
        const ctorPCommand = this.getCtorpCommand(document, range, context, token);
        if (ctorPCommand) {
            commands.push(ctorPCommand);
        }
        return commands;
    }
    camelize(str) {
        return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
            if (+match === 0) {
                return "";
            } // or if (/\s+/.test(match)) for white spaces
            return index === 0 ? match.toLowerCase() : match.toUpperCase();
        });
    }
    executeCtorFromProperties(args) {
        const tabSize = vscode.workspace.getConfiguration().get('editor.tabSize', 4);
        let ctorParams = new Array();
        if (!args.properties) {
            return;
        }
        args.properties.forEach((p) => {
            ctorParams.push(`${p.type} ${this.camelize(p.name)}`);
        });
        let assignments = args.properties
            .map(prop => `${Array(tabSize * 1).join(' ')} this.${prop.name} = ${this.camelize(prop.name)};${os.EOL}`);
        let firstPropertyLine = args.properties.sort((a, b) => a.lineNumber - b.lineNumber)[0].lineNumber;
        const ctorStatement = `${Array(tabSize * 2).join(' ')} ${args.classDefinition.modifier} ${args.classDefinition.className}(${ctorParams.join(', ')}) 
        {
        ${assignments.join('')}   
        }
        `;
        let edit = new vscode.WorkspaceEdit();
        let edits = new Array();
        const pos = new vscode.Position(firstPropertyLine, 0);
        const range = new vscode.Range(pos, pos);
        const ctorEdit = new vscode.TextEdit(range, ctorStatement);
        edits.push(ctorEdit);
        edit.set(args.document.uri, edits);
        let reFormatAfterChange = vscode.workspace.getConfiguration().get('csharpextensions.reFormatAfterChange', true);
        let applyPromise = vscode.workspace.applyEdit(edit);
        if (reFormatAfterChange) {
            applyPromise.then(() => {
                vscode.commands.executeCommand('vscode.executeFormatDocumentProvider', args.document.uri)
                    .then(formattingEdits => {
                    if (formattingEdits !== undefined) {
                        let formatEdit = new vscode.WorkspaceEdit();
                        formatEdit.set(args.document.uri, formattingEdits);
                        vscode.workspace.applyEdit(formatEdit);
                    }
                });
            });
        }
    }
    getCtorpCommand(document, range, context, token) {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return null;
        }
        const position = editor.selection.active;
        const withinClass = this.findClassFromLine(document, position.line);
        if (!withinClass) {
            return null;
        }
        let properties = new Array();
        let lineNo = 0;
        while (lineNo < document.lineCount) {
            const textLine = document.lineAt(lineNo);
            const match = this._readonlyRegex.exec(textLine.text);
            if (match) {
                const foundClass = this.findClassFromLine(document, lineNo);
                if (foundClass && foundClass.className === withinClass.className) {
                    const prop = {
                        lineNumber: lineNo,
                        class: foundClass,
                        modifier: match[1],
                        type: match[2],
                        name: match[3],
                        statement: match[0]
                    };
                    properties.push(prop);
                }
            }
            lineNo++;
        }
        if (!properties.length) {
            return null;
        }
        const classDefinition = this.findClassFromLine(document, position.line);
        if (!classDefinition) {
            return null;
        }
        const parameter = {
            properties: properties,
            classDefinition: classDefinition,
            document: document
        };
        const cmd = {
            title: "Initialize ctor from properties...",
            command: this._commandIds.ctorFromProperties,
            arguments: [parameter]
        };
        return cmd;
    }
    findClassFromLine(document, lineNo) {
        while (lineNo > 0) {
            const line = document.lineAt(lineNo);
            const match = this._classRegex.exec(line.text);
            if (match) {
                return {
                    startLine: lineNo,
                    endLine: -1,
                    className: match[3],
                    modifier: match[1],
                    statement: match[0]
                };
            }
            lineNo--;
        }
        return null;
    }
    initializeMemberFromCtor(args) {
        let edit = new vscode.WorkspaceEdit();
        const bodyStartRange = new vscode.Range(args.constructorBodyStart, args.constructorBodyStart);
        const declarationRange = new vscode.Range(args.constructorStart, args.constructorStart);
        let declarationEdit = new vscode.TextEdit(declarationRange, args.memberGeneration.declaration);
        let memberInitEdit = new vscode.TextEdit(bodyStartRange, args.memberGeneration.assignment);
        let edits = new Array();
        if (args.document.getText().indexOf(args.memberGeneration.declaration.trim()) === -1) {
            edits.push(declarationEdit);
        }
        if (args.document.getText().indexOf(args.memberGeneration.assignment.trim()) === -1) {
            edits.push(memberInitEdit);
        }
        edit.set(args.document.uri, edits);
        const reFormatAfterChange = vscode.workspace.getConfiguration().get('csharpextensions.reFormatAfterChange', true);
        const applyPromise = vscode.workspace.applyEdit(edit);
        if (reFormatAfterChange) {
            applyPromise.then(() => {
                vscode.commands.executeCommand('vscode.executeFormatDocumentProvider', args.document.uri)
                    .then(formattingEdits => {
                    if (formattingEdits !== undefined) {
                        let formatEdit = new vscode.WorkspaceEdit();
                        formatEdit.set(args.document.uri, formattingEdits);
                        vscode.workspace.applyEdit(formatEdit);
                    }
                });
            });
        }
    }
    getInitializeFromCtorCommand(document, range, context, token, memberGenerationType) {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return null;
        }
        const position = editor.selection.active;
        const surrounding = document.getText(new vscode.Range(new vscode.Position(position.line - 2, 0), new vscode.Position(position.line + 2, 0)));
        const wordRange = editor.document.getWordRangeAtPosition(position);
        if (!wordRange) {
            return null;
        }
        const matches = this._generalRegex.exec(surrounding);
        if (!matches) {
            return null;
        }
        const ctorParamStr = matches[3];
        const lineText = editor.document.getText(new vscode.Range(position.line, 0, position.line, wordRange.end.character));
        const selectedName = lineText.substr(wordRange.start.character, wordRange.end.character - wordRange.start.character);
        let parameterType = null;
        ctorParamStr.split(',').forEach(strPart => {
            const separated = strPart.trim().split(' ');
            if (separated[1].trim() === selectedName) {
                parameterType = separated[0].trim();
            }
        });
        if (!parameterType) {
            return null;
        }
        const tabSize = vscode.workspace.getConfiguration().get('editor.tabSize', 4);
        const privateMemberPrefix = vscode.workspace.getConfiguration().get('csharpextensions.privateMemberPrefix', '');
        const prefixWithThis = vscode.workspace.getConfiguration().get('csharpextensions.useThisForCtorAssignments', true);
        let memberGeneration;
        let title;
        let name;
        switch (memberGenerationType) {
            case MemberGenerationType.privateField:
                title = 'Initialize field from parameter...';
                memberGeneration = {
                    type: memberGenerationType,
                    declaration: `${Array(tabSize * 2).join(' ')} private readonly ${parameterType} ${privateMemberPrefix}${selectedName};\r\n`,
                    assignment: `${Array(tabSize * 3).join(' ')} ${(prefixWithThis ? 'this.' : '')}${privateMemberPrefix}${selectedName} = ${selectedName};\r\n`
                };
                break;
            case MemberGenerationType.readonlyProperty:
                title = 'Initialize readonly property from parameter...';
                name = selectedName[0].toUpperCase() + selectedName.substr(1);
                memberGeneration = {
                    type: memberGenerationType,
                    declaration: `${Array(tabSize * 2).join(' ')} public ${parameterType} ${name} { get; }\r\n`,
                    assignment: `${Array(tabSize * 3).join(' ')} ${(prefixWithThis ? 'this.' : '')}${name} = ${selectedName};\r\n`
                };
                break;
            case MemberGenerationType.property:
                title = 'Initialize property from parameter...';
                name = selectedName[0].toUpperCase() + selectedName.substr(1);
                memberGeneration = {
                    type: memberGenerationType,
                    declaration: `${Array(tabSize * 2).join(' ')} public ${parameterType} ${name} { get; set; }\r\n`,
                    assignment: `${Array(tabSize * 3).join(' ')} ${(prefixWithThis ? 'this.' : '')}${name} = ${selectedName};\r\n`
                };
                break;
            default:
                //TODO: Show error?
                return null;
        }
        const constructorBodyStart = this.findConstructorBodyStart(document, position);
        if (!constructorBodyStart) {
            return null;
        }
        const parameter = {
            document: document,
            type: parameterType,
            name: selectedName,
            memberGeneration: memberGeneration,
            constructorBodyStart: constructorBodyStart,
            constructorStart: this.findConstructorStart(document, position)
        };
        const cmd = {
            title: title,
            command: this._commandIds.initializeMemberFromCtor,
            arguments: [parameter]
        };
        return cmd;
    }
    findConstructorBodyStart(document, position) {
        for (let lineNo = position.line; lineNo < position.line + 5; lineNo++) {
            const line = document.lineAt(lineNo);
            if (line.text.indexOf('{') !== -1) {
                return new vscode.Position(lineNo + 1, 0);
            }
        }
        return null;
    }
    findConstructorStart(document, position) {
        const foundClass = this.findClassFromLine(document, position.line);
        if (foundClass) {
            for (let lineNo = position.line; lineNo > position.line - 5; lineNo--) {
                const line = document.lineAt(lineNo);
                if (line.isEmptyOrWhitespace && !(line.lineNumber < foundClass.startLine)) {
                    return new vscode.Position(lineNo, 0);
                }
            }
        }
        return new vscode.Position(position.line, 0);
    }
}
exports.default = CodeActionProvider;
var MemberGenerationType;
(function (MemberGenerationType) {
    MemberGenerationType[MemberGenerationType["property"] = 0] = "property";
    MemberGenerationType[MemberGenerationType["readonlyProperty"] = 1] = "readonlyProperty";
    MemberGenerationType[MemberGenerationType["privateField"] = 2] = "privateField";
})(MemberGenerationType || (MemberGenerationType = {}));
//# sourceMappingURL=codeActionProvider.js.map