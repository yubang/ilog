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