<template lang="pug">
	div.invitejoin
		div.join_header
			div.left_setion
				div.img
					img(src='../../../static/img/course_page.png')
			div.right_section
				div.price
					img(src="../../../static/img/price.png")
				div.head_img
				div.text 仅剩2个名额
				div.timer 距离结束
		div.join_footer
			button.join_btn 立即邀请好友参团
			p.text 小提示：分享到3个家长群，成功率高达98%哦~

</template>
<script>
	export default {
	}
</script>
<style lang="stylus" scoped>
	@import './main.css'
	.join_header
		overflow hidden
		margin 12rpx
		padding 40rpx 30rpx
		background-color #ffffff
		.left_setion
			float left
			.img
				width 370rpx 
				height 510rpx
			img
				width 100%
				height 100%
		.right_section
			float right
			.price
				border 1px solid #aaa
				width 270rpx 
				height 280rpx
				img 
					width 100%
					height 100%
			.head_img
				width 270rpx 
				height 105rpx
				border 1px solid #aaa
				margin 10rpx 0
				
			.text
				text-align center
				font-size 34rpx
				color #555555	
			.timer
				margin 7rpx 0
				font-size 30rpx 
				color #555555
	.join_footer
		background-color #ffffff
		height 255rpx
		padding-top 60rpx
		box-sizing border-box
		
		.join_btn
			width 90%
			margin 0 auto
			height 90rpx
			line-height 90rpx
			background-color #FB8A11
			color #ffffff
			border-radius 2px
			border none
		.text
			text-align center
			color #999999
			font-size 24rpx 
			margin-top 24rpx
</style>