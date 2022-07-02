

<h2 class = 'auto-sort'>家目录配置配置问题</h2>

系统默认用户目录：public, download, desktop 等的配置
>修改文件 ~/.config/user-dirs.dirs 和 user-dirs.locale

<h2 class = 'auto-sort'>在 openSUSE 下使用 git 遇到的一个问题 </h2>

```bash
QFileSystemWatcher::removePaths: list is empty 
```
原因： 需要输入账号密码的，当时弹出了可以保存账号密码的对话框，点了记住密码

解决办法： 去 kwalletmanager 把里面记住的账号密码删了




<h2 class = 'auto-sort'>opensuse 看不了视频</h2>

1. 添加 pampack 源头, 如 [opensuse 滚动版(镜像)]（https://mirrors.bfsu.edu.cn/packman/suse/openSUSE_Tumbleweed/）
```
sudo zypper ar -fcg https://mirrors.bfsu.edu.cn/packman/suse/openSUSE_Tumbleweed/  PACKMAN
sudo zypper refresh

```

1. 安装解码器：
```
zypper install --allow-vendor-change ffmpeg-3 lame gstreamer-plugins-bad gstreamer-plugins-ugly gstreamer-plugins-ugly-orig-addon gstreamer-plugins-libav libavdevice58 vlc-codecs

```



<h2 class = 'auto-sort'>puppy linux 口袋系统无法启动</h2>


BIOS设置：
1. 首先设置U盘启动优先;
1. 再设置 Secure Boot 为 false;
1. 如果以上步骤执行后还是无法启动，设置 csm 为 false


