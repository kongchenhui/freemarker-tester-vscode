## FreeMarker Tester

freemarker 测试工具，调用 https://try.freemarker.apache.org 网站接口进行测试。

## 如何使用

> 准备 demo.html.ftl 和 demo.html.ftl.json 文件
> demo.html.ftl 和 demo.html.ftl.json 须在同一文件夹 demo.html 可改为其他名称

demo.html.ftl

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

demo.html.ftl.json

```json
{ "title": "test", "msg": "hello world" }
```

> 点击 编辑器右上角运行按钮( 或使用快捷键 ctrl + shift + alt + R ) 输出如下

demo.html

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
