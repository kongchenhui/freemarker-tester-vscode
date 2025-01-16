import * as vscode from "vscode";
import * as fs from "fs/promises";
import { execute } from "./execute";
import { fileIsExist } from "../../utils/file";

export default function runFtlCommand() {
  return new Promise<boolean>(async (resolve, reject) => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      reject("");
      return;
    }
    const document = editor.document;

    // 判断file类型
    if (!document.fileName.endsWith(".ftl")) {
      reject("");
      return;
    }

    const filePath = document.fileName;
    const outputPath = filePath.replace(/\.ftl$/g, "");
    const jsonPath = `${filePath}.json`;
    let jsonStr = "{}";

    try {
      // 读取当前模板
      const template = await fs.readFile(filePath, "utf8");

      if (!(await fileIsExist(jsonPath))) {
        // 创建文件
        fs.writeFile(jsonPath, jsonStr, "utf8");
      } else {
        jsonStr = await fs.readFile(jsonPath, "utf8");
      }

      const parse = JSON.parse(jsonStr);

      const res = await execute(template, parse);

      await fs.writeFile(outputPath, res, "utf8");
    } catch (error: any) {
      reject("error! " + (error?.message ?? ""));
    }

    resolve(true);
  });
}
