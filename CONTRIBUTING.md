# 贡献指南

感谢您对 KigHub 感兴趣并考虑贡献。在开始贡献之前，请花点时间阅读以下指南。

---

## 设置开发环境

### Fork 仓库

[Fork](https://help.github.com/articles/fork-a-repo/) 这个仓库到您自己的 GitHub 账户，然后 [克隆](https://help.github.com/articles/cloning-a-repository/) 到本地。

### 安装 Node.js

使用 [fnm](https://github.com/Schniz/fnm) 或 [nvm](https://github.com/nvm-sh/nvm) 运行以下命令。这将切换到项目 `.nvmrc` 文件中指定的 Node.js 版本。

```bash
# 使用 fnm
fnm use

# 使用 nvm
nvm use
```

### 安装 pnpm

使用 corepack 启用 [pnpm](https://pnpm.io/)：

```bash
corepack enable
```

### 设置 git 邮箱

请确保您已在 `<https://github.com/settings/emails>` 设置了您的邮箱。这将在您稍后提交拉取请求时需要。

检查您的 git 客户端是否已配置邮箱：

```sh
git config --list | grep email
```

将邮箱设置到全局配置：

```sh
git config --global user.email "SOME_EMAIL@example.com"
```

为本地仓库设置邮箱：

```sh
git config user.email "SOME_EMAIL@example.com"
```

---

## 进行更改和构建

在您的 forked 仓库中设置好本地开发环境后，我们就可以开始开发了。

### 检出新分支

建议在新分支上进行开发，因为这会在您稍后提交拉取请求时使事情变得更容易：

```sh
git checkout -b MY_BRANCH_NAME
```

### 开发与构建

安装依赖:

```sh
pnpm install
```

启动开发服务器：

```bash
pnpm run dev
```

构建网站：

```bash
pnpm run build
```

预览生产构建：

```bash
pnpm run preview
```

如果您需要清理项目中所有 `node_modules/*`，请运行 `reset` 命令：

```sh
pnpm run reset
```

---

## 提交更改

### 提交您的更改

将您的更改提交到您的 forked 仓库，并 [创建一个拉取请求](https://help.github.com/articles/creating-a-pull-request/)。

### PR 标题格式

PR 标题的格式遵循 Conventional Commits。

一个例子：

```
feat(plugin-swc): Add `myOption` config
^    ^    ^
|    |    |__ 主题
|    |_______ 范围
|____________ 类型
```

---
