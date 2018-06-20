/*
 * 注册页面 基于elementUI的表单验证
 * 郭亚非  2018/4/12 修改
 */
<template>
	<div style="width: 500px;margin: 0 auto;">
		<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
		  	<el-form-item label="年龄" prop="age">
		    	<el-input v-model.number="ruleForm2.age" placeholder='请输入年龄'></el-input>
		  	</el-form-item>
		  	<el-form-item label="姓名" prop="name">
		    	<el-input v-model.number="ruleForm2.name" placeholder='请输入姓名'></el-input>
		  	</el-form-item>
		  	<el-form-item label="手机号" prop="phone">
		    	<el-input v-model.number="ruleForm2.phone" placeholder='请输入手机号'></el-input>
		  	</el-form-item>
		  	<el-form-item label="身份证号" prop="idNumber">
		    	<el-input v-model.number="ruleForm2.idNumber" placeholder='请输入身份证号'></el-input>
		  	</el-form-item>
		  	<el-form-item label="密码" prop="pass">
		    	<el-input type="password" v-model="ruleForm2.pass" auto-complete="on" placeholder='请输入密码'></el-input>
		  	</el-form-item>
		  	<el-form-item label="确认密码" prop="checkPass">
		    	<el-input type="password" v-model="ruleForm2.checkPass" auto-complete="on"></el-input>
		  	</el-form-item>
		  	<el-form-item>
		   	 	<el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
		    	<el-button @click="resetForm('ruleForm2')">重置</el-button>
		  	</el-form-item>
		</el-form>
	</div>
</template>
<script>
  export default {
  	name:'register',
    data() {
    	let username = /^[\u4E00-\u9FA5A-Za-z]+$/;//中文
    	let phone =/^[1][3,4,5,7,8][0-9]{9}$/;//手机号
    	let idNumber = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/; //身份证号
      //姓名校验
      let checkName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('姓名不能为空'));
        }
        setTimeout(() => {
            if (!username.test(value)) {
              callback(new Error('姓名必须是中文'));
            } else {
              callback();
            }
        }, 1000);
      };
      //手机号校验
      let checkPhone = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请输入手机号'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
             if (!phone.test(value)) {
              callback(new Error('手机号不正确'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      
      //身份证号验证校验
      let checkIdNumber = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请输入身份证号'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
             if (!idNumber.test(value)) {
              callback(new Error('身份证号不正确'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      //年龄校验
      let checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      //密码校验
      let validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };   
      let validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
     
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          age: '',
          name:'',
          phone:'',
          idNumber:''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ],
          name: [
            { validator: checkName, trigger: 'blur' }
          ],
          phone: [
            { validator: checkPhone, trigger: 'blur' }
          ],
          idNumber: [
            { validator: checkIdNumber, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
      	let t = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
          	//在此做信息提交
          	 $.ajax({
                type: "POST",//方法类型
                dataType: "json",//预期服务器返回的数据类型
                url: "/users/login" ,//url
                data: {
                	username: t.ruleForm2.name,
                	password: t.ruleForm2.pass
                },
                success: function (result) {
                    console.log(result);
                    if (result.resultCode == 200) {
	                    setTimeout(function () {
                            t.$router.push('/login')
                        }, 2000)
                    };
                },
                error : function() {
                    alert("提交数据异常");
                }
            });
            t.$cookies('info',ruleForm2,'1d','/')
            t.$message({
                message: '注册成功',
                type: 'success'
            });
            setTimeout(function () {
                t.$router.push('/login')
            }, 2000)
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>