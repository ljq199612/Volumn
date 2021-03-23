 


<div class = 'data-section default-folding'>
<h2 class = 'section-title'>Modernizr (效果回退)</h2>
<div class = 'folding-area'>

✿ [中文官网](http://modernizr.cn/)

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

</div>
</div>

<div class = 'data-section default-folding'>
<h2 class = 'section-title'>css 前缀自动添加</h2>
<div class = 'folding-area'>

✿ [Autoprefixer](https://github.com/ai/autoprefixer)  
✿ [-prefix-free](http://leaverou.github.io/prefixfree)(推荐)  
✿ [stylus](http://stylus-lang.com/)
</div>
</div>

**浏览器兼容**

✿ [Can I Use ...?](http://caniuse.com)  
✿ [WebPlatForm](https://webplatform.github.io/)  
✿ [MDN 浏览器兼容性报告](https://developer.mozilla.org/zh-CN/)  

✿ [px pt em 换算表](https://www.runoob.com/w3cnote/px-pt-em-convert-table.html)

