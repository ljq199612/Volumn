# 具体数学

<div class = 'data-section default-folding'>
<h2 class = 'section-title'>第<label class = 'block-number'> 1 </label>章</h2>
<div class = 'folding-area'>

<h3 class = 'auto-sort-sub'>汉诺塔</h3>


$T_n$ 表示将 $n$ 个盘从"杆A"移动到"杆B"的`最小`移动次数。 显然，$T_0=0, T_1=1, T_2=3$

</div>
</div>

# 集合论与图论


<div class = 'data-section default-folding'>
<h2 class = 'section-title'>附录</h2>
<div class = 'folding-area'>

$A\cap(\displaystyle\bigcup_{\alpha\in I} B_\alpha)=\displaystyle\bigcup_{\alpha\in I}(A\cap B_\alpha)$  

$A\cup(\displaystyle\bigcup_{\alpha\in I} B_\alpha)=\displaystyle\bigcap_{\alpha\in I}(A\cup B_\alpha)$  

$(\displaystyle\bigcup_{\alpha\in I} A_\alpha)^c=\displaystyle\bigcap_{\alpha\in I}A_\alpha^c$  

$(\displaystyle\bigcap_{\alpha\in I} A_\alpha)^c=\displaystyle\bigcup_{\alpha\in I}A_\alpha^c$  

**设 $A, B$ 为有穷集, 则**  

$\quad|A\times B|=|A|\cdot|B|$  

$\quad|A\cup B|=|A|+|B|-|A\cap B|$  

**设 $f\ : \ X\to Y, A\sube Y, \ B\sube Y$, 则**  

$\quad f^{-1}(A\cup B)=f^{-1}(A)\cup f^{-1}(B)$  

$\quad f^{-1}(A\cap B)=f^{-1}(A)\cap f^{-1}(B)$  

$\quad f^{-1}(A\cup B)=f^{-1}(A)\cup f^{-1}(B)$  

$\quad f^{-1}(A\cup B)=f^{-1}(A)\cup f^{-1}(B)$  

$\quad f^{-1}(A\Delta B)=f^{-1}(A)\Delta f^{-1}(B)$  

$\quad f^{-1}(A^c)=(f^{-1}(A))^c$  
</div>
</div>
  
<div class = 'data-section default-folding'>
<h2 class = 'section-title'>第 <label class = 'block-number'>1</label> 章：集合及其运算</h2>
<div class = 'folding-area'>

<h3 class = 'auto-sort-sub'>集合的概念</h3>

通常把一些互不相等的东西放在一起所形成的整体叫做一个`集合`。构成集合的每个东西叫做集合的`元素`。

**集合的表示方式**

- `枚举法` $A = \{1,2,3\}$
- `描述法` $\{x|P(x)\}$, $E=\{n|n\in\Z \land n 是偶数\}$

<div class="myTip">

- $\land$ 或简单的用 `,` 表示`并且` 
- 存在一个集合该集合中不包含任何元素，称为空集。记为 $\empty$
- 空集为任意集合的子集且空集唯一
</div>


<div class="myFormula">

**子集**  
设 A, B 为两个集合，如果 A 中的每个元素都是 B 中的元素，则称 A 为 B 的子集，记为 $A\sube B$; 

**真子集**  
如果 $A\sube B$ 且 $\exist\ x\in B$, 使得 $x\notin A$, 则称 A 为 B 的真子集，记为 $A\sub B$

**全集**  
在许多实际问题中，常以某个集合 $S$ 为出发点，而所涉及的集合都是 $S$ 的子集。这个包含所考虑的所有集合的集合 S, 称为该问题的全集

**集合相等**  
设 A, B 两个集合，如果 $A\sube B,\ B\sube A$ 则称 A 与 B 相等，记为 $A=B$
- 例如，$\{x\in\R\mid x^2-5x+6=0\}=\{2,3\}$

**幂集**  
集合 S 的所有子集构成的集合，称为 S 的幂集, 记为 $2^S$ 或 $\mathscr{P}(S)$
- 例如， $2^\empty = \{\empty\},\quad   2^{\{1,2\}}=\{\empty , \{1\}, \{2\},\{1,2\}\}$

**并集**  
设 A, B 为任意的两个集合, 至少属于集合 A 与集合 B 之一的那些元素构成的集合称为 A 与 B 的并集,记为 $A\cup B$
$$A \cup B = \{x\mid x\in A\lor x\in B\}$$
- 例如，$\{1,2\}\cup\{2,3\}=\{1,2,3\}$

**交集**  
设 A, B 为任意的两个集合, 由既属于集合 A 又集合 B 的那些元素构成的集合称为 A 与 B 的交集,记为 $A\cap B$
$$A \cap B = \{x\mid x\in A\land x\in B\}$$
- 例如，$\{1,2\}\cap\{2,3\}=\{2\}$

**差集**  
设 A, B 为任意的两个集合, 由属于集合 A 但不属于集合 B 的所有元素构成的集合称为 A 与 B 的差集,记为 $A\backslash B$
$$A \backslash B = \{x\mid x\in A\land x\notin B\}$$
- 例如，$\{1,2\}\backslash\{2,3\}=\{1\}$

**补集**  
如果 A 为 全集 S 的子集，则差集 $S\backslash A$ 称为集合 A 对集合 S 的补集，记为 $A^c$ 
$$x\notin A \iff x\in A^c$$

**对称差**  
设 A, B 为任意的两个集合，$A\backslash B$ 与 $B\backslash A$ 的并集称为 A 与 B 的对称差，记为 $A\Delta B$
$$\begin{aligned}
A\Delta B &\iff(A\cup B)\backslash (A\cap B)\\
&\iff(A\backslash B)\cup (B\backslash A)=(x\in A\land x\notin B)\lor(x\notin A \land x\in B)\\
\end{aligned}$$

- 例如， $\{1,2\}\Delta\{2,3\}=\{1,3\}$
</div>


<div class="myFormula">

设 S 为全集，A, B, C 为 S 的子集，则

- $A\cap(B\cup C)=(A\cap B)\cup(A\cap C)$

<div class="myProblem no-shadow">
<div class="myQuestion">
</div>
<button class="toggleAnswer answer-button">证明:</button>
<div class="myAnswer hidden">

**分析：**  
$\forall x,\ x\in A\cap(B\cup C)$  
$\iff x\in A\land x\in(B\cup C)$  
$\iff x\in A\land (x\in B\lor x\in C)$  
$\iff (x\in A\land x\in B) \lor (x\in A \land x\in C)$  
$\iff x\in (A\cap B) \cup (A\cap C)$  

先证 $A\cap(B\cup C)\sube (A\cap B)\cup (A\cap C)$  
再证 $A\cap(B\cup C)\supe (A\cap B)\cup (A\cap C)$  

</div>
</div>

- $C\backslash(A\cup B)=(C\backslash A)\cap(C\backslash B)$  

- $(A\Delta B)\Delta C=A\Delta (B\Delta C)$

<div class="myProblem no-shadow">
<div class="myQuestion">
</div>
<button class="toggleAnswer answer-button">证明:</button>
<div class="myAnswer hidden">

$\because x\in A\Delta B \iff(x\in A\land x\notin B)\lor(x\notin A \land x\in B)$  
$\quad x\notin A\Delta B$  
$\quad\iff(x\notin A \lor x\in B)\land(x\in A\lor x\notin B)$  
$\quad\iff(x\notin A\land x\notin B)\lor(x\in A\land x\in B)$  

$\therefore x\in(A\Delta B)\Delta C$  
$\quad \iff(x\in A\Delta B \land x\notin C)\lor(x\notin A\Delta B\land x\in C)$  
$\quad \iff(x\in A\land x\notin B\land x\notin C)\lor (x\notin A\land x\in B\land x\notin C)$  
$\qquad\quad \lor(x\notin A\land x\notin B\land x\in C)\lor (x\in A\land x\in B\lor x\in C$  

$\therefore x\in A\Delta(B\Delta C)$  
$\quad \iff x\in (B\Delta C)\Delta A$  
$\quad \iff(x\in A\land x\notin B\land x\notin C)\lor (x\notin A\land x\in B\land x\notin C)$  
$\qquad\quad \lor(x\notin A\land x\notin B\land x\in C)\lor (x\in A\land x\in B\lor x\in C$  
$\quad\iff x\in (A\Delta B)\Delta C$  
</div>
</div>

- $\empty\Delta A=A$

- $A\cap(B\Delta C)=(A\cap B)\Delta (A\cap C)$

<div class="myProblem no-shadow">
<div class="myQuestion">
</div>
<button class="toggleAnswer answer-button">证明:</button>
<div class="myAnswer hidden">

$A\cap (B\Delta C)$  
$=A\cap (B\backslash C\cup C\cap B)$  
$=(A\cap B\backslash C)\cup(A\cap C\backslash B)$  

$(A\cap B)\Delta (A\cap C)$  
$=(A\cap B)\backslash (A \cap C)\cup (A\cap C)\backslash(A\cap B)$  
$=(A\cap B)\backslash C\cup(A\cap C)\backslash B$  
$=(A\cap B\backslash C)\cup (A\cap C\backslash B)$  
</div>
</div>

</div>

<div class="myFormula">

**集簇**  
如果 $I$ 为任意一个集合，对 $I$ 中每个元素 $\alpha$ 都有一个唯一的集合与之对应，这个集合记为 $A_\alpha$, 那么所有这些 $A_\alpha$ 形成的集合称为集簇，记为 $\{A_\alpha\}_{\alpha\in I}$, 其中 $I$ 称为标记集

**集簇的并集**  
$$\bigcup_{\alpha\in I}A_\alpha =\{x\mid \exist\alpha\in I 使得 x\in A_\alpha\}$$

**集簇的交集**  
$$\displaystyle\bigcup_{\alpha\in I}A_\alpha =\{x\mid \forall\alpha\in I,\ x\in A_\alpha\}$$

- 例如，设 $I = \{x\in \R\mid 0\lt x\le 1\},\ \forall x\in \R, A_x=\{y\in\R\mid 0\lt y \lt x\}$, 则  
 $$\displaystyle\bigcup_{x\in I} A_x=\{x\in \R \mid 0\lt x\lt 1\},\ \displaystyle\bigcap_{x\in I}A_x=\empty$$

**笛卡尔乘积**  
设 A 和 B 为任意两个集合，则称集合 $\{(a,b)\mid a\in A\land b\in B\}$ 为 A 与 B 的笛卡尔乘积，记为 $A\times B$
- 例如，$X=\{1,2\},\ Y=\{3,4,5\}$  
$\qquad X\times Y=\{(1,3),(1,4),(1,5),(2,3),(2,4),(2,5)\}$  
$\qquad Y\times X=\{(3,1),(3,2),(4,1),(4,2),(5,1),(5,2)\}$  
</div>


<h3 class = 'auto-sort-sub'>基数</h3>

设 $A$ 为一个集合，如果 $A=\empty$, 其基数定义为 0, 如果 $A\not = \empty$ 且存在一个自然数 $n$ 使得 $A$ 与集合 $\{1,2,3,\dots n\}$ 之间存在一个`一一对应`，则定义 $A$ 的基数为 $n$, 记为 $|A|$

<div class="myFormula">

设 $A, B$ 为有穷集, 则  
$|A\times B|=|A|\cdot|B|$
$|A\cup B|=|A|+|B|-|A\cap B|$  
</div>

<div class="myProblem ">
<div class="myQuestion">

**例题：** 在1000名大学毕业生的调查中,每个人至少掌握了一门外语,其中804人掌
握了英语,205人掌握了日语,190人掌握了俄语,125人既掌握了英语又掌握
了日语,57人既掌握了日语又掌握了俄语,85人既掌握了英语又掌握了俄语。
试求在这1000名大学生中,英语、日语、俄语全掌握的有多少人?
</div>
<button class="toggleAnswer answer-button">解:</button>
<div class="myAnswer hidden">

解: 设A, B, C分别为掌握了英语、日语、俄语的大学生的集合,则  
$\qquad |A\cup B\cup C|$  
$\qquad |A|+|B|+|C|-|A\cap B|-|A\cap C|-|B\cap C| +|A\cap B\cap C|$  

即，
$1000 = 804+205+190-125-85-57+|A\cap B\cap C|$

</div>
</div>



</div>
</div>

<div class = 'data-section default-folding'>
<h2 class = 'section-title'>第 <label class = 'block-number'>2</label> 章：映射</h2>
<div class = 'folding-area'>

<h3 class = 'auto-sort-sub'>命题</h3>

`命题` 判断一件事情的语句叫命题。  
`充分条件` "若 p, 则 q" 为真命题, 叫做由 p 推出 q, 称 p 是 q 的充分条件， 记作 $p\implies q$  
`必要条件` $p\impliedby q$ 称 p 是 q 的必要条件  
`充要条件` $p\iff q$, 称 p, q 互为充要条件   

**命题与集合的关系**  

若命题$p\leftrightarrow $集合 $A$, 命题 $q\leftrightarrow$集合 $B$, 则  
- $p\implies q \qquad\leftrightarrow\qquad A\sube B$  
- $p\impliedby q \qquad\leftrightarrow\qquad A\supe B$  
- $p\implies q,q\ \cancel{\implies}\ p \qquad\leftrightarrow\qquad A\sub B$  
- $p\ \cancel{\implies}\ q,q\implies p \qquad\leftrightarrow\qquad A \supset B$  
- $p\iff q \qquad\leftrightarrow\qquad A = B$  

<h3 class = 'auto-sort-sub'>映射</h3>

<div class="myFormula">

**映射**  
设 $X$ 和 $Y$ 为两个非空集合。有一法则 $f$, 使对于 $X$ 中的每个元素 $x$ 都有 $Y$ 中唯一确定的元素 $y$ 与之对应。则 $f$ 称为从 $X$ 到 $Y$ 的映射，通常记为 $f\ :\ X\to Y$
- 例如，设集合 $X=\{-1,0,1\}$, 集合 $Y=\{0,1,2\}$, $f=\{(-1,1),(0,0),(1,1)\}$, 则 $f$ 为从集合 $X$ 到集合 $Y$ 的映射

**单射**  
设 $f\ :\ X\to Y$, 如果 $\forall x_1,x_2\in X$, 只要 $x_1\not = x_2$, 就有 $f(x_1)\not = f(x_2)$, 则称 $f$ 为从 $X$ 到 $Y$ 的单射

**满射**  
设 $f\ : \ X\to Y$, 如果 $\forall y\in Y,\ \exist x\in X$, 使得 $f(x)=y$, 则称 $f$ 为从 $X$ 到 $Y$的满射

**双射（一一对应）**  
`单射`+`满射`

**象**  
设 $f$ 为从集合 $X$ 到集合 $Y$ 的映射 $f\ :\ X\to Y$, 如果 $y=f(x)$, 则称 $y$ 为 $x$ 在 $f$ 下的象，称 $x$ 为 $y$ 下的`原象`, $X$ 称为 $f$ 的`定义域`; 集合 $\{f(x)\mid x\in X\}$ 称为 $f$ 的`值域`，记为 $Im(f)$

设 $f\ :\ X\to Y,\ A\sube X,\ A$ 在 $f$ 下的象定义为
$$f(A)=\{f(x)\mid x\in A\}$$
- 例如，设 $f\ :\ \{-1,0,1\}\to \{-1,0,1\}, \ f(x)=x^2$, 则 $f(\{-1,0\})=\{0,1\}$  

**限制**  
设 $f\ :\ X\to Y,\ A\sube X$, 当把 $f$ 的定义域限制在 $A$ 上时，就得到了一个 $\psi: A\to Y, \forall x\in A, \psi(x)=f(x),\  \psi$ 称为 $f$ 在 $A$ 上的限制，常用 $f|A$ 表示

**恒等映射**  
设 $f\ : \ X\to X$, 如果 $\forall x\in X,f(x)=x$, 则称 $f$ 为 $X$ 上的恒等映射，常记为 $I_X$

**复合**  
设 $f\ :\ X\to Y, \ g\ :\ Y\to Z $ 为映射，映射 $f$ 与 $g$ 的复合$g\circ f\ :\ X\to Z$ 定义为 $(g\circ f)(x)=g(f(x))$

- $(h\circ g)\circ f=h\circ(g\circ f)$

**逆**  
若 $f\ ：\ X\to Y$ 为一个双射， 则 $g\ :\ Y\to X,\ g=\{(y,x)\mid(x,y)\in f\}$ 称为 $f$ 的逆映射，记为 $g=f^{-1}$
- 例如，$集合 X=\{1,2,3\},\ Y=\{4,5,6\},\ f=\{(1,4),(2,5),(3,6)\}$ 为从 $X$ 到 $Y$ 的双射，则 $f^{-1}=\{(4,1),(5,2),(6,3)\}$

- $f\ 左可逆\iff f\ 为单射$  
- $f\ 右左可逆\iff f\ 为满射$  

</div>


**设 $f\ : \ X\to Y, A\sube Y, \ B\sube Y$, 则**  

$\quad f^{-1}(A\cup B)=f^{-1}(A)\cup f^{-1}(B)$  

$\quad f^{-1}(A\cap B)=f^{-1}(A)\cap f^{-1}(B)$  

$\quad f^{-1}(A\cup B)=f^{-1}(A)\cup f^{-1}(B)$  

$\quad f^{-1}(A\cup B)=f^{-1}(A)\cup f^{-1}(B)$  

$\quad f^{-1}(A\Delta B)=f^{-1}(A)\Delta f^{-1}(B)$  

$\quad f^{-1}(A^c)=(f^{-1}(A))^c$  



<h3 class = 'auto-sort-sub'>置换</h3>
<div class="myFormula">

**置换**  
`有穷集合` $S$ 到自身的一一对应称为 $S$ 上的一个置换。如果 $|S|=n$, 则 $S$ 上的置换就说成是 $n$ 次置换

设 $S=\{1,2,3,\dots,n\},\ \sigma\ :\ S\to S $ 为 $S$ 上的一个置换。 $\sigma(1)=k_1,\ \sigma(2)=k_2,\cdots,\ \sigma(n)=k_n$, (`列的次序无关紧要`)，即
$$
\sigma=
\begin{pmatrix}
1&2&\cdots&n\\
k_1&k_2&\cdots&k_n
\end{pmatrix}
$$

**循环置换**  
设 $\sigma$ 为 $S$ 上的一个 $n$ 次置换，若 $i_1\sigma=i_2,\ i_2\sigma=i_3,\cdots,\ i_{k-1}\sigma=i_k,\ i_k\sigma=i_1$, 而 $\forall i\in S\backslash \{i_1,i_2,\cdots,i_k\},\ i\sigma=i$ （1-循环置换）, 则称 $\sigma$ 为一个 $k$ 循环置换，记为 $(i_1i_2\cdots i_k)$. `2-循环置换称为对换`
- 例， 设 $S=\{1,2,3,4,5\}$, 则  
$$
(1,2,3)=(1,2)(2,3)= \begin{pmatrix}1&2&3&4&5\\2&3&1&4&5\end{pmatrix}
$$


</div>

<div class="myWarning">

- 每个置换都能被分解成若干个没有共同数字的循环置换的乘积。如果`不计`这些`循环置换的顺序`以及略去的 1-循环置换，这个分解是唯一的。
- 当 $n\ge 2$ 时，每个 $n$ 次置换都能被分解成若干个对换的乘积
- 若把置换分解成若干个对换的乘积，则对换个数的奇偶性是不变的
- 能被分解成偶数个`对换`的置换称为`偶置换`

例如，
$$\begin{aligned}
\begin{pmatrix}
1&2&3&4&5&6&7\\2&4&3&1&6&5&7
\end{pmatrix}
&=(1,2,4)(3)(6,5)(7)\\
&=(1,2)(2,4)(3)(5,6)(7)
\end{aligned}$$

> 注意， $(1,2,4)=(2,4,1)=(4,1,2)$ 

</div>
<br>
<div class="myTip">

讨论置换时，我们用 $\alpha\beta$ 表示复合 $\beta\circ\alpha$, 即如果 $i\in S$，则用 $(i)\alpha$ 表示 $i$ 在 $\alpha$ 下的像，简记为 $i\alpha$, 当然也有人采用相反的顺序表示置换的复合。
</div>

**例题** 设 $S=\{1,2,3\}$, $\alpha$ 和 $\beta$ 为 $S$ 上的两个置换
$$
\alpha=\begin{pmatrix}1&2&3\\
1&3&2\end{pmatrix},
\ \beta=\begin{pmatrix}1&2&3\\
2&3&1\end{pmatrix}
$$
则
$$
\alpha\beta=
\begin{pmatrix}1&2&3\\1&3&2\end{pmatrix}
\begin{pmatrix}1&3&2\\2&1&3\end{pmatrix}
=\begin{pmatrix}1&2&3\\2&1&3\end{pmatrix}
$$

<h3 class = 'auto-sort-sub'>代数运算</h3>

<div class="myFormula">

**代数运算**  
设 $X,\ Y,\ Z$ 为任意三个非空集合。一个从 $X\times Y$ 到 $Z$ 的映射 $\psi$ 称为 $X$ 与 $Y$ 到 $Z$ 的一个二元（代数运算）。当 $X=Y=Z$ 时，则称 $\psi$ 为 $X$ 的二元（代数）运算

**代数系**  
一个集合及其在该集合上定义的若干代数运算称为一个代数系

**交换律**  
设 $\circ$ 为集合 $X$ 上的一个二元代数运算，如果 $\forall a,b\in X$, 恒有 $a\circ b=b\circ a$, 则称二元代数运算 $\circ$ 满足交换律

**结合律**  
设 $\circ$ 为集合 $X$ 上的一个二元代数运算，如果 $\forall a,b\in X$, 恒有 $(a\circ b)\circ c=a\circ(b\circ c)$, 则称二元代数运算 $\circ$ 满足结合律

**分配律**  
设 $+$ 与 $\circ$ 为集合 $X$ 上的两个二元代数运算， 如果 $\forall a,b,c\in X$，恒有
$$a\circ (b+c)=a\circ b+a\circ c$$
则称二元运算 $\circ$ 对 $+$ 满足`左分配律`,  如果 $\forall a,b,c\in X$，恒有
$$(b+c)\circ a=b\circ a+c\circ a$$
则称二元运算 $\circ$ 对 $+$ 满足`右分配律`  

**单位元素**  
设 $(X,\circ)$ 为一个代数系，如果 存在一个元素 $e\in X$ 使得对任意的 $x\in X$ 恒有 $e\circ x=x\circ e = x$, 则称 $e$ 为 $\circ$ 的单位元素

**逆元素**  
设 $(X,\circ)$ 为一个代数系，$\circ$ 有单位元素 $e,\ a\in X$, 如果 $\exist b\in X$, 使得 $a\circ b=b\circ a=e$,则称 $b$ 为 $a$ 的逆运算

**同构**  
设 $(S,+)$ 与 $(T, \oplus)$ 为两个代数系，如果存在一个一一对应 $\psi\ :\ S\to T$, 使得 $\forall x,y\in S$, 有 
$$\psi(x+y)=\psi(x)\oplus\psi(y)$$
则称代数系 $(S, +)$ 与 $(T,\oplus)$ 同构，记为 $S\cong T$, $\psi$ 称为这两个代数系之间的一个同构

- 设 $(S,+,\circ)$ 与 $(T, \oplus, \times)$ 为两个代数系，如果存在一个一一对应 $\psi\ :\ S\to T$, 使得 $\forall x,y\in S$, 有 
$$\psi(x+y)=\psi(x)\oplus\psi(y)$$
$$\psi(x\circ y)=\psi(x)\times\psi(y)$$
则称代数系 $(S, +,\circ)$ 与 $(T,\oplus,\times)$ 同构，记为 $S\cong T$, $\psi$ 称为这两个代数系之间的一个同构

</div>

</div>
</div>


<div class = 'data-section default-folding'>
<h2 class = 'section-title'>第 <label class = 'block-number'>3</label> 章：关系</h2>
<div class = 'folding-area'>

> 关系是笛卡尔乘积的子集

<div class="myFormula">

**二元关系**  
- `定义1`: 设 $X,Y$ 为集合， $R:X\times Y\to \{T,F\}$ 称为 $X$ 与 $Y$ 的一个二元关系  

    $\forall(x,y)\in X\times Y$,     
    如果 $R(x,y)=T$, 则 $x$ 与 $y$ 符合关系 R, 记作 $xRy$  
    如果 $R(x,y)=F$, 则 $x$ 与 $y$ 不符合关系 R, 记作 $x\cancel{R}y$    

    例如，$N=\{1,2,3,\cdots\}\qquad 2\le 6,\quad \le : N\times N\to \{T, F\}$

- `定义2`：设 $X,Y$ 为集合，$R\sube X\times Y$, 则称 $R$ 为 $X$ 与 $Y$ 的一个关系

    $\forall(x,y)\in X\times Y$,     
    如果 $R(x,y)\in R$, 则  $x$ 与 $y$ 符合关系 R, 记作 $xRy$  
    如果 $R(x,y)\not \in R$, 则 $x$ 与 $y$ 不符合关系 R, 记作 $x\cancel{R}y$    

- `定义3`：设 $X,Y$ 为集合，$f: X\to 2^Y$, 则称 $f$ 为 $X$ 与 $Y$ 的一个关系

    例如，函数关系 $（x,\ f(x)）$


**n 元关系**  
设 $X_1,X_2,\cdots X_n$ 为集合， $R\sube X_1\times X_2\times\cdots\times X_n$, $R$ 称为 $X_1,X_2,\cdots X_n$ 的一个 $n$ 元关系

**恒等关系**  
设 $I\sube X\times X$， $I=\{(x,x)\mid x\in X\}$

**自反关系**  
设 $R\sube X\times X, \ \forall x\in X, xRx,$ 则 $R$ 是自反的

**反自反关系**  
设 $R\sube X\times X, \ \forall x\in X, x\cancel{R} x,$ 则称 $R$ 是反自反的

**对称关系**  
设 $R\sube X\times Y, \ (x,\ y)\in X\times Y$ ,如果 $xRy$ 则 $yRx$

**反对称关系**  
设 $R\sube X\times Y, \ (x,\ y)\in X\times Y$ ,如果 $xRy,\ yRx$, 则 $x=y$

**传递关系**   
设 $R\sube X\times X$ 如果 $xRy,\ yRz$, 则 $xRz$, 

**关系的逆**  
设 $R\sube X\times X$, $R^{-1}=\{(y,x)\mid(x,y)\in \R\}$

</div>

<div class="myTip">

**二元关系的表示法：**
- 前缀：$R(x,y)$
- 中缀：$xRy$
- 后缀：$(x,y)R$
</div>

<div class="myProblem no-shadow">
<div class="myQuestion">
</div>
<button class="toggleAnswer answer-button">例题</button>
<div class="myAnswer hidden">

**例题1**: 判断下列二元关系是否为自反的。
设集合 $X = \{1,2,3,4\}$  

集合 $X$ 上的恒等关系 $I_X=\{(1,1),(2,2),(3,3),(4,4)\}$   `是`  
集合 $X$ 上的二元关系 $R=\{(1,1),(1,2),(2,2),(2,4)(3,3),(4,4)\}$   `是`  
集合 $X$ 上的二元关系 $R=\{(1,1),(2,3),(3,2)\}$   `不是`  
集合 $X$ 上的二元关系 $R=\{(1,1),(2,2),(3,3)\}$   `是` （注意，R 中没有元素4，定义中条件的假设就不存在）  
集合 $X$ 上的二元关系 $R=\{(1,3)\}$   `不是`  

**例题2**: 判断下列二元关系是否为反自反的。
设集合 $X = \{1,2,3,4\}$  

集合 $X$ 上的恒等关系 $I_X=\{(1,1),(2,2),(3,3),(4,4)\}$   `不是`  
集合 $X$ 上的二元关系 $R=\{(1,1),(1,2),(2,2),(2,4)(3,3),(4,4)\}$   `不是`  
集合 $X$ 上的二元关系 $R=\{(1,1),(2,3),(3,2)\}$   `不是`  
集合 $X$ 上的二元关系 $R=\{(1,1),(2,2),(3,3)\}$   `不是`  
集合 $X$ 上的二元关系 $R=\{(1,3)\}$   `是`  

**例题3**: 判断下列二元关系是否为对称的。
设集合 $X = \{1,2,3,4\}$  

集合 $X$ 上的恒等关系 $I_X=\{(1,1),(2,2),(3,3),(4,4)\}$   `是`  
集合 $X$ 上的二元关系 $R=\{(1,1),(1,2),(2,2),(2,4)(3,3),(4,4)\}$   `不是`  
集合 $X$ 上的二元关系 $R=\{(1,1),(2,3),(3,2)\}$   `是`  
集合 $X$ 上的二元关系 $R=\{(1,1),(2,2),(3,3)\}$   `是`  
集合 $X$ 上的二元关系 $R=\{(1,3)\}$   `不是`  

**例题4**: 判断下列二元关系是否为反对称的。
设集合 $X = \{1,2,3,4\}$  

集合 $X$ 上的恒等关系 $I_X=\{(1,1),(2,2),(3,3),(4,4)\}$   `是`  
集合 $X$ 上的二元关系 $R=\{(1,1),(1,2),(2,2),(2,4)(3,3),(4,4)\}$   `不是`  
集合 $X$ 上的二元关系 $R=\{(1,1),(2,3),(3,2)\}$   `不是`  
集合 $X$ 上的二元关系 $R=\{(1,1),(2,2),(3,3)\}$   `是`  
集合 $X$ 上的二元关系 $R=\{(1,3)\}$   `是`  

**例题5**: 判断下列二元关系是否为传递的。
设集合 $X = \{1,2,3,4\}$  

集合 $X$ 上的恒等关系 $I_X=\{(1,1),(2,2),(3,3),(4,4)\}$   `是`  
集合 $X$ 上的二元关系 $R=\{(1,2),(1,3),(2,3),(2,4)(3,3),(3,4)\}$   `是`  
集合 $X$ 上的二元关系 $R=\{(1,1),(2,3),(3,2)\}$   `不是`  
集合 $X$ 上的二元关系 $R=\{(1,1),(2,2),(3,3)\}$   `是`  
集合 $X$ 上的二元关系 $R=\{(1,3)\}$   `是`  
</div>
</div>

<div class="myWarning">

[逻辑学中，为什么前提为假而命题为真？(知乎)](https://www.zhihu.com/question/21020308?rf=28523655)

比如，当我们说「今天会下雨或者今天不会下雨的时候」，这个命题为真当然是因为它和事实相符，但是即便我说的不是今天而是一万年之后，那个未来事实尚未出现，这个命题在`经典逻辑`中依然是真的（一些非经典逻辑则会采取不同的处理方式）。换而言之，这个复合命题的真并`不是「符合」`出来的，而是`约定`出来的。同样地，我们在解释蕴涵连接词的真值表的时候仅仅也是一种约定的方式。我们当然在别的不同的逻辑里面有别的不同的约定方式，那些约定方式或许可以避免这种让你觉得不自然的地方。

</div>



<h3 class = 'auto-sort-sub'>关系的运算</h3>

</div>
</div>
