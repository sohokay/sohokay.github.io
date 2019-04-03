# 在CentOS 7下安装部MongoDS以及相关常用命令

### 安装MongoDS
创建一个文件 /etc/yum.repos.d/mongodb-org-4.0.repo  以便可以直接使用yum 命令直接安装
```shell 
vi /etc/yum.repos.d/mongodb-org-4.0.repo


```
然后填入
```shell
[mongodb-org-4.0] 
name = MongoDB Repository 
baseurl = https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/4.0/x86_64/ 
gpgcheck = 1 
enabled = 1 
gpgkey = https：// www.mongodb.org/static/pgp/server-4.0.asc
```
然后保存并且退出

执行安装命令
```shell
sudo yum install -y mongodb-org
```

### 

```
/var/lib/mongo （数据目录）
/var/log/mongodb （日志目录）
```
启动mongo
```shell

sudo service mongod start   //启动mongo

sudo service mongod stop    //停止mongo

sudo service mongod restart    //重启mongo

mongo   //使用mongo
```

mongo配置文件在 `/etc/mongod.conf` 可以使用vim命令去在线修改也可以把文件拖到本地修改后上传

1.为了mongo能被远程连接
```shell
bind 127.0.0.1
```
将这一句注释（在前面加`#`）或者修改为`0.0.0.0` 这样就可以不限制IP访问
