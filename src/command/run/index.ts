import * as vscode from "vscode";
import * as fs from "fs/promises";
import { execute } from "./execute";
import { fileIsExist } from "../../utils/file";

export default function runFtlCommand(document: vscode.TextDocument) {
  return new Promise<boolean>(async (resolve, reject) => {
    // 判断file类型
    if (!document.fileName.endsWith(".ftl")) {
      reject("only support ftl file");
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
      const message = `error! ${error?.message ?? ""}`;
      reject(message);
      return;
    }

    resolve(true);
  });
}
