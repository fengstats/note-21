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