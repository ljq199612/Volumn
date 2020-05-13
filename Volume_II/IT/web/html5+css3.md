
解决 CSS 特定前缀的的工具：[Autoprefixer](https://github.com/postcss/autoprefixer) 或 [-prefix-free](http://leaverou.github.io/prefixfree/)

希腊设计师 [Lea Verou](http://lea.verou.me/about/) 开发的许多[工具](http://lea.verou.me/projects/)可以使用

**表单元素**

`<input type="number" steps="10">`
去掉浏览器默认箭头样式的方法:
```
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance : textfield;
} 
```


## 非本书

## [前端开发规范](http://www.softwhy.com/qiduan/)


## [js中各种高度和宽度](https://www.cnblogs.com/yulintianxia/p/9385595.html)

## 引入外部资源协议写法
```html
<!-- 推荐使用 -->
<script src="//code.jquery.com/jquery-latest.js"></script>

<!-- 而不是 -->
<script src="http://code.jquery.com/jquery-latest.js"></script>
```

## 去除超链接点击后的虚线边框
<!-- tabs:start -->

### **js**

```javascript
$('button').focus(function(){this.blur()});
```
### **css**
```css
a {
  outline:0 none !important;
  blr:expression(this.onFocus=this.blur());
}
```

<!-- tabs:end -->
