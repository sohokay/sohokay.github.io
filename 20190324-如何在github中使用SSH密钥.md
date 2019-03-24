# 如何在github中使用SSH密钥

### SSH密钥是什么
> 此处省略... 

### 如何创建密钥对

    1.  打开你的命令行工具 个人推荐git Bash
    2.  输入'ssh-keygen'  然后一直'Enter' 使用默认配置
    3.  这时候会在C盘 C:\Users\[you computer user name]\.ssh 这里自动生成一个'.ssh'的目录
    4.  目录下面会有三个文件 'id_rsa'和'id_rsa.pub'就是一组密钥对


### 如何在github中使用
    1.  登陆你的GitHub账户 点击右上角你的头像 进入到'Settings'
    2.  选择左菜单栏'SSH and GPG keys' 然后点击'New SSH key'
    3.  打开你本地的'.ssh'目录下的'id_rsa.pub'文件 (使用记事本打开)
    4.  复制里面的内容 填入GitHub并且保存