# gitbook 常用命令

## 前置条件

想要运行 gitbook 需要依赖于 Node 环境，也就是你需要提前安装 Node

> 检查 Node 是否安装

```shell
node -v
npm -v
```

## 问题记录

### 1. Node 版本导致代码兼容问题

![报错信息](https://gitee.com/feng-picgo-images/images/raw/master/img/code-tools/gitbook/01-报错信息.png)

> 这个问题有两种方式可以解决

#### 第一种方法：

降低 Node 版本，我记得好像 10.xx.xx 左右的版本应该就没有问题，我就不试了，感兴趣的可以自己试试，找一个 10 左右的版本就行，我也不知道具体版本号是多少了，如果不行那再降低试试，肯定有个 10 左右的版本可以！（我试过...）

#### 第二种方法：

就比较简单了，各版本应该通用，找到报错的 polyfills.js 文件，应该是 62-64 行的代码出现了问题，把它注释了就好了~

![注释文件详情](https://gitee.com/feng-picgo-images/images/raw/master/img/code-tools/gitbook/02-注释polyfills文件代码.png)

### 2. gitbook serve 热加载失败

> 我从控制台的报错打印中得到的信息是`_book/`目录创建失败，结论是没有权限？
>
> 那我就很奇怪了，我启动之前也没有`_book/`目录呀，你明明创建了一个然后启动成功了
>
> 我一修改文件你就失败了？没有权限了？好家伙一次性功能，据我了解到，gitbook 使用 serve 启动目录时会占用两个默认端口
>
> 一个是`35729`（监听内部文件是否有改变），一个是`4000`（浏览器展示页面，可以通过 --port 参数修改）

#### 最后我找到一个不算完美的解决方法

就是每次在 gitbook serve 启动好服务后，手动删除`_book\`目录，一次就好，后面服务会自动创建该目录，虽然很 low，但确实有用......

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

列出当前安装的版本

```shell
gitbook ls
```



**启动一个本地 gitbook 服务端口页面（热加载：内容更改自动更新）**

```shell
gitbook serve
```

生成一个 html 电子书文档目录（_book/）

> html 文件可以直接打开，但是依赖于其目录下得其它文件才能形成电子书

```shell
gitbook build
```







### 

