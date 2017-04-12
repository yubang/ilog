# coding:UTF-8

from datetime import datetime
from json import dumps
import requests


class ILog(object):
    def __init__(self, api_url, token):
        self.api_url = api_url
        self.token = token

    def login_log(self, request_url, request_param, response_data, request_time, use_time=0, request_method='GET',  request_headers=None, error_data=None, status_code=200, app_name='app'):
        """
        提交请求日志
        :param request_url: 请求地址
        :param request_param: 请求参数
        :param response_data: 返回数据
        :param request_time: 日志生成时间
        :param use_time: 操作耗时
        :param request_method: 请求方法
        :param request_headers: 请求headers
        :param error_data: 错误数据
        :param status_code: 状态码
        :param app_name: app名字
        :return:
        """

        if isinstance(request_time, datetime):
            request_time = request_time.strftime("%Y-%m-%d %H:%M:%S")

        if isinstance(request_param, (list, dict)):
            request_param = dumps(request_param, indent=4)

        if isinstance(request_headers, dict):
            request_headers = dumps(request_headers, indent=4)

        d = {
            "request_url": request_url,
            "request_param": request_param,
            "response_data": response_data,
            "request_time": request_time,
            "use_time": use_time,
            "request_method": request_method,
            "request_headers": request_headers,
            "error_data": error_data,
            "token": self.token,
            "status_code": status_code,
            "app_name": app_name,
        }
        r = requests.post(self.api_url, data=d)
        print r.json()['code']

if __name__ == '__main__':
    import config
    ilog = ILog("http://%s:%d/api/login-log" % (config.WEB_LISTEN_IP, config.WEB_LISTEN_PORT), config.TOKEN)
    ilog.login_log('/debug', {}, "", datetime.now(), status_code=404, use_time=0.53)
