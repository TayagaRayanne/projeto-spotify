"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_jsonrpc_1 = require("vscode-jsonrpc");
/**
 * Well-known notification types.
 */
var NotificationTypes;
(function (NotificationTypes) {
    /** The {@link BusyNotification} type. */
    NotificationTypes.busy = new vscode_jsonrpc_1.NotificationType('msbuild/busy');
})(NotificationTypes = exports.NotificationTypes || (exports.NotificationTypes = {}));
/**
 * Configure the language client to handle "language service is busy" notifications.
 *
 * @param languageClient The MSBuild language client.
 */
function handleBusyNotifications(languageClient, statusBarItem) {
    languageClient.onReady().then(() => {
        languageClient.onNotification(NotificationTypes.busy, notification => {
            if (notification.isBusy) {
                statusBarItem.text = '$(watch) MSBuild Project';
                statusBarItem.tooltip = 'MSBuild Project Tools: ' + notification.message;
                statusBarItem.show();
            }
            else {
                statusBarItem.text = '$(check) MSBuild Project';
                statusBarItem.tooltip = 'MSBuild Project Tools';
                statusBarItem.hide();
            }
        });
    });
}
exports.handleBusyNotifications = handleBusyNotifications;
//# sourceMappingURL=notifications.js.map