---
sidebar: auto
---

# Linux

## Shadowsocks-libev

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
# 拉取源码
git pull origin master

# 编译安装
./autogen.sh && ./configure && make
sudo make install
```

### v2ray-plugin

#### 下载并编译

```bash
git clone https://github.com/shadowsocks/v2ray-plugin.git
cd v2ray-plugin
go build

# 复制到/usr/local/bin/
cp v2ray-plugin /usr/local/bin/
```

#### Shadowsocks-libev配置文件

```json
{       
    "server": "127.0.0.1",
    "server_port": 10000,
    "password": "password",
    "method": "xchacha20-ietf-poly1305",
    "fast_open": true,
    "timeout": 60,
    "plugin": "v2ray-plugin",
    "plugin_opts": "server;fast-open;path=/ray"
}
```

#### Caddyfile

```
example.com, www.example.com {
    gzip
    tls email
    root /var/www/example.com
    
    errors {
        404 404.html
    }

    proxy /ray 127.0.0.1:10000 {
        websocket
        header_upstream -Origin
    }
}
```

[GitHub - Shadowsocks-libev](https://github.com/shadowsocks/shadowsocks-libev) [GitHub - v2ray-plugin](https://github.com/shadowsocks/v2ray-plugin)

## Caddy

### 安装

```bash
curl https://getcaddy.com | bash -s personal http.git
```

### 创建目录和文件

```bash
sudo mkdir /etc/caddy
sudo chown -R root:root /etc/caddy
sudo mkdir /etc/ssl/caddy
sudo chown -R root:www-data /etc/ssl/caddy
sudo chmod 0770 /etc/ssl/caddy

sudo touch /etc/caddy/Caddyfile
sudo chown root:root /etc/caddy/Caddyfile
sudo chmod 644 /etc/caddy/Caddyfile

sudo mkdir /var/www
sudo chown www-data:www-data /var/www
sudo chmod 555 /var/www

sudo mkdir /var/www/example.com
sudo chown -R www-data:www-data /var/www/example.com
sudo chmod -R 755 /var/www/example.com
```

### Caddyfile

```
example.com, www.example.com {
    gzip
    tls email
    root /var/www/example.com
    
    errors {
        404 404.html
    }
    
    git {
        repo repo
        path /var/www/example.com
        branch master
        interval -1
        hook /webhook secret
        hook_type generic
    }
}
```

`email` 电子邮件地址，用于CA生成证书

`repo` 远程仓库URL，HTTPS或SSH

`interval` 拉取间隔，单位：秒，默认3600，最小5，-1表示禁用

`secret` 密码，与远程仓库Webhook的Secret保持一致

### 服务

```bash
wget https://raw.githubusercontent.com/caddyserver/caddy/master/dist/init/linux-systemd/caddy.service
sudo cp caddy.service /etc/systemd/system/
sudo chown root:root /etc/systemd/system/caddy.service
sudo chmod 644 /etc/systemd/system/caddy.service
sudo systemctl daemon-reload
sudo systemctl start caddy.service
```

用法参考 [相关命令](#相关命令)

查看实时日志 `journalctl -f -u caddy`

证书的路径 `/etc/ssl/caddy/acme/acme-v02.api.letsencrypt.org/sites`

[官方网站](https://caddyserver.com) [GitHub](https://github.com/caddyserver/caddy) [Linux Systemd](https://github.com/caddyserver/caddy/blob/master/dist/init/linux-systemd/README.md)

## RSSBot

### 安装

[下载地址](https://github.com/iovxw/rssbot)

1. 下载并解压

```bash
wget https://github.com/iovxw/rssbot/releases/download/v1.4.4/rssbot-v1.4.4-linux.zip
unzip rssbot-v1.4.4-linux.zip
```

2. 运行

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

## Go

### 安装

[下载地址](https://golang.org/dl)

1. 下载并解压到 `/usr/local` 目录

```bash
wget https://dl.google.com/go/go1.13.4.linux-amd64.tar.gz
tar -C /usr/local -xzf go1.13.4.linux-amd64.tar.gz
```

2. 在 `/etc/profile` 末尾添加

```
export PATH=$PATH:/usr/local/go/bin
```

3. 应用更改

```bash
source /etc/profile
```

4. 检查

```bash
go version
```

### 升级

1. 删除 `/usr/local/go` 目录

```bash
rm -rf /usr/local/go
```

2. 从 `/etc/profile` 中删除

```
export PATH=$PATH:/usr/local/go/bin
```

3. 应用更改

```bash
source /etc/profile
```

4. [安装](#安装-4)