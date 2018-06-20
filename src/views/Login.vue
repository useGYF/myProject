/*
 * 登录页面 基于elementUI的表单验证
 * 郭亚非  2018/4/12 修改
 */
<template>
  <div style="width: 500px;margin: 0 auto;">
    <el-form :model="loginInfo" status-icon :rules="rules2" ref="loginInfo" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="name">
	    <el-input v-model="loginInfo.username" placeholder="请输入用户名"></el-input>
	  </el-form-item>
	  <el-form-item label="密码" prop="pass">
<!--	  	<el-input type='password' v-model="loginInfo.password" auto-complete="off" placeholder="请输入密码" name='psw' style='display: none;'></el-input>-->
	    <el-input type='password' v-model="loginInfo.password" auto-complete="off" placeholder="请输入密码" name='psw'></el-input>
	  </el-form-item>
	  <el-form-item>
	    <el-button type="primary" @click="login" @keyup.enter="login">登录</el-button>
	    <el-button @click="resetForm('loginInfo')">重置</el-button>
	  </el-form-item>
	</el-form>
</div>
</template>
<script>
export default {
  name:'login',
  data(){
  		let uname = /^[\u4E00-\u9FA5A-Za-z]+$/;//中文
    	let phone =/^[1][3,4,5,7,8][0-9]{9}$/;//手机号
    	let idNumber = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/; //身份证号
      //姓名校验
      let checkName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('姓名不能为空'));
        }
        setTimeout(() => {
            if (!uname.test(value)) {
              callback(new Error('姓名必须是中文'));
            } else {
              callback();
            }
        }, 1000);
      };
       //密码校验
      let validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
//        if (this.loginInfo.checkPass !== '') {
//          this.$refs.ruleForm2.validateField('checkPass');
//        }
//        callback();
        }
      };   
  	return {
    	loginInfo: {
          password: '',
          username: ''
       },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          name: [
            { validator: checkName, trigger: 'blur' }
          ]
        }
    }
  },
  mounted(){
//	$('.password').click(function(){
//		this.type = 'password';
//		console.log(this.type)
//	})
  },
  methods: {
  	login(){
  		var t = this;
        $.ajax({
            url: "api/login/UserLogin",
            data: {
                username: this.userName,
                password: this.passWord
            },
            method: "post",
            success: function (data) {
                console.log(data)
                if (data.Status > 0) {
                    //为简单起见，将token保存在全局变量中。
                    window.token = data.Data.Token;
                    t.$cookies.set('auth', token, '1d', '/')
                    t.$message({
                        message: '不忘初心，蓝天碧水！马上跳转',
                        //message: '恭喜你，登录成功马上跳转',
                        type: 'success'
                    });
                    setTimeout(function () {
//                              t.$router.push('/Monitor')
                    }, 2000)

                } else {
                  
                }
            }
        });
  	},
  	 resetForm(formName) {
        this.$refs[formName].resetFields();
      }
  }

  
}
</script>