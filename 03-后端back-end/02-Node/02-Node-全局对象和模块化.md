# Node 全局对象和模块化

### 如何给 Node 程序传递参数？

`index.js`
```
console.log(process.argv);
```

```shell
node index.js one two three

> ['当前使用的 node 环境的绝对路径', '当前文件的绝对路径（包括文件）', 'one', 'two', 'three']
```

process 是 Node 的进程信息（全局对象中介绍），相信上述案例已经很说明如何传参以及数组中每个元素的信息了，我们如果想获取到我们手动传递的第一个参数则需要使用 `process.argv[2]` 后续参数以此类推

### Node 常见的全局对象

**process**

Node 中的进程信息

**console**

可以进行控制台打印输出

**exports**

用于导出当前模块（js 文件）的信息，其实导出主要是 module.exports 完成的，相当于在最开始将此引用赋值给 module.exports，这样做的目的是为了迎合 CommonJS 规范

**require**

导入模块
1. 可以导入本地模块（某个路径下的 js 文件）
2. 导入内置模块
3. 导入第三方模块

**module**

每一个 js 文件都会存在一个 module 的实例，实际上是由内部的 Module 构造函数实例化来的

**global**

全局对象，内部有很多属性和方法，例如上述的 console、process、还有定时器甚至更多都放入到了内部，看了下源码 process 是由 Object.defineProperty() 设置的，可能是更好的去管控其改写与获取时的设置吧

**__dirname**

当前执行文件的目录路径（绝对路径）

**__filename**

当前执行文件的文件路径（绝对路径）

**setTimeout**

定时器：设置多久时间执行内部代码

**setInterval**

延时器：设置多久时间执行一次内部代码，只要不销毁就会一直执行

### JavaScript 模块化概念

早期的 JavaScript 并没有模块化的概念，这就导致了很多代码可维护性差以及可迭代性也差，那么模块化到底是什么呢？

模块化其实就是把我们的代码分成一个一个小的`结构`，每一个结构都有自己的代码逻辑、作用域、以及变量、函数、对象等，和其它结构互不干涉，同时如果需要也可以将这个结构暴露（导出）出去供其它结构使用，那么相对应的其它结构也可以导入需要依赖的结构。

这里用到了结构只是单纯的让大家更好的去理解模块化的概念，结构 = 模块。


### JavaScript 模块化规范

#### CommonJs 规范

导出

`bar.js`
```javaScript
exports.name = 'chen';
```

导入
`main.js`
```javaScript
const bar = require('./bar');

console.log(bar); // { name: 'chen' }
```

可以看到其实就是把 exports 这个对象整体导出了，然后在 main.js 中使用 bar 这个常量接收，这时的 bar = exports; 因为它们两者的内存地址是一样的，都指向着同一个存放在堆中的对象。

#### AMD

#### CMD

#### ES6 Module

### module.exports 和 exports 之间的关系

聊一聊 Node 内部的 module.exports 和 exports 吧

**exports**

可以看到前面介绍常用的全局对象中也有这一个对象，其实它并不算一个全局对象，只是每一个模块中都有这个对象，所以被认为是全局对象，每一个模块中不同 exports 它的内存地址是不同的，在 Node 中用于导出一些需要模块导出的信息，但是实际上并不是 exports 完成的导出这件事情，而是 module.exports......

**module.exports**

module.exports 才是完成导出模块的核心，只不过内部 Node 中做了这么一件事情，什么事情呢？它在 js 文件（模块）开始时将 module.exports = exports; 这样操作了之后，相信了解过对象引用赋值基本概念的小伙伴就应该已经明白了吧？相当于 exports 只是单纯提供一个对象存储空间，最终导出的操作还是由我们的 module.exports 完成。

**为什么有了 module.exports 导出功能了还要有 exports**

这其实就涉及到一个规范了，CommonJS 的定义导出使用的就是 exports，那么如果 Node 不支持这种方式的导出，那么可能之前了解过 CommonJS 规范的人就不知道怎么导出了，主要都是为了迎合规范所做出的的一些改变。


### 文件循环加载时出现的问题

深度优先
广度优先