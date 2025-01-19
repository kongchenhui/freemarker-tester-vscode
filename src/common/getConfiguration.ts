import { workspace } from "vscode";

interface GetConfiguration {
  /** 获取当前插件的apiUrl */
  (key: "apiUrl"): string | undefined;
  /** 获取当前插件的extraParams */
  (key: "extraParams"): object | undefined;
}

/**
 * 获取当前插件的配置项
 */
export const getConfiguration: GetConfiguration = (key) => {
  return workspace.getConfiguration("freemarker-tester").get(key);
};
