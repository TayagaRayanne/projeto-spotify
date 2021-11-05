"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const vscode = __importStar(require("vscode"));
function readAllText(filename) {
    const fullpath = path.join(__dirname, 'snippets', filename);
    return JSON.parse(fs.readFileSync(fullpath).toString('UTF-8'));
}
const registerCompletionItemProvider = (obj, selector) => {
    const provider = {
        provideCompletionItems: (_document, _position, _token, _context) => {
            const completionItems = [];
            Object.keys(obj).forEach((title) => {
                const snippet = obj[title];
                const body = Array.isArray(snippet.body) ? snippet.body.join('\n') : snippet.body;
                const completion = new vscode.CompletionItem(snippet.prefix);
                completion.kind = vscode.CompletionItemKind.Snippet;
                completion.insertText = new vscode.SnippetString(body);
                completion.documentation = new vscode.MarkdownString(snippet.description);
                completionItems.push(completion);
            });
            return completionItems;
        },
    };
    return vscode.languages.registerCompletionItemProvider(selector, provider);
};
function activate(context) {
    context.subscriptions.push(registerCompletionItemProvider(readAllText('csharp-controllers.json'), {
        language: 'csharp',
        pattern: '**/*Controller.cs',
        scheme: 'file',
    }));
    context.subscriptions.push(registerCompletionItemProvider(readAllText('csharp-hubs.json'), {
        language: 'csharp',
        pattern: '**/*Hub.cs',
        scheme: 'file',
    }));
    context.subscriptions.push(registerCompletionItemProvider(readAllText('csharp-dbcontext.json'), {
        language: 'csharp',
        pattern: '**/*Context.cs',
        scheme: 'file',
    }));
    context.subscriptions.push(registerCompletionItemProvider(readAllText('csharp-dbcontext.json'), {
        language: 'csharp',
        pattern: '**/*Entities.cs',
        scheme: 'file',
    }));
    context.subscriptions.push(registerCompletionItemProvider(readAllText('csharp-dbcontext-factory.json'), {
        language: 'csharp',
        pattern: '**/*ContextFactory.cs',
        scheme: 'file',
    }));
    context.subscriptions.push(registerCompletionItemProvider(readAllText('csharp-middleware.json'), {
        language: 'csharp',
        pattern: '**/*Middleware.cs',
        scheme: 'file',
    }));
    context.subscriptions.push(registerCompletionItemProvider(readAllText('csharp-program.json'), {
        language: 'csharp',
        pattern: '**/Program.cs',
        scheme: 'file',
    }));
    context.subscriptions.push(registerCompletionItemProvider(readAllText('csharp-startup.json'), {
        language: 'csharp',
        pattern: '**/Startup*.cs',
        scheme: 'file',
    }));
    context.subscriptions.push(registerCompletionItemProvider(readAllText('json-appsettings.json'), {
        language: 'json',
        pattern: '**/appsettings*.json',
        scheme: 'file',
    }));
    // It's not working. Don't know why?
    // context.subscriptions.push(registerCompletionItemProvider(readAllText('msbuild-csproj.json'), {
    //     language: 'msbuild',
    //     pattern: '**/*.csproj',
    //     scheme: 'file',
    // }));
    context.subscriptions.push(registerCompletionItemProvider(readAllText('html-signalr.json'), {
        language: 'html',
        pattern: '**/*.{htm,html}',
        scheme: 'file',
    }));
    context.subscriptions.push(registerCompletionItemProvider(readAllText('razor-cshtml.json'), {
        language: 'aspnetcorerazor',
        pattern: '**/*.cshtml',
        scheme: 'file',
    }));
    context.subscriptions.push(registerCompletionItemProvider(readAllText('razor-cshtml.json'), {
        language: 'razor',
        pattern: '**/*.cshtml',
        scheme: 'file',
    }));
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map