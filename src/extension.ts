import * as vscode from "vscode";
import runFtlCommand from "./command/run";
import { getConfiguration } from "./common/getConfiguration";
import { DEFAULT_RUN_ON_SAVE } from "./const/default";

export function activate(context: vscode.ExtensionContext) {
  // 设置状态
  const status = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Left
  );
  status.text = "$(sync~spin) FreeMarker Running";

  const runningSet = new Set();

  const run = (document: vscode.TextDocument) => {
    if (runningSet.has(document.fileName)) {
      return;
    }
    runningSet.add(document.fileName);
    status.show();
    runFtlCommand(document)
      .catch((error: any) => {
        error && vscode.window.showErrorMessage(error);
      })
      .finally(() => {
        runningSet.delete(document.fileName);
        !runningSet.size && status.hide();
      });
  };

  const runCommand = vscode.commands.registerCommand("fm-test.run", () => {
    const document = vscode.window.activeTextEditor?.document;
    if (document && /\.ftl$/.test(document.fileName)) {
      run(document);
    }
  });

  const watchSave = vscode.workspace.onDidSaveTextDocument((document) => {
    const runOnSave = getConfiguration("runOnSave") ?? DEFAULT_RUN_ON_SAVE;
    if (runOnSave && /\.ftl$/.test(document.fileName)) {
      run(document);
    }
  });

  context.subscriptions.push(runCommand, watchSave);
}

export function deactivate() {}
