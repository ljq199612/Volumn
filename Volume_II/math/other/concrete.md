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
<h2 class = 'section-title'>第 <label class = 'block-number'>1</label> 章：集合及其运算</h2>
<div class = 'folding-area'>

<h3 class = 'auto-sort-sub'>集合的概念</h3>

通常把一些互不相等的东西放在一起所形成的整体叫做一个`集合`。构成集合的每个东西叫做集合的`元素`。

<h4 class='auto-sort-sub1'>表示集合的方式</h4>

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

**对称差**  
设 A, B 为任意的两个集合，$A\backslash B$ 与 $B\backslash A$ 的并集称为 A 与 B 的对称差，记为 $A\Delta B$
$$A\Delta B=(A\backslash B)\cup (B\backslash A)$$
- 例如， $\{1,2\}\Delta\{2,3\}=\{1,3\}$
</div>


<div class="myFormula">

设 S wei
</div>

</div>
</div>

