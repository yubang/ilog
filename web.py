# coding:UTF-8


from flask import Flask, request, Response
from ilog import error_code
from ilog.lc import LcWorker
from json import dumps
import config


app = Flask(__name__)


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

    worker = LcWorker(config.storage['API_ID'], config.storage['API_KEY'])
    worker.save_log(request_url=request_url, request_param=request_param, response_data=response_data, request_time=request_time, use_time=use_time, request_method=request_method, request_headers=request_headers, error_data=error_data)
    return output()


if __name__ == '__main__':
    app.run(host=config.WEB_LISTEN_IP, port=config.WEB_LISTEN_PORT, debug=True)
