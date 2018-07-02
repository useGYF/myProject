<template>
	<div class="index">
		<div class="index1">
			<header>图片上传</header>
			<a href="#/Upload">图片上传</a>
		</div>
	</div>
</template>

<script>
export default{
	name: 'index',
	data(){
		return {
			
		}

	},
	computed: {
	
	},
	methods: {

	}
}
</script>

<style lang="scss" scoped>
.index{
	width: 90%;
	height: 90%;
	margin: 0 auto;
	border: 1px solid #eee;
	margin-top: 20px;
	background: #FFF;
	.index1{
		margin: 10px;
		width: 300px;
		height: 200px;
		background: #eee;
		header{
			text-align: center;
		}
		a{
			display: block;
		}
	}
}
</style>