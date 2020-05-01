#### idea junit 测试，终端输出卡死问题的解决
编辑文件： Help > Edit Custom VM Options

在最后加入
```
-Deditable.java.test.console=true
```
