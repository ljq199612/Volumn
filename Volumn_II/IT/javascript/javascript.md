# JavaScript 高级程序设计

<div class = 'data-section default-folding'>
<h2 class = 'section-title'>第 <label class='block-number'>2</label> 章：在 HTML 中使用 JavaScript </h2>
<div class = 'folding-area'>

<h3 class='auto-sort-sub'>&lt;script&gt;元素</h3>


<h4 class='auto-sort-sub1'>标签的位置</h4>  

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Example HTML Page</title>
    </head>
    <body>
    <!-- 这里放内容 -->
        <script type="text/javascript" src="example1.js"></script>
        <script type="text/javascript" src="example2.js"></script>
    </body>
</html>
```
这样,在解析包含的 JavaScript 代码之前,页面的内容将完全呈现在浏览器中。而用户也会因为浏 览器窗口显示空白页面的时间缩短而感到打开页面的速度加快了。


<h4 class = 'auto-sort-sub1'>html 引入 javascript</h4>

```javascript
<script type="text/javascript">
    function sayScript(){
        alert("<\/script>");  // NOTICE
    }
</script>

<script type="text/javascript" src="example.js"></script>
```

<div class="myWarning">

1. type="text/javascript" 是默认属性，可以省略
2. 如果是在`XHTML`文档中,可以这么写:
`<script  src="example.js" />`  
但是,不能在`HTML`文档使用这种语法。原因是这种语法不符合 HTML 规范,而且也得不到某些浏览器(尤其是 IE)的正确解析。

</div>

<h4 class = 'auto-sort-sub1'>xhtml 引入 javascript </h4>

```javascript
<script type="text/javascript">
//<![CDATA[
function compare(a, b) {
    if (a < b) {
        alert("A is less than B");
    } else if (a > b) {
        alert("A is greater than B");
    } else {
    alert("A is equal to B");
    }
}
//]]>
</script>
```

<div class="myNote">

1. 在 XHTML(XML)中,`<![CDATA[  ]]>` 片段是文档中的一个特殊区域,这个区域中可以包含不需要解析的
任意格式的文本内容。` //<![CDATA[    //]]>`是为了兼容不支持 XHTML 的浏览器。
</div>


<h3 class = 'auto-sort-sub'>文档模式</h4>
<h4 class = 'auto-sort-sub1'>标准模式</h4>

```html
<!-- HTML 4.01 严格型 -->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
"http://www.w3.org/TR/html4/strict.dtd">

<!-- XHTML 1.0 严格型 -->
<!DOCTYPE html PUBLIC
"-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- HTML 5 -->
<!DOCTYPE html>
```


<h3 class = 'auto-sort-sub'>&lt;noscript&gt;</h3>

```html
<html>
    <head>
        <title>Example HTML Page</title>
        <script type="text/javascript" defer="defer" src="example1.js"></script>
        <script type="text/javascript" defer="defer" src="example2.js"></script>
    </head>
    <body>
        <noscript>
            <p>本页面需要浏览器支持(启用)JavaScript。
        </noscript>
    </body>
</html>
```
这个页面会在脚本无效的情况下向用户显示一条消息。而在启用了脚本的浏览器中,用户永远也不会看到它——尽管它是页面的一部分。


</div>
</div>

<div class = 'data-section default-folding'>
<h2 class = 'section-title'>第 <label class='block-number'>3</label> 章：基本概念</h2>
<div class = 'folding-area'>

<h3 class = 'auto-sort-sub'>语法</h3>
<h4 class = 'auto-sort-sub1'>严格模式</h4>

ECMAScript 5 引入了严格模式(strict mode)的概念。在严格模式下,ECMAScript 3 中的一些不确定的行为将得到处理,而且对某些不安全
的操作也会抛出错误。

```javascript
// 要在整个脚本中启用严格模式,可以在顶部添加如下代码:
"use strict";

// 该函数严格模式
function doSomething(){
"use strict";
//函数体
}
```

<div class="myTip">

```javascript
var sum = a + b        // 即使没有分号也是有效的语句——不推荐
var diff = a - b;      // 有效的语句——推荐

if(test)
    alert(test);       // 有效但容易出错,不要使用

if (test){
    alert(test);       //推荐使用
}
```
</div>


<h3 class = 'auto-sort-sub'>数据类型</h3>

ECMAScript 中有 5 种简单数据类型(也称为基本数据类型):`Undefined`、`Null`、`Boolean`、`Number`和`String`。还有 1 种复杂数据类型`Object` 

<h4 class = 'auto-sort-sub1'>typeof 操作符</h4>

```javascript
var message = "some string";
alert(typeof message); // "string"
alert(typeof(message)); // "string"
alert(typeof 95); // "number"
```

<div class="myNote">

数据类型的值：  
`undefined`——如果这个值未定义;  
`boolean`——如果这个值是布尔值;  
`string`——如果这个值是字符串;  
`number`——如果这个值是数值;  
`object`——如果这个值是对象或 null;  
`function`——如果这个值是函数。
</div>

<h4 class = 'auto-sort-sub1'>undifined 类型</h4>

```javascript
var message;                  // 这个变量声明之后默认取得了 undefined 值
// var age                    // 未声明
alert(message == undefined);  //true
alert(age);                   // 产生错误
alert(typeof message);        // "undefined"
alert(typeof age);            // "undefined"  // NOTICE
```


<div class="myNote">

即便未初始化的变量会自动被赋予 undefined 值,但显式地初始化变量依然是明智的选择。如果能够做到这一点,那么当 typeof 操作符返回"undefined"值时, 我们就知道被检测的变量还没有被声明,而不是尚未初始化。
</div>


<h4 class = 'auto-sort-sub1'>null 类型</h4>

从逻辑角度来看,null 值表示一个空对象指针,而这也正是使用 typeof 操作符检测 null 值时会返回"object"的原因。
```javascript
if (car != null){
    // 对 car 对象执行某些操作
}

// undefined 值是派生自 null 值的,因此 ECMA-262 规定对它们的相等性测试要返回 true:
alert(null == undefined); //true
```

<div class="myNote">

只要意在保存对象的变量还没有真正保存对象,就应该明确地让该变量保存 null 值。这样做不仅可以体现 null 作为空对象指针的惯例,而且也有助于进一步区分 null 和 undefined。
</div>


<h4 class = 'auto-sort-sub1'>Boolean 类型</h4>

```javascript
var message = "Hello world!";
var messageAsBoolean = Boolean(message);

var message = "Hello world!";
if (message){
    alert("Value is true");    // 自动装换
}
```

<h4 class = 'auto-sort-sub1'>number 类型</h4>

```javascript
var octalNum1 = 070;    // 八进制的 56
var octalNum2 = 079;    // 无效的八进制数值——解析为79

var hexNum1 = 0xA;      // 十六进制的 10

var floatNum2 = 0.1;
var floatNum3 = .1;     // 有效,但不推荐

var floatNum1 = 1.;     // 自动将浮点数转化为整数，解析为 1
var floatNum2 = 10.0;   // 整数——解析为 10
```

<div class="myWarning">

```javascript
if (a + b == 0.3){  // 不要做这样的测试, 浮点数不精确!
    alert("You got 0.3.");
}

alert(NaN == NaN);       // false

alert(0/0);              // NAN
alert(10/-0);            // -Infinity  // NOTICE 和 java 等其他语言不同
```
</div>

```javascript
var result = Number.MAX_VALUE + Number.MAX_VALUE;
alert(isFinite(result)); // false

alert(isNaN("10"));      // false(可以被转换成数值 10)
alert(isNaN("blue"));    //true(不能转换成数值)
alert(isNaN(true));      // false(可以被转换成数值 1)
```

<div class="myNote">

尽管有点儿不可思议,但 isNaN()确实也适用于对象。在基于对象调用 isNaN() 函数时,会首先调用对象的 valueOf()方法,然后确定该方法返回的值是否可以转 换为数值。如果不能,则基于这个返回值再调用 toString()方法,再测试返回值。 而这个过程也是 ECMAScript 中内置函数和操作符的一般执行流程。
</div>

```javascript
// 数据转换

var num1 = Number("Hello world!");    // NAN
var num2 = Number("");                // 0
var num3 = Number("000011");          // 11
var num4 = Number(true);              // 1


var num1 = parseInt("1234blue");      // 1234
var num2 = parseInt("");              // 0
var num3 = parseInt("0xA");           // 10
var num4 = parseInt(22.5);            // 22

var num = parseInt("0xAF", 16);       //175
var num1 = parseInt("AF", 16);        //175
var num2 = parseInt("AF");            //NaN
```

<div class="myTip">

不指定基数意味着让 parseInt() 决定如何解析输入的字符串,因此为了避免错误的解析,我们建议无论在什么情况下都明确指定基数。
</div>


<h4 class = 'auto-sort-sub1'>String 类型</h4>

```javascript
var num = 10;
alert(num.toString());        // "10"
alert(num.toString(2));       // "1010"
alert(num.toString(8));       // "12"
alert(num.toString(10));      // "10"
alert(num.toString(16));      // "a"

var value1 = 10;
var value2 = true;
var value3 = null;
var value4;
alert(String(value1));        // "10"
alert(String(value2));        // "true"
alert(String(value3));        // "null"
alert(String(value4));        // "undefined"
```

<div class="myNote">

在不知道要转换的值是不是 null 或 undefined 的情况下,还可以使用转型函数 String(),这个函数能够将任何类型的值转换为字符串。String()函数遵循下列转换规则:  
1. 如果值有 toString()方法,则调用该方法(没有参数)并返回相应的结果;
2. 如果值是 null,则返回"null";
3. 如果值是 undefined,则返回"undefined"。
</div>


<h4 class = 'auto-sort-sub1'>Object 类型</h4>

```javascript
var o = new Object();
var o = new Object; // 有效,但不推荐省略圆括号

```
<h3 class = 'auto-sort-sub'>操作符</h3>
<h4 class = 'auto-sort-sub1'>相等操作符号</h4>

```javascript
var result1 = ("55" == 55);     // true,因为转换后相等
var result2 = ("55" === 55);    // false,因为不同的数据类型不相等
null == undefined;              // true
null === undefined;             // false
```

<div class="myTip">

由于相等和不相等操作符存在类型转换问题,而为了保持代码中数据类型的完整性,我们推荐使用全等和不全等操作符。
</div>


<h3 class = 'auto-sort-sub'>语句</h3>
<h4 class = 'auto-sort-sub1'>label 语句</h4>

```javascript
var num = 0;
outermost:
    for (var i=0; i < 10; i++) {
        for (var j=0; j < 10; j++) {
            if (i == 5 && j == 5) {
                continue outermost;
            }
            num++;
        }
    }
alert(num); //95
```

<div class="myTip">

虽然联用 break、continue 和 label 语句能够执行复杂的操作,但如果使用过度,也会给调试带来麻烦。在此,我们建议如果使用 label 语句,一定要使用描述性的标签,同时不要嵌套过多的循环。
</div>


<h4 class = 'auto-sort-sub1'>swith 语句</h4>

<div class="myNote">

虽然 ECMAScript 中的 switch 语句借鉴自其他语言,但这个语句也有自己的特色。首先,可以在switch 语句中使用任何数据类型(在很多其他语言中只能使用数值),无论是字符串,还是对象都没有问题。其次,每个 case 的值不一定是常量,可以是变量,甚至是表达式。
</div>

```javascript
switch ("hello world") {
    case "hello" + " world":
        alert("Greeting was found.");
        break;
    case "goodbye":
        alert("Closing was found.");
        break;
    default:
        alert("Unexpected message was found.");
}


var num = 25;
switch (true) {
    case num < 0:
    alert("Less than 0.");
    break;
    case num >= 0 && num <= 10:
        alert("Between 0 and 10.");
        break;
    case num > 10 && num <= 20:
        alert("Between 10 and 20.");
        break;
    default:
        alert("More than 20.");
}
```

<div class="myTip">

switch 语句在比较值时使用的是全等操作符,因此不会发生类型转换(例如,字符串"10"不等于数值 10)。
</div>


<h3 class = 'auto-sort-sub'>函数</h3>


<div class="myNote">

ECMAScript 函数的参数与大多数其他语言中函数的参数有所不同。ECMAScript 函数不介意传递进来多少个参数,也不在乎传进来参数是什么数据类型。之所以会这样,原因是 ECMAScript 中的参数在内部是用一个叫`arguments`数组来表示的。
</div>

```javascript
function sayHi(name, message) {
    alert("Hello " + name + "," + message);
}

// 与上例子等价
function sayHi() {
    alert("Hello " + arguments[0] + "," + arguments[1]);
}

function doAdd() {
    if(arguments.length == 1) {
        alert(arguments[0] + 10);
    } else if (arguments.length == 2) {
        alert(arguments[0] + arguments[1]);
    }
}
doAdd(10);        // 20
doAdd(30, 20);    //50
```

<div class="myTip">

ECMAScript 中的所有参数传递的都是值,不可能通过引用传递参数。
ECMAScript 不能重载，后定义的会覆盖前面的相同方法, 通过检查传入函数中参数的类型和数量并作出不同的反应,可以模仿方法的重载。
</div>

</div>
</div>

<div class = 'data-section default-folding'>
<h2 class = 'section-title'>第 <label class = 'block-number'>4</label> 章：变量、作用域和内存问题</h2>
<div class = 'folding-area'>

<h3 class = 'auto-sort-sub'>基本类型和引用类型的值</h3>
<h4 class = 'auto-sort-sub1'>复制变量值</h4>

```javascript
// 基本类型，num2 中的 5 与 num1 中的 5 是完全独立的,该值只是 num1 中 5 的一个副本。
var num1 = 5;
var num2 = num1;

// 引用类型
var obj1 = new Object();
var obj2 = obj1;
obj1.name = "Nicholas";
alert(obj2.name); //"Nicholas"
```

<h4 class = 'auto-sort-sub1'>传递参数</h4>
可以把 ECMAScript 函数的参数想象成局部变量。

```javascript
function addTen(num) {
    num += 10;
    return num;
}
var count = 20;
var result = addTen(count);
alert(count); //20,没有变化
alert(result); //30

// NOTICE 对象是按值传递的
function setName(obj) {
    obj.name = "Nicholas";
    obj = new Object();
    obj.name = "Greg";
}
var person = new Object();
setName(person);
alert(person.name); //"Nicholas"
```

<div class="myTip">

在把 person 传递给setName()后,其 name 属性被设置为 "Nicholas"。然后,又将一个新对象赋给变量 obj,同时将其 name 属性设置为 "Greg"。如果 person 是按引用传递的,那么 person 就会自动被修改为指向其 name 属性值为"Greg"的新对象。但是,当接下来再访问 person.name 时,显示的值仍然是"Nicholas"。这说明即使在函数内部修改了参数的值,但原始的引用仍然保持未变。实际上,当在函数内部重写 obj 时,这个变量引用的就是一个局部对象了。而这个局部对象会在函数执行完毕后立即被销毁。
</div>

<h4 class = 'auto-sort-sub1'>检测类型</h4>

要检测一个变量是不是基本数据类型用`typeof`, 但对于引用类型用处不大，为此, ECMAScript 提供了`instanceof`操作符用于引用类型。
```javascript
var s = "Nicholas";
var b = true;
var i = 22;
var u;
var n = null;
var o = new Object();
alert(typeof s);    // string
alert(typeof i);    // number
alert(typeof b);    // boolean
alert(typeof u);    // undefined
alert(typeof n);    // object
alert(typeof o);    // object

// result = variable instanceof constructor
alert(person instanceof Object);   // 变量 person 是 Object 吗?
alert(colors instanceof Array);    // 变量 colors 是 Array 吗?
alert(pattern instanceof RegExp);  // 变量 pattern 是 RegExp 吗?
```

<h3 class = 'auto-sort-sub'>执行环境及作用域</h3>
<h4 class = 'auto-sort-sub1'>没有块级作用域</h4>

```javascript
if (true) {
    var color = "blue";
}
alert(color); //"blue"

for (var i=0; i < 10; i++){
    doSomething(i);
}
alert(i); //10
```

<div class="myTip">

对于有块级作用域的语言来说, for 语句初始化变量的表达式所定义的变量,只会存在于循环的环境之中。而对于 JavaScript 来说,由 for 语句创建的变量 i 即使在 for 循环执行结束后,也依旧会存在于循环外部的执行环境中。
</div>

```javascript

var color = "blue";
function getColor(){
    return color;
}
alert(getColor()); //"blue"

// 如果局部环境中存在着同名标识符,就不会使用位于父环境中的标识符
function getColor(){
    var color = "red";
    return color;
}
alert(getColor()); //"red"
```

<h3 class = 'auto-sort-sub'>垃圾收集</h3>

JavaScript 会自动垃圾回收
<h4 class = 'auto-sort-sub1'>管理内存</h4>

<div class="myNote">

使用具备垃圾收集机制的语言编写程序,开发人员一般不必操心内存管理的问题。但是,JavaScript 在进行内存管理及垃圾收集时面临的问题还是有点与众不同。其中最主要的一个问题,就是分配给 Web 浏览器的可用内存数量通常要比分配给桌面应用程序的少。这样做的目的主要是出于安全方面的考虑,目的是防止运行 JavaScript 的网页耗尽全部系统内存而导致系统崩溃。内存限制问题不仅会影响给变量分配内存,同时还会影响调用栈以及在一个线程中能够同时执行的语句数量。  
因此,确保占用最少的内存可以让页面获得更好的性能。而优化内存占用的最佳方式,就是为执行中的代码只保存必要的数据。一旦数据不再有用,最好通过将其值设置为 null 来释放其引用——这个做法叫做解除引用(dereferencing)。这一做法适用于大多数全局变量和全局对象的属性。局部变量会在它们离开执行环境时自动被解除引用。
</div>

```javascript
function createPerson(name){
    var localPerson = new Object();
    localPerson.name = name;
    return localPerson;
}
var globalPerson = createPerson("Nicholas");
// 手工解除 globalPerson 的引用
globalPerson = null;

```

</div>
</div>


<div class = 'data-section default-folding'>
<h2 class = 'section-title'>第 <label class = 'block-number'>5</label> 章：引用类型</h2>
<div class = 'folding-area'>
<h3 class = 'auto-sort-sub'>Object 类型</h3>

**创建 Object 对象的两种方式**
```javascript
// var person = {}; 与 new Object()相同
var person = new Object();  
person.name = "Nicholas";
person.age = 29;

// 使用对象字面量表示法
// NOTICE 属性名也可以使用字符串
var person = {
name : "Nicholas",
age : 29
};
```
```javascript
function displayInfo(args) {
    var output = "";
    if (typeof args.name == "string"){
        output += "Name: " + args.name + "\n";
    }
    if (typeof args.age == "number") {
        output += "Age: " + args.age + "\n";
    }
}

alert(output);
displayInfo({
    name: "Nicholas",
    age: 29
});

displayInfo({
    name: "Greg"
});

```

<div class="myTip">

**对象属性的访问方式**  
```javascript
alert(person["name"]); //"Nicholas"
alert(person.name); //"Nicholas"

// 从功能上看,这两种访问对象属性的方法没有任何区别。但方括号语法的主要优点是可以通过变量来访问属性
var propertyName = "name";
alert(person[propertyName]); //"Nicholas"
person["first name"] = "Nicholas";
```
</div>

<h3 class = 'auto-sort-sub'>Array 类型</h3>

<div class="myNote">

ECMAScript 数组的每一项可以保存任何类型的数据,而且,ECMAScript 数组的大小是可以动态调整的,即可以随着数据的添加自动增长以容纳新增数据。
</div>

**创建数组的基本方式有两种**  

方式一：使用 Array 构造函数
```javascript
// new 关键字可以省略
var colors = new Array();
var colors = new Array("red", "blue", "green");
var colors = new Array(3); // 创建一个包含 3 项的数组
var names = new Array("Greg"); // 创建一个包含 1 项,即字符串"Greg"的数组
```
方式二：数组字面量表示法
```javascript
// [1]
var colors = ["red", "blue", "green"]; // 创建一个包含 3 个字符串的数组
var names = [];      // 创建一个空数组
// [2]
var colors = ["red", "blue", "green"]; // 定义一个字符串数组
alert(colors[0]); // 显示第一项
colors[2] = "black"; // 修改第三项
colors[colors.length] = "black";  //(在位置 3)添加一种颜色
colors[colors.length] = "brown";  //(在位置 3)添加一种颜色
```

<div class="myWarning">

**不要这样创建数组**  
```javascript
var values = [1,2,]; // 不要这样!这样会创建一个包含 2 或 3 项的数组
var options = [,,,,,]; // 不要这样!这样会创建一个包含 5 或 6 项的数组
```
在 IE 中, values 会成为一个包含 3 个项且每项的值分别为 1、2 和 undefined 的数组;在其他浏览器中,values 会成为一个包含 2 项且值分别为 1 和 2 的数组。原因是 IE8 及之前版本中的 ECMAScript 实现在数组字面量方面存在 bug。
</div>

<h4 class = 'auto-sort-sub1'>检测数组</h4>

```javascript
if (Array.isArray(value)){
    //对数组执行某些操
}
```
<h4 class = 'auto-sort-sub1'>转换方法</h4>

```javascript
// [1]
var colors = ["red", "blue", "green"]; // 创建一个包含 3 个字符串的数组
alert(colors.toString()); // red,blue,green
alert(colors.valueOf()); // red,blue,green
alert(colors); // red,blue,green

// [2]
var person1 = {
    toLocaleString : function () {
        return "Nikolaos";
    },
    toString : function() {
        return "Nicholas";
    }
};

var person2 = {
    toLocaleString : function () {
        return "Grigorios";
    },
    toString : function() {
        return "Greg";
    }
};
var people = [person1, person2];
alert(people);               //Nicholas,Greg
alert(people.toString());    //Nicholas,Greg
alert(people.toLocaleString());  //Nikolaos,Grigorios
```
数组继承的 toLocaleString() 、toString() 和 valueOf()方法,在默认情况下都会以逗号分隔的字符串的形式返回数组项。而如果使用 join() 方法,则可以使用不同的分隔符来构建这个字符串。 
```javascript
var colors = ["red", "green", "blue"];
alert(colors.join(",")); //red,green,blue
alert(colors.join("||")); //red||green||blue
```


<div class="myTip">

如果数组中的某一项的值是 null 或者 undefined ,那么该值在 join() 、toLocaleString()、toString()和 valueOf() 方法返回的结果中以空字符串表示。
</div>

<h4 class = 'auto-sort-sub1'>栈、队列方法</h4>

```javascript
// 栈
var colors = ["red", "blue"];
colors.push("brown");      // 添加另一项
alert(colors.length);      // 3
var item = colors.pop();   // 取得最后一项
alert(item);               //"brown"
alert(colors.length);      // 2
```

```javascript
// 队列
var colors = new Array(); //创建一个数组
var count = colors.push("red", "green"); //推入两项
alert(count);   //2
count = colors.push("black");
alert(count);   //3
var item = colors.shift();  // 取得第一项
alert(item);                // "red"
```

<div class="myNote">

**队列与栈方法**  
栈： `push` `pop`  
队列：`push` `shift`  
反向队列：`unshift` `pop`  
</div>


<h4 class = 'auto-sort-sub1'>重排序方法</h4>

```javascript
// [1]
var values = [1, 2, 3, 4, 5];
values.reverse();  // [-]
alert(values);     //5,4,3,2,1

// [2]
var values = [0, 1, 5, 10, 15];
values.sort();     // [-]
alert(values); //0,1,10,15,5

// [3]
function compare(value1, value2) {
    if (value1 < value2) {
        return -1;
    } else if (value1 > value2) {
        return 1;
    } else {
        return 0;
    }
}
var values = [0, 1, 5, 10, 15];
values.sort(compare);     // [-]
alert(values); //0,1,5,10,15
```

<h4 class = 'auto-sort-sub1'>操作方法</h4>

```javascript
// [1]  concat()
var colors = ["red", "green", "blue"];
var colors2 = colors.concat("yellow", ["black", "brown"]);  // [-]
alert(colors2);  //red,green,blue,yellow,black,brown

// [2]  slice()
var colors = ["red", "green", "blue", "yellow", "purple"];
var colors2 = colors.slice(1);      // [-]
var colors3 = colors.slice(1,4);    // [-]
var colors4 = colors.slice(-2,-1);  // [-]
alert(colors2);      // green,blue,yellow,purple
alert(colors3);      // green,blue,yellow
alert(colors4);      // yellow,purple
```
```javascript
// splice()  // 具破坏性
// [1]
var colors = ["red", "green", "blue"];
var removed = colors.splice(0,1);  // [-] 删除第一项
alert(colors);    // green,blue
alert(removed);   // red,返回的数组中只包含一项
// [2]
removed = colors.splice(1, 0, "yellow", "orange"); // [-] 从位置 1 开始插入两项
alert(colors);   // green,yellow,orange,blue
alert(removed);  // 返回的是一个空数组
// [3]
removed = colors.splice(1, 1, "red", "purple"); // [-] 插入两项,删除一项
alert(colors); // green,red,purple,orange,blue
alert(removed); // yellow,返回的数组中只包含一项
```

<h4 class = 'auto-sort-sub1'>位置方法</h4>

`indexOf`和`lastIndexOf`方法，第二个参数表示开始索引的位置
```javascript
// 
var numbers = [1,2,3,4,5,4,3,2,1];
alert(numbers.indexOf(4));        //3
alert(numbers.lastIndexOf(4));    //5
alert(numbers.indexOf(4, 4));     // [-] 5
alert(numbers.lastIndexOf(4, 4)); //3
```

<h4 class = 'auto-sort-sub1'>迭代方法</h4>
ECMAScript 5 为数组定义了 5 个迭代方法。每个方法都接收两个参数:要在每一项上运行的函数和(可选的)运行该函数的作用域对象——影响 this 的值。传入这些方法中的函数会接收三个参数:数组项的值、该项在数组中的位置和数组对象本身。根据使用的方法不同,这个函数执行后的返回值可能会也可能不会影响方法的返回值。以下是这 5 个迭代方法的作用。

- `every()`对数组中的每一项运行给定函数,如果该函数对每一项都返回 true,则返回 true。
- `filter()`对数组中的每一项运行给定函数,返回该函数会返回 true 的项组成的数组。
- `forEach()`对数组中的每一项运行给定函数。这个方法没有返回值。
- `map()`对数组中的每一项运行给定函数,返回每次函数调用的结果组成的数组。
- `some()`对数组中的每一项运行给定函数,如果该函数对任一项返回 true,则返回 true。

```javascript
var numbers = [1,2,3,4,5,4,3,2,1];
// [1]
var everyResult = numbers.every(function(item, index, array){   // [-]
    return (item > 2);
});
alert(everyResult); //false

// [2]
var someResult = numbers.some(function(item, index, array){    // [-]
    return (item > 2);
});
alert(someResult); //true

// [3]
var filterResult = numbers.filter(function(item, index, array){  // [-]
    return (item > 2);
});
alert(filterResult); //[3,4,5,4,3]

// [4]
var mapResult = numbers.map(function(item, index, array){  // [-]
    return item * 2;
});
alert(mapResult); //[2,4,6,8,10,8,6,4,2]

// [5]
// 本质上与使用 for 循环迭代数组
numbers.forEach(function(item, index, array){  // [-]
    //执行某些操作
});
```

<h4 class = 'auto-sort-sub1'>归并方法</h4>

`reduce()`和`reduceRight()`的4 个参数:前一个值、当前值、项的索引和数组对象。
```javascript
var values = [1,2,3,4,5];
var sum = values.reduce(function(prev, cur, index, array){
    return prev + cur;
});
alert(sum); //15

// 第一次执行回调函数, prev 是 1, cur 是 2。
// 第二次, prev 是 3(1 加 2 的结果), cur 是 3(数组的第三项)。
```

<h3 class = 'auto-sort-sub'>Date 类型</h3>

ECMAScript 中的 Date 类型是在早期 Java 中的 java.util.Date 类基础上构建的。为此,Date
类型使用自 UTC(Coordinated Universal Time,国际协调时间)1970 年 1 月 1 日午夜(零时)开始经过
的毫秒数来保存日期。

// TODO


<h3 class = 'auto-sort-sub'>RegExp 类型</h3>

<div class="myNote">

**var expression = / pattern / flags ;**  

**flags 有三个值**  
- `g` 表示全局(global)模式,即模式将被应用于所有字符串,而非在发现第一个匹配项时立即停止;  
- `i` 表示不区分大小写(case-insensitive)模式;  
- `m` 表示多行(multiline)模式,即在到达一行文本末尾时还会继续查找下一行中是否存在与模式匹配的项。
</div>

<div class="myTip">

**贪婪匹配和非贪婪匹配**  

例如： {ab}{cd}{de}{ef}

{[\s\S]*} ==>  {ab}{bc}{cd}{de}  

{[\s\S]*?} ==> {ab}

</div>

**[1] 使用字面量定义**
```javascript
// 匹配第一个" [bc]at",不区分大小写
var pattern2 = /\[bc\]at/i;

// 匹配所有以"at"结尾的 3 个字符的组合,不区分大小写
var pattern3 = /.at/gi;

// 匹配所有".at",不区分大小写
var pattern4 = /\.at/gi;
```

**[2] 使用构造函数**
```javascript
// NOTICE 需双重转义
var pattern2 = new RegExp("\"\[bc\\]at", "i");
```

<h4 class = 'auto-sort-sub1'>RegExp 实例方法</h4>

```javascript
var text = "mom and dad and baby";
var pattern = /mom( and dad( and baby)?)?/gi;
var matches = pattern.exec(text);
alert(matches.index); // 0
alert(matches.input); // "mom and dad and baby"
alert(matches[0]); // "mom and dad and baby"
alert(matches[1]); // " and dad and baby"
alert(matches[2]); // " and baby"


// [2]
// 对于 exec() 方法而言,即使在模式中设置了全局标志(g),
// 它每次也只会返回一个匹配项。在不设置全局标志的情况下,
// 在同一个字符串上多次调用 exec()将始终返回第一个匹配项的信息。

var text = "cat, bat, sat, fat";
var pattern1 = /.at/;       // [-]
var matches = pattern1.exec(text);
alert(matches.index); //0
alert(matches[0]); //cat
alert(pattern1.lastIndex); //0
matches = pattern1.exec(text);
alert(matches.index); //0
alert(matches[0]); //cat
alert(pattern1.lastIndex); //0

var pattern2 = /.at/g;      // [-]
var matches = pattern2.exec(text);
alert(matches.index); //0
alert(matches[0]); //cat
alert(pattern2.lastIndex); //3
matches = pattern2.exec(text);
alert(matches.index); //5
alert(matches[0]); //bat
alert(pattern2.lastIndex); //8
```

<h4 class = 'auto-sort-sub1'>RegExp 构造函数属性</h4>
<div class="myImage">

![-image-](../images/javascript/01/ch05_01.png)
<label class="imageTitle">图示5-1: RegExp 构造函数的属性 </label>
</div>


```javascript
var text = "this has been a short summer";
var pattern = /(.)hort/g;
/*
* 注意:Opera 不支持 input、lastMatch、lastParen 和 multiline 属性
* Internet Explorer 不支持 multiline 属性
*/

// [1]
if (pattern.test(text)){
    alert(RegExp.input); // this has been a short summer
    alert(RegExp.leftContext); // this has been a
    alert(RegExp.rightContext); // summer
    alert(RegExp.lastMatch); // short
    alert(RegExp.lastParen); // s
    alert(RegExp.multiline); // false
}

// [2]
if (pattern.test(text)){
    alert(RegExp.$_);
    alert(RegExp["$&"]);
    alert(RegExp["$+"]);
    alert(RegExp["$*"]);
}

// [3]
var text = "this has been a short summer";
var pattern = /(..)or(.)/g;
if (pattern.test(text)){
    alert(RegExp.$1);  // sh
    alert(RegExp.$2);  // t
}
```

<h3 class = 'auto-sort-sub'>Function 类型</h3>

ECMAScript 中函数实际上是对象。每个函数都是 Function 类型的实例,而且都与其他引用类型一样具有属性和方法。由于函数是对象,因此函数名实际上也是一个指向函数对象的指针,不会与某个函数绑定。
```javascript
// [1]
function sum (num1, num2) {
    return num1 + num2;
}

// 也可以这样定义
var sum = function(num1, num2){
    return num1 + num2;
};

var sum = new Function("num1", "num2", "return num1 + num2"); // 不推荐

// [2]
function sum(num1, num2){
    return num1 + num2;
}
alert(sum(10,10)); //20
var anotherSum = sum;
alert(anotherSum(10,10)); //20
sum = null;
alert(anotherSum(10,10)); //20
```
<h4 class = 'auto-sort-sub1'>作为值的函数</h4>

```javascript
// [1]
function callSomeFunction(someFunction, someArgument){
    return someFunction(someArgument);
}
function add10(num){
    return num + 10;
}
var result1 = callSomeFunction(add10, 10);
alert(result1); //20

// [2]
function createComparisonFunction(propertyName) {
    return function(object1, object2){
        var value1 = object1[propertyName];
        var value2 = object2[propertyName];
        if (value1 < value2){
            return -1;
        } else if (value1 > value2){
            return 1;
        } else {
            return 0;
        }
    };
}
```
<h4 class = 'auto-sort-sub1'>函数内部属性</h4>

函数内部的特殊对象：`arguments` `this` `callee`
```javascript

// [1]
function factorial(num){
    if (num <=1) {
        return 1;
    } else {
        return num * factorial(num-1)
    }
}

// [2]
function factorial(num){
    if (num <=1) {
        return 1;
    } else {
        return num * arguments.callee(num-1)  // [-]
    }
}

var trueFactorial = factorial;
factorial = function(){
    return 0;
};
alert(trueFactorial(5)); //120
alert(factorial(5)); //0
```
this 引用的是函数据以执行的环境对象——或者也可以说是 this 值(`当在网页的全局作用域中调用函数时, this 对象引用的就是 window`)
```javascript
window.color = "red";
var o = { color: "blue" };
function sayColor(){
    alert(this.color);
}
sayColor(); //"red"
o.sayColor = sayColor;
o.sayColor(); //"blue"
```
ECMAScript 5 也规范化了另一个函数对象的属性:`caller`
```javascript
function outer(){
    inner();
}
function inner(){
    alert(inner.caller);   // [-]  警告框中显示 outer() 函数的源代码
 // alert(arguments.callee.caller);  // 等价上一行，更高好的解耦
}
outer();
```

<div class="myTip">

当函数在严格模式下运行时,访问 arguments.callee 会导致错误。ECMAScript 5 还定义了 arguments.caller 属性,但在严格模式下访问它也会导致错误,而在非严格模式下这个属性始终是 undefined。定义这个属性是为了分清 arguments.caller 和函数的 caller 属性。以上变化都是为了加强这门语言的安全性,这样第三方代码就不能在相同的环境里窥视其他代码了。严格模式还有一个限制:不能为函数的 caller 属性赋值,否则会导致错误。
</div>

<h4 class = 'auto-sort-sub1'>函数属性和方法</h4>

ECMAScript 中的函数是对象,因此函数也有属性和方法。每个函数都包含两个属性:`length`和`prototype`。
```javascript
function sum(num1, num2){
    return num1 + num2;
}
function sayHi(){
    alert("hi");
}
alert(sum.length);    // 2
alert(sayHi.length);  // 0
```

```javascript
// [1]  
// apply()方法接收两个参数:一个是在其中运行函数的作用域,另一个是参数数组。

function sum(num1, num2){
    return num1 + num2;
}
function callSum1(num1, num2){
    return sum.apply(this, arguments);   // [-]
}
function callSum2(num1, num2){
    return sum.apply(this, [num1, num2]);  // [-]
}
alert(callSum1(10,10)); //20
alert(callSum2(10,10)); //20

// [2]
// call()方法与 apply()方法的作用相同,它们的区别仅在于接收参数的方式不同。
 
function sum(num1, num2){
    return num1 + num2;
}
function callSum(num1, num2){
    return sum.call(this, num1, num2);
}
alert(callSum(10,10)); //20
```

<div class="myTip">

在严格模式下,未指定环境对象而调用函数,则 this 值不会转型为 window。除非明确把函数添加到某个对象或者调用 apply()或 call(),否则 this 值将是 undefined。
</div>

`apply()` `call()`真正强大的地方是能够扩充函数赖以运行的作用域。
```javascript
window.color = "red";
var o = { color: "blue" };
function sayColor(){
    alert(this.color);
}
sayColor();              // red
sayColor.call(this);     // red
sayColor.call(window);   // red
sayColor.call(o);        // blue
```
ECMAScript 5 还定义了一个方法:`bind()`
```javascript
window.color = "red";
var o = { color: "blue" };
function sayColor(){
    alert(this.color);
}
var objectSayColor = sayColor.bind(o);  // [-]
objectSayColor(); //blue
```

<h3 class = 'auto-sort-sub'>基本包装类型</h3>

ECMAScript 提供了 3 个特殊的引用类型:`Boolean`、`Number`、 `String`。
```javascript
// [1]
var s1 = "some text";
var s2 = s1.substring(2); // 自动包装

// [2]
// 自动创建的基本包装类型的对象,则只存在于一行代码的执行瞬间
var s1 = "some text";
s1.color = "red";
alert(s1.color); //undefined
```

<h4 class = 'auto-sort-sub1'>String 类型</h4>

```javascript
// indexOf
var stringValue = "hello world";
alert(stringValue.indexOf("o")); //4
alert(stringValue.lastIndexOf("o")); //7
alert(stringValue.indexOf("o", 6)); //7

// trim
var stringValue = "  hello world  ";
var trimmedStringValue = stringValue.trim();  // [-]
alert(trimmedStringValue); //"hello world"

// fromCharCode 与 charCodeAt 相反
alert(String.fromCharCode(104, 101, 108, 108, 111)); //"hello"
```

<h3 class = 'auto-sort-sub'>单体内置对象</h3>

<h4 class = 'auto-sort-sub1'>Global 对象</h4>

ECMAScript 中的 Global 对象在某种意义上是作为一个终极的“兜底儿对象”
来定义的。事实上,没有全局变量或全局函数;所有在全局作用域中定义的属性和函数,都是 Global 对象的属性。

##### URI 编码方法
```javascript
// [1]
var uri = "http://www.wrox.com/illegal value.htm#start";

// [-] 只有空格被替换成 %20
alert(encodeURI(uri));
//"http://www.wrox.com/illegal%20value.htm#start"

// 所有非字母数字都替换
alert(encodeURIComponent(uri));
//"http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.htm%23start"

// [2]
var uri = "http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.htm%23start";
//http%3A%2F%2Fwww.wrox.com%2Fillegal value.htm%23start
alert(decodeURI(uri));

alert(decodeURIComponent(uri));
//http://www.wrox.com/illegal value.htm#start
```

<div class="myTip">

URI 方法 encodeURI()、 encodeURIComponent()、 decodeURI()和 decode-URIComponent()用于替代已经被 ECMA-262 第 3 版废弃的 escape()和 unescape()方法。URI 方法能够编码所有 Unicode 字符,而原来的方法只能正确地编码 ASCII 字符。因此在开发实践中,特别是在产品级的代码中,一定要使用 URI 方法,不要使用 escape()和 unescape()方法。
</div>

##### eval()方法 
整个 ECMAScript 语言中最强大的一个方法  

```javascript
// [1]
eval("function sayHi() { alert('hi'); }");
sayHi();
// [2]
eval("var msg = 'hello world'; ");
alert(msg); //"hello world"
```
<div class="myTip">

严格模式下,在外部访问不到 eval()中创建的任何变量或函数,因此前面两个例子都会导致错误。
</div>

##### window 对象
```javascript
var color = "red";
function sayColor(){
    alert(window.color);
}
window.sayColor(); //"red"
```

<h4 class = 'auto-sort-sub1'>Math 对象</h4>

</div>
</div>


<div class = 'data-section default-folding'>
<h2 class = 'section-title'>第 <label class = 'block-number'>6</label> 章：面向对象的程序设计</h2>
<div class = 'folding-area'>

<h3 class = 'auto-sort-sub'>理解对象</h3>

`ECMAScript 中没有类的概念`,因此它的对象也与基于类的语言中的对象有所不同。

```javascript
var person = {
    name: "Nicholas",
    age: 29,
    job: "Software Engineer",
    sayName: function(){
        alert(this.name);
    }
};
```

<h4 class = 'auto-sort-sub1'>属性性质</h4>

**数据属性**
- `Configurable`:表示能否通过 delete 删除属性从而重新定义属性,能否修改属性的特性,或者能否把属性修改为访问器属性。默认为 true  
- `Enumerable`:表示能否通过 for-in 循环返回属性。默认为 true  
- `Writable`:表示能否修改属性的值, 默认为 true  
- `Value`:包含这个属性的数据值。读取属性值的时候,从这个位置读;写入属性值的时候,把新值保存在这个位置。默认值为 undefined。


```javascript
var person = {};
Object.defineProperty(person, "name", {
    configurable: false,
    value: "Nicholas"
});
// 在非严格模式下什么也不会发生,而在严格模式下会导致错误。
delete person.name;    // [1]  无法删除
alert(person.name); //"Nicholas"
```

<h4 class = 'auto-sort-sub1'>定义多个属性</h4>

```javascript
var book = {};
Object.defineProperties(book,{
    _year: {
        value: 2004
    },
    edition: {
        value: 1
    },
    year: {
        get:function(){
            return this._year;
        },
        set: function(newValue){
            if (newValue > 2004) {
                this._year = newValue;
                this.edition += newValue - 2004;
            }
        }
    }
});
```

<h3 class = 'auto-sort-sub'>创建对象</h3>

<h4 class = 'auto-sort-sub1'>工厂模式</h4>

```javascript
function createPerson(name, age, job){
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function(){
    alert(this.name);
    };
    return o;
}
var person1 = createPerson("Nicholas", 29, "Software Engineer");
var person2 = createPerson("Greg", 27, "Doctor");
```
<div class="myTip">

工厂模式虽然解决了创建多个相似对象的问题,但却没有解决对象识别的问题(即怎样知道一个对象的类型)。
</div>
<h4 class = 'auto-sort-sub1'>构造函数模式</h4>

```javascript
// [1]
function Person(name, age, job){ // 构造函数首字母大写
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function(){
        alert(this.name);
    };
    // 与声明函数在逻辑上是等价的
    //this.sayName = new Function("alert(this.name)"); 

}
var person1 = new Person("Nicholas", 29, "Software Engineer");
var person2 = new Person("Greg", 27, "Doctor");

// [2]
// 当作构造函数使用
var person = new Person("Nicholas", 29, "Software Engineer");
person.sayName(); //"Nicholas"
// 作为普通函数调用
Person("Greg", 27, "Doctor"); // 添加到 window
window.sayName(); //"Greg"
// 在另一个对象的作用域中调用
var o = new Object();
Person.call(o, "Kristen", 25, "Nurse");
o.sayName(); //"Kristen"
```

<div class="myTip">

使用构造函数的主要问题,就是每个方法都要在每个实例上重新创建一遍。在前面的例子中, person1 和 person2 都有一个名为 sayName()的方法,但那两个方法不是同一个 Function 的实例。
```javascript
alert(person1.sayName == person2.sayName); //false
```
</div>

<h4 class = 'auto-sort-sub1'>原型模式</h4>
使用原型对象的好处是可以让所有对象实例共享它所包含的属性和方法。换句话说,不必在构造函数中定义对象实例的信息,而是可以将这些信息直接添加到原型对象中。

```javascript
// []
function Person(){}
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function(){
    alert(this.name);
};

// [1]
var person1 = new Person();
person1.sayName(); //"Nicholas"
var person2 = new Person();
person2.sayName(); //"Nicholas"
alert(person1.sayName == person2.sayName); //true

// [2]
var person3 = new Person();
person3.name = "Greg";
alert(person3.name); //"Greg"——来自实例
alert(person1.hasOwnProperty("name")); //true

delete person3.name;
alert(person3.name); //"Nicholas"——来自原型
alert(person1.hasOwnProperty("name")); //false


// [3]
alert(Object.getPrototypeOf(person1) == Person.prototype); //true
alert(Object.getPrototypeOf(person1).name); //"Nicholas"

alert(Person.prototype.isPrototypeOf(person1)); //true
alert(Person.prototype.isPrototypeOf(person2)); //true

```

<div class="myImage">

![-image-](../images/javascript/01/ch06_01.png)

<label class="imageTitle">图示 6-1 </label>
</div>


<div class="myImage">

![-image-](../images/javascript/01/ch06_02.png)

<label class="imageTitle">图示 6-2</label>
</div>

<div class="myTip">

原型最初只包含 constructor 属性,而该属性也是共享的,因此可以通过对象实例访问。  

ECMAScript 5 的 Object.getOwnPropertyDescriptor()方法只能用于实例属性,要取得原型属性的描述符,必须直接在原型对象上调用 Object.getOwnPropertyDescriptor()方法。
</div>

**运行与 in 操作符**
```javascript
function Person(){
    Person.prototype.name = "Nicholas";
    Person.prototype.age = 29;
    Person.prototype.job = "Software Engineer";
    Person.prototype.sayName = function(){
        alert(this.name);
    }
};
var person1 = new Person();
var person2 = new Person();
alert(person1.hasOwnProperty("name")); //false
alert("name" in person1); //true

person1.name = "Greg";
alert(person1.name); //"Greg" ——来自实例
alert(person1.hasOwnProperty("name")); //true
alert("name" in person1); //true

// 自定义函数可以进一步确定是否在原型中定义
function hasPrototypeProperty(object, name){
    return !object.hasOwnProperty(name) && (name in object);
}
```
**简洁的原型语法**
```javascript
function hasPrototypeProperty(object, name){
    return !object.hasOwnProperty(name) && (name in object);
}
```

<h4 class = 'auto-sort-sub1'>组合使用构造函数模式和原型模式</h4>

```javascript
function Person(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.friends = ["Shelby", "Court"];
}
Person.prototype = {
    constructor : Person,
    sayName : function(){
        alert(this.name);
    }
}

var person1 = new Person("Nicholas", 29, "Software Engineer");
var person2 = new Person("Greg", 27, "Doctor");
person1.friends.push("Van");
alert(person1.friends); //"Shelby,Count,Van"
alert(person2.friends); //"Shelby,Count"
alert(person1.friends === person2.friends); //false
alert(person1.sayName === person2.sayName); //true
```

<h4 class = 'auto-sort-sub1'>动态原型模式</h4>

```javascript
function Person(name, age, job){
    //属性
    this.name = name;
    this.age = age;
    this.job = job;

    // 只在 sayName()方法不存在的情况下,才会将它添加到原型中
    if (typeof this.sayName != "function"){
        Person.prototype.sayName = function(){
            alert(this.name);
        };
    }
}
```

<h4 class = 'auto-sort-sub1'>寄生构造函数模式</h4>
<h4 class = 'auto-sort-sub1'>妥当构造函数模式</h4>


<h3 class = 'auto-sort-sub'>继承</h3>
<h4 class = 'auto-sort-sub1'>原型链</h4>

ECMAScript 中描述了原型链的概念,并将`原型链作为实现继承的主要方法`。
```javascript
function SuperType(){
    this.property = true;
}

SuperType.prototype.getSuperValue = function(){
    return this.property;
};

function SubType(){
    this.subproperty = false;
}
//继承了 SuperType
SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function (){
    return this.subproperty;
};

var instance = new SubType();
alert(instance.getSuperValue()); //true
```

<div class="myImage">

![-image-](../images/javascript/01/ch06_03.png)

<label class="imageTitle">图示 6-3</label>
</div>


// TODO

</div>
</div>


<div class = 'data-section default-folding'>
<h2 class = 'section-title'>第 <label class = 'block-number'>7</label> 章：函数表达式</h2>
<div class = 'folding-area'>

```javascript
//不要这样做!
if(condition){
    function sayHi(){
        alert("Hi!");
    }
} else {
    function sayHi(){
        alert("Yo!");
    }
}
```

<div class="myTip">

表面上看,以上代码表示在 condition 为 true 时,使用一个 sayHi()的定义;否则,就使用另一个定义。实际上,这在 ECMAScript 中属于无效语法,JavaScript 引擎会尝试修正错误,将其转换为合理的状态。但问题是浏览器尝试修正错误的做法并不一致。大多数浏览器会返回第二个声明,忽略 condition;Firefox 会在 condition 为 true 时返回第一个声明。
</div>

```javascript

//可以这样做
var sayHi;

if(condition){
    sayHi = function(){
        alert("Hi!");
    };
} else {
    sayHi = function(){
        alert("Yo!");
    };
}
```

<h3 class = 'auto-sort-sub'>递归</h3>


<div class="myNote">

通过使用 arguments.callee 代替函数名,可以确保无论怎样调用函数都不会出问题。因此,在编写递归函数时,使用 arguments.callee 总比使用函数名更保险。

但在严格模式下,不能通过脚本访问 arguments.callee,访问这个属性会导致错误。不过,可以使用命名函数表达式来达成相同的结果。
</div>

```javascript
// [1] 不推荐
function factorial(num){
    if (num <= 1){
        return 1;
    } else {
        //return num * factorial(num-1);
        return num * arguments.callee(num-1); 
    }
}

// [2]  推荐
var factorial = (function f(num){
    if (num <= 1){
        return 1;
    } else {
        return num * f(num-1);
    }
});
```

<h3 class = 'auto-sort-sub'>闭包</h3>
<div class="myNote">

闭包是指有权访问另一个函数作用域中的变量的函数。创建闭包的常见方式,就是在一个函数内部创建另一个函数,
</div>

```javascript
function createComparisonFunction(propertyName) {
    return function(object1, object2){
    // --------------------------------------
        var value1 = object1[propertyName];
        var value2 = object2[propertyName];
    // --------------------------------------
    }
    if (value1 < value2){
        return -1;
    } else if (value1 > value2){
        return 1;
    } else {
        return 0;
    }
};

```

<div class="myTip">

由于闭包会携带包含它的函数的作用域,因此会比其他函数占用更多的内存。过度使用闭包可能会导致内存占用过多,我们建议读者只在绝对必要时再考虑使用闭包。虽然像 V8 等优化后的 JavaScript 引擎会尝试回收被闭包占用的内存,但请大家还是要慎重使用闭包。
</div>


<h4 class = 'auto-sort-sub1'>关于 this 对象</h4>

<div class="myTip">

在闭包中使用 this 对象也可能会导致一些问题。在全局函数中,this 等于 window,而当函数被作为某个对象的方法调用时,this 等于那个对象。不过,匿名函数的执行环境具有全局性,因此其 this 对象通常指向 window。
</div>

```javascript
var name = "The Window";
var object = {
    name : "My Object",
    getNameFunc : function(){
        // ---------------------
        return function(){
            return this.name;
        };
        // ---------------------
    }
};
alert(object.getNameFunc()());  //"The Window"(在非严格模式下)
```

<div class="myNote">

为什么匿名函数没有取得其包含作用域(或外部作用域)的 this 对象呢?

每个函数在被调用时都会自动取得两个特殊变量: this 和 arguments。内部函数在搜索这两个变量时,只会搜索到其活动对象为止,因此永远不可能直接访问外部函数中的这两个变量。
</div>

```javascript
var name = "The Window";
var object = {
    name : "My Object",
    getNameFunc : function(){
        // ---------------------
        var that = this;
        return function(){
            return that.name;
        };
        // ---------------------
    }
};
alert(object.getNameFunc()()); //"My Object"
```
```javascript
// 特殊情况下,this 的值可能会意外地改变

var name = "The Window";

var object = {
    name : "My Object",
    getName: function(){
        return this.name;
    }
};

object.getName(); //"My Object"
(object.getName)(); //"My Object"
(object.getName = object.getName)(); //"The Window",在非严格模式下
```

<h4 class = 'auto-sort-sub1'>内存泄漏</h4>

闭包在 IE 的这些版本中会导致一些特殊的问题。具体来说,如果闭包的作用域链中保存着一个 HTML 元素,那么就意味着该元素将无法被销毁。
```javascript
// 问题
function assignHandler(){
    var element = document.getElementById("someElement");
    element.onclick = function(){
        alert(element.id);
    };
}
// 改进
function assignHandler(){
    var element = document.getElementById("someElement");
    var id = element.id;
    element.onclick = function(){
        alert(id);
    };
    element = null;
}
```

<h3 class = 'auto-sort-sub'>模拟块级作用域</h3>

```javascript
// [1] 注意括号
(function(){
    //这里是块级作用域
})();

// [2]
var someFunction = function(){
    //这里是块级作用域
};
someFunction();
```

<div class="myTip">

一般来说,我们都应该尽量少向全局作用域中添加变量和函数。在一个由很多开发人员共同参与的大型应用程序中,过多的全局变量和函数很容易导致命名冲突。而通过创建私有作用域,每个开发人员既可以使用自己的变量,又不必担心搞乱全局作用域。
</div>

</div>
</div>


<div class = 'data-section default-folding'>
<h2 class = 'section-title'>第 <label class = 'block-number'>8</label> 章：BOM</h2>
<div class = 'folding-area'>

<h3 class = 'auto-sort-sub'>window 对象</h3>

<div class="myNote">

BOM 的核心对象是 window,它表示浏览器的一个实例。在浏览器中,window 对象有双重角色,它既是通过 JavaScript 访问浏览器窗口的一个接口,又是 ECMAScript 规定的 Global 对象。
</div>

尝试访问未声明的变量会抛出错误,但是通过查询 window 对象,可以知道某个可能未声明的变量是否存在。
```javascript
//这里会抛出错误,因为 oldValue 未定义
var newValue = oldValue;
//newValue 的值是 undefined
var newValue = window.oldValue;
```

<h4 class = 'auto-sort-sub1'>窗口位置</h4>

```javascript
// 表示窗口相对于屏幕左边和上边的位置

var leftPos = (typeof window.screenLeft == "number") ?
                window.screenLeft : window.screenX;
var topPos = (typeof window.screenTop == "number") ?
                window.screenTop : window.screenY;

```
// TODO


<h3 class = 'auto-sort-sub'>location 对象</h3>

<div class="myTip">

location 对象是很特别的一个对象,因为它既是 window 对象的属性,也是document 对象的属性;换句话说, window.location 和 document.location 引用的是同一个对象。
</div>

<div class="myImage">

![-image](../images/javascript/01/ch08_01.png)

<label class="imageTitle">图示 8-1</label>
</div>

```javascript
location.assign("http://www.wrox.com");
// 等价
window.location = "http://www.wrox.com";
// 等价
location.href = "http://www.wrox.com";

//假设初始 URL 为 http://www.wrox.com/WileyCDA/
//将 URL 修改为"http://www.wrox.com/WileyCDA/#section1"
location.hash = "#section1";
//将 URL 修改为"http://www.wrox.com/WileyCDA/?q=javascript"
location.search = "?q=javascript";
//将 URL 修改为"http://www.yahoo.com/WileyCDA/"
location.hostname = "www.yahoo.com";
//将 URL 修改为"http://www.yahoo.com/mydir/"
location.pathname = "mydir";
//将 URL 修改为"http://www.yahoo.com:8080/WileyCDA/"
location.port = 8080;

//每次修改 location 的属性(hash 除外),页面都会以新 URL 重新加载。
```

<div class="myTip">

当通过上述任何一种方式修改 URL 之后,浏览器的历史记录中就会生成一条新记录,因此用户通过单击“后退”按钮都会导航到前一个页面。要禁用这种行为,可以使用 `replace()`方法。
</div>

```javascript
location.replace("http://www.wrox.com/");

location.reload(); //重新加载(有可能从缓存中加载)
location.reload(true); //重新加载(从服务器重新加载)
```
// TODO

</div>
</div>


<div class = 'data-section default-folding'>
<h2 class = 'section-title'>第 <label class = 'block-number'>9</label> 章：浏览器检测</h2>
<div class = 'folding-area'>

// TODO
</div>
</div>


<div class = 'data-section default-folding'>
<h2 class = 'section-title'>第 <label class = 'block-number'>10</label> 章：DOM</h2>
<div class = 'folding-area'>

</div>
</div>


<div class = 'data-section default-folding'>
<h2 class = 'section-title'>第 <label class = 'block-number'>11</label> 章：DOM 扩展</h2>
<div class = 'folding-area'>


<h3 class = 'auto-sort-sub'>选择符 API</h3>
<h4 class = 'auto-sort-sub1'>querySelector() 方法</h4>

**接收一个 CSS 选择符,返回与该模式匹配的第一个元素**
```javascript
//取得 ID 为"myDiv"的元素
var myDiv = document.querySelector("#myDiv");
//取得类为"selected"的第一个元素
var selected = document.querySelector(".selected");
//取得类为"button"的第一个图像元素
var img = document.body.querySelector("img.button");
```
<h4 class = 'auto-sort-sub1'>querySelectorAll() 方法</h4>

**返回的是所有匹配的元素,返回的是一个 NodeList 的实例**

<h4 class = 'auto-sort-sub1'>matchesSelector() 方法</h4>

<div class="myTip">

截至 2011 年年中,还没有浏览器支持 matchesSelector()方法;不过,也有一些实验性的实现。IE 9+通过 msMatchesSelector()支持该方法, Firefox 3.6+通过 mozMatchesSelector()支持该方法, Safari 5+和 Chrome 通过 webkitMatchesSelector()支持该方法。
</div>

```javascript
function matchesSelector(element, selector){
    if (element.matchesSelector){
        return element.matchesSelector(selector);
    } else if (element.msMatchesSelector){
        return element.msMatchesSelector(selector);
    } else if (element.mozMatchesSelector){
        return element.mozMatchesSelector(selector);
    } else if (element.webkitMatchesSelector){
        return element.webkitMatchesSelector(selector);
    } else {
        throw new Error("Not supported.");
    }
}

if (matchesSelector(document.querySelector('#id'), '.hello')){
    //执行操作
}
```
<h3 class = 'auto-sort-sub'>元素遍历</h3>
<div class="myWarning">

对于元素间的空格, IE9 及之前版本不会返回文本节点,而其他所有浏览器都会返回文本节点。这样,就导致了在使用 childNodes 和 firstChild 等属性时的行为不一致。

因此 Element Traversal API 为 DOM 元素添加了以下 5 个属性:`childElementCount``firstElementChild``lastElementChild``previousElementSibling``nextElementSibling`

</div>
 
```javascript
var i,
    len,
    child = element.firstElementChild;

    while(child != element.lastElementChild){
        processChild(child);
        //已知其是元素
        child = child.nextElementSibling;
    }
```

</div>
</div>
