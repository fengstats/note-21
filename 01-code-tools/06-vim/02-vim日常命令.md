## 一、vim 的几种模式与常用命令

### --NORMAL--

#### 普通模式下的移动

```shell
以字母为单位进行移动
h  左
j  下
k  上
l  右

以单词为单位进行移动
w   跳到一个单词的开头
b   跳到本单词或上一个单词的开头
e   跳到本单词或下一个单词的结尾
ge  跳到上一个单词的结尾

以行为单位
0  跳到当前行的行首
^  跳到从行首开始的第一个非空字符（我写了配置可以使用`H`代替）
$  跳到当前行行末（`L`代替）
gg 跳到第一行
G  跳到最后一行

以"光标"为单位移动
f{char} 光标跳到下个{char}所在的位置
F{char} 光标跳到上个{char}所在的位置
t{char} 光标跳到下个{char}的前一个字符的位置
T{char} 光标跳到上个{char}的后一个字符的位置
; 重复上次的字符查找操作
, 反向查找上次的查找命令
```

#### 普通模式下的操作符（operator）

```shell
d (delete) 删除
c (change) 修改（删除并进入插入模式）
y (yank)   复制
v (visual) 选中并进入 VISUAL 可视模式
u 撤销上次操作
Ctrl + R 恢复撤销
```

#### 普通模式下的动作（motion）

```shell
i（inner）和 a（around）的区别
i" >> "foo" >> foo
a" >> "foo" >> "foo"

`` 是为了更加直观的看到两个动作下选中的区别，默认没有的
iw >> ` foo` >> `foo`
aw >> ` foo` >> ` foo`

i( >> (foo) >> foo
a( >> (foo) >> (foo)

总结: 一个选中内部，一个连同外部符号一起选择

iw / aw
i( / a( 或 ib / ab
i{ / a{ 或 iB / aB
i" / a"
i' / a'
i` / a`
i< / a<
i[ / a[

标签（tag）
it / at

句子（sentence）
is / as

段落（paragraph）
ip / ap
```

#### 普通模式 >> 插入模式（英文输入）

```shell
i 在光标前插入
I 在当前行行首插入

a 在光标后插入
A 在当前行行末插入

o 在下一行插入一行
O 在上一行插入一行
```

#### 普通模式 >> 命令模式

```shell
:

:10 跳转至当前文件的第 12 行
```

### --INSERT--

插入模式/写入模式

#### 插入模式 >> 普通模式

```shell
jj
ESC
```

### --VISUAL

可视模式

### 命令模式

### 模式切换

## 二、vim 日常操作

```shell
小 Tips
gd 查看函数具体定义代码
gh 查看鼠标 Hover 内容
```

```shell
代码块的展开与收缩
zo 展开
zc 收起

Ctrl + O 回到上次操作的地方
Ctrl + I 反之

切换字母大小写
~  将光标下的字母改变大小写（大小变小写，小写变大小）
3~ 将光标位置开始的 3 个字母改变大小写
g~~ 改变当前行所有字母大小写
gUU 改变当前行所有字母为大写
guu 改变当前行所有字母为小写
gUaw / gUiw 将光标下的单词改成大写
guaw / guiw 将光标下的单词改成小写

测试使用
HELLO
```

```JavaScript
// TODO: 1. 修改 Hello
// diw 删除单词 Hello
// ciw 删除单词进入插入模式
// yiw 复制单词 Hello
{
  name: 'Hello'
}

// TODO: 2. 修改泛型
// di<
// ci<
const count ref<number>(0);

// TODO: 3. 删除、复制、修改输出语句内容
// di( / dib
// yi( / yib
console.log('foo');

// TODO: 4. 删除、复制、修改返回值
// di{ / diB
// yi{ / yiB
return {
  name,
  age,
  sex
}
```

```html
<div>
  <!-- dit / cit / yit 删除、修改、复制当前标签所有内容 -->
  <p>
    <span>里面的内容</span>
  </p>
</div>
```

#### easymotion

```shell
space<leader> + space<leader> + s{char}
space<leader> + space<leader> + f{char}
space<leader> + space<leader> + F{char}
```

#### vim.surround

```shell
ysiw' 给一个单词添加单引号
cs"' 将单词的双引号替换为单引号
ds" 将单词的双引号删除

测试
hello
"hello"
```
