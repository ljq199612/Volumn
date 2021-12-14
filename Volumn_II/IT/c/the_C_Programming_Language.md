 
<div class = 'data-section default-folding'>
<h2 class = 'section-title'><label class = 'block-number'>1</label> C 语言基本概念</h2>
<div class = 'folding-area'>

> 要点: 在任何需要数值的地方，都可以使用具有相同类型的表达式


<h3 class = 'auto-sort-sub'>第一个 C 程序</h3>

> 打印 To C, or not to C: that is the question

1. **编写 pun.c 文件** 

```C
#include <stdio.h>

int main(void)
{
	printf("To C, or not to C: that is the question");
	return 0;
}

```

2. **编译链接 pun.c 文件, 生成 pun 文件**
```bash
$> gcc -o pun pun.c
```


<div class="myNote">

**如何处理 C 文件？**
- **预处理**: 首先程序会被交给预处理器，预处理器执行以`#`开头的指令。预处理器可以给程序添加或修改
- **编译**: 修改后的程序进入编译器，编译器把程序翻译成机器指令（目标代码）
- **链接**: 链接器把编译器生成的目标代码和所需的其他附加代码（如：库函数中的 printf）整合在一起



</div>
<br>

<div class="myTip">

**问: GCC 是什么？**  
**答**: GCC `GUN C compiler` 的简称，现在指 `GUN Compiler Collection`，这是因为现在 GCC 可以编译多种语言。

**问: main 函数结尾 使用 exit(0) 或 return 0，一样吗？**  
**答**: 一样

**问: 如果 main 函数 没有 return 语句会怎样?**  
**答: 程序也能正常终止，但许多编译器会给出一个警告**

**问: 编译器完全移除空格还是用空格代替?**  
**答**: 空格， 如 `a/* */b = 0;` 变为 `a b = 0;`

</div>




<h3 class = 'auto-sort-sub'>printf 和 scanf</h3>


// TODO 输入输出 函数使用表


> scanf 函数本质是一种模式匹配函数

```C

// 输入:  2   4
scanf("%d%d", &i, &j); 
scanf("%d %d", &i, &j); 

// 输入;   2,4
scanf("%d,%d", &i, &j); 

```


<div class="myWarning">

printf 常以 `\n` 结尾， 而 scanf 最好不要以 `\n` 结尾。例如，`%d\n`, scanf 函数先跳过空白字符，读取一个整数，然后跳到下一个空白字符处， 这样可能导致交互程序一直挂起，直到用户输入下一个非空白字符为止
</div>


<h3 class = 'auto-sort-sub'>表达式</h3>

> C99 中，除法的结果总是向 0 截取

在许多编程语言中，赋值是语句; 然而，在 C 语言中，赋值就像 + 那样是运算符号。  


赋值表达式`v=e` 的值就是赋值运算后 v 的值。
```C
int i;
float j;

i = 72.99f; /* i is now 72 */
f = 136;    /* f is now 136.0 */
```


<div class="myNote">

**副作用**  
通常我们不希望运算符修改它们的操作数，数学中的运算符就是如此。但是有些运算符所做的不仅仅是计算出值，这样的操作符称为有副作用。 简单赋值运算符就是一个有副作用的运算符，它改变了运算符的左操作数。对表达式 i=0 求值产生结果 0, 并（作为副作用）把 0 赋值给 i

因为赋值操作是运算符，所以多个赋值可以串连在一起: i = j = k = 0; 但由于存在类型转换，串在一起的赋值运算最终结果可能不是预期结果
```C
int i;
float f;

f = i = 33.3f;  /* i, j is now 33.0 */
```
</div>


<h4 class = 'auto-sort-sub1'>表达式语句</h4>

C 语言有一条规则，任何表达式都可以作为语句。只需要在后面加`;`就可以。  
例如，可以把表达式`++i`转换成语句`++i;` (除非表达式有副作用，否则将表达式用作语句没有什么意义）

思考这样一个例子: 
```C 
a = 5; 
c = (b = a+2) - (a=1); /* c is 6 or 2 */

```
<div class="myWarning">

表达式 （b = a + 2) - (a = 1) 即访问了 a 的值， 又修改了 a 的值。 有些编译器在遇到这样的表达式时会产生一条类似`operation on 'a' may be undefined`的警告。
</div>


<div class="myTip">

**问：如果 v 有副作用， 那么 v += e 为什么不等价于 v = v + e ?**  
**答**: 计算 v += e 只会求一次 v 的值，而计算 v = v + e 则会求两次 v 的值。后一种情况下，对 v 求值可能引起的任何副作用也会出现两次。例如
```C
a[i++] +=2;
a[i++] = a[i++] + 2;  /* i 既被修改又被使用，结果未定义 */
```
**问：++ 和 -- 是否可以处理 float 型变量？**  
**答**：可以。但极少用

**问： C 语言为什么提供 ++ 和 -- 运算符?**  
**答**: C 语言从 Ken Tompson 早期的 B 语言中继承了 ++ 和 --, Thompson 创造这类运算符是因为 B 语言编译可以对 ++i 产生 比 i = i + 1 更简洁的翻译。而对于现代编译器而言，使用 ++ 和 -- 不会使编译后的程序变得更短或更快。

**问：丢掉表达式的值意味着什么？**  
**答**: 例如，i+1; 执行这条语句时，我们计算出了 i+1 的值，但我们没有保存此值，因此这个值被丢弃了。 例如， i=1;  把 1 赋值给 i, 整个表达式的值为 1, 这个值被丢掉了。编写语句的目的是改变 i 的值，因此丢掉表达式的值是可以的。

</div>


<h3 class = 'auto-sort-sub'>选择语句</h3>
<h4 class = 'auto-sort-sub1'>C89 中的布尔值</h4>

C89 程序员通常使用 TRUE 和 FALSE 这样的名字定义宏：
```C
#define TRUE  1
#define FALSE 0

int flag;
flag = TRUE;
if(flag)...

```


<h4 class = 'auto-sort-sub1'>C99 中的布尔值</h4>

从 C99 开始支持布尔型 `_Bool`, 同时 C99 提供了一个新的头文件`<stdbool.h>`, 该头文件提供了`bool`宏, 用来代表 \_Bool, 以及 true 和 false 宏

```C
#include <stdbool.h>

bool flag;
flag = false;

```

<div class="myTip">

**问: 为什么 C99 用 _Bool 表示布尔类型？**  
**答**: C99 没有采用 bool 和 boolean 这些名字是因为已有的程序中可能已经定义的这些名字。C89 标准指出，以`—`后第一个字母大写的名字为保留字，所以 \_Bool 可以用 


</div>


</div>
</div>
















```C
extern int a;     // 声明一个全局变量 a
int a;            // 定义一个全局变量 a
extern int a =0;  // 一旦给予赋值，一定是定义
int a =0;         //定义一个全局变量 a，并给初值
```

- 变量在使用前就要被定义或者声明
- 在一个程序中，变量只能定义一次，却可以声明多次
- 定义分配存储空间，而声明不会



<div class="myTip">

在 C 语言中，所有变量都必须先声明后使用，声明通常放在函数开始处可执行语句之前。

<div></div >
printf 函数并不是 C 语言本身的一部分，它是标准库函数中的一个有用函数。
<span class="myAnnotate">
ANSI
</span> 标准中定义了 printf 函数的行为。
<div class="js-annotate annotate hidden">
American National Standards Institute
</div>

</div>


<div class = 'data-section default-folding'>
<h2 class = 'section-title'><label class = 'block-number'>2</label>类型、运算符与表达式</h2>
<div class = 'folding-area'>

- 运算符用于指定要对变量与常量进行的操作
- 表达式用于把变量与常量组合起来产生新的值
- 类型决定该对象可取值的集合以及可以对该对象施行的运算

<h3 class = 'auto-sort-sub'>变量名</h3>

- 区分大小写
- 局部变量使用短名字
- 全局变量使用长名字

<h3 class = 'auto-sort-sub'>数据类型与大小</h3>
C 对字符串的长度没有限制`，但程序必须扫描完整个字符串才能决定这个字符串的长度。 标准库函数 `strlen(s)` 用于返回其字符串变量 s 的长度，不包括末尾的 `\0`

- `'x'`表示产生字母 x 的数值，`"x"`表示包含字母 x 的数组

```C
/* 自定义函数 */
/* strlen : 返回 s 的长度 */
int strlen(char s[])
{
    int i = 0;
    while(s[i] != '\0') ++i;
    return i;
}
```
</div>


<h4 class = 'auto-sort-sub1'>枚举常量</h4>

```C
enum boolean {No, YES}   // 0, 1
enum months {JAN = 1, FEB, MAR} // FEB=2, MAR=3
```

<div class="myNote">

- 同一枚举中各个名字的值可以相同
- 枚举是使常量值与名字相关联的又一种方便的方法，其相对于 #define 语句的优势在于常量值可以自己控制
</div>


<h4 class = 'auto-sort-sub1'>const 限定符</h4>

```C

// 值不能改变
const double e = 2.71828182845905; 

// 数组所有元素的值不能改变
const char msg[] = "warning";
int strlen(const char[]);

```

> `&&`运算符比`||`的优先级高

<h3 class = 'auto-sort-sub'>类型转换</h3>

<h4 class = 'auto-sort-sub1'>隐式类型装换</h4>

在执行算术运算时, 计算机要求操作数有相同的大小和相同的存储方式, 然而, C 语言在表达式中可以混合使用基本类型. 当然, 在这种情况下 C 编译器需要生成一些指令将某些操作数转换成不同类型,使硬件可以对表达式进行计算.

```C
    int a;
    float b = 2.3;
    a = b;  //->  2
```
<div class="myWarning">

当有符号操作数和无符号操作数组合时, 会把有符号操作数装换为无符号的值. 这条规则可能导致隐蔽的编程错误. 所以最好避免使用无符号整数, 特别是不要把无符号整数与有符号整数混合使用.
</div>

<h4 class = 'auto-sort-sub1'>强制类型转换</h4>

```C
    float quotient;
    int dividend = 11;
    int divisor = 5;
    quotient = dividend / divisor;  //->  2
    quotient = (float)dividend / divisor;  //->  2.2
```

```C
    long i;
	int j = 100000;

	i = j * j;   //  WRONG, 值溢出 返回错误值, j*j 的值没有自动升级为 long 类型
	i = (long)j * j;  // 强制类型转换 
```


<div class="myWarning">

C 语言的赋值与 Java 的赋值是不一样的, 对于 i = j*j 的`=`应该理解为为操作符, 而不能理解为 Java 的赋值语句
</div>


<h3 class = 'auto-sort-sub'>类型定义 typedef</h3>

```C
typedef int Bool;

Bool flag; /* Bool 类型等价于 int */
```

<div class="myTip">

也可以利用宏来定义 `#define BOOL int`;
</div>



<h4 class = 'auto-sort-sub1'>类型定义的优点</h4>

<div><span class='header5'>可读性强<span></div>
<div><span class='header5'>容易修改<span></div>

比如, 变量 cash_in 和 变量 cash_out 用于存储美元
```C
typedef float Dollars;      /* 利于修改, 如修改成 double 型 */

Dollars cash_in, cash_out;  /* 可读性更强 */
```

<div><span class='header5'>可移植性<span></div>

比如, `int`对于不同的机器可以是 32 位或 16 位, 为了更大的可移植性可以考虑使用 typedef 定义新的整数类型名


<div class="myTip">

C 语言库自身使用`typedef`为那些由于不同 C 语言实现而不同的类型创建类型名； 这些类型名通常以`_t`结尾, 比如ptrdiff_t, size_t, wchat_t

```C
typedef long int ptrdiff_t;
typedef unsigned long int size_t;
typedef int wchar_t;
```

<span class="myKey"> C99 </span>
 <stdint.h> 使用 typedef 定义了固定位数的整数类型名. 如, `int32_t`
</div>


<h3 class = 'auto-sort-sub'>sizeof 运算符</h3>

> sizeof 运算符允许程序存储指定类型值所需空间的大小

```C
sizeof(int);   // 一般为 4
sizeof(i+j);
```
<span class='myKey'>C89</span>
最安全写法 `printf("Size of int: %lu\n", (unsigned long) sizeof(int));`

<span class='myKey'>C99</span>
 `printf("Size of int: %zu\n", sizeof(int));`


</div>
</div>




