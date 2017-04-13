var page = parseInt(app.get_args("page")) || 1;

function searchData(){
    var t;
    if(app.vm.value2){
        app.vm.value2 = new Date(app.vm.value2)
        var s = "", s2 = "";
        if(app.vm.value2.getMonth() + 1 < 10){s="0";}
        if(app.vm.value2.getDate() + 1 < 10){s2="0";}
        t = "" + app.vm.value2.getFullYear() + s + (app.vm.value2.getMonth() + 1) + s2 + app.vm.value2.getDate();
    }else{
        t = getToday();
    }
    app.goto("/web/html/request-log?page=" + page + "&request_date="+t);
}
var pickerOptions1 = {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        };

app.init({
    data: {
        tabIndex: "1",
        tableData: [],
        nums: parseInt(app.get_args("page")) || 1,
        totalPage: 1,
        pickerOptions1: pickerOptions1
    },
    methods: {
        selectDate: function(){searchData()},
        "currentChange": function(currentPage){
            page = currentPage;
            searchData();
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
            page: parseInt(app.get_args("page")) || 1,
            request_date: app.get_args('request_date') || getToday()
        },
        before_success: check_login,
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
                totalPage: d['data']['totalPage'],
                pickerOptions1: pickerOptions1,
                value2: handleDate(app.get_args('request_date'))
            }
        }
    }
})