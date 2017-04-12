app.init({
    data: {
        form: {

        }
    },
    methods: {
        onSubmit: function(){
            var name = this.form.name;
            var password = this.form.password;
            if(!$.trim(name)){
                this.$message({message: "用户名不能为空！"});
                return;
            }
            if(!$.trim(password)){
                this.$message({message: "密码不能为空！"});
                return;
            }
            var that = this;
            $.post("/web/api/login", {name: name, password: password}, function(data){
                that.$message({message: "登录成功！正在跳转。。。"});
                setTimeout(function(){app.goto('/web/html/request-log');}, 2000);
            }).error(function(){
                that.$message({message: "用户名或密码错误！"});
            });

            return;
        }
    }
})