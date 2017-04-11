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
                 request_headers=None, error_data=None, status_code=200):
        obj = leancloud.Object.extend('ilog_' + datetime.strptime(request_time, "%Y-%m-%d %H:%M:%S").strftime("%Y%m%d"))()
        obj.set('request_url', request_url)
        obj.set('request_param', request_param)
        obj.set('response_data', response_data)
        obj.set('request_time', request_time)
        obj.set('use_time', use_time)
        obj.set('request_method', request_method)
        obj.set('request_headers', request_headers)
        obj.set('error_data', error_data)
        obj.set('status_code', status_code)
        return obj.save()
