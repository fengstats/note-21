## vim 是什么

todo......

模式 +（操作符 + 动作）= 高效

### 1. 插件下载

直接 `Ctrl` + `Shift` + `X` 然后输入 vim 第一个直接安装

### 2. `setting.json` 配置

```json
{
  // vim 配置
  // 简单动作模式
  "vim.easymotion": true,
  "vim.incsearch": true,
  "vim.useSystemClipboard": true,
  "vim.useCtrlKeys": true,
  "vim.hlsearch": true,
  "vim.insertModeKeyBindings": [
    {
      "before": ["j", "j"],
      "after": ["<Esc>"]
    }
  ],
  "vim.normalModeKeyBindingsNonRecursive": [
    {
      "before": ["<leader>", "d"],
      "after": ["d", "d"]
    },
    {
      "before": ["<C-n>"],
      "commands": [":nohl"]
    },
    // 将光标移动至当前行行首: H 替换 ^
    {
      "before": ["H"],
      "after": ["^"]
    },
    // 将光标移动至当前行行末: L 替换 $
    {
      "before": ["L"],
      "after": ["$"]
    },
    // 切换到上一个标签页: E 替换 gT
    {
      "before": ["E"],
      "after": ["g", "T"]
    },
    // 切换到下一个标签页: E 替换 gt
    {
      "before": ["R"],
      "after": ["g", "t"]
    }
  ],
  "vim.leader": "<space>",
  "vim.handleKeys": {
    // 取消掉一些与 vscode 快捷键冲突的 Ctrl + a...
    "<C-a>": false,
    "<C-f>": false,
    "<C-b>": false,
    "<C-w>": false,
    "<C-d>": false
  }
}
```
