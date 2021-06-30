## 聊聊this指向问题

### 全局对象

```javaScript
web  : globalThis, window, this, self, frames
Node : globalThis, global
woker: globalThis, self, 
通用 : globalThis
```

### 箭头函数

直接看代码吧，总结一点就是箭头函数会找除了自身以外最近的引用

```javaScript
'use strict';
if (false) {
  var obj = {
    test: function () {
      const fn = () => {
        console.log(this); // obj
        const fnfn = () => {
          console.log(this) // obj
        }
        fnfn();
      }
      function fn1() {
        console.log(this); // window
      }
      fn();
      fn1();
    }
  }
  obj.test();
}
if (false) {
  var obj = {
    test: function (fn) {
      // console.log(this); // 1 obj 严格模式: obj
      fn();
    },
    test2: () => {
      console.log(this); // 4 window 严格模式: window
    }
  }
  obj.test(function () {
    console.log(this); // 2 window 严格模式: undefined
  })

  obj.test(() => {
    console.log(this); // 3 window 严格模式: window
  })

  obj.test2();
}
if (true) {
  var obj = {
    method() {
      console.log(this); // obj

      const f = function () {
        console.log(this); // window 严格模式: undefined
      }

      const fn = () => {
        console.log(this); // obj
      }

      f();
      fn();
    }
  }
  obj.method();
}



```


### 如何改变 this 指向

总结：call 和 apply 参数方面不同，适用于需要改变完 this 指向后立即执行的函数，且它们返回 undefined，bind 适用于不需要立即调用的函数，参数方面与 call保持一致，会返回一个新的函数

```javaScript
var obj = {
  a: 1,
}

var obj2 = {
  a: 2,
}

function test(b) {
  console.log(this.a, b);
}

test(); // undefined
// call(thisArg, ...)
// 1. call 方法可以通过第一个参数改变函数内部运行时的 this 指向
// 2. 其余参数通过逗号分隔的方式依次传入函数
// 3. 并且会在改变完 this 指向后直接调用函数
test.call(obj); // 1
test.call(obj, 2); // 1 2
// test.call(obj, 1).call(obj2, 2); // TypeError
console.log('----------');

// apply(thisArg, [...arg])
// 1. call 方法可以通过第一个参数改变函数内部运行时的 this 指向
// 2. 其余参数通过一个数组[]，数组内的元素与函数形参依次对应
// 3. 并且会在改变完 this 指向后直接调用函数
test.apply(obj); // 1
test.apply(obj, [2]); // 1 2
console.log('----------');

// bind(thisArg, ...)
// 1. bind 方法可以通过第一个参数改变函数内部运行时的 this 指向
// 2. 其余参数通过逗号分隔的方式依次传入函数
// 3. bind 不会立即调用函数，会返回一个新的函数
// 4. bind 绑定一个函数的 this 指向后，不能通过bind再次修改次函数 this 指向

var test1 = test.bind(obj, 1);
var test2 = test.bind(obj2, 2);
test1(); // 1 1
test2(); // 2 2
var test2 = test.bind(obj, 1).bind(obj2, 2); // 保持第一次 bind 的 this 指向
test2(); // 1 1
```

### 类中的 this 指向是怎样的

```javaScript
if (false) {
  class Test {
    // 1. 在类中直接定义的方法会绑定到类的原型中 Test.prototype.{ test() {} }
    test() {
      console.log('我是测试方法', this);
    }

    // 2. 类中使用 static 定义的方法会绑定到类的构造函数中 Test.{ test2() {} } 相当于在类上直接添加方法
    static test2() {
      console.log('我是测试方法2', this);
    }

    constructor() {
      // 3. this.test 相当于在 new Test() 的对象实例上直接绑定一个 test 方法，优先级肯定是要高于去原型上找的，这一点可以去看我的原型、原型链的文档 __proto__ 找原型链，找到某一个对象上的 prototype 的 __proto__ 为 null，原型链查找完毕
      this.test = function () {
        console.log("我是constructor中的测试方法");
        console.log(this);
      }
    }
  }

  // Test.prototype.test1 = function test1() {
  //   console.log('我是测试方法1');
  // }

  // Test.test3 = function () {
  //   console.log('我是测试方法3');
  // }

  const test = new Test();

  test.test();
  // test.test1();
  // test.test2();
  // console.log(Test);  
}

if (true) {
  class Father {
    constructor() {
      this.name = 'Father';
    }

    say() {
      console.log('Hello');
    }
  }

  class Son extends Father {
    constructor() {
      // 4. super() 函数实际上就是做了一次父类的 new Father()，创建除了一个实例对象，将父类 this 上的属性或方法绑定到了这个实例对象上，子类之所以不能在 super() 方法前去定义 this 上的属性，就是为了避免说出现两个不同的对象，保持一个，super() 执行完毕后，执行子类的 this 绑定，把子类的元素绑定到之前创建的那个实例对象中，合在一起。
      super();
      this.age = 12;
    }

    study() {
      // 1. 首先实例化出来一个实例对象 son ，son 对象上并没有 say() 甚至于没有 study() ，这时先去属性 __proto__ 上找 Son 的 prototype（原型），发现了 study() ，直接调用
      // 2. 调用到内部 this.say() 发现没有 say() ，又去 Son 的 prototype 的 __proto__ 上找，也是就继承于 Son 类的 Father 的 prototype ，找到了 say()，直接调用
      // 3. 总结下来就是一个通过 __proto__（原型链）的方法找到被继承的属性或方法吧，查找过程如下
      // son.__proto__ 找到 study()
      // son.__proto__.__proto__ 找到 say()
      this.say(); // Hello
    }
  }

  const son = new Son();
  son.study();
  console.log(son);

  // 佐证: 原型链相等
  console.log(son.__proto__ === Son.prototype); // true
  console.log(son.__proto__.__proto__ === Father.prototype); // true
}
```

### 事件触发 this 场景

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="zh-CN">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>this指向</title>
</head>

<body>
  <button id='btn'>测试点击事件</button>
  <script src="./this.js"></script>
</body>

</html>
```

```javaScript
// this.js
; (function (doc) {
  const oBtn = doc.querySelector('#btn');

  function Plus(a, b) {
    this.a = a;
    this.b = b;
    this.init();
  }

  Plus.prototype.init = function () {
    this.bindEvent();
  }

  Plus.prototype.bindEvent = function () {
    // console.log(oBtn);
    // 1. 第一种绑定事件方法
    // oBtn.onclick = function () {
    //   console.log(this); // this 指向当前触发事件的 Dom 元素
    // }

    // 2. 第二种
    // oBtn.addEventListener('click', function () {
    //   console.log(this);
    // }, false);

    // 3. 因为事件触发之后函数的 this 指向会变成当前触发事件的 Dom 节点，所以我们需要去修改一下函数的 this 指向
    oBtn.onclick = this.handleClick.bind(this);
  }

  Plus.prototype.handleClick = function () {
    console.log(this);
    console.log(this.a + this.b);
  }

  window.Plus = Plus;
})(document)

new Plus(1, 2);
```

