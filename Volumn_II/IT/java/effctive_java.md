
<div class = 'data-section default-folding'>
<h2 class = 'section-title'><label class = 'block-number'>2</label>对象的创建和销毁</h2>
<div class = 'folding-area'>

<h3 class = 'auto-sort'>使用静态工厂方法代替构造方法</h3>

静态工厂方法和公共构造方法都有它们的用途，并且了解它们的相对优点是值得的。通常，静态工厂更可取，因此避免在没有考虑静态工厂的情况下，直接选择使用或提供公共构造方法。

**优点**

> 有名字，更利于使用和阅读，

如：返回一个可能为素数的 BigInter(int, int, Random) 构造方法可以更好的表示为 BigInter.probablePrime 静态工厂方法

> 不需要每次调用时创建一个新对象，允许不可变类使用预先构建的实例

<div class="myNote">

静态工厂方法在重复调用时，可以让类在任何时候都能对实例保持严格控制。这样做的类被称为`实例控制类`。实例控制类可以保证一个类是`单例`或`不可实例化`，同时不会出现 `a==b 和 a.equals(b) 不一致的情况`
</div>

> 可以返回其返回类型的任何子类对象

<div class="myNote">

在 java 8 之前， 接口不能有静态方法。根据约定，一个名为 `Types` 的接口的静态方法被放入一个不可实例化的伴随类类 `Types 类` 中。从 java 8 开始， 接口可以包含公开的静态方法，所以没有理由为接口设计一个不可实例化的伴随类。但是，因为是公开的，接口的`静态方法`的实现还是应该放在单独的包的私有类中。`java 9 允许私有静态方法`
</div>

> 返回对象的类可以根据输入参数的不同而不同

<div class="myNote">

`Enumset`类没有公共构造方法，只有静态工厂方法。在`openJDK`实现中，它们根据枚举类型的大小返回不同的子类实例。 若枚举类型不多于 64 个元素，静态工厂将返回一个`RegularEnumSet` 实例。如果枚举类型大于 64 个元素，静态工厂将返回`JumboEnumSet`，`这两个实现类对于客户端来说都是不可见的`。
</div>

> 在编写包含该方法的类时，返回的对象的类不需要存在

<div class="myNote">

这种灵活的静态工厂构成了服务提供者框架的基础，比如 `JDBC`。
</div>

**缺点**

> 没有公共或受保护的构造方法的类不能被继承
>
> 程序员很难找到它们

<div class="myTip">

虽然，不能使用继承，但有时可能是好事，因为这样可以鼓励程序员使用`组合（composition）`, 并且是`不可变类型锁`需要的
</div>

**常用方法**

> from —— 类型转换方法

它接受单个参数并返回此类型的相应实例，例如：Date d = Date.from(instant);

> of —— 聚合方法

接受多个参数并返回该类型的实例，并把他们合并在一起，例如：Set faceCards = EnumSet.of(JACK, QUEEN, KING);

> valueOf —— from 和 to 更为详细的替代方式

例如：BigInteger prime = BigInteger.valueOf(Integer.MAX_VALUE);

> instance 或 getinstance —— 返回一个由其参数 (如果有的话) 描述的实例，但不能说它具有相同的值

例如：StackWalker luke = StackWalker.getInstance(options);

> create 或 newInstance —— 与 instance 或 getInstance 类似

除此之外该方法保证每次调用返回一个新的实例，例如：Object newArray = Array.newInstance(classObject, arrayLen);

> getType —— 与 getInstance 类似，但是在工厂方法处于不同的类中的时候使用。

getType 中的 Type 是工厂方法返回的对象类型，例如：FileStore fs = Files.getFileStore(path);

> newType —— 与 newInstance 类似，但是在工厂方法处于不同的类中的时候使用。

newType 中的 Type 是工厂方法返回的对象类型，例如：BufferedReader br = Files.newBufferedReader(path);

> type —— getType 和 newType 简洁的替代方式

例如：List litany = Collections.list(legacyLitany);

<h3 class = 'auto-sort'>当构造方法参数过多时使用 builder 模式</h3>

静态工厂和构造方法都有一个限制：在可选参数很多的情况下，无法很好的扩展。下面以包装食品的营养成分为例来讲解。

**使用可伸缩的构造方法**

```java
//telescoping constructor

public class NutritionFacts {
    private final int servingSize;  // (mL)            required
    private final int servings;     // (per container) required
    private final int calories;     // (per serving)   optional
    private final int fat;          // (g/serving)     optional
    private final int sodium;       // (mg/serving)    optional
    private final int carbohydrate; // (g/serving)     optional

    public NutritionFacts(int servingSize, int servings) {
        this(servingSize, servings, 0);
    }

    public NutritionFacts(int servingSize, int servings,
            int calories) {
        this(servingSize, servings, calories, 0);
    }

    public NutritionFacts(int servingSize, int servings,
            int calories, int fat) {
        this(servingSize, servings, calories, fat, 0);
    }

    public NutritionFacts(int servingSize, int servings,
            int calories, int fat, int sodium) {
        this(servingSize, servings, calories, fat, sodium, 0);
    }

    public NutritionFacts(int servingSize, int servings,
           int calories, int fat, int sodium, int carbohydrate) {
        this.servingSize  = servingSize;
        this.servings     = servings;
        this.calories     = calories;
        this.fat          = fat;
        this.sodium       = sodium;
        this.carbohydrate = carbohydrate;
    }
}
```

<div class="myWarning">

可伸缩构造方法是有效的，但当很多参数时，很难编写客户端代码，而且很难读懂它。如果客户端不小心写反了两个参数，编译器不会报错，但程序运行时会出现与预期不一致的行为
</div>


**使用 javaBean**

```java
public class NutritionFacts {
    // Parameters initialized to default values (if any)
    private int servingSize  = -1; // Required; no default value
    private int servings     = -1; // Required; no default value
    private int calories     = 0;
    private int fat          = 0;
    private int sodium       = 0;
    private int carbohydrate = 0;

    public NutritionFacts() { }

    // Setters
    public void setServingSize(int val)  { servingSize = val; }
    public void setServings(int val)    { servings = val; }
    public void setCalories(int val)    { calories = val; }
    public void setFat(int val)         { fat = val; }
    public void setSodium(int val)      { sodium = val; }
    public void setCarbohydrate(int val) { carbohydrate = val; }
}

```

<div class="myTip">

这种模式没有伸缩构造方法模式的缺点。有点冗长，但创建实例很容易，并且易于阅读。但是,`由于构造方法被分割成了多次调用，所以在构造过程中 JavaBean 可能处于不一致的状态`。在不一致的状态下尝试使用对象可能会导致一些错误，这些错误与平常代码的 BUG 很是不同，因此很难调试。同时，JavaBeans 模式破坏了类的不可变性，需要程序员增加工作以确保线程安全。
</div>

**builder 模式**

```java
// Builder Pattern
public class NutritionFacts {
    private final int servingSize;
    private final int servings;
    private final int calories;
    private final int fat;
    private final int sodium;
    private final int carbohydrate;

    public static class Builder {
        // Required parameters
        private final int servingSize;
        private final int servings;

        // Optional parameters - initialized to default values
        private int calories      = 0;
        private int fat           = 0;
        private int sodium        = 0;
        private int carbohydrate  = 0;

        public Builder(int servingSize, int servings) {
            this.servingSize = servingSize;
            this.servings    = servings;
        }

        public Builder calories(int val) {
            calories = val;
            return this;
        }

        public Builder fat(int val) {
           fat = val;
           return this;
        }

        public Builder sodium(int val) {
           sodium = val;
           return this;
        }

        public Builder carbohydrate(int val) {
           carbohydrate = val;
           return this;
        }

        public NutritionFacts build() {
            return new NutritionFacts(this);
        }
    }

    private NutritionFacts(Builder builder) {
        servingSize  = builder.servingSize;
        servings     = builder.servings;
        calories     = builder.calories;
        fat          = builder.fat;
        sodium       = builder.sodium;
        carbohydrate = builder.carbohydrate;
    }
}
```
NutritionFacts 类是`不可变的`，所有的参数默认值都在一个地方。builder 的 setter 方法返回 builder 本身，这样就可以进行链式调用，从而生成一个流畅的 API。下面是客户端代码的示例：
```java
NutritionFacts cocaCola = new NutritionFacts.Builder(240, 8)
    .calories(100).sodium(35).carbohydrate(27).build();
```

<div class="myWarning">

注意，这里省略了有效性检查。
</div>

**builder 模式的层次结构**

//TODO

<h3 class = 'auto-sort'>依赖注入优于硬连接</h3>

不要用单例和静态工具类来实现依赖一个或多个底层资源的类，且该资源的行为会影响到该类的行为；也不要直接用这个类来创建这些资源。而应该将这些资源或者工厂传给构造器（或者静态工厂，或者构建器），通过它们来创建类。这个实践就被称作依赖注人，它极大地提升了类的灵活性、可重用性和可测试性。

```java
// Dependency injection provides flexibility and testability
public class SpellChecker {
    private final Lexicon dictionary;

    public SpellChecker(Lexicon dictionary) {
        this.dictionary = Objects.requireNonNull(dictionary);
    }

    public boolean isValid(String word) { ... }
    public List<String> suggestions(String typo) { ... }
}
```

<h3 class = 'auto-sort'>避免创建不必要的对象</h3>

一些对象的创建比其他对象的创建要昂贵得多。 如果要重复使用这样一个「昂贵的对象」，建议将其缓存起来以便重复使用。 不幸的是，当创建这样一个对象时并不总是很直观明显的。 假设你想写一个方法来确定一个字符串是否是一个有效的罗马数字。 以下是使用正则表达式完成此操作时最简单方法：
```java
// Performance can be greatly improved!
static boolean isRomanNumeral(String s) {
    return s.matches("^(?=.)M*(C[MD]|D?C{0,3})"
            + "(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$");
}
```
这个实现的问题在于它依赖于`String.matches`方法。 虽然 String.matches 是检查字符串是否与正则表达式匹配的最简单方法，但它`不适合在性能临界的情况下重复使用`。 问题是它在内部为正则表达式创建一个 Pattern 实例，并且只使用它一次，之后它就有资格进行垃圾收集。 创建 Pattern 实例是昂贵的，因为它需要将正则表达式编译成`有限状态机`（finite state machine）。

为了提高性能，作为类初始化的一部分，将正则表达式显式编译为一个 Pattern 实例（不可变），缓存它，并在 isRomanNumeral 方法的每个调用中重复使用相同的实例：
```java
// 不仅提高性能而且更加易读
public class RomanNumerals {
    private static final Pattern ROMAN = Pattern.compile(
            "^(?=.)M*(C[MD]|D?C{0,3})"
            + "(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$");

    static boolean isRomanNumeral(String s) {
        return ROMAN.matcher(s).matches();
    }
}
```

**优先使用基本类型变量而不是装箱类型**

```java
private static long sum() {
    // Warning： 此处把 long 写成了 Long ,从而构造了 $2^31$ 个不必要的对象
    Long sum = 0L;
    for (long i = 0; i <= Integer.MAX_VALUE; i++)
        sum += i;
    return sum;
}
```

**对象池问题**

`除非池中的对象非常重量级，否则通过维护自己的对象池来避免对象创建是一个坏主意`。对象池的典型例子就是数据库连接。建立连接的成本非常高，因此重用这些对象是有意义的。但是，一般来说，维护自己的对象池会使代码混乱，增加内存占用，并损害性能。现代 JVM 实现具有高度优化的垃圾收集器，它们在轻量级对象上轻松胜过此类对象池。

<h3 class = 'auto-sort'>消除过期的对象引用</h3>

内存泄漏通常不会表现为明显的故障，所以它们可能会在系统中保持多年。 通常仅在仔细的代码检查或借助堆分析器（heap profiler）的调试工具才会被发现。 因此，学习如何预见这些问题，并防止这些问题发生，是非常值得的。


**栈**

```java
// Can you spot the "memory leak"?
public class Stack {
    private Object[] elements;
    private int size = 0;
    private static final int DEFAULT_INITIAL_CAPACITY = 16;

    public Stack() {
        elements = new Object[DEFAULT_INITIAL_CAPACITY];
    }

    public void push(Object e) {
        ensureCapacity();
        elements[size++] = e;
    }

    public Object pop() {
        if (size == 0)
            throw new EmptyStackException();
        return elements[--size];
    }

    /**
     * Ensure space for at least one more element, roughly
     * doubling the capacity each time the array needs to grow.
     */
    private void ensureCapacity() {
        if (elements.length == size)
            elements = Arrays.copyOf(elements, 2 * size + 1);
    }
}
```

<div class="myWarning">

这个程序没有什么明显的错误, 但有一个潜在的问题。 笼统地说，程序有一个`内存泄漏`，由于垃圾回收器的活动的增加，或内存占用的增加，静默地表现为性能下降。 在极端的情况下，这样的内存泄漏可能会导致磁盘分页（disk paging），甚至导致内存溢出（OutOfMemoryError）的失败，但是这样的故障相对较少。
</div>

这类问题的解决方法很简单：一旦对象引用过期，将它们设置为 null。 在我们的 Stack 类的情景下，只要从栈中弹出，元素的引用就设置为过期。 pop 方法的修正版本如下所示：
```java
public Object pop() {
    if (size == 0)
        throw new EmptyStackException();
    Object result = elements[--size];
    elements[size] = null; // Eliminate obsolete reference
    return result;
}
```

<div class="myTip">

取消过期引用的另一个好处是，如果它们随后被错误地引用，程序立即抛出 NullPointerException 异常，而不是悄悄地做继续做错误的事情。尽可能快地发现程序中的错误是有好处的。

一般来说，当一个类`自己管理内存`时，程序员应该警惕内存泄漏问题。 每当一个元素被释放时，元素中包含的任何对象引用都应该被清除。
</div>

**缓存**

一旦将对象引用放入缓存中，很容易忘记它的存在，并且在它变得无关紧要之后，仍然保留在缓存中。对于这个问题有几种解决方案。如果你正好想实现了一个缓存：只要在缓存之外存在对某个项（entry）的键（key）引用，那么这项就是明确有关联的，就可以用`WeakHashMap`来表示缓存；这些项在过期之后自动删除。记住，只有当缓存中某个项的生命周期是由外部引用到键（key）而不是值（value）决定时，WeakHashMap 才有用。

更常见的情况是，缓存项有用的生命周期不太明确，随着时间的推移一些项变得越来越没有价值。在这种情况下，缓存应该偶尔清理掉已经废弃的项。这可以通过一个后台线程 (也许是 ScheduledThreadPoolExecutor) 或将新的项添加到缓存时顺便清理。LinkedHashMap 类使用它的 removeEldestEntry 方法实现了后一种方案。对于更复杂的缓存，可能直接需要使用 java.lang.ref。

**监听器**

如果你实现了一个 API，其客户端注册回调，但是没有显式地撤销注册回调，除非采取一些操作，否则它们将会累积。确保回调是垃圾收集的一种方法是只存储弱引用（weak references），例如，仅将它们保存在 WeakHashMap 的键（key）中。


<h3 class = 'auto-sort'>避免使用 Finalizer 和 Clear 机制</h3>

Finalizer 机制是不可预知的，往往是危险的，而且通常是不必要的。 它们的使用会导致不稳定的行为，糟糕的性能和移植性问题。 从 Java 9 开始，Finalizer 机制已被弃用，但仍被 Java 类库所使用。 Java 9 中 Cleaner 机制代替了 Finalizer 机制。 Cleaner 机制不如 Finalizer 机制那样危险，但仍然是不可预测，运行缓慢并且通常是不必要的。


</div>
</div>

<div class = 'data-section default-folding'>
<h2 class = 'section-title'><label class = 'block-number'>3</label>对象的通用方法</h2>
<div class = 'folding-area'>

<h3 class = 'auto-sort'>使用 try-with-resources 语句代替 try-finally 语句</h3>

在处理必须关闭的资源时，使用 try-with-resources 语句替代 try-finally 语句。 生成的代码更简洁，更清晰，并且生成的异常更有用。 try-with-resources 语句在编写必须关闭资源的代码时会更容易，也不会出错，而使用 try-finally 语句实际上是不可能的。

**使用 try-finally 关闭资源的缺点**  
```java
// 最明显的缺点：多资源关闭时，丑!
static void copy(String src, String dst) throws IOException {
    InputStream in = new FileInputStream(src);
    try {
        OutputStream out = new FileOutputStream(dst);
        try {
            byte[] buf = new byte[BUFFER_SIZE];
            int n;
            while ((n = in.read(buf)) >= 0)
                out.write(buf, 0, n);
        } finally {
            out.close();
        }
    } finally {
        in.close();
    }
}
```

**使用 try-with-resource 语句**  

`Java 7` 引入了 try-with-resources 语句，要使用这个构造，资源必须实现`AutoCloseable`接口，该接口由一个返回为 void 的`close`组成。Java 类库和第三方类库中的许多类和接口现在都实现或继承了 AutoCloseable 接口。如果你编写的类表示必须关闭的资源，那么这个类也应该实现 AutoCloseable 接口。
```java
// try-with-resources on multiple resources - short and sweet
static void copy(String src, String dst) throws IOException {
    try (InputStream   in = new FileInputStream(src);
         OutputStream out = new FileOutputStream(dst)) {
        byte[] buf = new byte[BUFFER_SIZE];
        int n;
        while ((n = in.read(buf)) >= 0)
            out.write(buf, 0, n);
    }
}
```
不仅 try-with-resources 版本比原始版本更精简，更好的可读性，而且它们提供了更好的诊断。 考虑 firstLineOfFile 方法。 如果调用 readLine 和（不可见）close 方法都抛出异常，则后一个异常将被抑制（suppressed），而不是前者。 事实上，为了保留你真正想看到的异常，可能会抑制多个异常。 这些抑制的异常没有被抛弃， 而是打印在堆栈跟踪中，并标注为被抑制了。 你也可以使用 getSuppressed 方法以编程方式访问它们，该方法在 Java 7 中已添加到的 Throwable 中。

<div class="myTip">

以上实例都可以添加 catch 子句
</div>


<h3 class = 'auto-sort'>重写 equals 方法时遵守的约定</h3>

- 自反性： 对于任何非空引用 x，x.equals(x) 必须返回 true。
- 对称性： 对于任何非空引用 x 和 y，如果且仅当 y.equals(x) 返回 true 时 x.equals(y) 必须返回 true。
- 传递性： 对于任何非空引用 x、y、z，如果 x.equals(y) 返回 true，y.equals(z) 返回 true，则 x.equals(z) 必须返回 true。
- 一致性： 对于任何非空引用 x 和 y，如果在 equals 比较中使用的信息没有修改，则 x.equals(y) 的多次调用必须始终返回 true 或始终返回 false。
- 对于任何非空引用 x，x.equals(null) 必须返回 false。

<div class="myWarning">

**(1) 当重写 equals 方法时，同时也要重写 hashCode 方法**  

如果不这样做，你的类违反了 hashCode 的通用约定，这会阻止它在`HashMap`和`HashSet`这样的集合中正常工作。
如果两个对象根据 equals(Object) 方法比较并不相等，则不要求在每个对象上调用 hashCode 都必须产生不同的结果。 但是，程序员应该意识到，为不相等的对象生成不同的结果可能会提高散列表（hash tables）的性能。

**(2) 不要让 equals 方法试图太聪明**  

**(3) 在 equal 时方法声明中，不要将参数 Object 替换成其他类型**

```java
// Warning : 如果不加 @Override 可能就会通过编译，到时候找起错误来可能麻烦
@Override 
public boolean equals(MyClass o) {
    …
}

```
</div>
<br>

<div class="myTip">

编写和测试 equals（和 hashCode）方法很繁琐，生的代码也很普通。替代手动编写和测试这些方法的优雅的手段是，使用谷歌 [AutoValue](https://github.com/google/auto/blob/master/value/userguide/index.md) 开源框架
</div>
<br>

<div class="myWarning">

Java 类库中的许多类（例如 String 和 Integer）都将 hashCode 方法返回的确切值指定为实例值的函数。 这不是一个好主意，而是一个我们不得不忍受的错误：它妨碍了在未来版本中改进哈希函数的能力。 如果未指定细节并在散列函数中发现缺陷，或者发现了更好的哈希函数，则可以在后续版本中对其进行更改。
</div>


<h3 class = 'auto-sort'>始终重写 toString 方法</h3>

toString 通用约定`建议所有的子类重写这个方法`

```java
System.out.println("Failed to connect to " + phoneNumber);
```
除非你重写 toString 方法，否则程序员以这种方式生成的诊断消息将一无是处。 提供一个良好的 toString 方法不仅惠及类的实例，而且有益于那些包含实例引用的对象，集合尤为明显。 当打印一个 map 时你更愿看到 {Jenny=PhoneNumber@163b91} 还是 {Jenny=707-867-5309}?

<div class="myTip">

在静态工具类中编写 toString 方法是没有意义的。 你也不应该在大多数枚举类型中写一个 toString 方法，因为 Java 为你提供了一个非常好的方法。 但是，你应该在任何抽象类中定义 toString 方法，该类的子类共享一个公共字符串表示形式。
</div>


<h3 class = 'auto-sort'>谨慎地重写 clone 方法</h3>

通常，复制功能最好由构造方法或工厂提供。 这个规则的一个明显的例外是数组，它最好用 clone 方法复制。

//TODO

<h3 class = 'auto-sort'>考虑实现 Comparable 接口</h3>

通过实现 Comparable 接口，可以让你的类与所有依赖此接口的通用算法和集合实现进行互操作。 只需少量的努力就可以获得巨大的能量。 几乎 Java 平台类库中的所有值类以及所有枚举类型都实现了 Comparable 接口。 如果你正在编写具有明显自然顺序（如字母顺序，数字顺序或时间顺序）的值类，则应该实现 Comparable 接口：

```java
public interface Comparable<T> {
    int compareTo(T t);
}
```
```java
// 如果一个类有多个重要的属性，那么比较他们的顺序是至关重要的。 
// 从最重要的属性开始，逐步比较所有的重要属性。
public int compareTo(PhoneNumber pn) {
    int result = Short.compare(areaCode, pn.areaCode);
    if (result == 0) {
        result = Short.compare(prefix, pn.prefix);
        if (result == 0)
            result = Short.compare(lineNum, pn.lineNum);
    }
    return result;
}
```


<div class="myWarning">

强烈推荐 (x.compareTo(y) == 0) == (x.equals(y))，但不是必需的。 一般来说，任何实现了 Comparable 接口的类违反了这个条件都应该清楚地说明这个事实。 
</div>

在 Java 8 中 `Comparator 接口`提供了一系列比较器方法，可以使比较器流畅地构建。
```java
// Comparable with comparator construction methods
private static final Comparator<PhoneNumber> COMPARATOR =
        comparingInt((PhoneNumber pn) -> pn.areaCode)
          .thenComparingInt(pn -> pn.prefix)
          .thenComparingInt(pn -> pn.lineNum);

public int compareTo(PhoneNumber pn) {
    return COMPARATOR.compare(this, pn);
}
```

不要通过两个值之间的差值进行比较
```java
// Dangerous: 它可能会导致整数最大长度溢出和 IEEE 754 浮点运算失真的危险
static Comparator<Object> hashCodeOrder = new Comparator<>() {
    public int compare(Object o1, Object o2) {
        return o1.hashCode() - o2.hashCode();
    }
};



// 可以使用使用静态 compare 方法
static Comparator<Object> hashCodeOrder = new Comparator<>() {
    public int compare(Object o1, Object o2) {
        return Integer.compare(o1.hashCode(), o2.hashCode());
    }
};

// 也可以使用 Comparator 构造方法
static Comparator<Object> hashCodeOrder =
        Comparator.comparingInt(o -> o.hashCode());
```

<div class="myWarning">

比较 compareTo 方法的实现中的字段值时，请避免使用`<`和`>`运算符。 相反，使用包装类中的静态 compare 方法或 Comparator 接口中的构建方法
</div>

</div>
</div>

<div class = 'data-section default-folding'>
<h2 class = 'section-title'><label class = 'block-number'>4</label>类和接口</h2>
<div class = 'folding-area'>

</div>
</div>

<div class = 'data-section default-folding'>
<h2 class = 'section-title'><label class = 'block-number'>5</label>泛型</h2>
<div class = 'folding-area'>

<h3 class = 'auto-sort'>不要使用原始类型</h3>

虽然不应使用诸如 List 之类的原始类型，但可以使用参数化类型来允许插入任意对象（`如 List<Object>`）。

<div class="myTip">

原始类型 List 和参数化类型 List\<Object\> 之间有什么区别？ 松散地说，前者已经选择了泛型类型系统，
而后者明确地告诉编译器，它能够保存任何类型的对象。 虽然可以将 List<String> 传递给 List 类型的参数，但不能将其传递给 List\<Object\> 类型的参数。
泛型有子类型的规则，`List<String> 是原始类型 List 的子类型，但不是参数化类型 List<Object> 的子类型`。 因此，如果使用诸如 List 之类的原始类型，则会丢失类型安全性，但是如果使用参数化类型（例如 List\<Object\>）则不会。

</div>


泛型类型 Set<E> 的无限制通配符类型是 Set<?>（读取「某种类型的集合」）。 它是最通用的`参数化`的 Set 类型，能够保持任何集合。

```java
// Uses unbounded wildcard type - typesafe and flexible
static int numElementsInCommon(Set<?> s1, Set<?> s2) { ... }
```

使用泛型类型的 instanceof 运算符的首选方法:
```java
// Legitimate use of raw type - instanceof operator
if (o instanceof Set) {       // Raw type
    Set<?> s = (Set<?>) o;    // Wildcard type
    ...
}
```


<div class="myTip">

限制类型参数： \<E extends Number\>  
递归类型限制： \<T extends Compareble\<T\>\>  
限制通配符类型： List\<? extends Number\>  
泛形方法：  static \<E\> List\<E\> asList(E[] a)
</div>


<h3 class = 'auto-sort'>消除非检查警告</h3>

尽可能地消除每一个未经检查的警告。如果你不能消除警告，但你可以证明引发警告的代码是类型安全的，那么（并且只能这样）用`@SuppressWarnings("unchecked")`注解来抑制警告。如果你在没有首先证明代码是类型安全的情况下压制警告，那么你给自己一个错误的安全感。

```java
// Adding local variable to reduce scope of @SuppressWarnings
public <T> T[] toArray(T[] a) {
    if (a.length < size) {
        // This cast is correct because the array we're creating
        // is of the same type as the one passed in, which is T[].
        @SuppressWarnings("unchecked") T[] result =
            (T[]) Arrays.copyOf(elements, size, a.getClass());
        return result;
    }
    System.arraycopy(elements, 0, a, 0, size);
    if (a.length > size)
        a[size] = null;
    return a;
}
```

<div class="myTip">

每当使用 @SuppressWarnings(“unchecked”) 注解时，请添加注释，说明为什么是安全的。
</div>

<h3 class = 'auto-sort'>列表优于数组</h3>

一般来说，数组和泛型不能很好地混合工作。 如果你发现把它们混合在一起，得到编译时错误或者警告，你的第一个冲动应该是用列表来替换数组。

<div class="myTip">

数组是协变和具体化的; 泛型是不变的，类型擦除的。 因此，数组提供运行时类型的安全性，但不提供编译时类型的安全性，对于泛型则是相反。
</div>

```java
// A first cut at making Chooser generic - won't compile
public class Chooser<T> {
    private final T[] choiceArray;

    public Chooser(Collection<T> choices) {
        choiceArray = (T[])choices.toArray();
    }

    // choose method unchanged
}


// 编译以上内容，会得到一个警告

Chooser.java:9: warning: [unchecked] unchecked cast
        choiceArray = (T[]) choices.toArray();
                                           ^
  required: T[], found: Object[]
  where T is a type-variable:
T extends Object declared in class Chooser

```
编译器告诉你在运行时不能保证强制转换的安全性，因为程序不会知道 T 代表什么类型——记住，`元素类型信息在运行时会被泛型删除`。 该程序可以正常工作吗？ 是的，但编译器不能证明这一点。 你可以证明这一点，在注释中提出证据，并用注解来抑制警告，但最好是消除警告的原因, 如下所示: 

```java
// List-based Chooser - typesafe
public class Chooser<T> {
    private final List<T> choiceList;


    public Chooser(Collection<T> choices) {
        choiceList = new ArrayList<>(choices);
    }


    public T choose() {
        Random rnd = ThreadLocalRandom.current();
        return choiceList.get(rnd.nextInt(choiceList.size()));
    }
}
```

<h3 class = 'auto-sort'>优先使用泛型</h3>

泛型类型比需要在客户端代码中强制转换的类型更安全，更易于使用。 当你设计新的类型时，确保它们可以在没有这种强制转换的情况下使用。 这通常意味着使类型泛型化。

**考虑 Stack 的实现**
```java
// Initial attempt to generify Stack - won't compile!
public class Stack<E> {
    private E[] elements;
    private int size = 0;
    private static final int DEFAULT_INITIAL_CAPACITY = 16;

    public Stack() {
        // Warning: 此处会报错，你不能创建一个不可具体化类型的数组
        elements = new E[DEFAULT_INITIAL_CAPACITY];
    }

    public void push(E e) {
        ensureCapacity();
        elements[size++] = e;
    }

    public E pop() {
        if (size == 0)
            throw new EmptyStackException();
        E result = elements[--size];
        elements[size] = null; // Eliminate obsolete reference
        return result;
    }
    ... // no changes in isEmpty or ensureCapacity
}
```
**解决方式一：**
```java
// The elements array will contain only E instances from push(E).
// This is sufficient to ensure type safety, but the runtime
// type of the array won't be E[]; it will always be Object[]!
@SuppressWarnings("unchecked")
public Stack() {
    elements = (E[]) new Object[DEFAULT_INITIAL_CAPACITY];
}
```

**解决方式二：**
```java
public Stack() {
    elements = new Object[DEFAULT_INITIAL_CAPACITY];
}

// Appropriate suppression of unchecked warning
public E pop() {
    if (size == 0)
        throw new EmptyStackException();

    // push requires elements to be of type E, so cast is correct
    @SuppressWarnings("unchecked") E result =
        (E) elements[--size];

    elements[size] = null; // Eliminate obsolete reference
    return result;
}
```

<div class="myTip">

第一种技术只需要一次转换（创建数组的地方），而第二种技术每次读取数组元素都需要单独转换。 因此，第一种技术是优选的并且在实践中更常用。 但是，它确实会造成堆污染(heap pollution)：数组的运行时类型与编译时类型不匹配（除非 E 碰巧是 Object）
</div>


<h3 class = 'auto-sort'>使用限定通配符来增加 API 的灵活性</h3>

```java
public class Stack<E> {

    public Stack();
    public void push(E e);
    public E pop();
    public boolean isEmpty();
}
```
```java
// pushAll method without wildcard type - deficient!
public void pushAll(Iterable<E> src) {
    for (E e : src)
        push(e);
}
```

```java
Stack<Number> numberStack = new Stack<>();
// Integer 是 Number 的子类型。 从逻辑上看，
// 这似乎也应该起作用， 但是报错
Iterable<Integer> integers = ... ;
numberStack.pushAll(integers);

报错：
StackTest.java:7: error: incompatible types: Iterable<Integer>
cannot be converted to Iterable<Number>
        numberStack.pushAll(integers);
```
<div class="myWarning">

参数化类型是不变的。如, List\<String\> 不是 List\<Object\> 的子类型
</div>

为解决这个囧境，可以利用限定通配符类型
```java
// Wildcard type for a parameter that serves as an E producer
public void pushAll(Iterable<? extends E> src) {
    for (E e : src)
        push(e);
}
```

<div class="myTip">

如果是在 Integer 列表中，添加 Number 类型呢？  
解决方式： `<? super E>`  
注意，以上只是为了说明语法，其实问题的本生就有错误，因为`pushAll` 是生产者，所以合理的设计是 Number 列表中添加 Integer 类型。

假设你有一个 Stac<Number> 和 Object 类型的变量。 如果从栈中弹出一个元素并将其存储在该变量中，该怎么做？

// Wildcard type for parameter that serves as an E consumer
public void popAll(Collection<? super E> dst) {
    while (!isEmpty())
        dst.add(pop());
}

> 生产者用 extends, 消费者用 super

</div>

 **如果类型参数在方法声明中只出现一次，请将其替换为通配符**  
 ```java
 public static void swap(List<?> list, int i, int j) {
    swapHelper(list, i, j);
}

// Private helper method for wildcard capture
private static <E> void swapHelper(List<E> list, int i, int j) {
    list.set(i, list.set(j, list.get(i)));
}
```

<h3 class = 'auto-sort'>合理地结合泛型和可变参数</h3>

//TODO

</div>
</div>

<div class = 'data-section default-folding'>
<h2 class = 'section-title'><label class = 'block-number'>6</label>枚举类型和注解类型</h2>
<div class = 'folding-area'>

<h3 class = 'auto-sort'>使用枚举类型替代整型常量</h3>

```java
public enum Apple  { FUJI, PIPPIN, GRANNY_SMITH }
public enum Orange { NAVEL, TEMPLE, BLOOD }
```
Java 的枚举类型是完整的类，比其他语言中的其他语言更强大，其枚举本质本上是`int`值。Java 枚举类型背后的基本思想很简单：它们是通过公共静态 final 属性为每个枚举常量导出一个实例的类。 由于`没有可访问的构造方法`，枚举类型实际上是`final`的。 由于客户既不能创建枚举类型的实例也不能继承它，除了声明的枚举常量外，不能有任何实例。 换句话说，枚举类型是实例控制的。 它们是`单例`的泛型化，基本上是单元素的枚举。


以下是对于丰富的枚举类型的一个很好的例子，考虑我们太阳系的八颗行星。 每个行星都有质量和半径，从这两个属性可以计算出它的表面重力。 从而在给定物体的质量下，计算出一个物体在行星表面上的重量。
```java
// Enum type with data and behavior
public enum Planet {
    MERCURY(3.302e+23, 2.439e6),
    VENUS  (4.869e+24, 6.052e6),
    EARTH  (5.975e+24, 6.378e6),
    MARS   (6.419e+23, 3.393e6),
    JUPITER(1.899e+27, 7.149e7),
    SATURN (5.685e+26, 6.027e7),
    URANUS (8.683e+25, 2.556e7),
    NEPTUNE(1.024e+26, 2.477e7);

    private final double mass;           // In kilograms
    private final double radius;         // In meters
    private final double surfaceGravity; // In m / s^2
    // Universal gravitational constant in m^3 / kg s^2
    private static final double G = 6.67300E-11;

    // Constructor
    Planet(double mass, double radius) {
        this.mass = mass;
        this.radius = radius;
        surfaceGravity = G * mass / (radius * radius);
    }

    public double mass()           { return mass; }
    public double radius()         { return radius; }
    public double surfaceGravity() { return surfaceGravity; }

    public double surfaceWeight(double mass) {
        return mass * surfaceGravity;  // F = ma
    }
}


// 打印一个漂亮的表格，显示该物体在所有八个行星上的重量
public class WeightTable {
   public static void main(String[] args) {
      double earthWeight = Double.parseDouble(args[0]);
      double mass = earthWeight / Planet.EARTH.surfaceGravity();
      for (Planet p : Planet.values())
          System.out.printf("Weight on %s is %f%n",
                            p, p.surfaceWeight(mass));
      }
}

```
编写一个丰富的枚举类型比如 Planet 很容易。 要将数据与枚举常量相关联，请声明实例属性并编写一个构造方法，`构造方法带有数据并将数据保存在属性中`。 枚举本质上是不变的，所以所有的属性都应该是 final 的。属性可以是公开的，但最好将它们设置为私有并提供公共访问方法

<div class="myTip">

直到 2006 年，在 Java 中加入枚举两年之后，冥王星不再是一颗行星。 这引发了一个问题：「当你从枚举类型中移除一个元素时会发生什么？」答案是，任何不引用移除元素的客户端程序都将继续正常工作。 所以，举例来说，我们的 WeightTable 程序将会打印一个少一行的表格。 那么客户端程序引用删除的元素（在本例中是Planet.Pluto）会如何？ 如果重新编译客户端程序，编译将会失败并在引用删除的星球的行处提供有用的错误消息; 如果无法重新编译客户端，它将在运行时从此行中引发有用的异常。 这是你所希望的最好的行为，远远好于你用 int 枚举模式得到的结果。
</div>

//TODO



<h3 class = 'auto-sort'>使用实例属性代替序列</h3>

许多枚举通常与单个 int 值关联。所有枚举都有一个 ordinal 方法，它返回每个枚举常量类型的数值位置。你可能想从序数中派生一个关联的 int 值：

```java
public enum Ensemble {
    SOLO,   DUET,   TRIO, QUARTET, QUINTET,
    SEXTET, SEPTET, OCTET, NONET,  DECTET;

    // Dangerous: 维护噩梦
    public int numberOfMusicians() { return ordinal() + 1; }
}
```
`永远不要从枚举的序号中得出与它相关的值; 请将其保存在实例属性中`
```java
public enum Ensemble {
    SOLO(1), DUET(2), TRIO(3), QUARTET(4), QUINTET(5),
    SEXTET(6), SEPTET(7), OCTET(8), DOUBLE_QUARTET(8),
    NONET(9), DECTET(10), TRIPLE_QUARTET(12);

    private final int numberOfMusicians;

    Ensemble(int size) { this.numberOfMusicians = size; }
    public int numberOfMusicians() { return numberOfMusicians; }
}
```

<div class="myTip">

枚举规范对此 ordinal 方法说道：“大多数程序员对这种方法没有用处。 它被设计用于基于枚举的通用数据结构，如 EnumSet 和 EnumMap。
</div>

<h3 class = 'auto-sort'>使用 EnumSet 代替位属性</h3>

如果枚举类型的元素主要用于集合中，则传统上使用 int 枚举模式，将 2 的不同次幂赋值给每个常量：

```java
// Bit field enumeration constants - OBSOLETE!
public class Text {
    public static final int STYLE_BOLD          = 1 << 0;  // 1
    public static final int STYLE_ITALIC        = 1 << 1;  // 2
    public static final int STYLE_UNDERLINE     = 1 << 2;  // 4
    public static final int STYLE_STRIKETHROUGH = 1 << 3;  // 8

    // Parameter is bitwise OR of zero or more STYLE_ constants
    public void applyStyles(int styles) { ... }
}
```
这种表示方式允许你使用按位或（or）运算将几个常量合并到一个称为`位域（bit field）`的集合中：

```java
text.applyStyles(STYLE_BOLD | STYLE_ITALIC);
```

使用枚举和枚举集合替代位域, 更短，更清晰，更安全：
```java
// EnumSet - a modern replacement for bit fields
public class Text {
    public enum Style { BOLD, ITALIC, UNDERLINE, STRIKETHROUGH }

    // Any Set could be passed in, but EnumSet is clearly best
    public void applyStyles(Set<Style> styles) { ... }   // 这里是 Set
}
```

```java
text.applyStyles(EnumSet.of(Style.BOLD, Style.ITALIC));
```

<h3 class = 'auto-sort-sub'>使用 EnumMap 代替序数索引</h3>
 
 //TODO

<h3 class = 'auto-sort'>使用接口模拟可扩展的枚举</h3>

```java
// Emulated extensible enum using an interface
public interface Operation {
    double apply(double x, double y);
}

public enum BasicOperation implements Operation {
    PLUS("+") {
        public double apply(double x, double y) { return x + y; }
    },
    MINUS("-") {
        public double apply(double x, double y) { return x - y; }
    },
    TIMES("*") {
        public double apply(double x, double y) { return x * y; }
    },
    DIVIDE("/") {
        public double apply(double x, double y) { return x / y; }
    };
    private final String symbol;

    BasicOperation(String symbol) {
        this.symbol = symbol;
    }

    @Override public String toString() {
        return symbol;
    }
}
```

虽然枚举类型（BasicOperation）不可扩展，但接口类型（Operation）是可以扩展的，并且它是用于表示 API 中的操作的接口类型。 你可以定义另一个实现此接口的枚举类型，并使用此新类型的实例来代替基本类型。 例如，假设想要定义前面所示的操作类型的扩展，包括指数运算和余数运算。 你所要做的就是编写一个实现 Operation 接口的枚举类型：

```java
// Emulated extension enum
public enum ExtendedOperation implements Operation {
    EXP("^") {
        public double apply(double x, double y) {
            return Math.pow(x, y);
        }
    },
    REMAINDER("%") {
        public double apply(double x, double y) {
            return x % y;
        }
    };

    private final String symbol;

    ExtendedOperation(String symbol) {
        this.symbol = symbol;
    }

    @Override public String toString() {
        return symbol;
    }
}
```

```java
public static void main(String[] args) {
    double x = Double.parseDouble(args[0]);
    double y = Double.parseDouble(args[1]);
    test(ExtendedOperation.class, x, y);
}


private static <T extends Enum<T> & Operation> void test(
        Class<T> opEnumType, double x, double y) {
    for (Operation op : opEnumType.getEnumConstants())
        System.out.printf("%f %s %f = %f%n",
                          x, op, y, op.apply(x, y));
}
```

<div class="myTip">

注意，扩展的操作类型的类字面文字（`ExtendedOperation.class`）从 main 方法里传递给了 test 方法，用来描述扩展操作的集合。这个类的字面文字用作限定的类型令牌。opEnumType 参数中复杂的声明`<T extends Enum\<T\> & Operation\> Class\<T\>`确保了 Class 对象既是枚举又是 Operation 的子类，这正是遍历元素和执行每个元素相关联的操作时所需要的。
</div>

第二种方式是传递一个`Collection\<? extends Operation\>`，这是一个限定通配符类型，而不是传递了一个 class 对象：
```java
public static void `main`(String[] args) {
    double x = Double.parseDouble(args[0]);
    double y = Double.parseDouble(args[1]);
    test(Arrays.asList(ExtendedOperation.values()), x, y);
}

private static void test(Collection<? extends Operation> opSet,
        double x, double y) {
    for (Operation op : opSet)
        System.out.printf("%f %s %f = %f%n",
                          x, op, y, op.apply(x, y));
}
```

<h3 class = 'auto-sort'>注解优于命名模式</h3>

//TODO



<h3 class = 'auto-sort'>使用标记接口定义类型</h3>

标记接口定义了一个由标记类实例实现的类型；标记注解则没有定义这样的类型。标记接口对于标记注解的另一个优点是可以更精确地定位目标。  
标记注解优于标记接口的主要优点是它们是更大的注解工具的一部分。如果发现自己正在编写目标为 ElementType.TYPE 的标记注解类型，那么请花时间弄清楚究竟应该用注解类型，还是标记接口更合适。



</div>
</div>


<div class = 'data-section default-folding'>
<h2 class = 'section-title'><label class = 'block-number'>7</label>Lambda 和 Stream</h2>
<div class = 'folding-area'>

<h3 class = 'auto-sort'>lambda 表达式优于匿名类</h3>

以往，使用单一抽象方法的接口用作函数类型。 它们的实例`函数对象`表示函数（functions）或行动（actions）。 自从 JDK 1.1 于 1997 年发布以来，创建函数对象的主要手段就是`匿名类`

```java
// Anonymous class instance as a function object - obsolete!
Collections.sort(words, new Comparator<String>() {
    public int compare(String s1, String s2) {
        return Integer.compare(s1.length(), s2.length());
    }
});
```

<div class="myTip">

匿名类适用于需要函数对象的经典面向对象设计模式，特别是`策略模式`。 比较器接口表示排序的抽象策略; 上面的匿名类是排序字符串的具体策略。 然而，匿名类的冗长，使得 Java 中的函数式编程成为一种不吸引人的设想。
</div>

在 Java 8 中，语言形式化了这样的概念，即使用单个抽象方法的接口是特别的，应该得到特别的对待。 这些接口现在称为函数式接口
```java
// Lambda expression as function object (replaces anonymous class)
Collections.sort(words,
        (s1, s2) -> Integer.compare(s1.length(), s2.length()));
```

```java
public enum Operation {
    PLUS  ("+", (x, y) -> x + y),
    MINUS ("-", (x, y) -> x - y),
    TIMES ("*", (x, y) -> x * y),
    DIVIDE("/", (x, y) -> x / y);

    private final String symbol;
    private final DoubleBinaryOperator op;

    Operation(String symbol, DoubleBinaryOperator op) {
        this.symbol = symbol;
        this.op = op;
    }

    @Override
    public String toString() { return symbol; }

    public double apply(double x, double y) {
        return op.applyAsDouble(x, y);
    }
}
```

<div class="myWarning">

请注意，我们使用表示枚举常量行为的 lambdas 的`DoubleBinaryOperator`接口。 这是 java.util.function 中许多预定义的函数接口之一
</div>

<div class="myTip">

与方法和类不同，lambda 没有名称和文档; 如果计算不是自解释的，或者超过几行，则不要将其放入 lambda 表达式中。 `一行代码对于 lambda 说是理想的，三行代码是合理的最大值`。
</div>

 Lambda 仅限于函数式接口。 如果你想创建一个抽象类的实例，你可以使用匿名类来实现，但不能使用 lambda。 同样，你可以使用匿名类来创建具有多个抽象方法的接口实例。 最后，lambda 不能获得对自身的引用。 在 lambda 中，this 关键字引用封闭实例，这通常是你想要的。 在匿名类中，this 关键字引用匿名类实例。 如果你需要从其内部访问函数对象，则必须使用匿名类。

Lambdas 与匿名类共享无法可靠地序列化和反序列化实现的属性。因此，应该很少 (如果有的话) 序列化一个 lambda(或一个匿名类实例)。 如果有一个想要进行`序列化的函数对象`，比如一个 Comparator，那么使用一个`私有静态嵌套类`的实例

<h3 class = 'auto-sort'>审慎使用 Stream</h3>

Stream pipeline 通常是`惰性`（lazily）计算求值：直到终结操作被调用后才开始计算，而为了完成终结操作而不需要的数据元素永远不会被计算出来。 这种惰性计算求值的方式，使得无限流成为可能。 请注意，没有终结操作的 Stream pipine 是一个静默无操作的指令，所以不要忘记包含一个终止操作。

//TODO

<h3 class = 'auto-sort'>优先考虑流中无副作用的函数</h3>

//TODO

</div>
</div>


<div class = 'data-section default-folding'>
<h2 class = 'section-title'><label class = 'block-number'>8</label>方法</h2>
<div class = 'folding-area'>

<h3 class = 'auto-sort'>检查参数有效性</h3>

每次编写方法或构造方法时，都应该考虑对其参数存在哪些限制。 应该记在这些限制，并在方法体的开头使用显式检查来强制执行这些限制。 养成这样做的习惯很重要。 在第一次有效性检查失败时，它所需要的少量工作将会得到对应的回报。

```java
/**
 * Returns a BigInteger whose value is (this mod m). This method
 * differs from the remainder method in that it always returns a
 * non-negative BigInteger.
 *
 * @param m the modulus, which must be positive
 * @return this mod m
 * @throws ArithmeticException if m is less than or equal to 0
 */
public BigInteger mod(BigInteger m) {
    if (m.signum() <= 0)
        throw new ArithmeticException("Modulus <= 0: " + m);

    ... // Do the computation

}
```



</div>
</div>


<div class = 'data-section default-folding'>
<h2 class = 'section-title'><label class = 'block-number'>9</label>通用编程</h2>
<div class = 'folding-area'>







</div>
</div>
