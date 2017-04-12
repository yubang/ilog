app.init({
    data: {
        tabIndex: "1",
        tableData: [],
        nums: parseInt(app.get_args("page")) || 1,
        totalPage: 1
    },
    methods: {
        "currentChange": function(currentPage){
            app.goto("/web/html/request-log?page=" + currentPage);
        },
        "look": function(index){
            var obj = app.data[index];
            console.log(obj);
            var text = "请求地址：" + obj['request_method'] + " " + obj['request_url'] + "\n\n";
            text = text + "状态码：" + obj['status_code'] + "\n\n";
            text = text + "请求用时：" + obj['use_time'] + "秒\n\n";
            text = text + "请求参数：\n" + obj['request_param'] + "\n\n";
            text = text + "请求headers：\n" + obj['request_headers'] + "\n\n";
            text = text + "返回值：\n" + obj['response_data'] + "\n\n";
            text = text + "错误信息：\n" + obj['error_data'] + "\n\n";

            this.$alert(text, '查看信息', {
              confirmButtonText: '已阅',
              callback: action => {

              }
            });
            setTimeout(function(){
                var html = text.replace(/\n/g, "<br>");
                 $(".el-message-box__message > p").html(html)
            }, 200);
        }
    },
    api: {
        url: '/web/api/request-log',
        data: {
            page: parseInt(app.get_args("page")) || 1
        },
        success: function(d){
            var arrs = [];
            var index = 0;
            for(var i in d['data']['datas']){
                var obj = d['data']['datas'][i];
                arrs.push({
                    url: obj['request_method'] + " " + obj['request_url'],
                    app_name: obj['app_name'],
                    request_time: obj['request_time'],
                    use_time: obj['use_time'] + "秒",
                    status_code: obj['status_code'],
                    index: index
                });
                index++;
            }
            app.data = d['data']['datas'];
            return {
                tabIndex: "1",
                tableData: arrs,
                nums: parseInt(app.get_args("page")) || 1,
                totalPage: d['data']['totalPage']
            }
        }
    }
})