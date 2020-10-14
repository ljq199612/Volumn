
# CSS 揭秘


<div class = 'data-section default-folding'>
<h2 class = 'section-title'>第 <label class = 'block-number'>1</label> 章：引言</h2>
<div class = 'folding-area'>


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

rgba 指的是：红色、绿色、蓝色、Alpha 透明度（Red-Green-Blue-Alpha）前三个值取值从 0\~255 或 0%\~100%

hsla 指定是：色调、饱和度、亮色、Alpha 透明度（Hue-Saturation-Light-Alpha）, 色调取值 0\~360,饱和度和亮度取值 0%\~100% 其中, Alpha  的取值从 0\~1, 0 代表完全透明, 1 代表完全不透明

> 只要把`半透明`的黑色或白色叠加在主色调上，即可产生主色调的`亮色`和`暗色`变体

<div class="myTip">

推荐使用`HSLA`而不是`RGBA`来产生半透明的白色，因为它的字符长度更短，敲起来也更快。

</div>


</div>
</div>


<div class = 'data-section default-folding'>
<h2 class = 'section-title'>附录</h2>

在线实例 [play.csssecrets.io](play.csssecrets.io)


<div class = 'folding-area'>

</div>
</div>




 
