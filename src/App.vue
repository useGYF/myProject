<template>
  <div id="app">
  	<div>
	  		<v-header></v-header>
  	</div>
		
    <keep-alive>
      <router-view></router-view>
     </keep-alive>

  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="scss">
    @import "styles/tabandprogres";//tab切换全局布局
    @import "styles/scrollbar";//滚动条全局布局
    @import "styles/baidumap";//百度地图全局部分
    @import "styles/elementui";//elementui部分全局修改
    @import "styles/rightposition";//右侧面板部分样式
*{
	margin: 0;
	padding: 0;
}
#app {
	width: 100%;
	height: 100%;
}
</style>
