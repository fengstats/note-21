# firewalld（CentOS 7）

CentOS 7 默认安装 firewalld，如果没有安装的话，可以使用下面的命令进行安装

```shell
yum install firewalld firewalld-config
```

**查看防火墙版本**
```shell
firewall-cmd --version
```

**查看防火墙状态**
```shell
systemctl status firewalld 或者
firewall-cmd --state
```

**启动防火墙**
```shell
systemctl start firewalld
```

**重启防火墙**
```shell
firewall-cmd --reload
```

**禁用防火墙**
```shell
systemctl stop firewalld
```

**设置开机启动**
```shell
systemctl enable firewalld
```

**设置开放端口**（记得要执行重启防火墙命令哦）
```shell
firewall-cmd --zone=public --add-port=80/tcp --permanent
```

> 参数说明：
> 
> --zone 作用域
> 
> --add-port=80/tcp 添加端口号 格式：端口/通讯协议
> 
> --permanent 设置永久生效，若没有此参数重启后失效