/**
 * 运行模板并使用提供的JSON数据返回结果。
 *
 * @param {string} template - 要执行的模板
 * @param {string} json - 与模板一起使用的JSON数据
 * @return {Promise<string>} 运行模板的结果
 */
export async function execute(template: string, json: object): Promise<string> {
  const dataStr = Object.entries(json).reduce((acc, [key, value]) => {
    if (typeof value === "string") {
      return (acc += `${key}="${value}"\n`);
    } else if (typeof value === "object") {
      return (acc += `${key}=${JSON.stringify(value)}\n`);
    } else {
      return (acc += `${key}=${value}\n`);
    }
  }, "");
  // 处理https://try.freemarker.apache.org/api/execute所需的数据
  const data = {
    template: template,
    dataModel: dataStr,
  };
  const response = await fetch(
    "https://try.freemarker.apache.org/api/execute",
    {
      body: JSON.stringify(data),
      method: "POST",
      headers: { "Content-Type": "application/json" },
    }
  );
  const res = JSON.parse(await response.text());
  // 处理返回数据
  if (res.result) {
    return res.result;
  } else if (res.problems) {
    return res.problems.map((v: any) => v.message).join("\n");
  }
  return "";
}
