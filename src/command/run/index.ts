import * as vscode from "vscode";
import * as fs from "fs/promises";
import { execute } from "./execute";

export default function runFtlCommand() {
  return new Promise<boolean>(async (resolve, reject) => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      reject("no editor");
      return;
    }
    const document = editor.document;

    // 判断file类型
    if (
      document.languageId !== "plaintext" ||
      !document.fileName.endsWith(".ftl")
    ) {
      reject("file is not a .ftl file");
      return;
    }

    const filePath = document.fileName;

    try {
      // 读取当前模板
      const template = await fs.readFile(filePath, "utf8");

      // 读取JSON 文件名为 <模板名>.json
      const json = await fs.readFile(filePath + ".json", "utf8");

      const parse = JSON.parse(json);

      const res = await execute(template, parse);

      // 路径当前文件夹
      await fs.writeFile(
        `${filePath}.result.${parse?.FmTestOutputFileExtension ?? ".txt"}`,
        res,
        "utf8"
      );
    } catch (error: any) {
      reject("error! " + error?.message ?? "");
    }

    resolve(true);
  });
}
