# ilog

一个基于云端的日志平台，解决应用在分布式环境下日志存放在各服务器的问题，暂时存储只支持leancloud


##### 安装

```

# 先下载完整代码包（代码仅在python2.7环境测试过）

wget https://github.com/yubang/ilog/archive/master.zip

# 安装依赖

pip install -r requirements.txt


# 修改配置文件（根目录下config.py）


# 启动服务（注意，生产环境请使用gunicorn等部署）

python web.py


```


###### 使用手册

* [配置文件详解](https://github.com/yubang/ilog/tree/master/doc/1.md)

* [SDK使用](https://github.com/yubang/ilog/tree/master/doc/2.md)

* [与现有系统集成](https://github.com/yubang/ilog/tree/master/doc/3.md)


###### 联系

* 如有疑问可以发送邮件到：yubang93@gmail.com

* 或者提issues


###### 程序预览


![应用请求日志面板](https://github.com/yubang/ilog/raw/master/doc/pic/1.png)
<p align="center">（应用请求日志面板）</p>
<br>

![应用自定义日志面板](https://github.com/yubang/ilog/raw/master/doc/pic/2.png)
<p align="center">（应用自定义日志面板）</p>
<br>

![关于面板](https://github.com/yubang/ilog/raw/master/doc/pic/3.png)
<p align="center">（关于面板）</p>
<br>

