<template>
	<swiper class="banner" indicator-dots circular autoplay>
		<swiper-item v-for="item in pictures" :key="item.id">
			<image @tap="onPreviewImage(item.url)" mode="heightFix" :src="item.url"></image>
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				pictures: [
					{id: '1',url: "https://i.loli.net/2021/12/02/ITgAqBtKcO3RwPV.png"},
					{id: '2',url: "https://i.loli.net/2021/12/02/KLh9n4FYQ1fpXmI.png"},
					{id: '3',url: "https://i.loli.net/2021/11/26/atjlCUKQnY2AOqR.png"}
				]
			}
		},
		onLoad() {

		},
		methods: {
			onPreviewImage(url){
				//console.log(url)
				wx.previewImage({
					urls: this.pictures.map(v=>v.url),
					current:url
				})
			}
		}
	}
</script>

<style>
	.banner,
	.banner image{
		width: 750rpx;
		height: 500rpx;
	}
</style>