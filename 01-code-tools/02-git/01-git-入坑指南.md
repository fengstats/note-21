# Git 常用命令

## 前言

> git 是一个远程代码管理仓库，可以将你的代码托管（push）至它们的服务器（云端），当你需要它的时候只要你有网络就可以从云端拉取（pull）或者下载（clone），单人使用可以，团队协作效果更佳。

## 安装

### Windows

Windows 下的安装非常简单，我给你提供两个地址。第一个是下载目录（可以选择不同版本/系统下载），第二个是下载文件，以我当前写文档的最新版本为准，当然我提供的是国内的下载地址，感谢淘宝提供的镜像吧。

[Git 下载目录](https://npm.taobao.org/mirrors/git-for-windows/)

[Git-2.32.0-64-bit](https://npm.taobao.org/mirrors/git-for-windows/v2.32.0.windows.1/Git-2.32.0-64-bit.exe)

### macOS

对于 Mac 下的安装我的知识就显得有点捉襟见肘了...因为我本人并没有 Mac，当然好巧不巧的是帮助了一位同学安装了一次（Mac！！！），所以百度也看了很多安装教程之类的。对于最简单的一个就是通过 Mac 的神器 Homebrew 来安装，[Homebrew 中文首页](https://brew.sh/index_zh-cn.html)，链接我放这边了，有兴趣可以看看，简单来说就是 Mac 下的一个软件管理工具，Mac 下的任何软件都可以通过它进行下载。

#### Homebrew

官方提供的下载不太行，原因是：

> 国外源下载，速度太慢了...

**所以我们还是要感谢国内的大佬把这个安装程序弄到了 gitee（码云：阿里的），这样速度就很快乐，并且贴心的给我们提供下载源选择，再次感谢！！！**

[大佬的 shell 程序](https://gitee.com/cunkai/HomebrewCN/blob/master/Homebrew.sh)

> 下面有两条命令

##### 一条是 /bin/bash 环境执行

```shell
/bin/bash -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)""
```

##### 一条是 /bin/zsh 环境执行

```shell
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
```

> 我忘了怎么看自己电脑的环境是 zsh 还是 bash 了，所以你自己一条一条试试，应该有一条可以，如果都不行，提供 www.baidu.com
>
> 这个只是下载 Homebrew 啊喂，下面还有 git 没装呢

#### Git

> Homebrew 装好了之后安装就变得很简单了

```shell
brew install git
```

## 本地仓库的操作

**查看 git 版本信息**

```shell
git --version
```

**初始化用户信息**（全局）

```shell
git config --global user.name "lazy"
git config --global user.email "feng2860984180@163.com"
```

**查看用户信息**（全局）

```shell
git config --global --list
```

**初始化**：本地仓库

```shell
git init
```

**查看当前仓库状态**

```shell
git status
```

**将修改文件提交至暂存区**

```shell
git add .
```

**将暂存区文件提交至本地仓库 -m 后面跟的是注释信息**

```shell
git commit -m "这是这次提交的注释"
```

**如何从远程仓库中下载复制我的代码**

```shell
git clone https仓库的地址
```

**如何从远程拉取（更新）我的代码**

```shell
git pull
```

## 远程仓库

**添加一个远程仓库的地址到我们本地仓库**

```shell
git remote add origin https仓库的地址
```

**如何查看远程仓库是否添加成功**

```shell
git remote -v
```

**将我们的本地代码提交到远程仓库：提交到 origin 这个别名所对应的仓库的 master 分支上**

> -u 记录本次提交，下次直接使用 git push 即可

```shell
git push -u origin master
```

**如何查看本地仓库分支**

> -a 显示所有的分支（包括远程）

```shell
git branch -a
```
