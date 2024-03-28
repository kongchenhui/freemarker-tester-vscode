## FreeMarker Tester

freemarker 测试工具，调用https://try.freemarker.apache.org网站接口进行测试，目前版本为v2.3.32.

## How to use

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

> 点击左下角 run ftl 输出如下

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
