# coding:UTF-8


"""
一个小demo（基于flask）
@author: yubang
创建于2017年4月13日
"""

from flask import Flask, request, g
from time import time
from datetime import datetime
from sdk import ILog
import traceback

app = Flask(__name__)
ilog = ILog('http://127.0.0.1:8000', 'abc', 'demoApp')


@app.route('/')
def index():
    a = 5 / 0
    return "welcome!"


@app.route('/debug')
def debug():
    t = request.args.get('t', u"没有参数")
    ilog.info(t)
    return t


@app.before_request
def before_request():
    g.ilog = {
        "headers": dict(request.headers),
        "param": dict(request.args) if request.method == 'GET' else dict(request.form),
        "t": time(),
        "time": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "url": request.url,
        "error": ''
    }


@app.after_request
def after_request(d):
    g.ilog['t'] = "%.2f" % (float(time() - g.ilog['t']))
    g.ilog['response_data'] = d.data
    print ilog.login_log(g.ilog['url'], g.ilog['param'], g.ilog['response_data'], g.ilog['time'], g.ilog['t'],
                         request_headers=g.ilog['headers'], request_method=request.method, status_code=d.status_code,
                         error_data=g.ilog['error'])
    return d


@app.errorhandler(500)
def error_handlers(e):
    g.ilog['error'] = traceback.format_exc()
    return "error", 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=9000, debug=False)
