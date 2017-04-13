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