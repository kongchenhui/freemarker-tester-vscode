import * as vscode from "vscode";
import runFtlCommand from "./command/run";

export function activate(context: vscode.ExtensionContext) {
  // 设置按钮
  const runButton = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Left
  );
  runButton.text = "$(play) Run FTL";
  runButton.tooltip = "Run your FTL";
  runButton.command = "fm-test.run";
  runButton.show();

  // 注册命令
  let disposable = vscode.commands.registerCommand("fm-test.run", () => {
    runButton.text = "$(sync~spin) Running";
    runButton.command = undefined;
    runFtlCommand()
      .catch((error: any) => {
        vscode.window.showErrorMessage(error);
      })
      .finally(() => {
        runButton.text = "$(play) Run FTL";
        runButton.command = "fm-test.run";
      });
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
