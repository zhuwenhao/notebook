(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{213:function(s,t,a){"use strict";a.r(t);var e=a(0),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"linux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[s._v("#")]),s._v(" Linux")]),s._v(" "),a("h2",{attrs:{id:"shadowsocks-libev"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shadowsocks-libev"}},[s._v("#")]),s._v(" Shadowsocks-libev")]),s._v(" "),a("h3",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("h4",{attrs:{id:"下载源码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载源码"}},[s._v("#")]),s._v(" 下载源码")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/shadowsocks/shadowsocks-libev.git\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" shadowsocks-libev\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" submodule update --init --recursive\n")])])]),a("h4",{attrs:{id:"安装依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖"}},[s._v("#")]),s._v(" 安装依赖")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Debian / Ubuntu")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --no-install-recommends gettext build-essential autoconf libtool libpcre3-dev asciidoc xmlto libev-dev libc-ares-dev automake libmbedtls-dev libsodium-dev\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# CentOS / Fedora / RHEL")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gettext gcc autoconf libtool automake "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" asciidoc xmlto c-ares-devel libev-devel\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Arch")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" pacman -S gettext gcc autoconf libtool automake "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" asciidoc xmlto c-ares libev\n")])])]),a("h4",{attrs:{id:"编译安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译安装"}},[s._v("#")]),s._v(" 编译安装")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("./autogen.sh "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" ./configure "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])])]),a("h3",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),a("h4",{attrs:{id:"创建配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建配置文件"}},[s._v("#")]),s._v(" 创建配置文件")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /etc/shadowsocks-libev\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/shadowsocks-libev/config.json\n")])])]),a("h4",{attrs:{id:"配置文件内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置文件内容"}},[s._v("#")]),s._v(" 配置文件内容")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("       \n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"server"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.0.0.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"server_port"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"local_port"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1080")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"password"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"password"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"method"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xchacha20-ietf-poly1305"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"fast_open"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"timeout"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h3",{attrs:{id:"服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务"}},[s._v("#")]),s._v(" 服务")]),s._v(" "),a("h4",{attrs:{id:"创建服务文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建服务文件"}},[s._v("#")]),s._v(" 创建服务文件")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/systemd/system/shadowsocks-libev.service\n")])])]),a("h4",{attrs:{id:"服务文件内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务文件内容"}},[s._v("#")]),s._v(" 服务文件内容")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[Unit]\nDescription=Shadowsocks-libev Service\nAfter=network.target\n\n[Service]\nType=simple\nExecStart=/usr/local/bin/ss-server -c /etc/shadowsocks-libev/config.json\n\n[Install]\nWantedBy=multi-user.target\n")])])]),a("h4",{attrs:{id:"相关命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关命令"}},[s._v("#")]),s._v(" 相关命令")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("systemctl start shadowsocks-libev   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动服务")]),s._v("\nsystemctl stop shadowsocks-libev    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止服务")]),s._v("\nsystemctl restart shadowsocks-libev "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启服务")]),s._v("\nsystemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" shadowsocks-libev  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开机启动")]),s._v("\nsystemctl disable shadowsocks-libev "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 取消开机启动")]),s._v("\nsystemctl status shadowsocks-libev  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看状态")]),s._v("\n")])])]),a("h3",{attrs:{id:"更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新"}},[s._v("#")]),s._v(" 更新")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拉取源码")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull origin master\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编译安装")]),s._v("\n./autogen.sh "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" ./configure "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])])]),a("p",[a("a",{attrs:{href:"https://github.com/shadowsocks/shadowsocks-libev",target:"_blank",rel:"noopener noreferrer"}},[s._v("GitHub"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"caddy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#caddy"}},[s._v("#")]),s._v(" Caddy")]),s._v(" "),a("h3",{attrs:{id:"安装-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-2"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" https://getcaddy.com "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" -s personal http.git\n")])])]),a("h3",{attrs:{id:"创建目录和文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建目录和文件"}},[s._v("#")]),s._v(" 创建目录和文件")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /etc/caddy\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R root:root /etc/caddy\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /etc/ssl/caddy\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R root:www-data /etc/ssl/caddy\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" 0770 /etc/ssl/caddy\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" /etc/caddy/Caddyfile\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" root:root /etc/caddy/Caddyfile\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("644")]),s._v(" /etc/caddy/Caddyfile\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /var/www\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" www-data:www-data /var/www\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("555")]),s._v(" /var/www\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /var/www/example.com\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R www-data:www-data /var/www/example.com\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" -R "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("755")]),s._v(" /var/www/example.com\n")])])]),a("h3",{attrs:{id:"caddyfile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#caddyfile"}},[s._v("#")]),s._v(" Caddyfile")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("example.com, www.example.com {\n    gzip\n    tls email\n    root /var/www/example.com\n    \n    errors {\n        404 404.html\n    }\n    \n    git {\n        repo repo\n        path /var/www/example.com\n        branch master\n        interval -1\n        hook /webhook secret\n        hook_type generic\n    }\n}\n")])])]),a("p",[a("code",[s._v("email")]),s._v(" 电子邮件地址，用于CA生成证书")]),s._v(" "),a("p",[a("code",[s._v("repo")]),s._v(" 远程仓库URL，HTTPS或SSH")]),s._v(" "),a("p",[a("code",[s._v("interval")]),s._v(" 拉取间隔，单位：秒，默认3600，最小5，-1表示禁用")]),s._v(" "),a("p",[a("code",[s._v("secret")]),s._v(" 密码，与远程仓库Webhook的Secret保持一致")]),s._v(" "),a("h3",{attrs:{id:"服务-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务-2"}},[s._v("#")]),s._v(" 服务")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://raw.githubusercontent.com/caddyserver/caddy/master/dist/init/linux-systemd/caddy.service\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" caddy.service /etc/systemd/system/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" root:root /etc/systemd/system/caddy.service\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("644")]),s._v(" /etc/systemd/system/caddy.service\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl daemon-reload\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start caddy.service\n")])])]),a("p",[s._v("用法参考 "),a("a",{attrs:{href:"#%E7%9B%B8%E5%85%B3%E5%91%BD%E4%BB%A4"}},[s._v("相关命令")])]),s._v(" "),a("p",[s._v("查看实时日志 "),a("code",[s._v("journalctl -f -u caddy")])]),s._v(" "),a("p",[s._v("证书的路径 "),a("code",[s._v("/etc/ssl/caddy/acme/acme-v02.api.letsencrypt.org/sites")])]),s._v(" "),a("p",[a("a",{attrs:{href:"https://caddyserver.com",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方网站"),a("OutboundLink")],1),s._v(" "),a("a",{attrs:{href:"https://github.com/caddyserver/caddy",target:"_blank",rel:"noopener noreferrer"}},[s._v("GitHub"),a("OutboundLink")],1),s._v(" "),a("a",{attrs:{href:"https://github.com/caddyserver/caddy/blob/master/dist/init/linux-systemd/README.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("Linux Systemd"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"rssbot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rssbot"}},[s._v("#")]),s._v(" RSSBot")]),s._v(" "),a("h3",{attrs:{id:"安装-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-3"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("h4",{attrs:{id:"下载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载"}},[s._v("#")]),s._v(" 下载")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://github.com/iovxw/rssbot/releases/download/v1.4.4/rssbot-v1.4.4-linux.zip\n")])])]),a("h4",{attrs:{id:"解压"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解压"}},[s._v("#")]),s._v(" 解压")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("unzip")]),s._v(" rssbot-v1.4.4-linux.zip\n")])])]),a("h4",{attrs:{id:"运行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行"}},[s._v("#")]),s._v(" 运行")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("./rssbot DATAFILE TELEGRAM-BOT-TOKEN\n")])])]),a("h3",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("/rss       - 显示当前订阅的 RSS 列表，加 raw 参数显示链接\n/sub       - 订阅一个 RSS: /sub http://example.com/feed.xml\n/unsub     - 退订一个 RSS: /unsub http://example.com/feed.xml\n/unsubthis - 使用此命令回复想要退订的 RSS 消息即可退订, 不支持 Channel\n/export    - 导出为 OPML\n")])])]),a("p",[a("a",{attrs:{href:"https://github.com/iovxw/rssbot",target:"_blank",rel:"noopener noreferrer"}},[s._v("GitHub"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);