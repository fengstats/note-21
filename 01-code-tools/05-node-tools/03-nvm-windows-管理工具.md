# nvm Node 管理工具（Windows）

[nvm-windows 下载地址](https://github.com/coreybutler/nvm-windows/releases)

这个东西就是关于 Node 的包管理工具，可以在多个不同的 Node 版本之间来回切换，Windows 用户需要去下载（上述链接），直接找到 nvm-setup.zip 下载解压，然后安装，我们这一篇只介绍在 Window 下的命令。

**配置国内镜像（淘宝）**

```shell
nvm node_mirror https://npm.taobao.org/mirrors/node/
nvm npm_mirror https://npm.taobao.org/mirrors/npm/
```

**查看历史版本信息**

```
nvm list available
```

**安装某个版本**

_注：14.17.3 只是一个说明，可以写自己所需的版本号_

```shell
nvm install 14.17.3
```

**安装最新版本**

```shell
nvm install latest
```

**查看当前已经安装的版本**

```shell
nvm list
```

**使用某个版本**

```shell
nvm use 14.17.3
```
