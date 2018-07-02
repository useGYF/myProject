import Vue from 'vue'
import Router from 'vue-router'

import index from '@/views/Index'//注册页面
import register from '@/views/Register'//注册页面
import login from '@/views/Login'//登录页面
import Upload from '@/views/ImgUpload'//登录页面
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/Upload',
      name: 'Upload',
      component: Upload
    },
    { path: '/*', redirect: '/' }
  ]
})
