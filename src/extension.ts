import * as vscode from "vscode";
import runFtlCommand from "./command/run";

export function activate(context: vscode.ExtensionContext) {
  // 设置状态
  const status = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Left
  );
  status.text = "$(sync~spin) FreeMarker Running";

  let running = false;
  let disposable = vscode.commands.registerCommand("fm-test.run", async () => {
    if (!running) {
      status.show();
      running = true;
      runFtlCommand()
        .catch((error: any) => {
          error && vscode.window.showErrorMessage(error);
        })
        .finally(() => {
          status.hide();
          running = false;
        });
    }
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
