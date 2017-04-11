# coding:UTF-8

from .base import BaseObject
from datetime import datetime
import leancloud


class LcWorker(BaseObject):
    def __init__(self, app_id, app_key):
        self.app_id = app_id
        self.app_key = app_key
        leancloud.init(app_id, app_key)

    def save_log(self, request_url, request_param, response_data, request_time, use_time=0, request_method='GET',
                 request_headers=None, error_data=None, status_code=200, app_name='app'):
        request_date = datetime.strptime(request_time, "%Y-%m-%d %H:%M:%S").strftime("%Y%m%d")
        obj = leancloud.Object.extend('ilog_' + request_date)()
        obj.set('request_url', request_url)
        obj.set('request_param', request_param)
        obj.set('response_data', response_data)
        obj.set('request_time', request_time)
        obj.set('use_time', use_time)
        obj.set('request_method', request_method)
        obj.set('request_headers', request_headers)
        obj.set('error_data', error_data)
        obj.set('status_code', status_code)
        obj.set('app_name', app_name)
        obj.set('request_date', request_date)
        return obj.save()

    def get_a_page_of_log(self, page, request_date):
        """
        获取一页数据
        :param page: 页数
        :param request_date: 日期（字符串 %Y%M%D）
        :return:
        """
        pass
