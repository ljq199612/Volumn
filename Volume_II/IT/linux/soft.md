
## 软件

<div class = 'data-section default-folding'>
<h2 class = 'section-title'>RAR</h2>
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
<h2 class = 'section-title'>snapper</h2>
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


<div class = 'data-section default-folding'>
<h2 class = 'section-title'>nodeJS</h2>
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

