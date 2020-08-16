 
<div class = 'data-section default-folding'>
<h2 class = 'section-title'>第 <label class = 'block-number'>1</label> 章：字符串</h2>
<div class = 'folding-area'>

String 底层是 `final char[]`, 它是不可变的

StringBuild 底层是 `char[]`, 默认情况下初始化长度为 16, 当插入的 char 达到一定数量时，就会自动扩容 为原来的 2倍 + 2 

```java
private int newCapacity(int minCapacity) {
        // overflow-conscious code
        int newCapacity = (value.length << 1) + 2; //[]
        if (newCapacity - minCapacity < 0) {
            newCapacity = minCapacity;
        }
        return (newCapacity <= 0 || MAX_ARRAY_SIZE - newCapacity < 0)
            ? hugeCapacity(minCapacity)
            : newCapacity;
}
```

//TODO

</div>
</div>


<div class = 'data-section default-folding'>
<h2 class = 'section-title'>第 <label class = 'block-number'>2</label> 章：集合</h2>
<div class = 'folding-area'>

<div class="myImage">

![-image-](../images/java/javase/collection/07.png)
<label class="imageTitle"></label>
</div>

<h3 class = 'auto-sort-sub'>散列表</h3>


<h4 class = 'auto-sort-sub1'>Hash</h4>

##### 什么是 hash?
答：hash 也称散列。基本原理就是把`任意长度`的输入，通过 hash 算法变成`固定长度`的输出，原始数据映射后的 `二进制串`就是 哈希值。

##### hash 的特点？
1. 从 hash 值不可以反向推导出原始的数据
1. 输入数据的微小变化会得到完全不同的 hash 值，相同的数据会得到相同的 hash 值
1. 执行效率要高效，长文本也能快速计算出 hash 值
1. 冲突概率要小

<div class="myWarning">

由于 hash 的原理是将`输入空间`的 值映射到`hash 空间`内，而 hash 值的空间远小于输入空间。根据抽屉原理，一定会存在不同的输入被映射成相同输出的情况。
</div>

##### hash 函数

散列函数是可用于将任意大小的数据映射到`固定大小`的值的任何函数。 哈希函数返回的值称为哈希值，哈希码。 这些值用于索引称为哈希表的固定大小的表。 使用哈希函数索引哈希表的过程称为哈希或`分散存储寻址`。

<div class="myNote">

一个好的哈希函数满足两个基本属性：  
1）计算速度应该非常快；
2）应尽量减少输出值重复(冲突)。
</div>

##### hash 表的性能

在维数良好的 [哈希表](https://en.wikipedia.org/wiki/Hash_table) 中，每次查找的平均成本(指令数量)与表中存储的元素`数量`无关。许多哈希表设计还允许任意插入和删除键值对，每次操作的平均成本为`常数`。在许多情况下，哈希表的平均效率比搜索树或其他任何表查找结构都要高。由于这个原因，它们被广泛应用于许多计算机软件中，特别是用于关联数组、数据库索引、缓存和集合。

##### hash 冲突
理想情况下，哈希函数会将每个键分配给唯一的存储桶，但是大多数哈希表设计采用了不完善的哈希函数，这可能会导致哈希冲突。哈希冲突实际上是不可避免的。 例如，如果将2450个 Key 散列到一百万个存储桶中，即使具有完全均匀的随机分布，则根据生日问题，至少有两个 key 散列到同一插槽的可能性大约为 95％。


<h3 class = 'auto-sort-sub'>HashMap</h3>

✿ [HashMap 源码解析](https://ljq199612.gitee.io/Volume/Volume_II/IT/images/java/javase/collection/00.png)


<h4 class = 'auto-sort-sub1'>HashMap 的继承体系</h4>

<div class="myImage">

![-image-](../images/java/javase/collection/01.png)
<label class="imageTitle">图示: HashMap 继承体系</label>
</div>

<h4 class = 'auto-sort-sub1'>HashMap 的存储结构</h4>

<div class="myImage">

![-image-](../images/java/javase/collection/02.png)
<label class="imageTitle">图示: HashMap 存储结构</label>
</div>


<div class="myNote">

**解决哈希碰撞的方式？**

**(1) 链地址法**

每个存储桶都是独立的，并且具有某种具有相同索引的条目列表。 哈希表操作的时间是找到存储桶的时间（常数）加上列表操作的时间。

<div class="myImage">

![-image-](../images/java/javase/collection/04.png)
<label class="imageTitle">图示: 链地址法</label>
</div>

在一个好的哈希表中，每个存储桶都有零个或一个条目，有时有两个或三个，但很少有更多。 因此，对于这些情况在时间和空间上有效的结构是优选的。 不需要对每个存储桶有足够数量的条目有效的结构。 如果这些情况经常发生，则需要修改哈希函数。

**其他结构**
除了列表以外，还可以使用支持所需操作的任何其他数据结构。 例如，通过使用`自平衡二进制搜索树`，可以将常见哈希表操作（插入，删除，查找）的最坏情况理论时间降低到 O(log n) 而不是 O(n)。 但是，这给实现带来了额外的复杂性，并可能导致较小的哈希表的性能更差(哈希表插入和平衡树所花费的时间大于对列表的所有元素执行线性搜索所需的时间) 。`Java 8` 中的 HashMap 类是哈希表的真实示例，该哈希表对存储桶使用了自平衡二进制搜索树。

**(2) 开地址法**

<div class="myImage">

![-image-](../images/java/javase/collection/05.png)
<label class="imageTitle">图示: 开地址法</label>
</div>

**(3) 再散列**

**(4) 公共溢出池**
</div>



<h4 class = 'auto-sort-sub1'>影响 HashMap 性能的参数</h4>

`初始容量`和`负载因子`。 

- 容量(默认16)：哈希表中存储桶的数量，初始容量只是创建哈希表时的容量。 
- 负载因子(默认 0.75)：在自动增加其哈希表容量之前允许哈希表获得的满度的度量。 

当哈希表中的条目数`超过负载因子和当前容量的乘积`时，哈希表将被重新哈希（即，内部数据结构将被重建）。

通常，默认负载因子（.75）在`时间和空间`成本之间提供了一个很好的权衡。 较高的值会减少空间开销，但会增加查找成本（在HashMap类的大多数操作中都得到体现，包括get和put）。 设置其初始容量时，应考虑映射中的预期条目数及其负载因子，以最大程度地减少重新哈希操作的数量。 如果初始容量大于最大条目数除以负载因子，则不会发生任何哈希操作。

<div class="myWarning">

如果迭代性能很重要，则不要将初始容量设置得过高或负载因子过低。
</div>

<h4 class = 'auto-sort-sub1'>index 计算方式</h4>

hash 值为int，index 需要映射到`0 ～ length -1`，最直观的使用`取模`运算, 而 HashMap 使用的是`位运算`

> index = hash值 & (length-1)

hash 值的计算
```java
static final int hash(Object key) {
        int h;
        return (key == null) ? 0 : (h = key.hashCode()) ^ (h >>> 16);
    }
```
当length的长度是2的n次方时，有以下的公式成立:

$$ num\ \%\ 2^n=num\ \&\ (2^n-1)$$

这也解释了为什么 HashMap 每次扩容都是原来的 2 倍

<h4 class = 'auto-sort-sub1'>HashMap 扩容方式</h4>

当 HashMap中的元素个数超过数组大小 * loadFactor 时，就会进行数组扩容，默认情况下，loadFactor 的值为 0.75，数组大小为 16，那么当 HashMap 中元素个数超过 16 * 0.75=12 的时候，就把数组的大小扩展为2 * 16=32，即扩大一倍，然后`重新计算每个元素在数组中的位置，而这是一个非常消耗性能的操作`，所以如果我们已经预知 HashMap 中元素的个数，那么预设元素的个数能够有效的提高 HashMap 的性能。

<div class="myWarning">

1. HashMap 不支持动态缩减容量(java 原则，空间换时间)

1. 在多线程的情况下，当重新调整 HashMap 大小的时候，就会存在`条件竞争`，因为如果两个线程都发现 HashMap 需要重新调整大小了，它们会同时试着调整大小。
</div>

##### HashMap 链表采用头插法还是尾插法？
JDK 8 开始采用尾插法，之前采用头插法。

##### HashMap 遍历方式
一个槽（包括槽下面的列表）一个槽地遍历

<h4 class = 'auto-sort-sub1'>HashMap 与 HashTable 的比较</h4>

HashMap类与HashTable大致等效，不同之处在于它是不同步的，并且允许为 null 和 null 键
- 如果需要线程安全，最好在创建的时候进行同步
```java
Map m = Collections.synchronizedMap(new HashMap(...));
```

<h3 class = 'auto-sort-sub'>List</h3>




<h4 class = 'auto-sort-sub1'>Vector</h4>


<h4 class = 'auto-sort-sub1'>ArrayList</h4>

```java
private void grow(int minCapacity) {
    // overflow-conscious code
    int oldCapacity = elementData.length;
    // 扩展为 1.5 倍
    int newCapacity = oldCapacity + (oldCapacity >> 1);
    if (newCapacity - minCapacity < 0)
        newCapacity = minCapacity;
    if (newCapacity - MAX_ARRAY_SIZE > 0)
        newCapacity = hugeCapacity(minCapacity);
    // minCapacity is usually close to size, so this is a win:
    elementData = Arrays.copyOf(elementData, newCapacity);
}
```

<div class="myTip">

**ArrayList 和 Vector 的比较**  
1. ArrayList 在功能上和 Vector 一样 
1. Vector 是同步的，ArrayList 不是同步的。
1. Vector 每次扩容为原来的 2 倍，而 ArrayList 是 1.5 倍。
1. 可以使用 Collections.synchronizedList(); 得到一个线程安全的 ArrayList。
</div>




</div>
</div>


<div class = 'data-section default-folding'>
<h2 class = 'section-title'>第 <label class = 'block-number'>10</label> 章: 其他</h2>
<div class = 'folding-area'>


<h3 class = 'auto-sort-sub'>内省</h3>

> 主要类: `Inteospector` `BeanInfo` `PropertyDescriptor` 

内省(Introspector)是专门用来操作 JavaBean 属性的。`不是所有的字段(Field)都能被称之为属性`，只有某些字段具有 getXXX 或 setXXX 方法的才能称之为属性，当然要称为是一个 Bean 还需要有一个无参的构造器。


例如: 
```java
public class Person {

    private String name;

    private int age;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    
	public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getAbc() {
        return null;
    }

}

```

**问：一共多少个属性？**  
**答:** 4 个， 分别为 name, age, abc, class(Object 继承的getClass)


<div class="myTip">

当然仅仅操作是属性，可以按操作字段一样采用反射，但是采用内省会更加专业。
</div>

- 在 Java API 中有专门的一个类封装了内省的操作，这个类就是`Introspector`类，通过`getBeanInfo(…)`方法就可以将某个类中的属性封装到一个`BeanInfo`类中。
- 取得 BeanInfo 对象后就相当于取得某个类的所有属性，那么再调用 BeanInfo 对象中的`getPropertyDescriptors()`方法获得PropertyDescriptor[] 数组对象，每个数组中的元素都是PropertyDescriptor实例(属性描述器)
- `PropertyDescriptor`实例封装了每个属性特有的一些性质，比如调用`getReadMethod()`方法就能获得这个属性的get方法，调用`getWriteMethod()`方法就能获得这个属性的 set 方法。

通过一段简单的代码来测试一下刚才 Person 这个 bean 对象到底有多少个属性：
```java
Person p = new Person();

BeanInfo beanInfo = Introspector.getBeanInfo(p.getClass());

PropertyDescriptor[] pds = beanInfo.getPropertyDescriptors();

        for(PropertyDescriptor pd:pds) {
            System.out.println(pd.getName());
        }

// ----------------------------------
输出:
abc
age
class
name
```

<div class="myTip">

- 如果我们不想继承父类的属性，比如上述的 class, 那么我们可以在给定的`断点`下对 JavaBean 进行内省。  
getBeanInfo(Class<?> beanClass, Class<?> stopClass)  

- 如果想直接操作一个 bean 的某个具体属性，可以直接使用属性描述器 PropertyDescriptor 的构造：

```java
PropertyDescriptor pd = new PropertyDescriptor("age", Person.class);
Person p = new Person();
Method setAgeMethod = pd.getWriteMethod();
setAgeMethod.invoke(p,25);
Method getAgeMethod = pd.getReadMethod();
System.out.println(getAgeMethod.invoke(p, null));

// -------------------------
输出：25
```

</div>

<h4 class = 'auto-sort-sub1'>BeanUtils 工具类</h4>

BeanUtils 是由 Apache 公司开发的针对操作 JavaBean 的工具包，用以简化和丰富对 bean 属性的操作。

```java
Person p = new Person();
BeanUtils.setProperty(p, "age", "25");
System.out.println(p.getAge());

// ------------------------
输出：25
```

<div class="myWarning">

在这个例子中，Person 的 age 属性类型为`int`，而在调用 setProperty 时使用的属性值为字符串，因此 BeanUtils 就将字符串`"25"`转换为了整数型 25 值。

BeanUtils 对于字符串的转换只支持八大基本数据类型！
</div>

如果在 Person 中有一个 Date 类型的属性，可以使用 BeanUtils 包中的 ConvertUtils 注册一个转换器，使得字符串能够转换成日期 Date 类型。

```java
Person p = new Person();

ConvertUtils.register(new Converter() {

    @Override
    public <T> T convert(Class<T> type, Object value) {
        if(value == null) {
            return null;
        }
        if(!(value instanceof String)) {
            throw new ConversionException("传入类型错误");
        }
        String dateStr = (String) value;
        if(dateStr.trim().equals("")) {
            return null;
        }

        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        try {
            return (T)format.parse(dateStr);
        } catch (ParseException e) {
            throw new RuntimeException(e);
        }
    }
},Date.class);

BeanUtils.setProperty(p, "birthday", "1991-7-1");
System.out.println(p.getBirthday());

```

当然上面我们使用的是自己来写这个接口，对于 Apache 的 BeanUtils 来说，Converter 这个接口 Apache 已经帮我们写好了很多实现 Converter 接口的类了，因此我们可以使用这些现有的转换器类，比如有关日期的 DateConverter 或 DateLocaleConverter。

```java
ConvertUtils.register(new DateLocaleConverter(), Date.class);
Person p = new Person();
BeanUtils.setProperty(p, "birthday", "1991-7-2");
System.out.println(p.getBirthday());
```

<div class="myWarning">

上述的转换器有时候并不能满足我们的需求，比如我们将日期字符串设置为空字符就会抛出异常
```java
BeanUtils.setProperty(p, "birthday", "");
```
</div>

BeanUtils 还能将 Map 集合中的值填充某个对象中的属性，只要 Map 集合的 Key 与属性名相同，这点非常适合 web 中的 Request 将数据封装到某个 bean 中。

```java
Map<String,String> map = new HashMap<>();
map.put("name", "Ding");
map.put("age", "25");
map.put("birthday", "1991-7-1");

ConvertUtils.register(new DateLocaleConverter(), Date.class);
Person p = new Person();

BeanUtils.populate(p, map);

System.out.println(p.getName());
System.out.println(p.getAge());
System.out.println(p.getBirthday());
```


</div>
</div>


