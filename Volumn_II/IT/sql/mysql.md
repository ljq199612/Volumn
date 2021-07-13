
### MySQL 体系结构


!>📌 **[Tip]**  
`MySQL`指`MySQL RDBMS`,是一个完整的客户/服务器体系结构。  
`mysqld`指的是服务器程序。  
`mysql`指的是特定客户程序名称。其他客户程序有`mysqlimport` `mysqlshow`等。




```sql
# 查看数据库所有的引擎
mysql> show engines;
# 等价于
mysql> select engine from information_schema.engines;

#-----------------------------------------------------------------
#                           NOTE
#-----------------------------------------------------------------
# XA 和 Savepoints 分别表示是否支持分布式事物处理和部分事物回滚。

```




