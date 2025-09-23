+++
title = 'Gradle Catalog'
date = 2024-03-19T21:20:58+08:00
draft = false
categories = ['折腾']
tags = ['Java', 'Gradle']
+++

Reference: [Gradle Version Catalog](https://medium.com/@callmeryan/gradle-version-catalog-728111fa210f) 和 [Version Catalog(中央依赖声明，即：版本目录)](https://juejin.cn/post/7202122510388084793)

以前一直很好奇，Spring Boot Starter是怎么进行包的版本管理的，看完这个就可以获得启发。

# 好处
- 统一的模块的依赖版本管理
- 依赖分组
- ...

在Gradle 8.0后的版本，默认已经支持了Gradle Catalog.

# Feature

- `[versions]`用于声明可以被依赖项引用的版本
- `[libraries]` 用于声明依赖的别名
- `[bundles]` 用于声明依赖包（依赖组）
- `[plugins]` 用于声明插件

新建`gradle/libs.versions.toml`文件：

```toml
[versions]
springdoc_version = "2.4.0"

[libraries]
springdoc = { module = "org.springdoc:springdoc-openapi-starter-webmvc-ui", version.ref = "springdoc_version" }

[bundles]
springdoc = ["springdoc"]

[plugins]
```

## 使用
然后在`build.gradle`中像正常引用其它包一样引用。

```gradle
dependencies {
	implementation libs.bundles.springdoc
}
```
就这么简单。
