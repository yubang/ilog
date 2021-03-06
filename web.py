# coding:UTF-8


from flask import Flask, request, Response, session, send_file, abort
from datetime import datetime
from ilog import error_code
from ilog.lc import LcWorker
from json import dumps
from functools import wraps
import config


app = Flask(__name__)
app.secret_key = '78e6221f6393d1356681db398f14ce6d'


def output(data=None, code=error_code.ok):
    """
    输出结果
    :param code: 错误码
    :param data: 数据
    :return:
    """
    r = Response(dumps({
        "code": code[0],
        "msg": code[1],
        "data": data
    }), content_type='application/json')
    return r


@app.route('/api/login-log', methods=['POST'])
def login_log():
    """
    记录日志
    :return:
    """
    token = request.form.get('token')
    if token != config.TOKEN:
        return output(code=error_code.token_error)

    request_url = request.form.get('request_url')
    request_param = request.form.get('request_param')
    response_data = request.form.get('response_data')
    request_time = request.form.get('request_time')
    use_time = request.form.get('use_time')
    request_method = request.form.get('request_method')
    request_headers = request.form.get('request_headers')
    error_data = request.form.get('error_data')
    status_code = request.form.get('status_code')

    worker = LcWorker(config.storage['API_ID'], config.storage['API_KEY'])
    worker.save_log(request_url=request_url, request_param=request_param, response_data=response_data, request_time=request_time, use_time=use_time, request_method=request_method, request_headers=request_headers, error_data=error_data, status_code=status_code)
    return output()


def check_login(fn):
    """检查是否登录"""
    @wraps(fn)
    def handler(*k, **v):
        if 'admin' not in session:
            return output(code=error_code.need_login)
        return fn(*k, **v)
    return handler


@app.route('/web/api/request-log')
@check_login
def request_log():
    """获取请求日志信息"""
    request_date = request.args.get('request_date', datetime.today().strftime("%Y%m%d"))
    page = int(request.args.get('page', "1"))
    worker = LcWorker(config.storage['API_ID'], config.storage['API_KEY'])
    d = worker.get_a_page_of_log(page, request_date)
    return output(data={"datas": d[0], "totalPage": d[1]})


@app.errorhandler(404)
def all_request(e):
    return send_file("index.html")


@app.route('/favicon.ico')
def favicon_ico():
    return send_file('favicon.ico')


@app.route('/api/login-program-log', methods=['POST'])
def login_program_log():
    """记录程序日志"""
    token = request.form.get('token')
    if token != config.TOKEN:
        return output(code=error_code.token_error)

    level = request.form.get('level')
    msg = request.form.get('msg')
    log_time = request.form.get('log_time')
    app_name = request.form.get('app_name')

    worker = LcWorker(config.storage['API_ID'], config.storage['API_KEY'])
    worker.login_program_log(app_name, level, msg, log_time)
    return output()


@app.route('/web/api/program-log')
@check_login
def program_log():
    """获取程序日志信息"""
    log_date = request.args.get('log_date', datetime.today().strftime("%Y%m%d"))
    page = int(request.args.get('page', "1"))
    level = request.args.get('level', 'all')
    worker = LcWorker(config.storage['API_ID'], config.storage['API_KEY'])
    d = worker.get_a_page_of_program_log(page, log_date, level)
    return output(data={"datas": d[0], "totalPage": d[1]})


@app.route('/web/api/login', methods=['POST'])
def login():
    """登录"""
    name = request.form.get('name')
    password = request.form.get('password')

    if name != config.WEB_USER:
        return abort(403)

    if password != config.WEB_PASSWOD:
        return abort(403)

    session['admin'] = datetime.now()

    return "ok"


@app.route('/web/api/exit')
@check_login
def exit_account():
    del session['admin']
    return "ok"


if __name__ == '__main__':
    app.run(host=config.WEB_LISTEN_IP, port=config.WEB_LISTEN_PORT, debug=True)
