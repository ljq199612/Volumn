> 以下软件默认的安装测试环境是 OpenSUSE, 默认在软件库下载安装软件

# 普通


<div class = 'data-section default-folding'>
<h2 class = 'section-title'>Flameshot (截图)</h2>
<div class = 'folding-area'>

[github 源码](https://github.com/flameshot-org/flameshot#installation)
</div>
</div>

 
<div class = 'data-section default-folding'>
<h2 class = 'section-title'>WPS</h2>
<div class = 'folding-area'>

官网下载 rpm 包安装后， 需要添加字体， 可以把 windows 下的字体复制到 `/usr/share/fonts/` 目录下
</div>
</div>


<div class = 'data-section default-folding'>
<h2 class = 'section-title'>RAR （压缩）</h2>
<div class = 'folding-area'>

[下载地址](http://www.rarlab.com/)
```bash
$ sudo tar zxvf rarlinux-x64-4.2.0.tar.gz -C /usr/local
$ sudo ln -s /usr/local/rar/rar /usr/local/bin/rar
$ sudo ln -s /usr/local/rar/unrar /usr/local/bin/unrar
```
</div>
</diV>

<div class = 'data-section default-folding'>
<h2 class = 'section-title'>yakuake (下拉式终端模拟器)</h2>
<div class = 'folding-area'>

</div>
</div>

<div class = 'data-section default-folding'>
<h2 class = 'section-title'>Flatpak</h2>
<div class = 'folding-area'>

[使用手册](https://wiki.archlinux.org/index.php/Flatpak_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)

</div>
</div>

<div class = 'data-section default-folding'>
<h2 class = 'section-title'>Snapper (系统回滚)</h2>
<div class = 'folding-area'>

**回滚 openSUSE 系统**  
> 快照的位置，/.snapshots/  
> 删除所有快照 sudo snapper delete *
```
# 快照列表
sudo snapper list
# 回滚系统
sudo snapper rollback [NUM]
```
</div>
</div>

# IT 

<div class = 'data-section default-folding'>
<h2 class = 'section-title'>NodeJS</h2>
<div class = 'folding-area'>

1. 源里安装 npm
1. 安装国内镜像
```bash
# 安装 淘宝镜像源
sudo npm install -g cnpm --registry=https://registry.npm.taobao.org
# 设置 cnpm 全局模块地址为 npm 模块地址
# [WARING] 切换到 root 后执行，sudo 执行好像不行
# 解决 cnpm uninstall 报错
cnpm config set prefix `npm config get prefix`
```

</div>
</div>

<div class = 'data-section default-folding'>
<h2 class = 'section-title'>GHex (16 进制编辑器)</h2>
<div class = 'folding-area'>

</div>
</div>

<div class = 'data-section default-folding'>
<h2 class = 'section-title'>Redis</h2>
<div class = 'folding-area'>

1.确定系统中安装了 `gcc`

2.[官网下载](https://redis.io/download), 解压安装
```bash
$>  tar xzf redis-xxx.tar.gz

$>  cd redis

# 安装 
$>  make
$>  make install PREFIX=/home/XXX/redis/
# 此时，生成 bin 目录
```
3.创建软链接
```bash
$>  ln -s  /home/xxx/redis/bin/redis-server  ~/bin/redis-server
$>  ln -s  /home/xxx/redis/bin/redis-cli  ~/bin/redis
```
4.启动服务
```bash
$>  redis-server

# 或者后台启动，
$>  redis-server &
```

<div class="myTip">

**后台运行的程序如何关闭？**  
1. `ps -ef | grep redis` 查看进程
1. `kill 进程ID`  关闭进程 
</div>

</div>
</div>


<div class = 'data-section default-folding'>
<h2 class = 'section-title'>DBeaver 数据库管理</h2>
<div class = 'folding-area'>

[官网](https://dbeaver.io/)
</div>
</div>



<div class = 'data-section default-folding'>
<h2 class = 'section-title'>ORACLE 数据库</h2>
<div class = 'folding-area'>

1. 试验环境
- CentOS 8.4
- ORACLE 19C

1. 下载软件包

1. 前期准备
安装包 `ksh` `libaio-devel` `libstdc++-devel` `sysstat` `libnsl` `compat-libstdc++` `compat-libcap1`

1. 安装
```bash
# 1.安装依赖包
[root@  ~] yum install oracle-database-preinstall-19c-1.0-1.el7.x86_64.rpm

# 2.安装数据库软件
[root@  ~] yum install oracle-database-ee-19c-1.0-1.x86_64.rpm

# 3.配置数据库实例
[root@  ~] /etc/init.d/oracledb_ORCLCDB-19c configure
```

<div class="myWarning">


</div>


</div>
</div>


<div class = 'data-section default-folding'>
<h2 class = 'section-title'>Oracle 客户端</h2>
<div class = 'folding-area'>

1.下载软件包 [Basic Package(ZIP)](https://www.oracle.com/database/technologies/instant-client/linux-x86-64-downloads.html)

2.配置环境 `.bashrc`

```shell
export ORACLE_HOME=/home/xxx/oracle-client/
export TNS_ADMIN=$ORACLE_HOME/network/admin
export NLS_LANG=AMERICAN_AMERICA.ZHS16GBK
export NLS_LANG=AMERICAN_AMERICA.AL32UTF8
export LD_LIBRARY_PATH=$ORACLE_HOME
export PATH=$ORACLE_HOME:$PATH
```

<div class="myTip">

1. 可以去官网下载基本的管理工具`SQL*PLus Package`，解压到 oracle 客户端解压的目录

1. 利用图形管理工具连接 oracle 服务器，如 [DataGrip](https://www.jetbrains.com/datagrip/)

</div>

</div>
</div>

<div class = 'data-section default-folding'>
<h2 class = 'section-title'>MySQL</h2>
<div class = 'folding-area'>

> 通过 [官网](https://dev.mysql.com/downloads/) 了解需要下载的版本，
通过中科大清华镜像[下载](http://mirrors.ustc.edu.cn/mysql-ftp/Downloads/MySQL-8.0/)


1. 下载压缩版, 如[MySQL-8.0.20](https://dev.mysql.com/get/Downloads/MySQL-8.0/mysql-8.0.20-linux-glibc2.12-x86_64.tar.xz) 

1. 创建用户组及授权
```bash
root$> groupadd mysql
root$> useradd -g mysql mysql
root$> chown -R mysql.mysql  /opt/mysql8
```

1. 初始化 (5.7+)
```bash
# 方式一: 生成临时密码(显示在终端日志中), 密码过期时间为180天
root$> ./bin/mysqld --user=ljq --basedir=/opt/mysql8 --datadir=/opt/mysql8/data --initialize
#方式二: 管理员密码为空(推荐)
root$> ./bin/mysqld  --initialize-insecure  --user=ljq --basedir=/opt/mysql8 --datadir=/opt/mysql8/data --initialize
```
此时生成 ./support-files/ 文件夹, 修改`./support-files/mysql.server`文件, 修改文件里的`basedir=''` `basedata=''`为 MySQL 位置(默认位置为 /esr/local/)

1. 编辑 my.cnf 配置文件, 如
```bash
[mysqld]
basedir=/opt/mysql8
datadir=/opt/mysql8/data
character-set-server=UTF8MB4
#socket=/tmp/mysql.sock
#设置忽略大小写,默认不区分大小写
#lower_case_table_names = 1
# 登陆时跳过权限验证
[mysqld_safe]
log-error=/opt/mysql8/log/error.log
```
1. 添加服务到系统
```bash
root$> cp -a ./support-files/mysql.server  /etc/init.d/
root$> chmod +x /etc/init.d/mysql.server
root$> chkconfig --add mysql.server
```

1. 服务启动
```bash
root$> service mysql start
```

1. 登陆 mysql
```bash
user$> mysql -uroot -p 
```

<div class="myTip">

**问: 密码忘记该怎么办?**  

**答:**  
1. 在配置文件 my.cnf [mysqld] 下添加 skip-grant-tables
2. 重启 mysql 服务
3. 登入 mysql 重空密码
```bash
mysql> use mysql;
# 查看用户信息
mysql> select host, user, authentication_string, plugin from user;  
# 设置密码为空
mysql> update user set authentication_string='' where user='root';  
```
4. 修改密码
```bash
# 方式一
mysql> ALTER user 'root'@'localhost' IDENTIFIED BY '123456'  
# 方式二
root$> mysqladmin -uroot -p password 123456
```
<br>
**问: my.cnf在哪创建?**  
**答:** my.cnf 可以在安装路径下创建, 也可以在 /etc/ 路径下创建, 详细位置可以执行
```bash
user$> mysql --help | grep my.cnf
```

</div>

libinfo.so.5 [下载地址](https://pkgs.org/download/libtinfo.so.5)

</div>
</div>

<div class = 'data-section default-folding'>
<h2 class = 'section-title'>mycli  (mysql 命令行提示和语法高)</h2>
<div class = 'folding-area'>

1) 安装
```bash
$ sudo pip install mycli
```
2） 使用
```bash
$ mycli -u name -p password
```
3) 配置文件 ./myclirc
</div>
</div>

<div class = 'data-section default-folding'>
<h2 class = 'section-title'>jdk</h2>
<div class = 'folding-area'>

1） 在 .bashrc 添加
```bash
export JAVA_HOME=/xxx/jdk8 
export JRE_HOME=$JAVA_HOME/jre 
export CLASSPATH=.:$JAVA_HOME/lib:$JRE_HOME/lib 
export PATH=$JAVA_HOME/bin:$PATH 
```
2)  执行
```bash
$ souce  .bashrc
$ sudo update-alternatives --install /usr/bin/java java /xxx/bin/java 300
$ sudo update-alternatives --install /usr/bin/javac javac /xxx/bin/javac 300
$ sudo update-alternatives --config java
$ sudo update-alternatives --config javac
```
</div>
</div>

<div class = 'data-section default-folding'>
<h2 class = 'section-title'>curl</h2>
<div class = 'folding-area'>
curl 是 linux 系统自带的命令行工具，通过指定的 URL 来上传或下载数据，并将数据展示出来。

**使用指南**  
**@blog** [curl 使用指南](https://www.jianshu.com/p/fc0eb6c60816)   
**@blog** [curl 命令详解](https://www.jianshu.com/p/07c4dddae43a)

示例1: 下载 jqurey
```bash
$ curl https://code.jquery.com/jquery-3.4.1.js > jquery.js

```
示例2: 执行脚本
```bash
$ bash <(curl -fsSL https://ljq199612.github.io/shell/hello.sh)

```
</div>
</div>

<div class = 'data-section default-folding'>
<h2 class = 'section-title'>Atom （开发工具）</h2>
<div class = 'folding-area'>

### 1. 安装 
[ atom rpm 安装包](http://www.rpmfind.net/linux/rpm2html/search.php?query=atom)

```bash
sudo zypper install lsb
sudo rpm  -ivh  atom.xx.rpm
```

### 2. 快捷键

| 基本 |描述 |
|:--|:--|
| CTRL + \ | 显示或隐藏目录树|
| CTRL + , | 进入 setting 页面 |
| CTRL + B | 在打开的文件间切换 |
| CTRL + 鼠标点击 | 增加多个光标 |
| CTRL + M | 相应括号，html tag 标签间跳转 |
| ALT + CTRL + , | 选择对应括号标签里的内容 |
| ALT + CTRL + . | 关闭当前 XML/HTML 标签
| CTRL + G | 光标移动到指定位置 |
| CTRL + K, CTRL + U | 转大写 |
| CTRL + K, CTRL + L | 转小写 |
| CTRL + D | 选择文件中下一个选中的词 |
| | |
| CTRL + SHIFT + F | 整个项目里搜索 |
| ALT + CTRL + ] \\ [ | 折叠展开代码块 |
| ALT + CTRL + SHIFT + ] \\ [ | 折叠展开所有代码块 |
| | |
| CTRL + K, up | 向上添加编辑拆分面板 |
| CTRL + W | 关闭当前面板 |
| CTRL + SHIFT + L | 选择文件语法 |
| | |
| CTRL ] + ]\\[ | 展开（隐藏）当前目录 |
| CTRL ] + ALT+ ]\\[ 或者 ALT + right \\ left| 递归展开（隐藏）目录 |


### 3. 插件
#### markdown

- [markdown-preview-enhanced](https://atom.io/packages/markdown-preview-enhanced) --全面型 [(中文文档)](https://shd101wyy.github.io/markdown-preview-enhanced/#/zh-cn/)

#### html

- [emmet](https://atom.io/packages/emmet) -- html 代码快速生成

#### javascript

- [javascript-snippets](https://atom.io/packages/javascript-snippets) -- javascript & NodeJS 代码快速生成

#### 正则表达式

- [regex-railroad-diagram](https://atom.io/packages/regex-railroad-diagram)

#### 浏览器关联

- [open-in-browser](https://atom.io/packages/open-in-browser)


#### 待处理
- [Sublime-Style-Column-Selection](https://atom.io/packages/Sublime-Style-Column-Selection) --块状选择
- [hyperclick](https://atom.io/packages/hyperclick) --快速跳转插件，配合js-hyperclick可以跳转到函数所在位置
- [atom-bootstrap3](https://atom.io/packages/atom-bootstrap3) -- bootstrap3 html自动补全插件
- [autocomplete-paths](https://atom.io/packages/autocomplete-paths) --自动补全文件路径
- [color-picker](https://atom.io/packages/color-picker) --取色
- [pigments](https://atom.io/packages/pigments) --编辑器中直接查看代码所代表的颜色

</div>
</div>


<div class = 'data-section default-folding'>
<h2 class = 'section-title'>Idea (开发工具)</h2>
<div class = 'folding-area'>

### 2. 插件


</div>


#### jrebel

热部署插件

<div class="myTip">

收费插件，破解方式如下：  
team url:  http://jrebel.cicoding.cn/4B068EB5-0941-4645-1E98-FC077D530A61

</div>

#### free Mybatis

mybatis 中 Mapper 和 XML 的关联插件

</div>
</div>

<div class = 'data-section default-folding'>
<h2 class = 'section-title'>Zookeeper</h2>
<div class = 'folding-area'>

[下载地址](http://www.apache.org/dyn/closer.cgi/zookeeper/)

1) 解压  

2) 把 bin 目录下的 .sh 文件添加权限
```bash
chmod 755 *.sh
```

3) 在 conf 目录下添加`zoo.cfg`文件， 如
```
tickTime=2000
initLimit=10
syncLimit=5
dataDir=/home/ljq/temp/zookeeper
clientPort=2181
# 默认是 8080 
admin.serverPort=8888
```

4) 添加执行环境,`.bashrc`中添加
```bash
# zookeeper
export ZK_HOME=/home/XXX/apache-zookerper/
export PATH=$ZK_HOME/bin:$PATH
alias  zookeeper-server='zkServer.sh'
```

5) 基本命令
```bash
zookeeper-server start
zookeeper-server stop
zookeeper-server restart
zookeeper-server status
```

</div>
</div>


<div class = 'data-section default-folding'>
<h2 class = 'section-title'>Dubbo-admin (Dubbo 管理)</h2>
<div class = 'folding-area'>

[下载地址 (Github)](https://github.com/apache/dubbo-admin)

[新版 Dubbo admin 介绍](http://dubbo.apache.org/zh-cn/blog/dubbo-admin.html)

环境依赖：
- tomcat
- maven
- zookeeper
- nodejs


1) 解压

2) 查看 `README.md` 文件，了解基本使用

3）配置`dubbo-admin-server`

修改`application.properties`, 注册`zookeeper`地址

```properties
# 默认为本地
admin.registry.address=zookeeper://127.0.0.1:2181
admin.config-center=zookeeper://127.0.0.1:2181
admin.metadata-report.address=zookeeper://127.0.0.1:2181
```

4）启动服务器上的`zookeeper`

5) 托管`dubbo-admin-server`到 tomcat

<div class="myTip">

**如何生成`war`包?**

进入`dubbo-admin-server`目录，修改`pom.xml`

```xml
在 
<artifactId>dubbo-admin-server</artifactId>
后，添加
<packaging>war</packaging>
```

运行

```bash
mvn package -Dmaven.skip.test=true
# 在 target 目录下生成 `dubbo-admin-server.war` 文件
```
</div>

6）配置`dubbo-admin-ui`界面  
修改`dubbo-admin-ui/config/index.js`文件

```
修改默认服务地址 
    http://localhost:8080 
为 tomcat 配置下服务地址
    http://XXX/dubbo-admin-server/

```

7）启动`dubbo-admin-ui`
```
$> npm run dev

# 默认为 http://localhost:8081
# 可通过 dubbo-admin-ui/config/index.js 修改
http://localhost:8081
```

<div class="myTip">

可以抽出`ui`目录，在`.bashrc` 文件添加别名运行
```bash
alias  dubbo-admin-cli-start='npm run dev --prefix ~/opt/dubbo-admin-ui/' 
```
</div>

</div>
</div>




<div class = 'data-section default-folding'>
<h2 class = 'section-title'>Dokcer</h2>
<div class = 'folding-area'>

### 下载安装  
<span class='header5'></span>源里下载 docker

### 配置  
<span class='header5'></span>修改默认存储路径, 以及 docker hub 国内镜像
编辑`/etc/docker/daemon.json` 文件, 如

```json
{
  "data-root":"/opt/mnt/docker",
  "registry-mirrors": ["https://qg7ml934.mirror.aliyuncs.com"]
}
       
```

### 常用工具
<span class="header5"></span>[portainer](https://www.portainer.io/)
 (图形监控工具)  

安装  
```bash
# 宿主机会自动创建卷 portainer_data
root> docker run -d -p 8000:8000 -p 9000:9000 --name=portainer --restart=always   \
	  -v portainer_data:/data  -v /var/run/docker.sock:/var/run/docker.sock  portainer/portainer-ce  

```
<div class="myTip">

 如果忘记密码, 先停止 portainer 容器, 再执行以下命令
> docker run --rm -v portainer_data:/data portainer/helper-reset-password
</div>

访问地址 `localhost:9000`
<hr>

<span class="header5"></span>[jenkins](https://www.jenkins.io/zh/)
(持续集成工具)

安装
```bash
root> docker run   -d  --name jenkins  -u root  -p 8080:8080   -v jenkins_home:/var/jenkins_home   \
      -v /var/run/docker.sock:/var/run/docker.sock   -v "$HOME":/home   jenkinsci/blueocean

```
访问地址 `localhost:8080`
<hr>





</div>
</div>


<div class = 'data-section default-folding'>
<h2 class = 'section-title'>RabbitMQ (消息队列)</h2>
<div class = 'folding-area'>

- 下载安装
<span class='header5'></span>源里下载 

- 配置图形管理
```bash
$user > sudo rabbitmq-plugins enable rabbitmq_management 
```

- 图形管理
[localhost:15672](localhost:15672)

默认账户: guest  
默认密码: guest



</div>
</div>

<div class = 'data-section default-folding'>
<h2 class = 'section-title'>ActiveMQ (消息队列)</h2>
<div class = 'folding-area'>

[下载地址](http://activemq.apache.org/download-archives.html)

1）解压

2）基本命令
```bash
bin/activemq start
bin/activemq stop

# 可以建立软链接， 或者写入 .bashrc
```
3) 测试

[localhost:8161/admin](http://127.0.0.1:8161/admin/)
>用户：admin 
>密码：admin



</div>
</div>

# 其他


<div class = 'data-section default-folding'>
<h2 class = 'section-title'>Docsify (文档生成)</h2>
<div class = 'folding-area'>

[docsify 4.3.0](https://www.npmjs.com/package/docsify-cli/v/4.3.0)

```bash
# [WARINING] 切换到 root 后执行，sudo 执行好像不行
cnpm install docsify-cli -g

# 初始化
docsify init

# 开启服务, localhost:3000 浏览
docsify serve

```

</div>
</div>

<div class = 'data-section default-folding'>
<h2 class = 'section-title'>VirtualBox</h2>
<div class = 'folding-area'>

### VirtualBox 扩展包
源里安装软件后, 去官网下载扩增包[VirtualBox Extension Pack.vbox-extpack](http://download.virtualbox.org/virtualbox/), 
然后, 启动 VirtualBox, `全局设置 -> 扩展` 安装扩展包. 

### virtualbox 增强功能

### 共享文件夹
添加组 vboxsf, 把用户加入组
```bash
$> sudo groupadd xxx
$> sudo usermod -aG xxx $(whoami)
```

### USB 设置



[在VirtualBox 中，如何在固定磁盘和动态磁盘之间装换](https://www.kutu66.com//Linux/article_13912)

```bash
// 复制 kali.vdi 为固定虚拟盘 kali2.vdi
$>  VBoxManage clonemedium disk ~/xxx/kali.vdi ~/xxx/kali2.vdi -variant Fixed
// 复制 kali.vdi 为动态虚拟盘 kali2.vdi
$>  VBoxManage clonemedium disk ~/xxx/kali.vdi ~/xxx/kali2.vdi -variant Standard
```

### 虚拟机使用宿主机网络服务

1. 查看主机名
```bash
$> hostname
```
2. 把虚拟机的网络设置为 NAT
3. 虚拟机中用主机名访问  
例如: 192.168.2.106:3000




</div>
</div>



<div class = 'data-section default-folding'>
<h2 class = 'section-title'>Ventoy (多系统启动盘)</h2>
<div class = 'folding-area'>

- [官网](https://www.ventoy.net/cn/index.html)下载安装


</div>
</div>

<div class = 'data-section default-folding'>
<h2 class = 'section-title'>split (大文件分割)</label></h2>
<div class = 'folding-area'>

```bash
# 将 windows7.ova 分割成 1G 大小的小文件
user$> split -db 1024m windows7.ova windows7.ova.part --verbose
# 合并文件
user$> cat windows7.ova.part* > windows7.ova
```
</div>
</div>

<div class = 'data-section default-folding'>
<h2 class = 'section-title'>git-lfs</h2>
<div class = 'folding-area'>

`解决git提交大文件的问题`
[Git Large File Storage 官网](https://git-lfs.github.com/)  

```bash
# 在 git 项目根目录下执行
$ git lfs install
$ git lfs track "dir/*"
# 此时会生成.gitattributes 文件
$ git add .gitattributes
$ git add .
.....
```

</div>
</div>

<div class = 'data-section default-folding'>
<h2 class = 'section-title'>pdf studio (pdf 编辑器）</h2>
<div class = 'folding-area'>

</div>
</div>

<div class = 'data-section default-folding'>
<h2 class = 'section-title'>sdcv (终端下的词典)</h2>
<div class = 'folding-area'>

[使用方法](http://download.huzheng.org/)
</div>
</div>

<div class = 'data-section default-folding'>
<h2 class = 'section-title'>Image Burner ( usb刻录)</h2>
<div class = 'folding-area'>

</div>
</div>




