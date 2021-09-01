# Express

## 安装

### 一、脚手架

```shell
npm i -g express-genrator
express express-demo
```

### 二、从零开始

找一个空目录

```shell
npm init -y
```

安装 express

```shell
npm install express
```

中间件

```JavaScript
// 中间件按照顺序匹配，匹配成功停止，除非使用 next() 调用下一个匹配中间件
app.use((req, res, next) => {
  // 请求对象信息
  // console.log(req);
  // 调用下一个匹配的中间件
  // next();
  // 结束响应
  // res.end("end");
})
```

解析表单数据上传中间件

```shell
npm install multer
```

日志记录中间件

```shell
npm install morgan
```
