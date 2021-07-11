# Node 全局对象和模块化

## 给你的 Node 程序传递参数

![](https://gitee.com/feng-picgo-images/images/raw/master/img/node/05-Node-参数传递.png)

process 是 Node 的进程信息（全局对象中介绍），argv（argument vector）属性存储一个数组，相信上述案例已经很说明如何传参以及数组中每个元素的信息了，我们如果想获取到我们手动传递的第一个参数则需要使用 `process.argv[2]` 后续参数的纯涤以此类推



## Node 常见的全局对象

#### process

Node 中存储的进程信息

#### console

控制台打印输出

#### exports

用于导出当前模块（js 文件）的信息，其实导出主要是 module.exports 完成的，相当于在最开始将此引用赋值给 module.exports，这样做的目的是为了迎合 CommonJS 规范

#### require

导入模块

1. 可以导入本地模块（某个路径下的 js 文件）
2. 导入内置模块
3. 导入第三方模块

#### module

每一个 js 文件都会存在一个 module 的实例，实际上是由内部的 Module 构造函数实例化来的

#### global

全局对象，内部有很多属性和方法，例如上述的 console、process、还有定时器甚至更多都放入到了内部，看了下源码 process 是由 Object.defineProperty() 设置的，可能是更好的去管控其改写与获取时的设置吧

#### __dirname

当前执行文件的目录路径（绝对路径）

#### __filename

当前执行文件的文件路径（绝对路径）

#### setTimeout

定时器：设置多久时间执行内部代码

#### setInterval

延时器：设置多久时间执行一次内部代码，只要不销毁就会一直执行



## JavaScript 模块化概念

早期的 JavaScript 并没有模块化的概念，这就导致了很多代码可维护性差以及可迭代性也差，那么模块化到底是什么呢？

模块化其实就是把我们的代码分成一个一个小的`结构`，每一个结构都有自己的代码逻辑、作用域、以及变量、函数、对象等，和其它结构互不干涉，同时如果需要也可以将这个结构暴露（导出）出去供其它结构使用，那么相对应的其它结构也可以导入需要依赖的结构。

这里用到了结构只是单纯的让大家更好的去理解模块化的概念，结构 = 模块。




## JavaScript 模块化规范

### CommonJS 规范

![](https://gitee.com/feng-picgo-images/images/raw/master/img/node/04-CommonJS基本导入导出.png)

CommonJS 通过 exports 关键字进行导出，通过 `require()` 函数进行导入，值得一提的是导出的对象与导入的对象指向的内存地址是一样的，也就是说在此案例中 `bar = exports;`

`require()` 函数导入同样有需要注意的点，如果是 ./ ../ 开头文件会以本地文件模式查找，若没有添加其后缀则会以 `*.js、*.json、*.node` 的顺序帮你添加后缀，若直接写一个字符串的话，那么会优先看是否为内置模块，不是内置模块的话在当前目录下的 node_modules 中查找是否属于第三方依赖，当前目录找不到就往上一层 node_modules 找，以此类推，直至目录为根目录为止。

最重要的一点时，CommonJS 规范的模块导入时同步导入，在模块导入完成之前会阻塞下面执行的代码，直至导入完成后执行，也算是 CommonJS 的一个缺陷。

### AMD

![](https://gitee.com/feng-picgo-images/images/raw/master/img/node/07-AMD规范演练.png)

[requirejs 文件下载地址](https://github.com/requirejs/requirejs/blob/master/require.js)

首先加载 requirejs 文件，因为它是基于 AMD 规范的

AMD（asynchronous module definition）异步模块化定义，是为了浏览器环境而设计的，因为 CommonJS 模块系统是同步加载的，在 Node 或服务端可能无伤大雅，文件之前加载为本地加载，速度很快，但是放到浏览器中就是客户端对服务端的请求了，这时如果网络不好，可能会因为某一个 js 文件没有加载完成导致整个进度阻塞，是非常不友好的。

`define(id?: String, dependencies?: String[], factory: Function | Object)` 函数用于定义模块，参数说明也很清楚了，需要注意的是该代码并不会引起阻塞，在此之后的代码依旧正常执行

- id：                  可选参数，定义模块名称
- dependencies： 可选参数，依赖模块列表
- factory：          必填参数，可以为函数，如果有依赖模块的话就会先去加载依赖模块，等待模块加载完毕后执行，其中的参数为依赖模块的返回值，按顺序排列，也可以为一个对象，如果是对象的话对象就默认为该模块的导出。

`require(dependencies: String[], factory: Function)` 函数用于导入模块，参数可以参照 define 我就不再写一遍了，需要注意的是改代码依赖模块导入后会立即执行 factory 函数，同样不会引起代码阻塞。

### CMD

![](https://gitee.com/feng-picgo-images/images/raw/master/img/node/08-CMD规范演练.png)

[seajs 文件下载地址](https://github.com/seajs/seajs/blob/master/dist/sea.js)

首先加载 seajs 文件，这是阿里贡献的一个规范，CMD（common modul definition），然后再某个 js 中设置入口文件 `seajs.use(moduleName: String | String[], callback?: Function)`
- moduleName：必填参数，可以为字符串，代码执行该依赖模块文件，也可以为数组，数组中每个参数都可以是一个模块，模块导出返回值由 callback 函数的参数按顺序接收。
- callback：       可选参数，第一个参数的模块依赖导入完成后执行

`define(function (require, exports, module) {})` 最核心的和 AMD 类似，同样使用此函数进行定义模块，同样其代码不会引起阻塞，可以在函数的内部执行导入导出。

参数的使用方式与 CommonJS 规范保持一致。

### ES6 Module

#### 正常导出

![](https://gitee.com/feng-picgo-images/images/raw/master/img/node/09-ES-Module-规范演练.png)

![](https://gitee.com/feng-picgo-images/images/raw/master/img/node/10-ES-Module-CORS.png)

> 注：如果你直接打开 html 文件看到了这个报错信息，CORS 浏览器同源策略，猜测 type='module' 属性不被 file:/// 协议所支持吧，具体原因没有查，不是特别清除，我通过 live-server 插件启动了一个本地 web 服务，如果自己想演练这个规范的话，需要先使用 npm 安装一下这个插件

```shell
# 安装
npm i -g live-server

# 执行：在你对应的 index.html 目录路径下，默认 8080 端口，如需修改在后面加上参数 --port=端口号 即可
live-server
```

首先采用 ES Module 会自动采用严格模式 `use strict;` 其次给我们的入口文件 index.js 的 script 标签中添加一个属性为 `type='module'`

ES6 Module 的规范是通过两个关键字去定义的

`export {}` 注意这里的括号可不是一个对象，而是它所对应的一种写法，内部的变量其实存储的是一个引用，只不过 ES6 在内部给我们做了事件监听，如果导出的值改变，那么引用也会重新改变（就算是字符串也是重新赋值），切其赋值定义的是一个常量，不支持导出后其它模块进行修改，我跟倾向与说这个 {} 像一个数组，内部就是一个个变量的引用，如果你非认为这是一个对象，那么你可以试试写一下键值对语法看下是否支持，如果是一个对象，那么会支持我上述截图中的第三种导出方式吗？as 别名

`import {} from 'module';` 这同样也是一种语法，有些小伙伴说第一种导入方式很像 ES6 的对象解构赋值，对，确实很像，但是不是，其就是一种解析语法而已。

#### 默认导出

![](https://gitee.com/feng-picgo-images/images/raw/master/img/node/11-ES-Module-default.png)

默认导出，但是一个模块只能存在一个 `export default`，且不影响其它 `export` 导出，其它的导出你还是可以通过 `import {}` 的语法导入

这里的导出如果是基本类型那么就是一个拷贝，如果是引用类型，那么就是某个堆中内存地址的传递

还需要注意一点，没有类似 webpack 这种构建工具帮你配置后缀的话，导入文件模块是需要自己手动添加其后缀名的！！！

#### export 和 import 结合使用

![](https://gitee.com/feng-picgo-images/images/raw/master/img/node/12-ES-Module-导入时导出.png)

一般场景用于我有多个模块，需要同时导出，那么现在可以写一个 index.js 在这里把所有模块导入时导出，这样就可以通过一个模块暴露我其它模块的属性或方法了

#### import 函数

import 关键字在编译过程中需要确定导入模块之间的依赖关系，所以不能直接在逻辑代码块中编写，否则语法错误，即如下代码

```javascript
if (true) {
  import Loo from './modules/loo.js'; // Uncaught SyntaxError: Unexpected identifier
}
```

根本原因也说了，类似 if 这种逻辑层代码是需要在程序运行时才会执行的，那么我既然需要在编译过程就确定关系，你运行时才导入，那可不就语法出问题了嘛，那我确实想这样做怎么办呢？别急，有办法，这里就可以用到我们的 import() 函数了，不是关键字哦，是函数，函数是可以在运行时执行的

import(module: String) 函数返回一个 Promise 对象，可以通过 .then() .catch() 处理，也可以通过 ES6 新增关键字，async await 搭配处理，也没有什么好说的了，知道的就知道了，不知道一时半会解释不清楚，如下图所示

![](https://gitee.com/feng-picgo-images/images/raw/master/img/node/13-ES-Module-import-函数.png)

## module.exports 和 exports 之间的关系

聊一聊 Node 内部的 module.exports 和 exports 吧

### exports

可以看到前面介绍常用的全局对象中也有这一个对象，其实它并不算一个全局对象，只是每一个模块中都有这个对象，所以被认为是全局对象，每一个模块中不同 exports 它的内存地址是不同的，在 Node 中用于导出一些需要模块导出的信息，但是实际上并不是 exports 完成的导出这件事情，而是 module.exports......

### module.exports

`module.exports` 才是完成导出模块的核心，只不过内部 Node 中做了这么一件事情，什么事情呢？它在 js 文件（模块）开始时将 `module.exports = exports;` 这样操作了之后，相信了解过对象引用赋值基本概念的小伙伴就应该已经明白了吧？相当于 `exports` 只是单纯提供一个对象存储空间，最终导出的操作还是由我们的 `module.exports` 完成。

### 为什么有了 module.exports 导出功能了还要有 exports

这其实就涉及到一个规范了，CommonJS 的定义导出使用的就是 exports，那么如果 Node 不支持这种方式的导出，那么可能之前了解过 CommonJS 规范的人就不知道怎么导出了，主要都是为了迎合规范所做出的的一些改变。



## 文件循环加载时出现的问题

![](https://gitee.com/feng-picgo-images/images/raw/master/img/node/03-文件循环导入.png)

我们先来捋一下这张图的导入关系，要么是深度优先导入，要么是广度优先导入

### 深度优先

可以看到的是，最先执行的肯定是 main，其次分成了两个分支，一个 a，一个 b，这个就要看我们在 main 中代码导入的的顺序了，我们假定为 a 先，那么就是这样的

main >> a >> c >> d >> e >> b

最后发现 b 没有模块依赖了，那么结束，然后就是另一条分支，main >> b 的时候发现 诶，这个模块我好像导入过了，那么就回去缓存中获取，一个模块只会被导入一次，整个导入结束。

### 广度优先

还是一样先执行 main，两个分支先执行 a，然后执行 b，然后再回到 a 需要导入的模块，导入 c，然后回到 b 需要导入的模块，发现 c 导入过了读缓存，回到 c 需要导入的模块......

main >> a >> b >> c >> d >> e

### 测试一下

说了这么多，我们在 Node 的 CommonJS 规范根据上面图的导入关系试验一下，下面看看结果吧

![](https://gitee.com/feng-picgo-images/images/raw/master/img/node/06-文件循环导入.png)

结果已经很明显，CommonJS 的文件循环导入就是用的深度优先导入方式，先一条线走到底，然后换线。

