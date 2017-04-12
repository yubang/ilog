function check_login(d){
    if(d['code'] == 0){
        return true;
    }
    app.goto('/web/html/login');
    return false;
}