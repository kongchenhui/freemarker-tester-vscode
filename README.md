## FreeMarker Tester

freemarker 测试工具，调用 https://try.freemarker.apache.org 网站接口进行测试，目前版本为 v2.3.32.

## 如何使用

> 准备 demo.ftl 和 demo.ftl.json 文件
> demo.ftl 和 demo.ftl.json 须在同一文件夹 demo 可改为其他名称

demo.ftl

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
  </head>

  <body>
    <main>${msg}</main>
  </body>
</html>
```

demo.ftl.json

> FmTestOutputFileExtension 主要配置输出文件后缀，默认为 txt

```json
{ "title": "test", "msg": "hello world", "FmTestOutputFileExtension": "html" }
```

> 点击 编辑器右上角运行按钮( 或使用快捷键 ctrl + shift + alt + R ) 输出如下

demo.ftl.result.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>test</title>
  </head>

  <body>
    <main>hello world</main>
  </body>
</html>
```

## 配置项

在设置中搜索`freeMarker-tester`可以修改以下配置项

- `Api Url` : 发送ftl模板和数据的目标URL，默认为`https://try.freemarker.apache.org/api/execute`。可以修改为自己部署的ftl解析服务，结果需要在响应体的'result'字段中返回。
