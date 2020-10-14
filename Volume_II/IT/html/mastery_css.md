 

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



# CSS 揭秘



可以利用`Modernize`工具在低版本浏览器中实现回退效果，当然，你也可以自己写一段 JS 实现相同的功能

检查某个样式属性是否被支持：
```js
var root =document.documentElement; // <html>
if('textShadow' in root.style) {
	root.classList.add('textshadow');
}else{
	root.classList.add('no-textshadow');
}
```
如果测试多个属性，可以把上诉代码改造成一个函数：
```js
function testProperty(property) { 
	var root = document.documentElement;
	if (property in root.style) {
		root.classList.add(property.toLowerCase());
		return true;     
	}
	root.classList.add('no-'+ property.toLowerCase());
	return false;
}
```

<div class="myWarning">

浏览器可以解析某个 CSS 特性不代表它已经实现(或正确实现)了这个特性
</div>

## 引言

<h3 class = 'auto-sort-sub'>Web 标准</h3>

<div class="myTip">

尽管`CSS3`这个名词非常流行，但它实际上并没有在任何规范中定义过。绝大多数编辑在提到这个词时，指的是非正式集合，它包含 CSS 规范第三版(Level 3)
</div>

<h4 class = 'auto-sort-sub1'>浏览器前缀</h4>

|浏览器|前缀|
|:-:|:-:|
|FireFox|-moz-|
|IE|-ms-|
|Opera|-o-|
|Safari\Chrome|-webkit-|


<div class="myTip">

**自动化添加 css 前缀的工具**  
✿ [Autoprefixer](https://github.com/ai/autoprefixer)  
✿ [-prefix-free](http://leaverou.github.io/prefixfree)(推荐)  
✿ [stylus](http://stylus-lang.com/)

由于网页开发者使用无前缀的属性是想确保代码的向前兼容，那么工作组想要修改这些无前缀语法就变得不可能了。我们基本上就跟这些半生不熟的早期规范绑在一起了，只能通过极其有限的途径来修改它们。`浏览器前缀已是一场史诗般的失败`。我们还需要很长的时间，才能从浏览器前缀所引发的涟漪效应中解脱出来。
</div>


<h3 class = 'auto-sort-sub'>CSS 编码技巧</h3>

<h4 class = 'auto-sort-sub1'>尽量减少代码重复</h4>

> 代码可维护性的最大要素是尽量减少改动时要编辑的地方

**当某些值相互依赖时，应该把它们的相互关系用代码表示出来**  

<!-- tabs:start -->

### **推荐**

```css
padding: .3em .8em;
border: 1px solid rgba(0,0,0,.1);
background: #58a linear-gradient(hsla(0,0%,100%,.2), transparent);
border-radius:.2em;
box-shadow: 0 .05em .25em gray;
color: white;
text-shadow:0 -.05em .05em #335166;
font-size: 125%;
line-height: 1.5;     /* 字号的 1.5 倍 */
```

### **不推荐**

```css
padding: 6px 16px;
border: 1px solid #446d88;
background: #58a linear-gradient(#77a0bb, #58a);
border-radius: 4px;
box-shadow: 0 1px 5px gray;
color: white;
text-shadow: 0 -1px 1px #335166;
font-size: 20px;
line-height: 30px;
```

<!-- tabs:end -->

<div class="myNote">

**em**  
1. em 会继承`父级`元素的字体大小  
1. 任何浏览器的默认字体高度都是`16px`, 即未经调整的浏览器都符合`1em = 16px`, 为了简化`font-size`的换算，使 1em = 10px, 需要在 css 中的`body`选择器中声明`font-size = 62.5%`

**rem**  
1. rem (root em) 是 CSS3 新增的一个相对单位, 可以避免字体大小逐层复合的连锁反应。

</div>
<br>

在 CSS3 中可以使用`RGBA`和`HSLA`两种色彩模式，这两个都可以用来设置颜色以及指定透明度。

rgba指的是：红色、绿色、蓝色、Alpha透明度（Red-Green-Blue-Alpha）前三个值取值从 0~255 或 0%~100%

hsla指定是：色调、饱和度、亮色、Alpha透明度（Hue-Saturation-Light-Alpha）, 色调取值0~360,饱和度和亮度取值 0%~100% 其中,Alpha 的取值从 0~1,0 代表完全透明,1 代表完全不透明

> 只要把`半透明`的黑色或白色叠加在主色调上，即可产生主色调的`亮色`和`暗色`变体

<div class="myTip">

推荐使用`HSLA`而不是`RGBA`来产生半透明的白色，因为它的字符长度更短，敲起来也更快。



</div>




<div class = 'data-section default-folding'>
<h2 class = 'section-title'>附录</h2>

在线实例 [play.csssecrets.io](play.csssecrets.io)

浏览器兼容性网站

✿ [Can I Use ...?](http://caniuse.com)
✿ [WebPlatForm](https://webplatform.github.io/)
✿ [MDN 浏览器兼容性报告](https://developer.mozilla.org/zh-CN/）

✿ [px pt em 换算表](https://www.runoob.com/w3cnote/px-pt-em-convert-table.html)

**自动化添加 css 前缀的工具**  
✿ [Autoprefixer](https://github.com/ai/autoprefixer)  
✿ [-prefix-free](http://leaverou.github.io/prefixfree)(推荐)  
✿ [stylus](http://stylus-lang.com/)

<div class = 'folding-area'>

</div>
</div>




