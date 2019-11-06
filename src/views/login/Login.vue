<template>
    <div class="login">
        <el-container>
            <el-header class="header">
                <a href="https://www.youzan.com" class="header_logo"></a>
                <span class="header_line"></span>
                <span class="header_title">登录</span>
            </el-header>
            <el-main class="main">
                <div class="main_left">
                    <div class="box">
                        <div class="head">
                            <span>密码登录</span>
                        </div>
                        <div class="content">
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="用户名" prop="user">
                                    <el-input type="username" v-model="ruleForm.user" autocomplete="off" ref="user"></el-input>
                                </el-form-item>
                                <el-form-item label="密码" prop="pass">
                                    <el-input type="password" v-model="ruleForm.pass" autocomplete="off" ref="pwd"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" @touchstart="submitForm('ruleForm')" @click='login'>提交</el-button>
                                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                                </el-form-item>
                            </el-form>
                        </div>
                    </div>
                </div>
                <div class="main_right">
                    <div class="banner">
                        <img src="//b.yzcdn.cn/public_files/1e97c2268d18bd0231fb5b0a512b8d7f.png" alt="youzan" class="banner_img">
                    </div>
                </div>
            </el-main>
            <el-footer class="footer">
                <p class="copyright">
                    © 2012 - 2019 
                    <a href="https://www.youzan.com">Youzan.com</a>
                </p>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
var phone=""
var users=""
export default {
    data:function() {
      var validatePass = (rule, value, callback) => {
           var pwd=value.replace(/\s/g, "");
          let patrn=/^(\w){6,20}$/;  
        if (value === ''){
          callback(new Error('请输入密码'));
        } else {
          if (!patrn.test(pwd)) {
              callback([new Error('密码输入不合法')]);
          }else{
              callback()
          }
          callback(users=value);
        }
      };
      var validatePass2  = (rule, value, callback) => {
            var phone=value.replace(/\s/g, "");//去除空格
            //校验手机号，号段主要有(不包括上网卡)：130~139、150~153，155~159，180~189、170~171、176~178。14号段为上网卡专属号段
            let regs = /^((13[0-9])|(17[0-3,6-8])|(15[^4,\\D])|(18[0-9]))\d{8}$/;
            if(value.length === ''){
                callback(new Error('请输入手机号'));
            }else{
                if(!regs.test(phone)){
                callback([new Error('手机号输入不合法')]);
                }else{
                    callback();
                }
                callback((phone=value));
            }
        };
      return {
        ruleForm: {
          pass: '',
          user:'',
          isClick:0
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          user: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      }
    },
    beforeDestroy(){
       
    },
    computed:{
        
    },
    methods: {
       
        submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
              this.isClick===1
              console.log(phone,users,this.isClick)
            this.$router.replace('/home')
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      login(){
            let res={
                token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
                isLogin:1,
                username:this.$refs.user.value,
                password:this.$refs.pwd.value
            }
            console.log(res)
            localStorage.setItem('login',JSON.stringify(res))
            let ress = localStorage.getItem('login')
            let admin=JSON.parse(ress).username
            let passwords=JSON.parse(ress).password
            if(admin&&passwords){
                this.$router.replace('/home')
            }
            
        }
    }
  }  
</script>

<style lang="scss" scoped>
    a{
        text-decoration: none;
        color: #999;
    }
    .login{
        width: 900px;
        height: 500px;
        margin: 0 auto;
        .header{
            width: 900px;
            height: 96px !important;
            border-bottom: 1px solid #e5e5e5;
            padding-top: 50px;
            .header_logo{
                position: relative;
                float: left;
                width: 70px;
                height: 24px;
                background: url("https://b.yzcdn.cn/public_files/9d2f5baed7d7bfd3b913cb508a85a974.png") no-repeat
            }
            .header_line{
                position: relative;
                float: left;
                width: 1px;
                height: 21px;
                background: #666;
                margin-left: 10px;
                padding-top: 5px;
            }
            .header_title{
                float: left;
                position: relative;
                margin-left: 10px;
                padding-top: 2px;
            }
        }
        .main{
            width: 900px;
            height: 404px;
            padding: 0;
            padding-top: 40px;
            .main_left{
                float: left;
                width: 500px;
                height: 364px;
                overflow: hidden;
                .box{
                    width: 410px;
                    min-height: 360px;
                    margin: 2px 20px;
                    padding: 0 15px;
                    box-shadow: 0 0 15px 2px #ccc; 
                    .head{
                        width: 380px;
                        height: 35px;
                        >span{
                            float: left;
                            font-size: 18px;
                            line-height: 20px;
                            color: #999;
                            margin-top: 15px;
                            margin-left: 30px;
                            padding: 0 15px;
                            position: relative;
                        }
                    }
                    .content{
                        width: 380px;
                        height: 294px;
                        padding: 20px 15px 0 15px;
                        .el-form-item{
                            margin: 40px 0;
                        }
                    }
                }
            }
            .main_right{
                float: left;
                width: 400px;
                height: 332px;
                .banner{
                    width: 400px;
                    height: 309px;
                    margin-top: 23px;
                    .banner_img{
                        display: block;
                        width: 380px;
                        height: 307px;
                    }
                }
            }
        }
        .footer{
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            text-align: center;
            font-size: 12px;
            color: #999;
            padding-top: 20px;
        }
    }
</style>

