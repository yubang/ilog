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
        obj = leancloud.Object.extend('ilog_' + request_date)
        query = obj.query
        query.limit(10)
        query.skip((page - 1) * 10)
        query.add_descending("request_time")

        try:
            total_count = query.count()
            total_page = int(total_count / 10) + (1 if total_count % 10 else 0)

            objs = query.find()
            datas = [
                {
                    "request_url": obj.get('request_url'),
                    "request_param": obj.get('request_param'),
                    "response_data": obj.get('response_data'),
                    "request_time": obj.get('request_time'),
                    "use_time": obj.get('use_time'),
                    "request_method": obj.get('request_method'),
                    "request_headers": obj.get('request_headers'),
                    "error_data": obj.get('error_data'),
                    "status_code": obj.get('status_code'),
                    "app_name": obj.get('app_name'),
                }
                for obj in objs
                ]
            return datas, total_page
        except leancloud.LeanCloudError:
            return [], 1

    def login_program_log(self, app_name, level, msg, log_time):
        """
        记录程序日志
        :param app_name: 应用名字
        :param level: 日志等级
        :param msg: 日志信息
        :param log_time: 日志时间
        :return:
        """
        log_date = datetime.strptime(log_time, "%Y-%m-%d %H:%M:%S").strftime("%Y%m%d")
        obj = leancloud.Object.extend('ilog_program_' + log_date)()
        obj.set('app_name', app_name)
        obj.set('level', level)
        obj.set('msg', msg)
        obj.set('log_time', log_time)
        obj.save()

    def get_a_page_of_program_log(self, page, request_date, level):
        """
        获取一页程序日志数据
        :param page: 页数
        :param request_date: 日期（字符串 %Y%M%D）
        :param level: 日志等级
        :return:
        """
        obj = leancloud.Object.extend('ilog_program_' + request_date)
        query = obj.query
        query.limit(10)
        query.skip((page - 1) * 10)
        query.add_descending("log_time")

        if level != 'all':
            query.equal_to("level", level)

        try:
            total_count = query.count()
            total_page = int(total_count / 10) + (1 if total_count % 10 else 0)

            objs = query.find()
            datas = [
                {
                    "level": obj.get('level'),
                    "msg": obj.get('msg'),
                    "log_time": obj.get('log_time'),
                    "app_name": obj.get('app_name'),
                }
                for obj in objs
                ]
            return datas, total_page
        except leancloud.LeanCloudError:
            return [], 1
