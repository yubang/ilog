// 这里填充每一个页面的数据（一个字典）
var html_and_css_and_js_data = {"/web/html/about": {"title": "ILog\u7ba1\u7406\u540e\u53f0", "html": "<el-menu class=\"el-menu-demo\" default-active=\"1\" theme=\"dark\">\n<el-menu-item index=\"1\">ILog\u7ba1\u7406\u540e\u53f0</el-menu-item>\n</el-menu>\n<br>\n<el-row class=\"tac\">\n<el-col :span=\"4\">\n<el-menu :default-active=\"tabIndex\" class=\"el-menu-vertical-demo\" theme=\"dark\">\n<el-menu-item index=\"1\" onclick=\"app.goto('/web/html/request-log');\"><i class=\"el-icon-message\"></i><a href=\"javascript:;\">\u524d\u7aef\u8bf7\u6c42\u65e5\u5fd7</a></el-menu-item>\n<el-menu-item index=\"2\" onclick=\"app.goto('/web/html/program-log');\"><i class=\"el-icon-menu\"></i><a href=\"javascript:;\">\u7a0b\u5e8f\u65e5\u5fd7</a></el-menu-item>\n<el-menu-item index=\"3\" onclick=\"app.goto('/web/html/about');\"><i class=\"el-icon-setting\"></i><a href=\"javascript:;\">\u5173\u4e8e</a></el-menu-item>\n<el-menu-item index=\"4\" onclick=\"exit_account();\"><i class=\"el-icon-setting\"></i><a href=\"javascript:;\">\u9000\u51fa</a></el-menu-item>\n</el-menu>\n</el-col>\n<el-col :span=\"19\">\n\n<div class=\"about-page-div\">\n<ul>\n<li>\n                \u7cfb\u7edf\u4ee3\u7801\uff1a<a :href=\"url1\" target=\"_blank\">{{url1}}</a>\n</li>\n<li>\n                \u524d\u6bb5\u6784\u5efa\u5de5\u5177\uff1a<a :href=\"url2\" target=\"_blank\">{{url2}}</a>\n</li>\n<li>\n                \u4f5c\u8005\uff1a{{author}}\n            </li>\n<li>\n                \u7248\u672c\uff1a{{version}}\n            </li>\n<li>\n                \u8054\u7cfb\uff1a{{mail}}\n            </li>\n</ul>\n</div>\n\n</el-col>\n</el-row>\n</br>", "css": ".about-page-div{\n    padding-left:10px;\n}\n.about-page-div li{margin-top: 15px;}", "js": "app.init({\n    data: {\n        tabIndex: \"3\",\n        url1: \"https://github.com/yubang/ilog\",\n        url2: \"https://github.com/yubang/applet\",\n        version: \"0.1.0\",\n        author: \"yubang\",\n        mail: \"yubang93@gmail.com\"\n    }\n})"}, "/web/html/login": {"title": "ILog\u7ba1\u7406\u540e\u53f0", "html": "<el-menu class=\"el-menu-demo\" default-active=\"1\" theme=\"dark\">\n<el-menu-item index=\"1\">ILog\u7ba1\u7406\u540e\u53f0</el-menu-item>\n</el-menu>\n<el-form :model=\"form\" label-width=\"80px\" ref=\"form\">\n<el-form-item label=\"\u7528\u6237\u540d\uff1a\">\n<el-input v-model=\"form.name\"></el-input>\n</el-form-item>\n<el-form-item label=\"\u5bc6\u7801\uff1a\">\n<el-input type=\"password\" v-model=\"form.password\"></el-input>\n</el-form-item>\n<el-form-item>\n<el-button @click=\"onSubmit\" type=\"primary\">\u767b\u5f55</el-button>\n</el-form-item>\n</el-form>", "css": "form{\n    width:50%;\n    margin-left:auto;\n    margin-right:auto;\n    margin-top:50px;\n}", "js": "app.init({\n    data: {\n        form: {\n\n        }\n    },\n    methods: {\n        onSubmit: function(){\n            var name = this.form.name;\n            var password = this.form.password;\n            if(!$.trim(name)){\n                this.$message({message: \"\u7528\u6237\u540d\u4e0d\u80fd\u4e3a\u7a7a\uff01\"});\n                return;\n            }\n            if(!$.trim(password)){\n                this.$message({message: \"\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a\uff01\"});\n                return;\n            }\n            var that = this;\n            $.post(\"/web/api/login\", {name: name, password: password}, function(data){\n                that.$message({message: \"\u767b\u5f55\u6210\u529f\uff01\u6b63\u5728\u8df3\u8f6c\u3002\u3002\u3002\"});\n                setTimeout(function(){app.goto('/web/html/request-log');}, 2000);\n            }).error(function(){\n                that.$message({message: \"\u7528\u6237\u540d\u6216\u5bc6\u7801\u9519\u8bef\uff01\"});\n            });\n\n            return;\n        }\n    }\n})"}, "/web/html/program-log": {"title": "ILog\u7ba1\u7406\u540e\u53f0", "html": "<el-menu class=\"el-menu-demo\" default-active=\"1\" theme=\"dark\">\n<el-menu-item index=\"1\">ILog\u7ba1\u7406\u540e\u53f0</el-menu-item>\n</el-menu>\n<br>\n<el-row class=\"tac\">\n<el-col :span=\"4\">\n<el-menu :default-active=\"tabIndex\" class=\"el-menu-vertical-demo\" theme=\"dark\">\n<el-menu-item index=\"1\" onclick=\"app.goto('/web/html/request-log');\"><i class=\"el-icon-message\"></i><a href=\"javascript:;\">\u524d\u7aef\u8bf7\u6c42\u65e5\u5fd7</a></el-menu-item>\n<el-menu-item index=\"2\" onclick=\"app.goto('/web/html/program-log');\"><i class=\"el-icon-menu\"></i><a href=\"javascript:;\">\u7a0b\u5e8f\u65e5\u5fd7</a></el-menu-item>\n<el-menu-item index=\"3\" onclick=\"app.goto('/web/html/about');\"><i class=\"el-icon-setting\"></i><a href=\"javascript:;\">\u5173\u4e8e</a></el-menu-item>\n<el-menu-item index=\"4\" onclick=\"exit_account();\"><i class=\"el-icon-setting\"></i><a href=\"javascript:;\">\u9000\u51fa</a></el-menu-item>\n</el-menu>\n</el-col>\n<el-col :span=\"19\">\n\n<div class=\"search\">\n<el-form :inline=\"true\" :model=\"form\" label-width=\"80px\" ref=\"form\">\n<el-date-picker :picker-options=\"pickerOptions1\" @change=\"selectDate\" align=\"right\" placeholder=\"\u9009\u62e9\u65e5\u671f\" type=\"date\" v-model=\"value2\"></el-date-picker>\n<el-form-item label=\"\u65e5\u5fd7\u7b49\u7ea7\">\n<el-select @change=\"selectLevel\" placeholder=\"\u8bf7\u9009\u62e9\u65e5\u5fd7\u7b49\u7ea7\" v-model=\"form.level\">\n<el-option label=\"\u5168\u90e8\" value=\"all\"></el-option>\n<el-option label=\"DEBUG\" value=\"DEBUG\"></el-option>\n<el-option label=\"INFO\" value=\"INFO\"></el-option>\n<el-option label=\"WARN\" value=\"WARN\"></el-option>\n<el-option label=\"ERROR\" value=\"ERROR\"></el-option>\n<el-option label=\"FATAL\" value=\"FATAL\"></el-option>\n</el-select>\n</el-form-item>\n</el-form>\n</div>\n<template>\n<el-table :data=\"tableData\" stripe=\"\" style=\"margin-left:15px;\">\n<el-table-column label=\"APP\" prop=\"app_name\"></el-table-column>\n<el-table-column label=\"\u65e5\u5fd7\u7b49\u7ea7\" prop=\"level\"></el-table-column>\n<el-table-column label=\"\u8bb0\u5f55\u65f6\u95f4\" prop=\"log_time\"></el-table-column>\n<el-table-column label=\"\u65e5\u5fd7\u5185\u5bb9\" prop=\"msg\"></el-table-column>\n</el-table>\n</template>\n<el-pagination :current-page=\"nums\" :page-count=\"totalPage\" @current-change=\"currentChange\" layout=\"prev, pager, next\" style=\"margin-left:15px;margin-top:15px;\"></el-pagination>\n\n</el-col>\n</el-row>\n</br>", "css": ".css1{margin-left:15px;}\n.search{margin-left:15px;margin-bottom: 15px;}", "js": "var page = parseInt(app.get_args(\"page\")) || 1;\nvar level = app.get_args(\"level\") || 'all';\n\nfunction searchData(){\n    var t;\n    if(app.vm.value2){\n        app.vm.value2 = new Date(app.vm.value2)\n        var s = \"\", s2 = \"\";\n        if(app.vm.value2.getMonth() + 1 < 10){s=\"0\";}\n        if(app.vm.value2.getDate() + 1 < 10){s2=\"0\";}\n        t = \"\" + app.vm.value2.getFullYear() + s + (app.vm.value2.getMonth() + 1) + s2 + app.vm.value2.getDate();\n    }else{\n        t = getToday();\n    }\n    app.goto(\"/web/html/program-log?page=\" + page + \"&log_date=\"+t + \"&level=\"+level);\n}\n\nvar pickerOptions1 = {\n          shortcuts: [{\n            text: '\u4eca\u5929',\n            onClick(picker) {\n              picker.$emit('pick', new Date());\n            }\n          }, {\n            text: '\u6628\u5929',\n            onClick(picker) {\n              const date = new Date();\n              date.setTime(date.getTime() - 3600 * 1000 * 24);\n              picker.$emit('pick', date);\n            }\n          }, {\n            text: '\u4e00\u5468\u524d',\n            onClick(picker) {\n              const date = new Date();\n              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);\n              picker.$emit('pick', date);\n            }\n          }]\n        };\napp.init({\n    data: {\n        tabIndex: \"2\",\n        tableData: [],\n        nums: parseInt(app.get_args(\"page\")) || 1,\n        totalPage: 1,\n        pickerOptions1: pickerOptions1\n    },\n    methods: {\n        selectLevel: function(){level = app.vm.form.level;searchData();},\n        selectDate: function(){searchData();},\n        \"currentChange\": function(currentPage){\n            page=currentPage;\n            searchData();\n        }\n    },\n    api: {\n        url: '/web/api/program-log',\n        data: {\n            page: parseInt(app.get_args(\"page\")) || 1,\n            log_date: app.get_args('log_date') || getToday(),\n            level: app.get_args('level') || 'all'\n        },\n        before_success: check_login,\n        success: function(d){\n            return {\n                tabIndex: \"2\",\n                tableData: d['data']['datas'],\n                nums: parseInt(app.get_args(\"page\")) || 1,\n                totalPage: d['data']['totalPage'],\n                pickerOptions1: pickerOptions1,\n                value2: handleDate(app.get_args('log_date')),\n                form: {level: app.get_args('level') || 'all'}\n            }\n        }\n    }\n})"}, "/web/html/404": {"title": "ILog\u7ba1\u7406\u540e\u53f0", "html": "<el-menu class=\"el-menu-demo\" default-active=\"1\" theme=\"dark\">\n<el-menu-item index=\"1\">ILog\u7ba1\u7406\u540e\u53f0</el-menu-item>\n</el-menu>\n<br>\n<p align=\"center\">\u5176\u5b9e\u4f60\u8bbf\u95ee\u7684\u9875\u9762\u5df2\u7ecf\u88ab\u5403\u6389\u4e86\uff01</p></br>", "css": "", "js": "app.init({})"}, "/web/html/request-log": {"title": "ILog\u7ba1\u7406\u540e\u53f0", "html": "<el-menu class=\"el-menu-demo\" default-active=\"1\" theme=\"dark\">\n<el-menu-item index=\"1\">ILog\u7ba1\u7406\u540e\u53f0</el-menu-item>\n</el-menu>\n<br>\n<el-row class=\"tac\">\n<el-col :span=\"4\">\n<el-menu :default-active=\"tabIndex\" class=\"el-menu-vertical-demo\" theme=\"dark\">\n<el-menu-item index=\"1\" onclick=\"app.goto('/web/html/request-log');\"><i class=\"el-icon-message\"></i><a href=\"javascript:;\">\u524d\u7aef\u8bf7\u6c42\u65e5\u5fd7</a></el-menu-item>\n<el-menu-item index=\"2\" onclick=\"app.goto('/web/html/program-log');\"><i class=\"el-icon-menu\"></i><a href=\"javascript:;\">\u7a0b\u5e8f\u65e5\u5fd7</a></el-menu-item>\n<el-menu-item index=\"3\" onclick=\"app.goto('/web/html/about');\"><i class=\"el-icon-setting\"></i><a href=\"javascript:;\">\u5173\u4e8e</a></el-menu-item>\n<el-menu-item index=\"4\" onclick=\"exit_account();\"><i class=\"el-icon-setting\"></i><a href=\"javascript:;\">\u9000\u51fa</a></el-menu-item>\n</el-menu>\n</el-col>\n<el-col :span=\"19\">\n\n<div class=\"search\">\n<el-date-picker :picker-options=\"pickerOptions1\" @change=\"selectDate\" align=\"right\" placeholder=\"\u9009\u62e9\u65e5\u671f\" type=\"date\" v-model=\"value2\"></el-date-picker>\n</div>\n<template>\n<el-table :data=\"tableData\" stripe=\"\" style=\"margin-left:15px;\">\n<el-table-column label=\"APP\" prop=\"app_name\"></el-table-column>\n<el-table-column label=\"\u8bf7\u6c42\u5730\u5740\" prop=\"url\"></el-table-column>\n<el-table-column label=\"\u8bf7\u6c42\u65f6\u95f4\" prop=\"request_time\"></el-table-column>\n<el-table-column label=\"\u8bf7\u6c42\u7528\u65f6\" prop=\"use_time\"></el-table-column>\n<el-table-column label=\"\u72b6\u6001\u7801\" prop=\"status_code\"></el-table-column>\n<el-table-column label=\"\u67e5\u770b\u6570\u636e\">\n<template scope=\"scope\">\n<a @click=\"look(scope.row.index)\" class=\"a2\" href=\"javascript:;\">\u67e5\u770b\u6570\u636e</a>\n</template>\n</el-table-column>\n</el-table>\n</template>\n<el-pagination :current-page=\"nums\" :page-count=\"totalPage\" @current-change=\"currentChange\" layout=\"prev, pager, next\" style=\"margin-left:15px;margin-top:15px;\"></el-pagination>\n\n</el-col>\n</el-row>\n</br>", "css": ".a2{\n    color:#20a0ff;\n}\n.search{margin-left:15px;margin-bottom: 15px;}", "js": "var page = parseInt(app.get_args(\"page\")) || 1;\n\nfunction searchData(){\n    var t;\n    if(app.vm.value2){\n        app.vm.value2 = new Date(app.vm.value2)\n        var s = \"\", s2 = \"\";\n        if(app.vm.value2.getMonth() + 1 < 10){s=\"0\";}\n        if(app.vm.value2.getDate() + 1 < 10){s2=\"0\";}\n        t = \"\" + app.vm.value2.getFullYear() + s + (app.vm.value2.getMonth() + 1) + s2 + app.vm.value2.getDate();\n    }else{\n        t = getToday();\n    }\n    app.goto(\"/web/html/request-log?page=\" + page + \"&request_date=\"+t);\n}\nvar pickerOptions1 = {\n          shortcuts: [{\n            text: '\u4eca\u5929',\n            onClick(picker) {\n              picker.$emit('pick', new Date());\n            }\n          }, {\n            text: '\u6628\u5929',\n            onClick(picker) {\n              const date = new Date();\n              date.setTime(date.getTime() - 3600 * 1000 * 24);\n              picker.$emit('pick', date);\n            }\n          }, {\n            text: '\u4e00\u5468\u524d',\n            onClick(picker) {\n              const date = new Date();\n              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);\n              picker.$emit('pick', date);\n            }\n          }]\n        };\n\napp.init({\n    data: {\n        tabIndex: \"1\",\n        tableData: [],\n        nums: parseInt(app.get_args(\"page\")) || 1,\n        totalPage: 1,\n        pickerOptions1: pickerOptions1\n    },\n    methods: {\n        selectDate: function(){searchData()},\n        \"currentChange\": function(currentPage){\n            page = currentPage;\n            searchData();\n        },\n        \"look\": function(index){\n            var obj = app.data[index];\n            var text = \"\u8bf7\u6c42\u5730\u5740\uff1a\" + obj['request_method'] + \" \" + obj['request_url'] + \"\\n\\n\";\n            text = text + \"\u72b6\u6001\u7801\uff1a\" + obj['status_code'] + \"\\n\\n\";\n            text = text + \"\u8bf7\u6c42\u7528\u65f6\uff1a\" + obj['use_time'] + \"\u79d2\\n\\n\";\n            text = text + \"\u8bf7\u6c42\u53c2\u6570\uff1a\\n\" + obj['request_param'] + \"\\n\\n\";\n            text = text + \"\u8bf7\u6c42headers\uff1a\\n\" + obj['request_headers'] + \"\\n\\n\";\n            text = text + \"\u8fd4\u56de\u503c\uff1a\\n\" + obj['response_data'] + \"\\n\\n\";\n            text = text + \"\u9519\u8bef\u4fe1\u606f\uff1a\\n\" + obj['error_data'] + \"\\n\\n\";\n\n            this.$alert(text, '\u67e5\u770b\u4fe1\u606f', {\n              confirmButtonText: '\u5df2\u9605',\n              callback: action => {\n\n              }\n            });\n            setTimeout(function(){\n                var html = text.replace(/\\n/g, \"<br>\");\n                 $(\".el-message-box__message > p\").html(html)\n            }, 200);\n        }\n    },\n    api: {\n        url: '/web/api/request-log',\n        data: {\n            page: parseInt(app.get_args(\"page\")) || 1,\n            request_date: app.get_args('request_date') || getToday()\n        },\n        before_success: check_login,\n        success: function(d){\n            var arrs = [];\n            var index = 0;\n            for(var i in d['data']['datas']){\n                var obj = d['data']['datas'][i];\n                arrs.push({\n                    url: obj['request_method'] + \" \" + obj['request_url'],\n                    app_name: obj['app_name'],\n                    request_time: obj['request_time'],\n                    use_time: obj['use_time'] + \"\u79d2\",\n                    status_code: obj['status_code'],\n                    index: index\n                });\n                index++;\n            }\n            app.data = d['data']['datas'];\n            return {\n                tabIndex: \"1\",\n                tableData: arrs,\n                nums: parseInt(app.get_args(\"page\")) || 1,\n                totalPage: d['data']['totalPage'],\n                pickerOptions1: pickerOptions1,\n                value2: handleDate(app.get_args('request_date'))\n            }\n        }\n    }\n})"}};

// 404页面地址
var not_found_path = "/web/html/404";

// js name
var js_label_name = "js_";
var js_label_index = 0;

// 路由处理
function goto_url(url){
    if(html_and_css_and_js_data[url]){
        $("#css").html(html_and_css_and_js_data[url]['css']);
        $("#html").html(html_and_css_and_js_data[url]['html']);

        $("#" + js_label_name + js_label_index).remove();
        js_label_index++;
        $("body").append('<script id="'+js_label_name + js_label_index+'">'+html_and_css_and_js_data[url]['js']+'</script>');
    }else{
        if(html_and_css_and_js_data[not_found_path]){
            $("#css").html(html_and_css_and_js_data[not_found_path]['css']);
            $("#html").html(html_and_css_and_js_data[not_found_path]['html']);
            $("#" + js_label_name + js_label_index).remove();
            js_label_index++;
            $("body").append('<script id="'+js_label_name + js_label_index+'">'+html_and_css_and_js_data[not_found_path]['js']+'</script>');
        }else{
            alert("你访问的页面已经被吃掉了！");
        }
    }
}

// 组件js


// app内置的方法
function Applet(){

    this.vm = null;
    this.data = null;

    // 是否显示loading
    this.show_loading = function(sign){
        if(sign){
            $("#html").hide();
            $("#loading").show();
        }else{
            $("#html").show();
            $("#loading").hide();
        }
    }

    this.render = function(d){
        var that = this;
        this.vm = new Vue({
            el: '#html',
            data: d['data'] || {},
            methods: d['methods'] || {},
            mounted: function(){
                that.show_loading(false);
            }
        });
    }

    // 渲染页面
    this.init = function(vue_data){
        // 显示loadin动画
        this.show_loading(true);

        var api = vue_data['api'] || {};
        // 获取api数据
        var api_url = api['url'] || null;
        var api_data = api['data'] || {};
        var api_method = api['method'] || "GET";
        var api_headers = api['headers'] || {};
        var success = api['success'] || function(d){return d;}
        var error = api['error'] || function(){}
        var before_success = api['before_success'] || function(d){return true;};

        if(api_url == null){
            this.render(vue_data);
        }else{
            var that = this;
            $.ajax({
                url: api_url,
                type: api_method,
                headers: api_headers,
                data: api_data,
                success: function(d){
                    if(before_success(d)){
                        vue_data['data'] = success(d);
                        that.render(vue_data);
                    }
                },
                error: function(){
                    error();
                    that.render(vue_data);
                }
            });

        }

    }

    // 无刷新跳转页面
    this.goto = function(url){
        window.history.pushState({}, null,url);
        goto_url(window.location.pathname);
    }

    // 获取get参数
    this.get_args = function(name){
      var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
      var r = window.location.search.substr(1).match(reg);
      if (r != null) {
        return unescape(r[2]);
      }
      return false;
    }

}

var app = new Applet();


window.addEventListener('popstate', function(event) {
   goto_url(window.location.pathname);
});


// 全局js
function check_login(d){
    if(d['code'] == 0){
        return true;
    }
    app.goto('/web/html/login');
    return false;
}

function exit_account(){
    $.get('/web/api/exit', {}, function(data){
        app.goto('/web/html/login');
    }).error(function(){
        app.goto('/web/html/login');
    });
}

function  getToday(){
        var s = "", s2 = "";
        var d = new Date();
        if(d.getMonth() + 1 < 10){s="0";}
        if(d.getDate() + 1 < 10){s2="0";}
        t = "" + d.getFullYear() + s + (d.getMonth() + 1) + s2 + d.getDate();
        return t;
}

function handleDate(d){
    if(!d)return "";
    return d.charAt(0) + d.charAt(1) + d.charAt(2) + d.charAt(3) + "-" + d.charAt(4) + d.charAt(5) + "-" + d.charAt(6) + d.charAt(7);
}


$(document).ready(function(){
    goto_url(window.location.pathname);
});