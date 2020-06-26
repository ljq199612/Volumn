
## 第一章

> 说明：凡是带有`*`标记的答案都不保证其正确性，如`证明*`

<div class="myProblem">
<div class="myQuestion">
<b class = 'auto-sort'>
试证明任何两个有理数之间至少存在一个无理数。
</b>
</div>
<button class="toggleAnswer answer-button">证明:</button>
<div class="myAnswer hidden">

设 $a$ 与 $b$ 是有理数且 $a\lt b$, 则 $a+\frac{b-a}{\sqrt{2}}$ 是无理数且位于 $a$ 与 $b$ 之间
</div>
</div>

<div class="myProblem">
<div class="myQuestion">
<b class = 'auto-sort'>
试证明 $\sqrt n $ 是无理数，其中 $n$ 不是完全平方数
</b>
</div>
<button class="toggleAnswer answer-button">证明:</button>
<div class="myAnswer hidden">

假设 $\sqrt n$ 是有理数，即 $\sqrt n=\frac{p}{q}$, 其中 $p,\,q$ 互素  
则, $nq^2=p^2$  
$\because$ $q$  与 $p$ 无公共因子  
$\therefore$ $q^2$ 与 $p^2$ 无公共因子  
$\therefore q^2=1, n=p^2$ , 矛盾，假设不同成立  
$\therefore \sqrt n$ 是无理数
</div>
</div>


<div class="myProblem">
<div class="myQuestion">
<b class = 'auto-sort'>
$\bigstar$ 对于整系数多项式 $a_nx^n+a_{n-1}x^{n-1}+\dots+a_1x+a_0 = 0\quad(a_n\not = 0)$ 的任一有理根，
若记其即约分式为 $\frac{p}{q}$, 试证明其分子 $p$ 是 $a_0$ 的因子，而分母 $q$ 是 $a_n$ 的因子。
</b>
</div>
<button class="toggleAnswer answer-button">证明:</button>
<div class="myAnswer hidden">

设 $\frac{p}{q}$ 是所给多项式的有理根，且 $p\,,q$ 不可约。  
则有，
$a_np_n+a_{n-1}p^{n-1}q+a_{n-2}p^{n-2}q^2+\dots + a_1pq^{n-1}+a_0q^n=0$  
$\because$ 除 $a_0q^n$ 外其他各项都有因子 $p$  
$\therefore a_0q^n \mid p$   
又$\because p$ 与 $q^n$ 没有公共因子  
$\therefore a_0\mid p$ 

同理，$a_n\mid q$
</div>
</div>

<div class="myTip">

这一法则，能使我们得到所有的有理实根，同时也能说明其他任一实根的无理性
</div>

<div class="myProblem">
<div class="myQuestion">
<b class='auto-sort'>
试证明 区间套公理不可用于对有孔实直线，如,定义域 $x\in\R, x\not=a$
</b>
</div>
<button class="toggleAnswer answer-button">证明*</button>
<div class="myAnswer hidden">

考察区间套 $a-\frac{1}{n}\le x\le a+\frac{1}{n}$
</div>
</div>


