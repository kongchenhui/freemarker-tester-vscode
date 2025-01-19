# Change Log

## 0.0.6 - 2025-01-19

### Added

- 支持配置 apiUrl 和 extraParams

## 0.0.5 - 2025-01-16

### Changed

- 废弃在 json 中通过配置 FmTestOutputFileExtension 字段生成文件名的方式
- 生成文件名为模板文件去除".ftl"的部分（demo.html.ftl -> demo.html）

### Added

- json 文件不存在时自动创建文件,文件名为模板名加".json"（demo.html.ftl -> demo.html.ftl.json）
