## git commit message 是什么？

我们在将代码从缓存区（暂存区）提交至本地仓库时，需要添加一个 commit message，可以理解为注释，目的就是为了能自己或者后面看到提交记录的人能够知道这次提交主要内容是什么？当然，这个注释需要言简意赅，自然就有了对于这种注释的规范产生。

## 规范的格式

```shell
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

看不懂没关系，我们只需要知道几个主要组成就行了，与浏览器解析网页很像奥，简单的分成了三个部分，header（头部）、body（主体）、footer（尾部）

一般我们提交只需要注意 type（提交的类型），scope（提交的范围）、subject（提交的简要说明）

> 当然如果想让你的提交说明更加详细，可以把这部分内容放到 body 当中

## type 对应描述

- **feat:** 新增/修改一个 feature（功能点）
- **fix:** 修复 bug
- **style:** 仅仅修改了代码中的空格、格式缩进、逗号、分号...不改变代码逻辑的提交
- **refactor:** 代码重构，但是没有功能的新增或者 bug 的修复
- **chore:** 改变构建流程、或者增加依赖库、工具等等
- **docs:** 仅仅修改了文档，例如 README、CHANGELOG、CONTRIBUTE 等等
- **perf:** 优化相关，例如性能提升、用户体验的提升
- **test:** 测试用例，包括单元、集成测试等等
- **revert:** 回滚至上一版本

## 示例

#### 写了一篇关于 vscode 中扩展插件的文章

```shell
git commit -m "feat(vscode): 扩展插件推荐文章新增"
```

#### 后续有新的插件了，也添加到了这篇文章中

```shell
git commit -m "feat(vscode): 新增xxx扩展插件"
```

#### 写的商城项目，发现添加购物车有 bug，修复了

```shell
git commit -m "fix: 添加购物车 bug 修复"
```

#### 感觉之前写的文章排版不太好看

```shell
git commit -m "style: xxx文章重新排版"
```

#### 接手了一份跟 shi 一样的代码...重构

```shell
git commit -m "refactor: 代码太高级了看不懂，只能重构"
```

## 说点啥

规范始终只是规范，并不是法律需要所有人都遵守。但我想说如果这种规范利己利人，我们为什么不去学习与开始使用呢，看啥呀，用起来呗~
