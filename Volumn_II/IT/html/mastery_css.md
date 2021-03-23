 

<div class = 'data-section default-folding'>
<h2 class = 'section-title'>第 <label class = 'block-number'>1</label> 章: 基础设置</h2>
<div class = 'folding-area'>

<h3 class = 'auto-sort-sub'>创建结构化的HTML</h3>

> 使用 html5 结构化标签 `section` `header` `footer` `nav` `article` `aside` `main`

<!-- tabs:start -->

### **推荐**

```html
<article class="post">
	<header class="post-header">
		<h1>How I became a CSS Master</h1>
	</header>
	<p>This is a paragraph.</p>
</article> 
```

### **不推荐**

```html
<div class="article">
	<div class="header">
		<h1>How I became a CSS Master</h1>
	</div>
	<p>This is a paragraph.</p>
</div>
``` 

<!-- tabs:end -->


<div class="myTip">

**使用结构标签的好处有哪些？**	
- 将语义与结构样式分离开  
- 搜索引擎搜索优化

**如何解决 IE 8 和其他老旧浏览器不支持 html5 的新标签？**

**答**: 可以通过`shim` 或 `polyfill` JS 脚本，当然，你也可以直接使用 `Modernize`, 因为它自身已经包含了`html5shiv` 
</div>

<h3 class = 'auto-sort-sub'>语义验证</h3>

✿ [HTML 验证工具](https://validator.w3.org/)  
✿ [CSS 验证工具](http://jigsaw.w3.org/css-validator/)

<div class="myTip">

这里推荐使用浏览器插件 `web developer`, 它不仅包括各种语法验证，而且还提供了其他一些有用的功能
</div>


</div>
</div>



