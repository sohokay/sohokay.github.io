# 在CentOS 7下安装部署Redis以及相关常用命令

### 安装Redis

我们推荐的方式是使用源文件安装，方便快捷

首先添加epel仓库，然后更新一下系统包到最新版本：

```shell
yum install epel-release
yum update
```

然后执行

```shell
yum install redis
```

这样就可以安装好了

### 启动和配置

启动Redis

```shell
systemctl start redis 
```

Redis配置文件在 `/etc/redis.conf` 可以使用vim命令去在线修改也可以把文件拖到本地修改后上传

1.为了Redis能被远程连接

```shell
bind 127.0.0.1
```

将这一句注释（在前面加`#`）或者修改为`0.0.0.0` 这样就可以不限制IP访问

例如

```shell
#bind 127.0.0.1
```

2.给Redis设置密码（推荐做法）

```shell
#requirepass foobared
```

将这一回的注释放开（删去前面的`#`） 并且修改后面的字符串
例如

```shell
requirepass 123456
```

做完以上修改后记得要重启Redis服务，才能生效

### 常用命令

```shell
systemctl start redis.service //启动Redis服务器

systemctl stop redis.service //停止Redis服务器

systemctl restart redis.service //重新启动Redis服务器

systemctl status redis.service //获取Redis服务器的运行状态

systemctl enable redis.service //开机启动Redis服务器

systemctl disable redis.service //开机禁用Redis服务器
```
