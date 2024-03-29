# yarn

## 安装

**前提：保证你在 Node 正常可用下的环境运行**

若没有安装 Node，请看这一篇：

[Node 安装与基本使用](/03-back-end/02-node/01-Node-安装与基本使用.md)

```shell
npm i -g yarn
```

## 配置国内源

```shell
yarn config set registry https://registry.npm.taobao.org --global

yarn config set disturl https://npm.taobao.org/dist --global
```

## 常用命令

```shell
# 版本
yarn --version

# 初始化仓库，创建 package.json 文件，-y 默认全部选择 yes
yarn init -y

# 安装依赖，packageName 为依赖包名称，如需安装指定版本可在后面添加 @^版本号
# 生产环境：-D
# 开发环境：--save（默认就是）
yarn add <packageName>

# 移除依赖
yarn remove <packageName>

# 安装 package.json 中所有依赖
yarn / yarn install

# 列出项目所有依赖
yarn list

# 全局
yarn global add <packageName>
```
