# gitbook 常用命令

## 前置条件

想要运行 gitbook 需要依赖于 Node 环境，也就是你需要提前安装 Node

> 检查 Node 是否安装

```shell
node -v
npm -v
```

## 常用命令

**全局安装**

```shell
npm install -g gitbook-cli
```

**版本查看**：若提示不是内部或外部命令则检查自己安装是否成功

```shell
gitbook --version
```

**初始化**：需要找一个空的目录进行初始化

```shell
gitbook init
```

**安装 gitbook 的依赖库**：一般是拉取了别人的 gitbook 项目之后首先需要做的事

```shell
gitbook install
```

**列出当前已安装的版本**

```shell
gitbook ls
```



**启动一个本地 gitbook 服务端口页面（热加载：内容更改自动更新）**

```shell
gitbook serve
```

**编译**：生成一个 html 电子书文档目录（_book/）

> html 文件可以直接打开，但是依赖于其目录下得其它文件才能形成电子书

```shell
gitbook build
```