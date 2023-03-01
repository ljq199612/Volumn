
<div class = 'data-section default-folding'>
<h2 class = 'section-title'><label class = 'block-number'>1</label>类型</h2>
<div class = 'folding-area'>

> 任意类型 `any`
```js
let d: any;
```

> 安全的任意类型 `unknown`
```js
let d: unknown;
```

> 可选类型  `|`
```js
let b: string | number;

// b = "ss"; b = 12;
```


> 对象单个不确定字段 `?`
```js
let b: {name: string, age?: number};

// b = {name: "小明"}
```

> 对象多个不确定字段 `[xxx: string]: any`
```js
let b: {name: string, [propName: string]: any};

// b = {name:"小明", age:18,  sex:"男"}
```

> 函数的结构类型声明
```js
let d: (a:number, b:number) => number;

d = function(n1:number, n2:number): number{
    return n1 + n2;
}
```

> 数组类型声明
```js
let d: number[];
// 或者
let d: Array<number>;

// d = [1, 2, 3]
```

> 元组，定长数组
```js
let d: [string, string];

// d = ["A", "B"]
```

> 枚举
```js
Enum SEX {
    Male  = 0,
    Female = 1
}
let d: {name: string, sex: SEX};
```

> 与类型 `&`
```js
let b: {name: string} & {age: number};

// b = {name: "小明", age: 18}
```

> 类型别名 `type`
```js
type typeA = 1 | 2 | 3 | 4 | 5 | 6;
let d: typeA;
```

</div>
</div>


<div class = 'data-section default-folding'>
<h2 class = 'section-title'><label class = 'block-number'>2</label>编译管理</h2>
<div class = 'folding-area'>


</div>
</div>

> 编译命令 `tsc`, 把 ts 转化成 js

> 编译配置文件 `tsconfig.json`
```json
{  // 示例
  "compilerOptions": {
    "target": "esnext",          // 编译的es语法， esnext(最新版)
    "module": "esnext",
    "moduleResolution": "node",
    "jsx": "preserve",
    "baseUrl": ".",
    "sourceMap": true,
    "resolveJsonModule": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "lib": ["es6", "ESNext", "dom"],
    "types": ["vite/client"],
    "paths": {
      "@/*": ["src/*"],
      "/#/*": ["types/*"]
    },
    
    "alwaysStrict": false,       // 严格模式，模块化js自动进入严格模式
    "out": "./dist",             // 编译后文件制定目录
    "outFile": "./dist/app.js",  // 编译后文件合并成一个文件
    "allowJs": false,            // 是否对 js 进行编译
    "checkJs": false,            // 是否检测js规范
    "removeComments": false,     // 是否移除注释
    "strict": true,              // 严格检测总开关，打开后下面的单项就不用写了
    "noImplicitThis": true,      // 不允许不明确的类型的this
    "noImplicitAny": true,       // 是否允许使用any
    "noEmitOnError": false,      // 有错误是否还要编译
    "strictNullChecks": true,    // 严格检测 null


  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue", "types/**/*"],
  "exclude": ["node_modules", "dist", "**/*.js"]
}

```











































































