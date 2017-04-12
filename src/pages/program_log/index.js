app.init({
    data: {
        tabIndex: "2",
        tableData: [],
        nums: parseInt(app.get_args("page")) || 1,
        totalPage: 1
    },
    methods: {
        "currentChange": function(currentPage){
            app.goto("/web/html/program-log?page=" + currentPage);
        }
    },
    api: {
        url: '/web/api/program-log',
        data: {
            page: parseInt(app.get_args("page")) || 1
        },
        before_success: check_login,
        success: function(d){
            return {
                tabIndex: "2",
                tableData: d['data']['datas'],
                nums: parseInt(app.get_args("page")) || 1,
                totalPage: d['data']['totalPage']
            }
        }
    }
})