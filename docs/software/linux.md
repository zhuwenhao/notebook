# Linux

## Shadowsocks-libev

[GitHub](https://github.com/shadowsocks/shadowsocks-libev)

### 安装

#### 下载源码

```bash
git clone https://github.com/shadowsocks/shadowsocks-libev.git
cd shadowsocks-libev
git submodule update --init --recursive
```

#### 安装依赖

```bash
# Debian / Ubuntu
sudo apt-get install --no-install-recommends gettext build-essential autoconf libtool libpcre3-dev asciidoc xmlto libev-dev libc-ares-dev automake libmbedtls-dev libsodium-dev
# CentOS / Fedora / RHEL
sudo yum install gettext gcc autoconf libtool automake make asciidoc xmlto c-ares-devel libev-devel
# Arch
sudo pacman -S gettext gcc autoconf libtool automake make asciidoc xmlto c-ares libev
```

#### 编译安装

```bash
./autogen.sh && ./configure && make
sudo make install
```

### 配置

#### 创建配置文件

```bash
mkdir /etc/shadowsocks-libev
vim /etc/shadowsocks-libev/config.json
```

#### 配置文件内容

```json
{       
    "server": "0.0.0.0",
    "server_port": 10000,
    "local_port": 1080,
    "password": "password",
    "method": "xchacha20-ietf-poly1305",
    "fast_open": true,
    "timeout": 60
}
```

### 服务

#### 创建服务文件

```bash
vim /etc/systemd/system/shadowsocks-libev.service
```

#### 服务文件内容

```
[Unit]
Description=Shadowsocks-libev Service
After=network.target

[Service]
Type=simple
ExecStart=/usr/local/bin/ss-server -c /etc/shadowsocks-libev/config.json

[Install]
WantedBy=multi-user.target
```

#### 相关命令

```bash
systemctl start shadowsocks-libev   # 启动服务
systemctl stop shadowsocks-libev    # 停止服务
systemctl restart shadowsocks-libev # 重启服务
systemctl enable shadowsocks-libev  # 开机启动
systemctl disable shadowsocks-libev # 取消开机启动
systemctl status shadowsocks-libev  # 查看状态
```

### 更新

```bash
git pull origin master
./autogen.sh && ./configure && make
sudo make install
```

## Caddy

## RSSBot

[GitHub](https://github.com/iovxw/rssbot)

### 安装

#### 下载

```bash
wget https://github.com/iovxw/rssbot/releases/download/v1.4.4/rssbot-v1.4.4-linux.zip
```

#### 解压

```bash
unzip rssbot-v1.4.4-linux.zip
```

#### 运行

```bash
./rssbot DATAFILE TELEGRAM-BOT-TOKEN
```

### 使用

```
/rss       - 显示当前订阅的 RSS 列表，加 raw 参数显示链接
/sub       - 订阅一个 RSS: /sub http://example.com/feed.xml
/unsub     - 退订一个 RSS: /unsub http://example.com/feed.xml
/unsubthis - 使用此命令回复想要退订的 RSS 消息即可退订, 不支持 Channel
/export    - 导出为 OPML
```