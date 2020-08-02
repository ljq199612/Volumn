
<div class = 'data-section default-folding'>
<h2 class = 'section-title'>附录</h2>
<div class = 'folding-area'>

|模式|描述|
|:--:|:--:|
|装饰者|不改变接口，但加入责任|
|适配器|将一个接口转化成另一个接口|
|外观| 让接口更简单|

|模式|描述|
|:--:|:--:|
|模板方法|子类决定如何实现算法中的某些步骤|
|策略|封装可互换的行为，然后使用委托来决定要采用哪一种行为|



</div>
</div>



<div class = 'data-section default-folding'>
<h2 class = 'section-title'>设计原则</h2>
<div class = 'folding-area'>

>总纲：找出程序中会`变化`的方面,然后将其和固定不变的方面相分离。

### 单一职责原则（SRP）
> 一个类应该只有一个引起变化的原因

`内聚（cohesion）`: 用来衡量一个类或模块是否紧密达到单一责任。一个类或一个模块被设计成只支持一组相关功能时，我们说它是高内聚的。

### 开闭原则
> 类应该对扩展开放，对修改关闭

<div class="myWarning">

**问：我如何让设计的每个部分都遵循开放-关闭原则?**  
答： 通常,你办不到。要让OO设计同时具备开放性和关闭性,又不修改现有的代码,需要花费许多时间和努力。一般来说,我们实在没有闲工夫把设计的每个部分都这么设计(而且,就算做得到也可能只是一种浪费)。`遵循开放-关闭原则,通常会引入新的抽象层次,增加代码的复杂度。你需要把注意力集中在设计中最有可能改变的地方,然后应用开放-关闭原则`。

**问：我怎么知道,哪些地方的改变是更重要呢?**  
答：这牵涉到设计OO系统的经验, 和对你工作领域的了解。多看一些其他的例子可以帮你学习如何辨别设计中的变化区。

</div>


### 依赖倒置原则（DIP）
> 依赖抽象而不是依赖实现。抽象不应该依赖细节，细节应该依赖抽象。高层模块不能依赖低层模块，二者都应该依赖抽象。


<div class="myNote">

**如何实现该原则？**
- 变量不可以持有具体类的引用, 即针对
<span class="myAnnotate">
接口
</span>
<div class="js-annotate annotate hidden">
这里的接口指的是超类型
</div>
编程,而不是针对实现编程

- 不要让类派生自具体类;
- 不要覆盖基类中已实现的方法;

</div>



**针对实现编程**
```java
Dog d = new Dog();
d.bark();
```
**针对接口编程**
```java
// 利用 animal 进行多态调用
Animal animal = new Dog();
animal.makeSound();
```

<div class="myNote">

更棒的做法是子类的实例化动作不需要在代码中硬编码，而是`在运行时才指定具体实现对象`
```java
a = getAnimal();
a.makeSound();
```
</div>


### 好莱坞原则
> 别调用（打电话给）我们， 我们会调用你

<div class="myTip">

**问 : 好莱坞原则和依赖倒置原则的关系？**  
答： 两者的关系都在于解耦，但是，依赖倒置原则更注重依赖，而好莱坞原则更注重设计弹性

**问 ： 底层组件不可以调用高层组件中的方法吗？**  
答： 不全是，事实上，底层组件在结束时，常常会调用从超类来的方法。我们所要避免的是高层组
</div>

### 里氏替换原则（LSP）
解读：在继承体系中，子类中可以增加自己特有的方法，也可以实现父类的抽象方法，但是不能重写父类的非抽象方法，否则该继承关系就不是一个正确的继承关系。


### 接口隔离原则（ISP）
> 多个特定的客户端接口要好于一个通用性的总接口。

避免同一个接口里面包含不同类职责的方法，接口责任划分更加明确，符合高内聚低耦合的思想。


### 迪米特法则（LOD）
> 又叫最少知道原则
> 不要让太多的类耦合在一起，免得修改系统中的一部分，会影响到其他部分。

<div class="myNote">

**如何避免有太多朋友和影响太多的对象？**  
就任何对象而言，在该对象的方法内，我们应该调用属于一下范畴的方法：
1. 该对象本身;
1. 被当作方法参数而传进来的对象;
1. 此方法创建或实例化的任何对象;
1. 对象的任何组件
</div>

<div class="myImage">

![--image--](https://ljq199612.gitee.io/images/mind/design_patterns/11.png)
<label class="imageTitle"></label>
</div>

<div class="myWarning">

**最少知识原则的缺点？**
虽然，最小知识原则可以减少对象间的依赖，降低维护成本，但导致更多的包装类被创建出来，可能导致复杂性和开发时间的增加，以及性能的降低
</div>



</div>
</div>



<div class = 'data-section default-folding'>
<h2 class = 'section-title'>策略</h2>
<div class = 'folding-area'>

> 定义了算法族， 分别封装起来，让他们之间可以互相替换，此模式让算法的变化独立于算法的客户。

[策略模式：模拟鸭子游戏](https://ljq199612.gitee.io/images/mind/design_patterns/02.png)

</div>
</div>



<div class = 'data-section default-folding'>
<h2 class = 'section-title'>观察者</h2>
<div class = 'folding-area'>

> 定义了对象之间的`一对多`依赖,这样一来,当一个对象改变状态时,它的所有依赖者都会收到通知并自动更新。

**要点：**
- 观察者模式定义了对象之间一对多的关系。
- 主题(也就是可观察者)用一个共同的接口来更新观察者。
- 观察者和可观察者之间用松耦合方式结合(loosecoupling),`可观察者不知道观察者的细节,只知道观察者实现了观察者接口`。
- 使用此模式时,你可从被观察者处推(push)或拉(pull)数据(然而,推的方式被认为更“正确”)。
- 有多个观察者时,不可以依赖特定的通知次序。

<div class="myTip">

- Java有多种观察者模式的实现,包括了通用的java.util.Observable。
- Swing大量使用观察者模式,许多GUI框架也是如此。
- 此模式也被应用在许多地方, 例如:JavaBeans、RMI。
</div>

✿ [观察者模式：气象监测应用](https://ljq199612.gitee.io/images/mind/design_patterns/03.png)  
✿ [利用 java api 自带的观察者接口实现气象监测应用](https://ljq199612.gitee.io/images/mind/design_patterns/03-1.png)

</div>
</div>

<div class = 'data-section default-folding'>
<h2 class = 'section-title'>装饰者</h2>
<div class = 'folding-area'>

> 动态地将责任附加到对象上。若要扩展功能,装饰者提供了比继承更有弹性的替代方案。

**要点：**
- 继承属于扩展形式之一,但不见得是达到弹性设计的最佳方式。
- 组合和委托可用于在运行时动态地加上新的行为。
- 装饰者和被装饰对象有相同的超类型。
- 你可以用一个或多个装饰者包装一个对象。
- 既然装饰者和被装饰对象有相同的超类型,所以在任何需要原始对象(被包装的)的场合, 可以用装饰过的对象代替它。
- 装饰者可以在所委托被装饰者的`行为`之前或之后,加上自己的行为, 以达到特定的目的。
- 对象可以在任何时候被装饰,所以可以在运行时动态地、不限量地用你喜欢的装饰者来装饰对象。
- 装饰者一般对组件的客户是透明的, 除非客户程序依赖于组件的具体类型。
- 装饰者会导致设计中出现许多小对象,如果过度使用,会让程序变得很复杂。

✿ [装饰者模式：咖啡店](https://ljq199612.gitee.io/images/mind/design_patterns/04.png)  
✿ [java api 中的装饰者：IO ](https://ljq199612.gitee.io/images/mind/design_patterns/04-1.png)

</div>
</div>


<div class = 'data-section default-folding'>
<h2 class = 'section-title'>工厂</h2>
<div class = 'folding-area'>

### 工厂方法
> 定义了一个创建对象的接口，但由子类决定要实例化的类是哪一个。工厂方法让类把实例化推迟到子类。

✿ [工厂方法：比萨店](https://ljq199612.gitee.io/images/mind/design_patterns/05.png)  

### 抽象工厂
> 提供一个接口，用于创建相关或依赖对象的家族，而不需要明确指定具体类

✿ [抽象工厂：电脑配件](https://ljq199612.gitee.io/images/mind/design_patterns/06.png)  

<div class="myNote">

**工厂方法模式和抽象工厂模式的比较？**

- 都是负责创建对象。工厂方法使用继承，抽象工厂使用组合;
- 抽象工厂经常使用工厂方法来实现具体工厂;
- 抽象工厂需要一个大的接口来创建整个产品家族;

</div>


</div>
</div>



<div class = 'data-section default-folding'>
<h2 class = 'section-title'>单例</h2>
<div class = 'folding-area'>

> 确保一个类只有一个实例，并提供一个全局访问点

**方式一：**
```java
public class Singleton {
    private static Singleton uniqueInstance = new Singleton();
	private Singleton(){}
	public static Singleton getInstance(){
		return uniqueInstance;
	}
}
```

**方式二：**
```java
public class Singleton {
	private volatile static Singleton uniqueInstance;
	private Singleton() {}
	public static Singleton getInstance() {
		if(uniqueInstance == null) {
			synchronized (Singleton.class) {
				if(uniqueInstance == null) {
					uniqueInstance = new Singleton();
				}
			}
		}
		return uniqueInstance;
	}
}
```

<div class="myWarning">

`volatile` 确保当 uniqueInstance 变量被初始化成 Singleton 实例时，多线程正确地处理该变量
</div>

</div>
</div>


<div class = 'data-section default-folding'>
<h2 class = 'section-title'>适配器</h2>
<div class = 'folding-area'>

> 将一个类的接口，转换成客户期望的另一个接口。适配器可以让原本不兼容的类可以合作无间。

✿ [适配器：用火鸡冒充鸭子](https://ljq199612.gitee.io/images/mind/design_patterns/09.png)  

</div>
</div>

<div class = 'data-section default-folding'>
<h2 class = 'section-title'>外观</h2>
<div class = 'folding-area'>

> 提供了一个统一的接口，用来访问子系统中的一群接口。外观定义了一个高层接口，让子系统更容易使用

✿ [外观模式：家庭影院](https://ljq199612.gitee.io/images/mind/design_patterns/10.png)  


</div>
</div>


<div class = 'data-section default-folding'>
<h2 class = 'section-title'>模板方法</h2>
<div class = 'folding-area'>

> 在一个方法中定义一个算法骨架，而将一些步骤延迟到子类中。模板方法可以使得子类在不改变算法结构的情况下，重新定义算法中的某些步骤。


<div class="myTip">

工厂方法模式是模板方法的一种特殊情况 
</div>

✿ [模板方法模式：茶和咖啡](https://ljq199612.gitee.io/images/mind/design_patterns/12.png)  
✿ [java api ：数组排序](https://ljq199612.gitee.io/images/mind/design_patterns/07.png)  


</div>
</div>

<div class = 'data-section default-folding'>
<h2 class = 'section-title'>迭代器</h2>
<div class = 'folding-area'>

> 提供一种方法顺序访问一个集合对象中的各个元素，而又不是暴露其内部的表示

把游走的任务放在迭代器上而不是集合上，这样简化了集合的接口和实现。


✿ [迭代器模式](https://ljq199612.gitee.io/images/mind/design_patterns/13.png)  
</div>
</div>


<div class = 'data-section default-folding'>
<h2 class = 'section-title'>状态</h2>
<div class = 'folding-area'>

> 允许对象在内部状态改变时改变它的行为，对象看起来好像修改了它的类。

✿ [状态模式：万能糖果机](https://ljq199612.gitee.io/images/mind/design_patterns/14.png)  
</div>
</div>


<div class = 'data-section default-folding'>
<h2 class = 'section-title'>组合</label></h2>
<div class = 'folding-area'>

> 允许你将对象组合成树形结构来表现`整体与部分`层次结构。

要点：
- 在实现组合模式时，有许多设计上的折中，你要平衡安全性和透明性;
- 组合模式 在具体实现上违背了设计模式 接口隔离原则 或 依赖倒置原则；

✿ [@blog: 组合模式](https://www.jianshu.com/p/c7f19e5310f9)  

</div>
</div>


<div class = 'data-section default-folding'>
<h2 class = 'section-title'>代理</h2>
<div class = 'folding-area'>

> 为另一个对象提供一个替身或占位符以控制对这个对象的访问。

//TODO

</div>
</div>



<div class = 'data-section default-folding'>
<h2 class = 'section-title'>复合</h2>
<div class = 'folding-area'>

//TODO


</div>
</div>



