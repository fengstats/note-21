# Node 安装与基本使用

[Node下载地址](http://nodejs.cn/download/)

找到对应平台下载即可，LTS 版本为稳定发行版，其次为最新版，如果是学习那么建议下载最新版本（某些新特性支持），如果是公司项目建议下载 LTS 版本，或者去到我的`03-后端back-end/03-工具`下有一篇为 nvm-windows 的文档，可以同时安装不同 Node 版本，并且来回切换。

### 检查是否安装成功

```shell
node -v
npm -v
```

*注：打印版本信息为安装成功，否则检查之前步骤是否出错，环境变量是否配置成功等......*

### 如何打印一个 Hello Node？

![](https://gitee.com/feng-picgo-images/images/raw/master/img/node/01-Hello-Node.png)

`index.js`
```javaScript
console.log('Hello Node');
```

```shell
node index.js

> Hello Node
```

*注：需要在有 index.js 文件的路径下执行哦，否则可能找不到文件*


### 什么是 REPL ？

read - evaluate - print - loop（读取 - 求值 - 打印输出 - 循环）

也被称为`交互式解释器`，JavaScript 如此、Python 亦是如此，虽然它们都是高级语言，但同时也都是`解释型语言`，也就是执行一句代码输出一行结果，C++、Java 等则为编译性语言，需要先编译好文件，然后执行编译文件才能运行。

Node 的 REPL

![](https://gitee.com/feng-picgo-images/images/raw/master/img/node/02-REPL.png)