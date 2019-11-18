# Linux

## Shadowsocks-libev

## Caddy

## RSSBot

[GitHub](https://github.com/iovxw/rssbot)

下载

```bash
wget https://github.com/iovxw/rssbot/releases/download/v1.4.4/rssbot-v1.4.4-linux.zip
```

解压

```bash
unzip rssbot-v1.4.4-linux.zip
```

运行

```bash
./rssbot DATAFILE TELEGRAM-BOT-TOKEN
```

使用

```
/rss       - 显示当前订阅的 RSS 列表，加 raw 参数显示链接
/sub       - 订阅一个 RSS: /sub http://example.com/feed.xml
/unsub     - 退订一个 RSS: /unsub http://example.com/feed.xml
/unsubthis - 使用此命令回复想要退订的 RSS 消息即可退订, 不支持 Channel
/export    - 导出为 OPML
```