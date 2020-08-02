- 以下软件默认的安装环境是 OpenSuse

## 普通

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



## IT

<div class = 'data-section default-folding'>
<h2 class = 'section-title'>NodeJS</h2>
<div class = 'folding-area'>

1. **国内镜像**
```bash
# 安装 淘宝镜像源
sudo npm install -g cnpm --registry=https://registry.npm.taobao.org
# 设置 cnpm 全局模块地址为 npm 模块地址
# 切换到 root 后执行，sudo 执行好像不行
# 解决 cnpm uninstall 报错
cnpm config set prefix `npm config get prefix`
```

</div>
</div>

<div class = 'data-section default-folding'>
<h2 class = 'section-title'>docsify</h2>
<div class = 'folding-area'>

[docsify 4.3.0](https://www.npmjs.com/package/docsify-cli/v/4.3.0)

```bash
# 切换到 root 后执行，sudo 执行好像不行
# 安装 docsify 4.3.0
cnpm install docsify-cli@4.3.0 -g

# 初始化
docsify init

# 开启服务, localhost:3000 浏览
docsify serve

```

</div>
</div>

<div class = 'data-section default-folding'>
<h2 class = 'section-title'>GHex (16 进制编辑器)</h2>
<div class = 'folding-area'>

</div>
</div>

</div>
</div>

<div class = 'data-section default-folding'>
<h2 class = 'section-title'>Redis</h2>
<div class = 'folding-area'>

1. 确定系统中安装了 `gcc` `jemalloc`

1. [官网下载](https://redis.io/download)

```bash
$>  tar xzf redis-xxx.tar.gz

$>  cd redis

# 安装 
$>  make
```

1. 创建软链接
```
$>  ln -s  /home/xxx/redis/src/redis-server  ~/bin/redis-server
$>  ln -s  /home/xxx/redis/src/redis-cli  ~/bin/redis
```


</div>
</div>

<div class = 'data-section default-folding'>
<h2 class = 'section-title'>VirtualBox</h2>
<div class = 'folding-area'>

![在VirtualBox 中，如何在固定磁盘和动态磁盘之间装换](https://www.kutu66.com//Linux/article_13912)

```bash
// 复制 kali.vdi 为固定虚拟盘 kali2.vdi
$ VBoxManage clonemedium disk ~/.../kali.vdi ~/.../kali2.vdi -variant Fixed
// 复制 kali.vdi 为动态虚拟盘 kali2.vdi
$ VBoxManage clonemedium disk ~/.../kali.vdi ~/.../kali2.vdi -variant Standard
```
**virtualbox 增强功能**
实验系统
- 宿主机：opensuse  
- 虚拟机：kali linux
```bash
# 虚拟机中安装 virtualbox
$ sudo apt-get install virtualbox-*
# 图形界面配置共享文件夹 + 重启电脑
$ sudo mount -t public /mnt/public
```

</div>
</div>


<div class = 'data-section default-folding'>
<h2 class = 'section-title'>split 大文件分割</label></h2>
<div class = 'folding-area'>

```bash
# 将 windows7.ova 分割成 1G 大小的小文件
$ split -db 1024m windows7.ova windows7.ova.part --verbose
# 合并文件
$ cat windows7.ova.part* > windows7.ova
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

<div class = 'data-section default-folding'>
<h2 class = 'section-title'>yakuake (下拉式终端模拟器)</h2>
<div class = 'folding-area'>

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
<h2 class = 'section-title'>atom （开发工具）</h2>
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
<h2 class = 'section-title'>idea (开发工具)</h2>
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

<div class = 'data-section default-folding'>
<h2 class = 'section-title'>zookeeper</h2>
<div class = 'folding-area'>

[下载地址](http://www.apache.org/dyn/closer.cgi/zookeeper/)

1) 解压  

2) 把 bin 目录下的 .sh 文件添加权限
```bash
chmod 755 *.sh
```

3) 在 conf 目录下添加 zoo.cfg 文件， 如
```
tickTime=2000
initLimit=10
syncLimit=5
dataDir=/home/ljq/temp/zookeeper
clientPort=2181
```

4) 添加执行环境, .bashrc 中添加
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
<h2 class = 'section-title'>ActiveMQ 消息队列</h2>
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
