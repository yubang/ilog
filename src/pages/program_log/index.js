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
    app.goto("/web/html/program-log?page=" + page + "&log_date="+t);
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
        tabIndex: "2",
        tableData: [],
        nums: parseInt(app.get_args("page")) || 1,
        totalPage: 1,
        pickerOptions1: pickerOptions1
    },
    methods: {
        selectDate: function(){searchData();},
        "currentChange": function(currentPage){
            page=currentPage;
            searchData();
        }
    },
    api: {
        url: '/web/api/program-log',
        data: {
            page: parseInt(app.get_args("page")) || 1,
            log_date: app.get_args('log_date') || getToday()
        },
        before_success: check_login,
        success: function(d){
            return {
                tabIndex: "2",
                tableData: d['data']['datas'],
                nums: parseInt(app.get_args("page")) || 1,
                totalPage: d['data']['totalPage'],
                pickerOptions1: pickerOptions1,
                value2: handleDate(app.get_args('log_date'))
            }
        }
    }
})