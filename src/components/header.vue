<template>
  <div class="header">
    <ul class="nav">
    <li class="left">element</li>
    <router-link to="/" class="right">注册</router-link>
    <router-link to="/login" class="right">登录</router-link>
    <router-link to="/mainpoint" class="right">待</router-link>
    <router-link to="/Shang" class="right">上传</router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'header',
    data () {
      return {

      }
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
  .header{
    width: 100%;
    height: 56px;
    background: #2494F2;
  }
ul{
  margin:0
}
  li{
    width: auto;
    height: 56px;
    list-style: none;
    line-height: 56px;
    position: relative;
    display:inline-block;
    color:white;
    font-size:16px;
  }
  a{
  	width: auto;
    height: 56px;
    list-style: none;
    line-height: 56px;
    position: relative;
    display:inline-block;
    color:white;
    font-size:16px;
    text-decoration: none;
    outline: none;
  }
  .right{
    float:right;
    margin-right:100px;
  }
</style>
