# Markdown & MDX

Rspress 不仅支持 Markdown，还支持 [MDX](https://mdxjs.com/)，这是一种强大的内容开发方式。

## Markdown

MDX 是 Markdown 的超集，这意味着你可以像往常一样编写 Markdown 文件。例如：

```md
# Hello world
```

## 使用组件

当你想在 Markdown 文件中使用 React 组件时，应该将文件命名为 `.mdx` 扩展名。例如：

```mdx
// docs/index.mdx
import { CustomComponent } from './custom';

# Hello world

<CustomComponent />
```

## 前置元数据（Front matter）

你可以在 Markdown 文件的开头添加 Front Matter，这是一个 YAML 格式的对象，用于定义一些元数据。例如：

```yaml
---
title: Hello world
---
```

> 注意：默认情况下，Rspress 使用 h1 标题作为 html 标题。

你还可以在正文中访问 Front Matter 中定义的属性，例如：

```markdown
---
title: Hello world
---

# {frontmatter.title}
```

之前定义的属性将作为 `frontmatter` 属性传递给组件。因此最终输出将是：

```html
<h1>Hello world</h1>
```

## 自定义容器

你可以使用 `:::` 语法创建自定义容器，并支持自定义标题。例如：

**输入：**

```markdown
:::tip
This is a `block` of type `tip`
:::

:::info
This is a `block` of type `info`
:::

:::warning
This is a `block` of type `warning`
:::

:::danger
This is a `block` of type `danger`
:::

::: details
This is a `block` of type `details`
:::

:::tip Custom Title
This is a `block` of `Custom Title`
:::

:::tip{title="Custom Title"}
This is a `block` of `Custom Title`
:::
```

**输出：**

:::tip
This is a `block` of type `tip`
:::

:::info
This is a `block` of type `info`
:::

:::warning
This is a `block` of type `warning`
:::

:::danger
This is a `block` of type `danger`
:::

::: details
This is a `block` of type `details`
:::

:::tip Custom Title
This is a `block` of `Custom Title`
:::

:::tip{title="Custom Title"}
This is a `block` of `Custom Title`
:::

## 代码块

### 基本用法

你可以使用 \`\`\` 语法创建代码块，并支持自定义标题。例如：

**输入：**

````md
```js
console.log('Hello World');
```

```js title="hello.js"
console.log('Hello World');
```
````

**输出：**

```js
console.log('Hello World');
```

```js title="hello.js"
console.log('Hello World');
```

### 显示行号

如果你想显示行号，可以在配置文件中启用 `showLineNumbers` 选项：

```ts title="rspress.config.ts"
export default {
  // ...
  markdown: {
    showLineNumbers: true,
  },
};
```

### 代码换行

如果你想默认换行长代码行，可以在配置文件中启用 `defaultWrapCode` 选项：

```ts title="rspress.config.ts"
export default {
  // ...
  markdown: {
    defaultWrapCode: true,
  },
};
```

### 行高亮

你还可以同时应用行高亮和代码块标题，例如：

**输入：**

````md
```js title="hello.js"
console.log('Hello World'); // [\!code highlight]

// [\!code highlight:3]
const a = 1;

console.log(a);

const b = 2;

console.log(b);
```
````

:::warning
`[\!code highlight]` 中的反斜杠 (`\`) 用于 Markdown 转义，以显示原始语法。在实际代码中使用此标记时，请勿包含它。
:::

**输出：**

```js title="hello.js"
console.log('Hello World'); // [!code highlight]

// [!code highlight:3]
const a = 1;

console.log(a);

const b = 2;

console.log(b);
```

## Rustify MDX 编译器

你可以通过以下配置启用 Rustify MDX 编译器：
