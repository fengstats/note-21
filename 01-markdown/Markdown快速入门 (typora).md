# Markdown快速入门 (typora)

## 1. 代码块

```javascript
// 代码块语法:
​```java
​```shell
​```python
```

1. JavaScript

```javascript
// 封装栈类
function Stack() {
  this.items = [];
  Stack.prototype.push = (element) => this.items.push(element);
  Stack.prototype.pop = () => this.items.pop();
  Stack.prototype.peek = () => this.items[this.items.length - 1];
  Stack.prototype.size = () => this.items.length;
  Stack.prototype.isEmpty = () => !this.items.length
  Stack.prototype.toString = () => {
    let resultString = "";
    for (let i = 0; i < this.items.length; i++) {
      resultString += this.items[i] + " ";
    }
    return resultString;
  };
}
```

2. shell脚本

```shell
npm install webpack
```



## 2. 标题

```shell
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```

# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题



## 3. 字体

```javascript
// 加粗
**我要加粗!!!**

// 代码高亮显示
==我要高亮显示==

// 删除线
~~我是要被删除的文字~~
    
// 斜体
*斜体内容*
```

**我要加粗!!!**

==给我高亮呀！！==

~~我是要被删除的文字~~

*斜体内容*



## 4. 引用

```javascript
// 引用语法
>作者: 小陈
>>作者：小陈
>>>作者：小陈
```

>作者: 小陈
>>作者：小陈
>>
>>>作者：小陈



## 5. 分割线

```javascript
// 分割线
---

// 分割线
***
```



---



***



## 6. 图片插入

```javascript
// 在线(网络)图片插入 / 本地图片插入
![图片被鼠标悬浮时的描述文字](图片链接url or 图片本地路径)
```

![图片被鼠标悬浮时的描述文字](https://cdn.nlark.com/yuque/0/2020/png/1619171/1603077561772-avatar/4cc70975-ede3-4fb9-a979-b66b42021703.png?x-oss-process=image%2Fresize%2Cm_fill%2Cw_320%2Ch_320%2Fformat%2Cpng)


![图片被鼠标悬浮时的描述文字](images/PEN1.png)


## 7. 超链接

```javascript
// 超链接语法
[超链接文本提示](https://www.yuque.com/xiaochentongzhi)
```

[超链接文本提示](https://www.yuque.com/xiaochentongzhi)


## 8. 列表

```javascript
// 无序列表
- 目录一
- 目录二
- 目录三

// 有序列表
// 1 + . + 空格 + 标题等内容
```

- 目录一
- 目录二
- 目录三

1. 我是小陈
2. 小陈是我
3. 是我小陈

## 9. 表格

```
| 数学 | 语文 |
| --- | --- |
| 20 | 40 |
| 20 | 40 |
```

| 数学 | 语文 |
| --- | --- |
| 20 | 40 |
| 20 | 40 |