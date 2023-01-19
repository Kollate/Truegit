---
title: Personalization
sidebar_position: 9
---

There are multiple ways you can customize the look of your blog.

1. Layout: We have a few layouts for professional and personal blogs.
2. Color: You can change the background color of your blog.
3. Font family: You can pick the font family for title and body of your blog text.

## Layout

We currently support three layouts that you can pick using the `layout` key.

1. Default Layout: To use this layout, leave the `layout` key empty. [See a demo here](https://13ea3711-4f0f-4bc8-83d7-4271929cd701.truegit.io/).

2. Brooklyn: This is a [simple layout for personal blogs](https://84aa0d30-8f12-4400-92c0-ba17b86512c5.truegit.io/) To use this layout use:

```yaml
layout:
  type: Brooklyn
  bannerDescription: >-
    This is a sample text for banner.
```

3. Manhattan: This is a fancier layout. [See a demo here](https://demo.truegit.io/). To use this layout use

```yaml
layout:
  type: Manhattan
```

## Font Family

We support the following font families for your blog.

```typescript
type FontFamily =
  | "DEFAULT_SANS"
  | "DEFAULT_SERIF"
  | "LORA"
  | "NOTO_SERIF"
  | "ROBOTO_MONO"
  | "ROBOTO_SLAB"
  | "SOURCE_SANS_PRO"
  | "SOURCE_SERIF_PRO";
```

To set the font family, you can use the `titleFont` and `bodyFont` keys in `truegit.yaml`. For example:

```yaml
titleFont: "DEFAULT_SANS"
bodyFont: "DEFAULT_SERIF"
```

## Background Color

Use the `backgroundColor` key in the configuration file to set the background color. It must be a HEX value. The font color is either gray or white based on the contrast.

```yaml
backgroundColor: "#CCC"
```
