## 问题记录

### 1. Node 版本导致代码兼容问题

![报错信息](https://gitee.com/feng-picgo-images/images/raw/master/notes/01-code-tools/gitbook/01-报错信息.png)

> 这个问题有两种方式可以解决

#### 第一种方法：

降低 Node 版本，我记得好像 10.xx.xx 左右的版本应该就没有问题，我就不试了，感兴趣的可以自己试试，找一个 10 左右的版本就行，我也不知道具体版本号是多少了，如果不行那再降低试试，肯定有个 10 左右的版本可以！（我试过...）

#### 第二种方法：

就比较简单了，各版本应该通用，找到报错的 polyfills.js 文件，应该是 62-64 行的代码出现了问题，把它注释了就好了~

![注释文件详情](https://gitee.com/feng-picgo-images/images/raw/master/notes/01-code-tools/gitbook/02-注释polyfills文件代码.png)

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


### 3. Error: ENOENT: no such file or directory

> stat 'D:\00-my-notes\_book\gitbook\gitbook-plugin-splitter\splitter.css'

在用户目录下找到这个文件 `copyPluginAssets.js` 或者通过全局检索工具 Everything 找一下也可以

```
.gitbook\versions\3.2.3\lib\output\website\copyPluginAssets.js
```

找到
```
confirm: true
```

替换为
```
confirm: false
```
