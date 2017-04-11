# coding:UTF-8


"""
存储操作基类
@author: yubang
创建于2017年4月11日
"""


from abc import abstractmethod


class BaseObject(object):
    @abstractmethod
    def save_log(self, request_url, request_param, response_data, request_time, use_time=0, request_method='GET',  request_headers=None, error_data=None, status_code=200): pass
