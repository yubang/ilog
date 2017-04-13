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


###### 程序预览


![应用请求日志面板](https://github.com/yubang/ilog/tree/master/src/pic/1.png)

![应用自定义日志面板](https://github.com/yubang/ilog/tree/master/src/pic/2.png)

![关于面板](https://github.com/yubang/ilog/tree/master/src/pic/3.png)

