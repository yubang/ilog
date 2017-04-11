// 这里填充每一个页面的数据（一个字典）
var html_and_css_and_js_data = {"/web/html/request-log": {"title": "ilog\u7ba1\u7406\u540e\u53f0", "html": "123", "css": "", "js": "app.init({})"}};

// 404页面地址
var not_found_path = "/404";

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
        window.history.pushState({},0,url);
         goto_url(url);
    }

}

var app = new Applet();

$(document).ready(function(){
    goto_url(window.location.pathname);
});