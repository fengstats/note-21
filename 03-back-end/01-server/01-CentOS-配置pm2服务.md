### 安装 Node

#### 1.官网下载 linux 安装包

[Node 官网下载](http://nodejs.cn/download/)

> 因为我们需要在 CentOs 服务器上进行配置, 所以我们选择 Linux 版本安装包, 如下

![Node](https://gitee.com/feng-picgo-images/images/raw/master/img/server/1.png)

#### 2.将下载好的安装包上传至服务器

> 我这边是直接使用`termius`远程服务器连接工具通过 sftp 直接进行上传的, 当然亦使用其它工具或方式

![termius](https://gitee.com/feng-picgo-images/images/raw/master/img/server/2.png)

#### 3.解压安装包

- 解压命令

```shell
tar -xvf node-v14.16.0-linux-x64.tar.xz
```

#### 4.建立软链接(可以在任何地方使用 node 与 npm 命令)

> 先查看自己安装 Node 安装包的目录(pwd) 我的目录是 /root/chen/software 如果你的不是, 下面配置软链接时需要替换掉这个目录为你的

![termius](https://gitee.com/feng-picgo-images/images/raw/master/img/server/3.png)

- node

```shell
ln -s /root/chen/software/node-v14.16.0-linux-x64/bin/node /usr/local/bin/
```

- npm

```shell
ln -s /root/chen/software/node-v14.16.0-linux-x64/bin/npm /usr/local/bin/
```

#### 5.使用 node 与 npm 命令查看是否安装成功

```shell
node -v
npm -v
```

> 如下所示则为成功

![termius](https://gitee.com/feng-picgo-images/images/raw/master/img/server/4.png)

### 配置淘宝镜像

#### 1.全局配置

```shell
npm config set registry https://registry.npm.taobao.org
```

#### 2.查看配置

```shell
npm config get registry
```

![termius](https://gitee.com/feng-picgo-images/images/raw/master/img/server/5.png)

### 安装 pm2

#### 1.全局安装

```shell
npm i -g pm2
```

![termius](https://gitee.com/feng-picgo-images/images/raw/master/img/server/6.png)

#### 2.查看是否成功

```shell
pm2
```

![termius](https://gitee.com/feng-picgo-images/images/raw/master/img/server/7.png)

#### 3.配置软链接

> ！！！需要注意, 安装成功后可能出现 -bash: pm2: command not found 错误, 先确认自己是否成功安装, 如果成功安装了下一步就配置下软链接即可, 如果上一步成功打印, 正常显示, 忽略即可

```shell
ln -s /root/chen/software/node-v14.16.0-linux-x64/bin/pm2 /usr/local/bin/
```

#### 4.常用命令

- 查看任务

```shell
pm2 list
```

- 启动任务，server.js 是启动服务文件(注意换成自己的文件名称)
- --name 设置启动应用程序名称
- --watch 设置监听，当有文件改变时自动更新

```shell
pm2 start server.js --name="server" --watch
```

- 重启任务

```shell
pm2 restart server.js
```

- 删除指定任务, 0 为任务编号, 可以在"查看任务"时看见

```shell
pm2 del 0
```

- 停止任务

```shell
pm2 stop 0
```

- 查看指定任务 log 信息

```shell
pm2 log 0
```
