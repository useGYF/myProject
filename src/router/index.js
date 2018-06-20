import Vue from 'vue'
import Router from 'vue-router'

import register from '@/views/Register'//注册页面
import login from '@/views/Login'//登录页面
import Shang from '@/views/Shangchuan'//登录页面
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'register',
      component: register
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/Shang',
      name: 'Shang',
      component: Shang
    },
    { path: '/*', redirect: '/' }
  ]
})
