
# CSS 揭秘

<div class = 'data-section default-folding'>
<h2 class = 'section-title'><label class = 'block-number'>1</label>引言</h2>
<div class = 'folding-area'>


<h3 class = 'auto-sort-sub'>Web 标准</h3>

尽管`CSS3`这个名词非常流行，但它实际上并没有在任何规范中定义过。绝大多数编辑在提到这个词时，指的是非正式集合，它包含 CSS 规范第三版(Level 3)

<h4 class = 'auto-sort-sub1'>浏览器前缀</h4>

|浏览器|前缀|
|:-:|:-:|
|FireFox|-moz-|
|IE|-ms-|
|Opera|-o-|
|Safari\Chrome|-webkit-|

由于网页开发者使用无前缀的属性是想确保代码的向前兼容，那么工作组想要修改这些无前缀语法就变得不可能了。我们基本上就跟这些半生不熟的早期规范绑在一起了，只能通过极其有限的途径来修改它们。`浏览器前缀已是一场史诗般的失败`。我们还需要很长的时间，才能从浏览器前缀所引发的涟漪效应中解脱出来。


<div class="myTip">

**自动化添加 css 前缀的工具**  
✿ [Autoprefixer](https://github.com/ai/autoprefixer)  
✿ [-prefix-free](http://leaverou.github.io/prefixfree)(推荐)  
✿ [stylus](http://stylus-lang.com/)
</div>


<h3 class = 'auto-sort-sub'>CSS 编码技巧</h3>

<h4 class = 'auto-sort-sub1'>尽量减少代码重复</h4>

> 代码可维护性的最大要素是尽量减少改动时要编辑的地方

**当某些值相互依赖时，应该把它们的相互关系用代码表示出来**  

<!-- tabs:start -->

### **不推荐**

```css
{
    padding: 6px 16px;
    border: 1px solid #446d88;
    background: #58a linear-gradient(#77a0bb, #58a);
    border-radius: 4px;
    box-shadow: 0 1px 5px gray;
    color: white;
    text-shadow: 0 -1px 1px #335166;
    font-size: 20px;
    line-height: 30px;
}
```
### **推荐**

```css
{
    padding: .3em .8em;
    border: 1px solid rgba(0,0,0,.1);
    background: #58a linear-gradient(hsla(0,0%,100%,.2), transparent);
    border-radius:.2em;
    box-shadow: 0 .05em .25em gray;
    color: white;
    text-shadow:0 -.05em .05em #335166;
    font-size: 125%;
    line-height: 1.5;     /* 字号的 1.5 倍 */
}
```
<!-- tabs:end -->

<div class="myNote">

**em**  
1. em 会继承`父级`元素的字体大小  
1. 任何浏览器的默认字体高度都是`16px`, 即未经调整的浏览器都符合`1em = 16px`, 为了简化`font-size`的换算，使 1em = 10px, 需要在 css 中的`body`选择器中声明`font-size = 62.5%`

**rem**  
1. rem (root em) 是 CSS3 新增的一个相对单位, 可以避免字体大小逐层复合的连锁反应。

</div>

在 CSS3 中可以使用`RGBA`和`HSLA`两种色彩模式，这两个都可以用来设置颜色以及指定透明度。

rgba 指的是：`红色、绿色、蓝色、Alpha 透明度`（Red-Green-Blue-Alpha）前三个值取值从 0\~255 或 0%\~100%

hsla 指定是：`色调、饱和度、亮色、Alpha 透明度`（Hue-Saturation-Light-Alpha）, 色调取值 0\~360,饱和度和亮度取值 0%\~100% 其中, Alpha  的取值从 0\~1, 0 代表完全透明, 1 代表完全不透明

> 只要把`半透明`的黑色或白色叠加在主色调上，即可产生主色调的`亮色`和`暗色`变体

<div class="myTip">

推荐使用`HSLA`而不是`RGBA`来产生半透明的白色，因为它的字符长度更短，敲起来也更快。

</div>

**currentColor**  
currentColor 是 CSS 中有史以来的第一个变量, 假设我们想让所有的水平分割线（所有 \<hr\> 元素）自动与文本的颜色保持一致。
```css
hr {
    height: .5em;
    background: currentColor;
}
```

<div class="myTip">

currentColor 本身就是很多 CSS 颜色属性的初始值，比如 border-color 和 outline-color，以及 text-shadow 和 box-shadow 的颜色值。
</div>

**继承**  
`inherit`可以用在任何 CSS 属性中，而且它总是绑定到父元素的计算值（对伪元素来说，则会取生成该伪元素的宿主元素）。
```css
input, select, button {font: inherit;}
```


<h3 class = 'auto-sort-sub'>相信你的眼睛，而不是数字</h3>

> 人的眼睛不是一台完美的输入设备。而我们的设计需要顺应这种偏差。

- 的眼睛在看到一个完美垂直居中的物体时，会感觉它并不居中。实际上，我们应该把这个物体从几何学的中心点再稍微向上挪一点，才能取得理想的视觉效果。
- 在字体设计领域广为人知的是，圆形的字形（比如0）与矩形字形相比，需要稍微放大一些，因为我们倾向于把圆形感知得比其实际尺寸更小一些。


<div class="myNote">

`这些视觉上的错觉在任何形式的视觉设计中都普遍存在`，需要我们有针对性地进行调整。
一个非常常见的例子是给一个文本容器设置内边距。假如我们给容器的四边指定相同的内边距，则实际效果看起来并不相等。原因在于，`字母的形状在两端都比较整齐，而顶部和底部则往往参差不齐`，从而导致你的眼睛把这些参差不齐的空缺部分感知为多出来的内边距。因此，如果我们希望四边的内边距看起来是基本一致的，就需要`减少顶部和底部的内边距`。
</div>


<h3 class = 'auto-sort-sub'>关于响应式网页设计</h3>

每个`媒体查询`都会增加成本，它不能以一种连续的方式修复问题，`本质上只是把灰尘扫地毯下，只应该把它作为最后的手段`。比如你想把网站做得弹性灵活，但其他尝试全都失败了；或者我们希望在较大或较小的视口下完全改变网站的设计形态（譬如，把侧栏改成水平布局）。


<div class="myNote">

**避免媒体查询的一些建议：**

- 使用百分比长度来取代固定长度。如果实在做不到这一点，也应该尝试使用与视口相关的单位（`vw`、`vh`、`vmin`和`vmax`），它们的值解析为视口宽度或高度的百分比。
- 当你需要在较大分辨率下得到固定宽度时，使用 max-width 而不是 width，因为它可以适应较小的分辨率，而无需使用媒体查询。
- 不要忘记为替换元素（比如 img、object、video、iframe 等）设置一个 max-width，值为 100% 
- 假如背景图片需要完整地铺满一个容器，不管容器的尺寸如何变化，`background-size: cover`这个属性都可以做到。
- 但是，我们也要时刻牢记带宽并不是无限的，因此在移动网页中通过 CSS 把一张大图缩小显示往往是不太明智的。当图片（或其他元素）以行列式进行布局时，让视口的宽度来决定列的数量。
- 弹性盒布局（即Flexbox）或者`display: inline-block`加上常规的文本折行行为，都可以实现这一点。
- 在使用多列文本时，指定`column-width`（列宽）而不是指定 column-count（列数），这样它就可以在较小的屏幕上自动显示为单列布局。

</div>

<div class="myWarning">

如果你发现自己需要一大堆媒体查询才能让设计适应大大小小的屏幕，那么你就要重新审视你的代码结构。
</div>


<h3 class = 'auto-sort-sub'>合理使用简写</h3>

> 合理使用简写是一种良好的防卫性编码方式，可以抵御未来的风险。

<div class="myNote">

```css
/* 可以确保得到的是颜色是想要的颜色 */
{
    background: green;
}

/* 可能得不到预期效果, 比如，有一个 background-image 属性在起作用 */
{
    background-color: green;
}
```
</div>


**多重背景**

<!-- tabs:start -->

### **不推荐**

```css

{
    background: url(tr.png) no-repeat top right / 2em 2em,
                url(br.png) no-repeat bottom right / 2em 2em,
                url(bl.png) no-repeat bottom left / 2em 2em;
}
```
### **推荐**

```css
{
    background: url(tr.png) top right ,
                url(br.png) bottom right,
                url(bl.png) bottom left;
    background-size: 2em 2em;
    background-repeat:no-repeat;
}
```

<!-- tabs:end -->

<div class="myTip">

**问:** 上例中为什么会有`/`这样的怪异写法？  
**答:** 设想一下 background-size 和 background-position 都是 50% 50%, 这里引入`/`可以消除歧义。对绝大多数的简写属性来说，并没有这样的歧义问题，因而简写属性的多个值往往可以随意排列。

</div>

</div>
</div>


<div class = 'data-section default-folding'>
<h2 class = 'section-title'><label class = 'block-number'>2</label>背景与边框</h2>
<div class = 'folding-area'>

<h3 class = 'auto-sort-sub'>半透明边框</h3>

```css
/* 
 *  白色背景+半透明边框 
 *  如果不用 background-clip 剪切背景，背景色会透过半透明色
 */
{
    border: 10px solid hsla(0,0%,100%,.5);
    background: white;
    background-clip: padding-box;
}

```

<span class='myKey'>试一试</span>
[play.csssecrets.io/translucent-borders](http://play.csssecrets.io/translucent-borders)


<h3 class = 'auto-sort-sub'>多重边框</h3>

> CSS 提供多重边框，如何解决？

<h4 class = 'auto-sort-sub1'>box-shadow 方案</h4>

```css
/* 10px 绿色边框，(15-10)px 粉色边框，堆叠显示*/
background: yellowgreen;
box-shadow: 0 0 0 10px green,
            0 0 0 15px deeppink;
```

<div class="myWarning">

投影(box-shadow)效果 和 边框(border) 不完全一致  
- 不会影响布局
- 不受`box-sizing`属性影响(可以使用内外边距来额外模拟所需占据空间)
- 不会响应鼠标事件(可以给 box-shadow 属性加上`inset`关键字, 使投影绘制在元素`内圈`)
</div>

<span class='myKey'>试一试</span>  [play.csssecrets.io/multiple-borders](http://play.csssecrets.io/multiple-borders)


<h4 class = 'auto-sort-sub1'>outline 方案</h4>

```css
/* 黄色背景，10px 黑色边框，5px 绿色外边框 */
{
    background: yellow;
    border: 10px solid black;
    outline: 5px solid green;
}
```


<div class="myNote">

**box-shadow（投影） 和 outline（描边) 的比较**

- box-shadow 只能模拟实线边框效果，outline 可以模拟虚线等多种边框效果
- outline 可以通过 outline-offset 属性控制它与元素边缘之间的间距(可接受负值)
- outline 只能模拟双边框，box-shadow 通过`,`可以模拟多重边框
</div>
 
<div class="myWarning">

通过 outline 属性模拟的边框，不会贴合元素的圆角(border-radius), 边框还是直角。 这种行为被 CSS 工作组认为是一个 bug， 未来可能会修复
</div>


<h3 class = 'auto-sort-sub'>灵活的背景定位</h3>

**如何把背景图片定位到距离底边10px且距离右边20px的位置?** 

<h4 class = 'auto-sort-sub1'>background-position 方案</h4>

```css
/**
 * 背景图片与右边保持 20px 偏移量，与底部保持 10px 偏移量
 * warning: bottom right 写进 background，是为了给不支持 background-position 
 * 语法的浏览器提供一种回退方案
 */
{
    background: url(code-pirate.svg)
                no-repeat bottom right #58a;
    background-position: right 20px bottom 10px;
}
```

<span class='myKey'>试一试</span>
[play.csssecrets.io/extended-bg-position](http://play.csssecrets.io/extended-bg-position)


<h4 class = 'auto-sort-sub1'>background-origin 方案</h4>

```css
/**
 * 当偏移量与内边距一致时，可以通过 background-origin: content-box 达到效果
 */
{
    padding: 10px;
    background: url("code-pirate.svg") no-repeat #58a
                bottom right; /* 或 100% 100% */
    /* background-position: right 10px bottom 10px;*/
    background-origin: content-box; /* 默认为 padding-box */
}
```

<span class='myKey'>试一试</span>
[play.csssecrets.io/background-origin](http://play.csssecrets.io/background-origin)


<h4 class = 'auto-sort-sub1'>calc() 方案</h4>

```css
{
    background: url("code-pirate.svg") no-repeat;
    background-position: calc(100% - 20px) calc(100% - 10px);
}
```

<div class="myWarning">

为了向前兼容，cale() 函数内部`-` `+` 运算符两侧都要加`空白符`，未来，在 cale() 内部可能会允许使用关键字
</div>

<span class='myKey'>试一试</span>
[play.csssecrets.io/background-position-calc](http://play.csssecrets.io/background-position-calc)


<h3 class = 'auto-sort-sub'>边框内圆角</h3>

<span class='myKey'>试一试</span>
[play.csssecrets.io/inner-rounding](http://play.csssecrets.io/inner-rounding)


<h3 class = 'auto-sort-sub'>条纹背景</h3>

> 渐变是一种由代码生成的图像，我们能像对待任何背景图片那样对待它

<h4 class = 'auto-sort-sub1'>渐变</h4>

假设我们有一条基本的垂直线性渐变，颜色从<span class='myColorDot' style="background:#fb3"></span>#fb3过渡到<span class='myColorDot' style="background:#58a"></span>#58a

<div class="myGrid">
<div style="min-height:150px; background:linear-gradient(#fb3, #58a);"></div>
<div>

渐变占比为 100%
```css
{
    background: linear-gradient(#fb3, #58a);
}
```
</div>
</div>

<div class="myGrid">
<div style="min-height:150px; background:linear-gradient(#fb3 20%, #58a 80%);"></div>
<div>

渐变占比为 60%
```css
{
    background: linear-gradient(#fb3 20%, #58a 80%);
}
```
</div>
</div>

<div class="myGrid">
<div style="min-height:150px; background:linear-gradient(#fb3 50%, #58a 50%);"></div>
<div>

渐变占比为 0
```css
{
    background: linear-gradient(#fb3 50%, #58a 50%);
}
```
</div>
</div>


<h4 class = 'auto-sort-sub1'>条纹</h4>

> 背景默认情况下是重复平铺的

<div class="myGrid">
<div style="min-height:150px; background:linear-gradient(#fb3 50%, #58a 50%); background-size: 100% 30%;"></div>
<div>

```css
{
    background: linear-gradient(#fb3 50%, #58a 50%);
    background-size: 100% 30%;
}
```
</div>
</div>

<div class="myGrid">
<div style="min-height:150px; background:linear-gradient(to right, #fb3 50%, #58a 50%); background-size: 30% 100%;"></div>
<div>

```css
{
    background: linear-gradient(to right,  /* 或 90deg */
                    #fb3 50%, #58a 50%);
    background-size: 30% 100%;
}
```
</div>
</div>

<div class="myGrid">
<div style="min-height:150px; background: linear-gradient(#fb3 25%, #58a 0, #58a 50%,  #fb3 0, #fb3 75%, #58a 0);"></div>
<div>

> 多重渐变
```css
{
    background: linear-gradient(
                    #fb3 25%, #58a 0, 
                    #58a 50%,  #fb3 0, 
                    #fb3 75%, #58a 0);
}
```
</div>
</div>

<div class="myGrid">
<div style="min-height:150px; background:linear-gradient(45deg, #fb3 50%, #58a 50%); background-size: 4rem 4rem;"></div>
<div>

```css
{
    background: linear-gradient(45deg, #fb3 50%, #58a 50%);
    background-size: 4rem 4rem;
}
```
</div>
</div>


<div class="myGrid">
<div style="min-height:150px; background: repeating-linear-gradient(45deg, #fb3 0, #fb3 3rem, #58a 0, #58a 6rem);"></div>
<div>

> 斜角条纹


<!-- tabs:start -->
### **不推荐**

```css
{
    background: linear-gradient(45deg,
                    #fb3 25%, #58a 0, 
                    #58a 50%,  #fb3 0, 
                    #fb3 75%, #58a 0);
    background-size: 8rem 8rem;
}
```
### **推荐**

```css
{
    background: repeating-linear-gradient(45deg,
                    #fb3 0, 
                    #fb3 3rem, 
                    #58a 0, 
                    #58a 6rem);
}
```
<!-- tabs:end -->

</div>
</div>

<div class="myNote">

linear-gradient 只能模拟 45 度角 条纹，repeating-linear-gradient 可以模拟任意角度条纹
</div>

<br>
<div class="myGrid">
<div style="min-height:150px;  background: #58a; background-image: repeating-linear-gradient(30deg, hsla(0,0%,100%,.1), hsla(0,0%,100%,.1) 3rem, transparent 0, transparent 6rem);"></div>
<div>

> 同系色条纹


<!-- tabs:start -->
### **不推荐**
```css

{
  background: repeating-linear-gradient(
                  30deg,
                  #79b 0, 
                  #79b 3rem, 
                  #58a 0, 
                  #58a 6rem);
}
```
### **推荐**
```css
/* 以深色作为背景色，叠加透明域 */
{
    background: #58a;
    background-image: repeating-linear-gradient(30deg,
                        hsla(0,0%,100%,.1),
                        hsla(0,0%,100%,.1) 3rem,
                        transparent 0, 
                        transparent 6rem);
}
```
<!-- tabs:end -->

</div>
</div>


<div class="myTip">

未来 CSS 语法会包含两个位置信息的色标，上面的效果可以写成
```css
{
  background: repeating-linear-gradient(60deg, 
                  #fb3 0 3rem, #58a 0 6rem);
}
```
</div>


<h3 class = 'auto-sort-sub'>复杂的背景图案</h3>

> 用 CSS 渐变来创建任何种类的几何图案几乎都是可能的，只不过有时这种方法不太实际  
> CSS 图案可以算是一个值得使用 CSS 处理器来减少代码冗余的案例


✿ [CSS 图案库1](lea.verou.me/css3patterns) 
✿ [CSS 图案库2](https://bennettfeely.com/gradients/)
✿ [SVG 图案](philbit.com/svgpatterns)

```svg

<svg xmlns="http://www.w3.org/2000/svg"
     width="100" height="100" fill-opacity=".25">
     <rect x="50" width="50" height="50" />
     <rect y="50" width="50" height="50"/>
</svg>
```

SVG 可以内嵌到 CSS 中
```css
{
    background: #eee url('data:image/svg+xml,\  
                    <svg xmlns="http://www.w3.org/2000/svg" \
                         width="100" height="100" \
                         fill-opacity=".25">\ 
                    <rect x="50" width="50" height="50" /> \
                    <rect y="50" width="50" height="50" /> \
                    </svg>'); 
    background-size: 30px 30px;
}
```

<span class='myKey'>试一试</span>
[play.csssecrets.io/checkerboard-svg](http://play.csssecrets.io/checkerboard-svg)

<div class="myTip">

未来 CSS4 会定义一种新的渐变形式 -- 角向渐变(圆锥渐变), 可以用来模拟色轮、放射状光芒、金属拉丝等各种效果
, 目前可以通过插件实现
**background: conic-gradient(red , yellow, lime, aqua, blue, fuchsia, red);**

<span class='myKey'>试一试</span>
[play.csssecrets.io/test-conic-gradient](http://play.csssecrets.io/test-conic-gradient)

</div>

<h3 class = 'auto-sort-sub'>伪随机背景</h3>

> 自然界中的事物都不是以无限平铺的方式存在的


</div>
</div>

<div class = 'data-section default-folding'>
<h2 class = 'section-title'><label class = 'block-number'>3</label>形状</h2>
<div class = 'folding-area'>

<h3 class = 'auto-sort-sub'>自适应椭圆</h3>

> 往往不愿意对一个元素指定固定的宽度和高度，因为我们希望它能根据其内容自动调整并适应

<div class="myGrid">
<div style="min-height:150px; background:#fb3; margin:auto; width:60%; height:60%; border-radius:50%;"></div>
<div>

```css
{
  background: #fb3; 
  border-radius: 50% / 50%; /* 可简写为 50% */
} 
```
</div>
</div>

<div class="myGrid">
<div style="min-height:150px; background:#fb3; margin:auto; width:60%; height:60%; border-radius: 50% / 100% 100% 0 0;"></div>
<div>

```css
{
  background: #fb3; 
  border-radius: 50% / 100%  100% 0 0; /* 可简写为 50% */
} 
```
</div>
</div>

<div class="myGrid">
<div style="min-height:150px; background:#fb3; margin:auto; width:60%; height:60%; border-radius: 100% 0 0 0;"></div>
<div>

```css
{
  background: #fb3; 
  border-radius: 100%  0 0 0; /* 可简写为 50% */
} 
```
</div>
</div>

<h3 class = 'auto-sort-sub'>平行四边形</h3>

> 视觉设计中，平行四边形往往可以传达出一种动感

<div class="myGrid">
<div style="margin:1.6rem auto">
<a href="#" style="display: inline-block; background:cadetblue; transform: skewX(-45deg)">
    <div style="padding: 0.3rem 1.3rem; transform:skewX(45deg)">Click me</div>
</a>
</div>
<div>

<!-- tabs:start -->
### **不推荐**
> 内容也会形变，不得不加一层 div 来调节
```html
<a href="#" class="button"> 
    <div>Click me</div> 
</a>

<style>
  .button {
      background: cadetblue;
      transform: skewX(-45deg);
      display: inline-block;
  } 

  .button > div {
      transform: skewX(45deg); 
      /* 其他的文字颜色、内边距等样式...... */ 
      paddding: 0.3rem 1.3rem;
  }
</style>




```
### **推荐**

> 伪类元素,适用于所有想变形一个元素而不想变形它的内容
```html
<a href="#" class="button"> Click me </a>

<style>
  .button {
      position: relative;
      /* 其他的文字颜色、内边距等样式...... */ 
      padding: 0.3rem  1.3rem;
  } 

  .button::before {
      content: ''; /* 用伪元素来生成一个矩形 */   
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      background: #58a;
      transform: skew(-45deg);}
  }
</style>
```
<!-- tabs:end -->

</div>
</div>

<span class='myKey'>试一试</span>
[play.csssecrets.io/parallelograms-pseudo](http://play.csssecrets.io/parallelograms-pseudo)

<h3 class = 'auto-sort-sub'>菱形图片</h3>

<div class="myGrid">
<div style="margin-top:2rem;">

<div style="width:12rem;height:12rem;transform:rotate(45deg);overflow:hidden;">
<img src="Volumn_II/IT/html/../images/html/css_secret/01.png" alt='Tiger' style="height:inherit;width:inherit;transform:rotate(-45deg);"/>
</div>

<div style="margin-top:2rem;width:12rem;height:12rem;transform:rotate(45deg) scale(calc(1 / 1.42));overflow:hidden;">
<img src="Volumn_II/IT/html/../images/html/css_secret/01.png" alt='Tiger' style="height:inherit;width:inherit;transform:rotate(-45deg) scale(1.42);"/>
</div>

<img src="Volumn_II/IT/html/../images/html/css_secret/01.png" alt='Tiger' style="margin-top:2rem;clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%); "/>

</div>

<div>

<!-- tabs: start -->

### **不推荐**

1. div 顺时针旋转 45 度
1. img 逆时针旋转 45 度 (正八边形)
1. div 与 img 尺寸比设定为 1:1.42 （对角线）

```html
<div class="picture">  <img src="tiger.png"alt="..." /></div>

<style>
.picture { 
    /* 图片必须是正方形, 这里固定宽高比为一比一 */
    width: 12rem;
    height: 12rem;
    transform: rotate(45deg) 
               /* div 尺寸缩小为 1/1.42 倍 */
               scale(calc(1 / 1.42));
    overflow: hidden;
}
.picture > img{ 
    width: inherit;
    height: inherit
    transform: rotate(-45deg)
    /* 尺寸放大为 1.42, 这里就变成 12rem */
               scale(1.42);
}
</style>
```

### **推荐**
> 优点:  
> - 简单
> - 不需要图片为正边形
> - 可以设置动画
> - 可以切任意多边形

```css
img {
    clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
}
```


**动画效果, 鼠标悬停, 恢复原来样式**
```css
img {
    clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
    transition: 1s clip-path;
}
img :hover {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}

```
<!-- tabs: end -->

</div>
</div>


<div class="myNote">


**利用 clip-path 绘制 10 个顶点, 制作成五边形**

<img src="Volumn_II/IT/html/../images/html/css_secret/01.png" alt='Tiger' style="
width:12rem;height:12rem;margin:3rem 0 0 3rem;clip-path: polygon(50% 0, 61.23% 34.55%, 97.55% 34.55%, 64.69% 54.77%, 79.39% 90.45%, 50% 69.1%, 20.61% 90.45%, 35.31% 54.77%, 2.45% 34.55%, 38.77% 34.55%); "/>

```css

img {
  width:12rem;
  height:12rem;
  clip-path: polygon(
                50%    0, 
                61.23% 34.55%, 
                97.55% 34.55%, 
                64.69% 54.77%, 
                79.39% 90.45%, 
                50%    69.1%, 
                20.61% 90.45%, 
                35.31% 54.77%, 
                2.45%  34.55%, 
                38.77% 34.55%);
}
```

</div>


<h3 class = 'auto-sort-sub'>切角效果</h3>

<h4 class = 'auto-sort-sub1'>渐变法</h4>

<div class="myGrid">
<div style="margin-top:2rem;">
<div style="background: linear-gradient(-45deg,transparent 15px, #58a 0); text-align:center; padding:1rem 0;">
大漠孤烟直，<br>
长河落日圆。<br>
萧关逢厚骑，<br>
都护在燕然。<br>
</div>
</div>
<div>

```css
div {
    background: 
        linear-gradient(-45deg, transparent 15px, #58a 0);
}
```
</div>
</div>


<div class="myTip">

transparent 是表示颜色透明，background 的默认属性
</div>

<div class="myGrid">
<div style="margin-top:2rem;">
<div style="background: linear-gradient(45deg,transparent 15px, #58a 0) left, linear-gradient(-45deg, transparent 15px, #655 0) right; background-size: 50% 100%; background-repeat: no-repeat; text-align:center; padding:1rem 0;">
大漠孤烟直，<br>
长河落日圆。<br>
萧关逢厚骑，<br>
都护在燕然。<br>
</div>
</div>
<div>

```css
div {
    background: 
        linear-gradient(45deg, transparent 15px, #58a 0) left,
        linear-gradient(-45deg, transparent 15px, #655 0) right;
    background-size: 50% 100%;
    background-repeat: no-repeat;
}
```
</div>
</div>

<div class="myGrid">
<div style="margin-top:2rem;">
<div style="background: linear-gradient(135deg,transparent 15px, #58a 0) top left, linear-gradient(-135deg, transparent 15px, grey 0) top right, linear-gradient(-45deg, transparent 15px, yellow 0) bottom right, linear-gradient(45deg, transparent 15px, #655 0) bottom left; background-size: 50% 50%; background-repeat: no-repeat; text-align:center; padding:1rem 0;">
大漠孤烟直，<br>
长河落日圆。<br>
萧关逢厚骑，<br>
都护在燕然。<br>
</div>
</div>
<div>

```css
div {
    background: 
        linear-gradient(135deg, transparent 15px, #58a 0) 
            top left,
        linear-gradient(-135deg, transparent 15px, grey 0) 
            top right,
        linear-gradient(-45deg, transparent 15px, yellow 0) 
            bottom right,
        linear-gradient(45deg, transparent 15px, #655 0) 
            bottom left;
    background-size: 50% 50%;
    background-repeat: no-repeat;
}
```
</div>
</div>

<div class="myGrid">
<div style="margin-top:2rem;">
<div style="background: radial-gradient(circle at bottom right,transparent 15px, #58a 0) top left, radial-gradient(circle at bottom left, transparent 15px, grey 0) top right, radial-gradient(circle at top left, transparent 15px, yellow 0) bottom right, radial-gradient(circle at top right, transparent 15px, #655 0) bottom left; background-size: 50% 50%; background-repeat: no-repeat; text-align:center; padding:1rem 0;">
大漠孤烟直，<br>
长河落日圆。<br>
萧关逢厚骑，<br>
都护在燕然。<br>
</div>
</div>
<div>

```css
div {
    background: 
        radial-gradient(circle at bottom right,transparent 15px, #58a 0) 
            top left, 
        radial-gradient(circle at bottom left, transparent 15px, grey 0) 
            top right, 
        radial-gradient(circle at top left, transparent 15px, yellow 0) 
            bottom right, 
        radial-gradient(circle at top right, transparent 15px, #655 0) 
            bottom left; 
        background-size: 50% 50%; 
        background-repeat: no-repeat; 
}
```
</div>
</div>

<div class="myNote">

SCSS 的 mixin 预处理可以帮助我们减少代码的重复
```css
@mixin beveled-corners($bg,$tl:0, $tr:$tl,$br:$tl,$bl:$tr) {
    background: $bg;
    background: 
        linear-gradient(135deg, transparent $tl,$bg 0) top left,
        linear-gradient(225deg, transparent $tr,$bg 0) top right,
        linear-gradient(-45deg, transparent $br,$bg 0) bottom right,
        linear-gradient(45deg, transparent $bl,$bg 0)  bottom left;   
        background-size: 50% 50%; background-repeat: no-repeat;
    }

/* 调用 */
@includebeveled-corners(#58a, 15px, 5px);
```
</div>

<h4 class = 'auto-sort-sub1'>内嵌 SVG 法</h4>

```css
div {
    border: 20px solid #58a;
    border-image: 1 url('data:image/svg+xml,\
        <svg xmlns="http://www.w3.org/2000/svg"\
            width="3" height="3" fill="%2358a">\
        <polygon points="0,1 1,0 2,0 3,1 3,2 2,3 1,3 0,2"/>\
        </svg>');
    background: #58a;
    background-clip: padding-box;
}
```



<div class="myTip">

CSS4 将引入`corner-shape`属性，用来解决切角问题。
 
```css
{
    border-radius: 15px;
    corner-shape: bevel;
}
```

</div>

<h3 class = 'auto-sort-sub'>梯形标签页</h3>

> TODO

<h3 class = 'auto-sort-sub'>简单的饼图</h3>

> TODO


</div>
</div>


<div class = 'data-section default-folding'>
<h2 class = 'section-title'><label class = 'block-number'>4</label>视觉效果</h2>
<div class = 'folding-area'>

<h3 class = 'auto-sort-sub'>单侧投影</h3>

<div class="myGrid">
<div style="min-height:150px; background:white;margin:auto;width:70%;height:70%;box-shadow:rgba(0, 0, 0, 0.5) 30px 15px 2px"></div>
<div>

1. 在该元素上面画出相同尺寸的灰色矩形
1. 向右移 30px, 向下移动 15px
1. 进行 2px 的模糊处理
1. 剪切掉与原始元素的交集
```css
    background: white;
    box-shadow: rgba(0,0,0,.5) 30px 15px 2px;
```
</div>
</div>

<div class="myGrid">
<div style="min-height:150px; ackground:white;margin:auto;width:70%;height:70%;box-shadow:rgba(0, 0, 0, 0.5) 0 5px 0 5px"></div>
<div>

1. 在该元素上面画出相同尺寸的灰色矩形
1. 向右移 0, 向下移动 5px
1. 不进行模糊处理
1. 灰色矩形以中心点为原点，长宽各扩展 7px
1. 剪切掉与原始元素的交集
```css
    background: white;
    box-shadow: rgba(0,0,0,.5) 0 5px 0 5px;
```
</div>
</div>

<div class="myGrid">
<div style="min-height:150px; background:white;margin:auto;width:70%;height:70%;box-shadow:rgba(0, 0, 0, 0.5) 0 10px 3px -7px"></div>
<div>

1. 在该元素上面画出相同尺寸的灰色矩形
1. 向右移 0, 向下移动 10px
1. 进行 3px 模糊处理
1. 灰色矩形以中心点为原点，长宽各缩小 7px
1. 剪切掉与原始元素的交集
```css
    background: white;
    box-shadow: rgba(0,0,0,.5) 0 10px 3px -7px;
```
</div>
</div>

<div class="myGrid">
<div style="min-height:150px; background:white;margin:auto;width:70%;height:70%;box-shadow:rgba(0, 0, 0, 0.5) 5px 0 3px -4px, rgba(0,0,0,0.5) -5px 0 3px -4px"></div>
<div>

> 双侧投影
```css
    background: white;
    box-shadow: rgba(0,0,0,.5) 5px 0 3px -4px, 
                rgba(0,0,0,.5) -5px 0 3px -4px;
```
</div>
</div>

<h3 class = 'auto-sort-sub'>不规则投影</h3>

> TODO

<h3 class = 'auto-sort-sub'>染色效果</h3>

<h4 class = 'auto-sort-sub1'>基于滤镜的方案</h4>

<div class="myGrid">
<div style='margin-top:2rem'>
<div class="myImage">
<img src="Volumn_II/IT/html/../images/html/css_secret/01.png" alt='Tiger'/>
<label class="imageTitle"></label>
<img src="Volumn_II/IT/html/../images/html/css_secret/01.png" style='transition:0.5s filter; filter: sepia(1) saturate(4) hue-rotate(295deg);' alt='Tiger'/>
<label class="imageTitle">滤镜方案</label>
</div>
</div>

<div>

```css
img {
    transition: .5s filter;
    filter: sepia(1) saturate(4) hue-rotate(295deg);
}
/*
img:hover,
img:focus {
    filter: none;
}
*/
```
</div>
</div>


<div>

<span class='myKey'>试一试</span>
[play.csssecrets.io/color-tint-filter](play.csssecrets.io/color-tint-filter)


<div class="myTip">

滤镜方案是行之有效的，但显示效果不是很好, 混合模式其实是更好的实现方式
</div>

<h4 class = 'auto-sort-sub1'>基于混合模式的方案</h4>

当两个元素叠加时,`混合模式控制了上层元素的颜色与下层颜色进行混合`。用它来实现染色效果时，需要用到的混合模式是`luminosity`。这种 luminosity 混合模式会`保留上层元素的 HSL 亮度信息，并从它的下层吸取色相和饱和度信息`。

<div class="myGrid">
<div style='margin-top:2rem'>

<div class="myImage">
<span style="background: hsl(335, 100%, 50%);display:inline-block">
    <img src="Volumn_II/IT/html/../images/html/css_secret/01.png" alt='Tiger' style="mix-blend-mode:luminosity;"/>
</span>
<div style="height:0.5rem"></div>
<span style="background: hsl(335, 100%, 50%);display:inline-block">
    <img src="Volumn_II/IT/html/../images/html/css_secret/01.png" alt='Tiger' style="mix-blend-mode:luminosity;display:block;"/>
</span>
<label class="imageTitle">混合模式</label>
</div>
</div>
<div>

```html
<span style="background: hsl(335, 100%, 50%)">
    <img src="01.png" alt='Tiger'/>
</span>

<style>
    span {
        background: hsl(335, 100%, 50%);
        display: inline-block;
    }

    img {
        mix-blend-mode: luminosity;
        display: block; /* 如果不设置, img 会底部留白 */
    }

</style>

```
</div>
</div>

<div class="myNote">

混合模式动态模拟

```html
<div class="tinted-image"style="background-image:url(tiger.jpg)"></div>

<style>
    .tinted-image {
        width: 640px;
        height: 440px;
        background-size: cover;
        background-color: hsl(335, 100%, 50%); 
        background-blend-mode: luminosity;
        transition: .5s background-color;
    }
    .tinted-image:hover {
        background-color: transparent;
    }
</style>
```
</div>

<span class='myKey'>试一试</span>
[play.csssecrets.io/color-tint](play.csssecrets.io/color-tint)

</div>
</div>


<h3 class = 'auto-sort-sub'>毛玻璃效果</h3>

<div class="myGrid">
<div style='margin-top:2rem'>

> 给文字背景设置 30% 的不透明度, 文字模糊, 效果不好
</div>

<div style='background: url("Volumn_II/IT/html/../images/html/css_secret/02.png") no-repeat; background-size:cover; background-position:center;'>
<div style="background:hsla(0,0%,100%,.3); padding:1.5rem; border-radius:0.5rem; position:relative; top:17%; margin:0 auto; width:80%; height:60%;">
<div style="word-break:break-word; max-height:100%; overflow:hidden;">
It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way...
</div>
</div>
</div>

</div>

> TODO


<h3 class = 'auto-sort-sub'>折角效果</h3>

> TODO





</div>
</div>




<div class = 'data-section default-folding'>
<h2 class = 'section-title'><label class = 'block-number'>5</label> 字体排印</h2>
<div class = 'folding-area'>


<h3 class = 'auto-sort-sub'>连字符断行</h3>


<div class="myGrid s3-7">
<div style="margin-top:2rem;font:130%/1.4 Baskerville, serif; text-align:justify">
It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way.
</div>
<div>
<br><br>

```css
{
    margin-top: 2rem;
    font: 130% / 1.4 Baskerville, serif;
    text-align: justify;
    hyphens: auto;  
    /* 为了确保它奏效，你需要在HTML标签的lang属性中指定合适的语言 */  
    /* TODO: 未生成连字符*/
}

```

</div>
</div>

<div class="myTip">

未来 CSS4 会添加连字符的行为, 比如  
`hyphenate-limit-lines`  `hyphenate-limit-chars` `hyphenate-limit-zone` `hyphenate-limit-last` `hyphenate-character`
</div>


<h3 class = 'auto-sort-sub'>插入换行</h3>

<div class="myGrid s3-7">
<div style="margin-top:2rem;">


<div style="margin:2rem">


<dl>  
    <dt style="display:inline">Name:</dt>
    <dd style="display:inline; margin:0; font-weight:bold;">Someone</dd> <br>
    <dt style="display:inline;">Email:</dt>    
    <dd style="display:inline; margin:0; font-weight:bold;">some@one.me, </dd>
    <dd style="display:inline; margin:0; font-weight:bold;">Chinese</dd> 
</dl>
</div>

</div>
<div>

```html

<dl>  
    <dt>Name:</dt> 
    <dd>Someone</dd> 
    <dt>Email:</dt>    
    <dd>some@one.me</dd> 
    <dd>Chinese</dd> 
</dl>

<style>
    dt, dd { display: inline; } 
    dd { 
        margin: 0; 
        font-weight: bold; 
    } 
    dd + dt::before { 
        content: '\A';  /* 相当于 \n */ 
        white-space: pre;  /*保留源码中的空白符和换行*/
    } 
    dd + dd::before { 
        content: ', '; 
        margin-left: -.25em;
        font-weight: normal; 
    }
</style>
```

</div>
</div>


<h3 class = 'auto-sort-sub'>文本行的斑马条纹</h3>

<div class="myGrid" style="grid-template-columns:40% 60%">
<div style="font:130% Baskerville, serif; text-align:justify; 
            line-height: 1.5; background: beige; padding: 0 0.2em;
            background-image: linear-gradient(rgba(0,0,0,.2) 50%, transparent 0); 
            background-size: auto 3em;"
>
It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way.

</div>
<div>

```css
{
    padding:0 0.2em; 
    line-height: 1.5; 
    background: beige; 
    background-image: linear-gradient(rgba(0,0,0,.2) 50%, transparent 0); 
    background-size: auto 3em; /* 与 line-height 影响*/
}
```

</div>
</div>

<h3 class = 'auto-sort-sub'>自定义下划线</h3>
<div class="myGrid s4-6">
<div style="margin-top:2rem;font:130% Baskerville, serif; text-align:justify;">


> text-decoration 生成下划线: 

"The only way to <span style=" text-decoration: underline solid gray;">get rid of a temptation<span> is to yield to it"

<br>

> 利用 background 生成下划线:   

"The only way to <span style="background: linear-gradient(gray, gray) no-repeat; background-size: 100% 1px; background-position: 0 1.22em; text-shadow: .05em 0 white, -.05em 0 white;">get rid of a temptation<span> is to yield to it"

<br>

"The only way to <span style="background: linear-gradient(90deg, gray 66%, transparent 0) repeat-x; background-size: .4em 2px; background-position: 0 1.32em;">get rid of a temptation<span> is to yield to it"


</span>

</div>
<div>

> text-decoration 实现下划线是最简洁可靠的方式:  
> ```css
> { 
>     text-decoration: underline dotted gray;
> }
> ```


```css

/* Linux 版 firefox 表现良好, Linux 版 Chrome 下表现糟糕(字体渲染原因)  */
{
    background: linear-gradient(gray, gray) no-repeat; 
    background-size: 100% 1px; 
    background-position: 0 1.22em; 
    text-shadow: .05em 0 white, -.05em 0 white; /* 下划线遇到 p y 等字母时, 下半部自动断开避让 */
}


{
    background: linear-gradient(90deg, gray 66%, transparent 0) repeat-x; 
    background-size: .2em 2px; 
    background-position: 0 1.32em;
}
```
</div>
</div>








<h3 class = 'auto-sort-sub'>文字效果</h3>

<h4 class = 'auto-sort-sub1'>凸版印刷</h4>

> 凸版印刷尤其适合中等亮度背景配上深色文字的, 出现在底部的浅色投影(或出现在顶部的暗色投影)会让人产生`物体是凹进平面内的错觉`; 出现在底部的暗色(或出现在顶部的浅色投影)会让人产生`物体从平面上凸起的错觉`


<div class="myTip">

我们在现实世界中早习惯了光源在头顶上, 在这种环境下,凸起物的下方会产生阴影, 而凹陷的底部边缘则会被打亮.
</div>


<div class="myGrid s3-7">
<div style="padding: 0.3rem; margin-top:2rem; background: hsl(210 , 13%, 60%); color: hsl(210 , 13%, 30%); width:80%; height: 90%; min-height: 150px">
加效果前: <br>
<div style="padding:0 1rem 0"> "The only way to get rid of a temptation is to yield to it" </div>
<br>加效果后: <br> 
<div style="padding:0 1rem 0; text-shadow: 0 1px 1px hsla(0,0%,100%,.8);">"The only way to get rid of a temptation is to yield to it" </div>

</div>
<div>



> 文字比背景色深，在文字底部加上浅色投影通常效果最佳  

> 背景色 <span class='myColorDot' style="background:hsl(210, 13%, 60%)"></span>hsl(210, 13%, 60%)  
> 文字颜色 <span class='myColorDot' style="background:hsl(210, 13%, 30%)"></span>hsl(210, 13%, 30%)  
> 投影色 <span class='myColorDot' style="background:hsl(0, 0%, 100%, .8)"></span>hsl(0, 0%, 100%, .8) 

```css
{
    background: hsl(210 , 13%, 60%); 
    color: hsl(210 , 13%, 30%); 
    text-shadow: 0 1px 1px hsla(0,0%,100%,.8);
}
```

</div>
</div>

<div class="myGrid s3-7">
<div style="padding: 0.3rem; margin-top:2rem; background: hsl(210 , 13%, 40%); color: hsl(210 , 13%, 75%); width:80%; height: 90%; min-height: 150px">
加效果前: <br>
<div style="padding:0 1rem 0"> "The only way to get rid of a temptation is to yield to it" </div>
<br>加效果后: <br> 
<div style="padding:0 1rem 0; text-shadow: 0 -1px 1px black;">"The only way to get rid of a temptation is to yield to it" </div>

</div>
<div>

> 文字比背景色深，在文字底部加上浅色投影通常效果最佳  

> 背景色 <span class='myColorDot' style="background:hsl(210, 13%, 40%)"></span>hsl(210, 13%, 40%)  
> 文字颜色 <span class='myColorDot' style="background:hsl(210, 13%, 75%)"></span>hsl(210, 13%, 75%)  
> 投影色 <span class='myColorDot' style="background:black"></span>black 

```css
{
    background: hsl(210 , 13%, 40%); 
    color: hsl(210 , 13%, 75%); 
    text-shadow: 0 -1px 1px black;
}
```

</div>
</div>

<h4 class = 'auto-sort-sub1'>空心字(描边)</h4>

<div class="myGrid s3-7">
<div style="margin-top:2rem; font-size: 400%">
<div style="padding:0 2rem; background: deeppink; color: white; text-shadow: 1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black;">CSS</div>

</div>
<div>

```css
{
    background: deeppink; 
    color: white; 
    text-shadow: 1px 1px black, -1px -1px black,
                 1px -1px black, -1px 1px black;
}
```
</div>
</div>

<div class="myGrid s3-7">
<div style="margin-top:2rem; font-size: 400%">
<div style="padding:0 2rem; background: deeppink; color: white; text-shadow: 0 0 2px black;">CSS</div>
</div>
<div>

```css
{
    background: deeppink; 
    color: white; 
    text-shadow: 0 0  2px black;
}
```

</div>
</div>


<h4 class = 'auto-sort-sub1'>文字外发光</h4>

<div class="myGrid s3-7">
<div style="margin-top:2rem; font-size: 400%">
<div style="padding:0 2rem; background: #203; color: #ffc; text-shadow: 0 0 .1em, 0 0 .3em;">CSS</div>
</div>
<div>

```css
{
    background: deeppink; 
    color: white; 
    text-shadow: 0 0 .1em, 0 0 .3em;
}
```

</div>
</div>

<h4 class = 'auto-sort-sub1'>文字凸起</h4>

<div class="myGrid s3-7">
<div style="margin-top:2rem; font-size: 400%">
<div style="padding:0 2rem; background: #58a; color: white; text-shadow: 0 1px hsl(0,0%,85%), 0 2px hsl(0,0%,80%), 0 3px hsl(0,0%,75%), 0 4px hsl(0,0%,70%),0 5px hsl(0,0%,65%), 0 5px 10px black;">CSS</div>
</div>
<div>

```css
{
    background: #58a; 
    color: white; 
    text-shadow: 0 1px hsl(0,0%,85%), 
                 0 2px hsl(0,0%,80%),
                 0 3px hsl(0,0%,75%),
                 0 4px hsl(0,0%,70%),
                 0 5px hsl(0,0%,65%),
                 0 5px 10px black;
}
```
</div>
</div>

<div class="myTip">

SCSS 预处理器的 mixin 写法

```css
@mixin text-3d($color: white, $depth: 5) {
    $shadows: (); 
    $shadow-color: $color; 

    @for$i from 1 through $depth {  
        $shadow-color: darken($shadow-color, 10%);
        $shadows: append($shadows,
                0 ($i * 1px) $shadow-color, comma);
    } 

    color: $color; 
    text-shadow: append($shadows,
                    0 ($depth * 1px) 10px black, comma);
} 

h1 { @includetext-3d(#eee, 4); }

```
</div>

<div class="myGrid s3-7">
<div style="margin-top:2rem; font-size: 400%">
<div style="padding:0 2rem; color: white; background: hsl(0,50%,45% ); text-shadow: 1px 1px black, 2px 2px black,              3px 3px black, 4px 4px black, 5px 5px black, 6px 6px black, 7px 7px black, 8px 8px black;">CSS</div>
</div>
<div>

```css
{
    color: white; 
    background: hsl(0,50%,45% ); 
    text-shadow: 1px 1px black, 2px 2px black,
                 3px 3px black, 4px 4px black,
                 5px 5px black, 6px 6px black,
                 7px 7px black, 8px 8px black;
}
```
</div>
</div>

<h3 class = 'auto-sort-sub'>环形文字</h3>

<div class="myGrid s3-7">
<div style="margin-top:2rem;">

<div class="circular" style="margin: 3em auto; width:60%;"> 
    <svg viewBox="0 0 100 100" style="overflow:visible; display: block"> 
        <path d="M 0,50 a 50,50 0 1,1 0,1 z" id="circle"  fill="none"/> 
        <text><textPath xlink:href="#circle">
            circular reasoning works because ...
        </textPath></text>
    </svg>
</div>
</div>
<div>

```html
<div class="circular"> 
    <svg viewBox="0 0 100 100"> 
        <path d="M 0,50 a 50,50 0 1,1 0,1 z" id="circle"/> 
        <text><textPath xlink:href="#circle">
            circular reasoning works because ...
        </textPath></text>
    </svg>
</div>
```
```css
.circular {   
    width: 30em;
    height: 30em; 
    margin: 3em auto 0;
}

.circular path { fill: none; }

.circular svg {  
    display: block;
    overflow: visible; 
}
```
</div>
</div>

</div>
</div>

<div class = 'data-section default-folding'>
<h2 class = 'section-title'><label class = 'block-number'>6</label> 用户体验</h2>
<div class = 'folding-area'>

<h3 class = 'auto-sort-sub'>扩大可点击区域</h3>
<div class="myGrid s3-7">
<div style="margin-top:2rem;">

<button style="background: #1ecaca; background-clip: border-box; height: 3rem;  width: 3rem; border-radius: 2rem; border: 10px solid transparent; box-shadow: 0 0 0 1px rgba(0,0,0,.3) inset; background-clip: padding-box; cursor: pointer;"></button>


</div>
<div>

<!-- tabs:start -->

### **不推荐**

> 边框影响布局; 某些情况无法使用边框.

```css

button {
    border: 10px solid transparent; 
    box-shadow: 0 0 0 1px rgba(0,0,0,.3) inset;
    background-clip: padding-box;
}









```

### **推荐**
> 可以把点击区设置为任何想要的尺寸、位置或形状，甚至可以脱离元素原有的位置！

```css
button {
    position: relative; 
        /* [其余样式] */
} 
button::before { 
    content: '';   
    position: absolute;  
    top: -10px; 
    right: -10px;  
    bottom: -10px; 
    left: -10px; 
}
```


<!-- tabs:end -->

</div>
</div>


<h3 class = 'auto-sort-sub'>自定义复选框</h3>


<input type="checkbox" id= "awesome" checked="checked"/>
<label for="awesome">Awesome!</label>
<div>

```html
<input type="checkbox" id= "awesome"  checked="checked"/>
<label for="awesome">Awesome!</label>
```

<div class="myTip">

Linux 下 firefox 渲染效果不是很好, 复选框位置偏上
</div>

```css
input[type="checkbox"] + label::before {  
    content: '\a0'; /* 不换行空格 */
    display: inline-block;  
    vertical-align: .2em; 
    width: .8em; 
    height: .8em; 
    margin-right: .2em;  
    border-radius: .2em;  
    background: silver; 
    text-indent: .15em;  
    line-height: .65; 
}

input[type="checkbox"]:checked + label::before { 
    content: '\2713'; /* 勾 */ 
    background: yellowgreen; 
}

/* 隐藏默认复选框 */
input[type="checkbox"] {  
    position: absolute; 
    clip: rect(0,0,0,0); 
}


/* 进一步优化效果 */
input[type="checkbox"]:focus + label::before {  
    box-shadow: 0 0 .1em .1em #58a; 
} 

input[type="checkbox"]:disabled + label::before { 
    background: gray;  
    box-shadow: none;  
    color: #555; 
}



```

</div>


<div class="myTip">

**问: 伪类选择符`:checked`和属性选择符`[checked]`之间的区别？**  
**答:** [checked] 不会根据用户的交互行为进行更新的，因为用户的交互并不会影响到 HTML 标签上的属性。
</div>


<h3 class = 'auto-sort-sub'>通过阴影来弱化背景</h3>
// TODO

<h3 class = 'auto-sort-sub'>通过模糊来弱化背景</h3>

<h3 class = 'auto-sort-sub'>滚动提示</h3>

<h3 class = 'auto-sort-sub'>交互式的图片对比控件</h3>

</div>
</div>


<div class = 'data-section default-folding'>
<h2 class = 'section-title'><label class = 'block-number'>7</label> 结构与布局</h2>
<div class = 'folding-area'>

</div>
</div>
<!---------->


<h3 class = 'auto-sort-sub'>自适应内部属性</h3>

<div class="myGrid s4-6">
<div style="margin-top:2rem;">

<figure style="width: min-content; margin: auto;">
    <img style="max-width: inherit" src="Volumn_II/IT/html/../images/html/css_secret/01.png"/>    
    <figcaption>        
        The great Sir Adam Catlace was named after Countess Ada Lovelace, the first programmer.    
    </figcaption>
</figure>

</div>
<div>

```html
<figure>
    <img src="Volumn_II/IT/html/../images/html/css_secret/01.png"/>    
    <figcaption>        
        The great Sir Adam Catlace was named after Countess Ada Lovelace, the first programmer.    
    </figcaption>
</figure>
```

```css
figure {
    width: min-content;
    margin: auto;
}
figure > img {
    max-width: inherit;
}
```

</div>
</div>


















<div class = 'data-section default-folding'>
<h2 class = 'section-title'>附录</h2>

在线实例 [play.csssecrets.io](http://play.csssecrets.io)

[@blog Source Map](http://www.ruanyifeng.com/blog/2013/01/javascript_source_map.html)

<div class = 'folding-area'>

</div>
</div>


 
