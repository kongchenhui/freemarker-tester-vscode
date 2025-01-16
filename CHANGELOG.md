# Change Log

## [0.0.4]

### Changed

- 废弃在 json 中通过 FmTestOutputFileExtension 配置生成文件名的配置方式
- 生成文件名为模板文件去除".ftl"的部分（demo.html.ftl -> demo.html）

### Added

- json 文件不存在时自动创建文件,文件名为模板名加".json"（demo.html.ftl -> demo.html.ftl.json）
