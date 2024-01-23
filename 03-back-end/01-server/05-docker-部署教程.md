## 登录

一般需要部署到云端的镜像才需要登录

回车后输入密码：123qwe123

```shell
# 参数说明
docker login --username=用户名 腾讯云仓库地址

# 示例
docker login --username=100012601773 ccr.ccs.tencentyun.com
```

## 拉取镜像

```shell
# 参数说明
docker pull 腾讯云仓库地址/组织/项目名称:版本tag

# Node-RED 示例
docker pull ccr.ccs.tencentyun.com/lianhe/node-red:1.0.1

# 前端调度系统 示例
docker pull ccr.ccs.tencentyun.com/lianhe/agv-scheduler-client:3.0.9
```

## 查看镜像

```shell
docker images
```

## 打包镜像

注：当前目录下需要 Dockerfile 和 nginx.conf（需要 nginx 代理的情况） 文件，如下

- Dockerfile

```Dockerfile
FROM nginx:1.17.1 AS final

USER root
ENV TZ=Asia/Shanghai
WORKDIR /usr/src/app

COPY ./dist/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
RUN mkdir logs

EXPOSE 80

# If you add a custom CMD in the Dockerfile, be sure to include -g daemon off; in the CMD in order for nginx to stay in the foreground, so that Docker can track the process properly (otherwise your container will stop immediately after starting)!
CMD ["nginx", "-g", "daemon off;"]

```

- nginx.conf

```nginx
log_format trace
    '[$time_local] '
    '"$request" $status $body_bytes_sent '
    '"$http_referer"'
    '"$http_x_forwarded_for" $request_id';

server {
    listen 80;
    # gzip config
    gzip on;
    gzip_min_length 1k;
    gzip_comp_level 9;
    gzip_types text/plain text/css text/javascript application/json application/javascript application/x-javascript application/xml;
    gzip_vary on;
    gzip_disable "MSIE [1-6]\.";

    location / {
        root /usr/share/nginx/html;
        try_files $uri $uri/ /index.html;
        access_log /usr/src/app/logs/page_access.log trace;
    }
}

```

```shell
# 参数说明
docker build -t 镜像名称(组织/项目名称):版本号 打包目录

# 示例
docker build -t lianhe/example-server:1.0.0 .
```

## 推送镜像

先打包再推送

```shell
docker push ccr.ccs.tencentyun.com/lianhe/node-red:1.0.1
```

## 启动容器服务

```shell
# 参数说明
docker run -d(后台挂起) -p(内外部端口指定) 外部端口:内部端口 -v(数据目录映射) 外部目录:内部目录 --restart=always(docker重启时总是重启改容器服务) --name=容器名称 镜像Id

# 示例：本地 Node-RED 启动
docker run -d -p 1880:1880 -v D:\03-environment\node-red-one:/data --restart=always --name node-red [imagesId]
```

## 查看容器服务

```shell
docker ps

# 显示隐藏的容器服务
docker ps -a
```

## 容器内目录或文件拷贝

```shell
# 将当前目录下的 /dist 目录拷贝至容器中的 /usr/share/nginx 目录下并重命名为 html
docker cp ./dist [CONTAINER ID]:/usr/share/nginx/html
```

## 进入容器

```shell
docker exec -it [CONTAINER ID] /bin/bash
```
