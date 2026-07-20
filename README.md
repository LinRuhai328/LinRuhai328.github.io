# River

River 的个人静态博客，基于 [AstroPaper](https://github.com/satnaing/astro-paper) 与 [Astro](https://astro.build/) 构建。

- 网站：<https://linruhai328.github.io/>
- 作者：River
- 内容：个人思考、学习过程、技术实践与经验分享

## 本地运行

需要 Node.js 22.12 或更高版本，并通过 Corepack 使用仓库锁定的 pnpm。

```bash
corepack pnpm install --frozen-lockfile
corepack pnpm dev
```

生产检查：

```bash
corepack pnpm run format:check
corepack pnpm run lint
corepack pnpm run build
```

## 写文章

文章位于 `src/content/posts/`。复制 `_template.md`，移除新文件名前的下划线，并使用简短的英文 slug，例如：

```text
src/content/posts/learning-in-public.md
```

Front Matter 示例：

```yaml
---
author: "River"
pubDatetime: 2026-07-20T08:00:00+08:00
modDatetime: 2026-07-21T08:00:00+08:00
title: "文章标题"
description: "文章摘要"
tags:
  - 学习
draft: true
pdf: "/downloads/example.pdf"
---
```

- `pubDatetime`、`title` 和 `description` 必填。
- `draft: true` 的文章不会进入首页、文章列表、归档、RSS 或站点地图。
- `modDatetime` 和 `pdf` 可选；没有值时对应区域不会显示。
- 图片可放在文章同目录，也可放入 `public/images/`。
- Typst 源文件在本地维护，导出的 PDF 放入 `public/downloads/`，再通过 `pdf` 字段或正文链接引用。

## 发布流程

1. 本地运行 `corepack pnpm dev` 预览。
2. 将文章的 `draft` 改为 `false`。
3. 运行格式、Lint 和生产构建。
4. 提交并推送 `main`，GitHub Actions 自动发布到 GitHub Pages。

## 可选集成

- Giscus：设置 `PUBLIC_GISCUS_REPO_ID` 与 `PUBLIC_GISCUS_CATEGORY_ID` 后启用文章评论。
- Cloudflare Web Analytics：设置 `PUBLIC_CF_WEB_ANALYTICS_TOKEN` 后启用匿名聚合统计。

变量缺失时，相应第三方脚本不会加载，也不会影响正文阅读或构建。

## 许可与来源

主题基线来自 AstroPaper，遵循仓库中的 MIT License。博客文章及个人内容的版权归 River 所有。
