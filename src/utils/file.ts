import * as fs from "fs/promises";

/**
 * 判断文件是否存在
 * @param filePath 文件路径
 */
export function fileIsExist(filePath: string) {
  return new Promise<boolean>((resolve) => {
    fs.access(filePath, fs.constants.F_OK)
      .then(() => {
        resolve(true);
      })
      .catch(() => {
        resolve(false);
      });
  });
}
