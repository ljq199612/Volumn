
<div class = 'data-section default-folding'>
<h2 class = 'section-title'>ATOM</h2>
<div class = 'folding-area'>

### 1. 安装 
[ atom rpm 安装包](http://www.rpmfind.net/linux/rpm2html/search.php?query=atom)

```bash
sudo zypper install lsb
sudo rpm  -ivh  atom.xx.rpm
```

### 2. 快捷键

| 基本 |描述 |
|:--|:--|
| CTRL + \ | 显示或隐藏目录树|
| CTRL + , | 进入 setting 页面 |
| CTRL + B | 在打开的文件间切换 |
| CTRL + 鼠标点击 | 增加多个光标 |
| CTRL + M | 相应括号，html tag 标签间跳转 |
| ALT + CTRL + , | 选择对应括号标签里的内容 |
| ALT + CTRL + . | 关闭当前 XML/HTML 标签
| CTRL + G | 光标移动到指定位置 |
| CTRL + K, CTRL + U | 转大写 |
| CTRL + K, CTRL + L | 转小写 |
| CTRL + D | 选择文件中下一个选中的词 |
| | |
| CTRL + SHIFT + F | 整个项目里搜索 |
| ALT + CTRL + ] \\ [ | 折叠展开代码块 |
| ALT + CTRL + SHIFT + ] \\ [ | 折叠展开所有代码块 |
| | |
| CTRL + K, up | 向上添加编辑拆分面板 |
| CTRL + W | 关闭当前面板 |
| CTRL + SHIFT + L | 选择文件语法 |
| | |
| CTRL ] + ]\\[ | 展开（隐藏）当前目录 |
| CTRL ] + ALT+ ]\\[ 或者 ALT + right \\ left| 递归展开（隐藏）目录 |


### 3. 插件
#### markdown

- [markdown-preview-enhanced](https://atom.io/packages/markdown-preview-enhanced) --全面型 [(中文文档)](https://shd101wyy.github.io/markdown-preview-enhanced/#/zh-cn/)

#### html

- [emmet](https://atom.io/packages/emmet) -- html 代码快速生成

#### javascript

- [javascript-snippets](https://atom.io/packages/javascript-snippets) -- javascript & NodeJS 代码快速生成

#### 正则表达式

- [regex-railroad-diagram](https://atom.io/packages/regex-railroad-diagram)

#### 浏览器关联

- [open-in-browser](https://atom.io/packages/open-in-browser)


#### 待处理
- [Sublime-Style-Column-Selection](https://atom.io/packages/Sublime-Style-Column-Selection) --块状选择
- [hyperclick](https://atom.io/packages/hyperclick) --快速跳转插件，配合js-hyperclick可以跳转到函数所在位置
- [atom-bootstrap3](https://atom.io/packages/atom-bootstrap3) -- bootstrap3 html自动补全插件
- [autocomplete-paths](https://atom.io/packages/autocomplete-paths) --自动补全文件路径
- [color-picker](https://atom.io/packages/color-picker) --取色
- [pigments](https://atom.io/packages/pigments) --编辑器中直接查看代码所代表的颜色

</div>
</div>


<div class = 'data-section default-folding'>
<h2 class = 'section-title'>IDEA</h2>
<div class = 'folding-area'>

### 2. 插件


</div>


#### jrebel

热部署插件

<div class="myTip">

收费插件，破解方式如下：  
team url:  http://jrebel.cicoding.cn/4B068EB5-0941-4645-1E98-FC077D530A61

</div>

#### free Mybatis

mybatis 中 Mapper 和 XML 的关联插件


### 3. 问题

#### idea junit 测试，终端输出卡死问题的解决

> 编辑文件： Help > Edit Custom VM Options

```
在最后加入
-Deditable.java.test.console=true
```

</div>
</div>
