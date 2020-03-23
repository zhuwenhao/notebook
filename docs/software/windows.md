---
sidebar: auto
---

# Windows

## KMS激活

```powershell
slmgr.vbs -upk
slmgr.vbs -ipk W269N-WFGWX-YVC9B-4J6C9-T83GX # 这个密钥是Windows 10 专业版的，不同系统版本的密钥不一样，详见下方链接
slmgr.vbs -skms kms.cangshui.net             # KMS的域名或IP
slmgr.vbs -ato
slmgr.vbs -dlv
```

![KMS激活成功](https://o69o.gitee.io/images/notebook/kms-activated-success.png)

[沧水的KMS激活服务](https://kms.cangshui.net) [KMS 客户端安装密钥](https://docs.microsoft.com/zh-cn/windows-server/get-started/kmsclientkeys)

## 命令提示符

### 计算文件的Hash

```
certutil -hashfile example.txt md5
certutil -hashfile example.txt sha1
certutil -hashfile example.txt sha256
certutil -hashfile example.txt sha512
```