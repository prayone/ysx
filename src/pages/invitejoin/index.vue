<template lang="pug">
	div.invitejoin
		div.join_header
			div.left_setion
				div.img
					img(src='/static/img/course_page.png')
			div.right_section
				div.price
					img(src="/static/img/price.png")
				div.head_img
					i.leader
					div.img_circle
						img(src="/static/img/header.png")
					div.img_circle
						img(src="/static/img/header.png")
					div.img_circle
						img(src="/static/img/header.png")
				div.text
					span 仅剩
					span.number 2
					span 个名额
				div.count
					span.count_text 距离结束&nbsp;
					count
		div.join_footer
			button.join_btn 立即邀请好友参团
			p.text 小提示：分享到3个家长群，成功率高达98%哦~
</template>
<script>
  import count from '@/components/count'
  export default {
    data () {
    },
    components: {
      count
    },
    created () {
      console.log('1')
    }

  }
</script>
<style lang="stylus" scoped>
	@import './main.css'
	.join_header
		overflow hidden
		margin 12rpx
		padding 40rpx 22rpx
		background-color #ffffff
		.left_setion
			float left
			.img
				width 368rpx 
				height 510rpx
			img
				width 100%
				height 100%
		.right_section
			float right
			.price
				width 290rpx 
				height 280rpx
				img 
					width 100%
					height 100%
			.head_img
				height 105rpx
				display flex
				align-items center
				justify-content space-between 
				position relative
				padding 10rpx 0
				.leader
					position absolute
					bottom 6rpx
					left -2rpx
					display inline-block
					width 96rpx
					height 40rpx
					background url('../../../static/img/leader.png') no-repeat
					background-size 90rpx 38rpx
				.img_circle
					width 86rpx 
					height 86rpx
					border-radius 50%
					img
						width 100%
						height 100%
			.text
				text-align center
				font-size 34rpx
				color #555555
				.number 
					font-size 36rpx
					color #FB8A11
					font-weight bold
			.count
				margin 10rpx 0
				font-size 32rpx 
				color #555555
	.join_footer
		background-color #ffffff
		height 255rpx
		padding-top 60rpx
		box-sizing border-box
		
		.join_btn
			width 90%
			margin 0 auto
			height 100rpx
			line-height 100rpx
			background-color #FB8A11
			color #ffffff
			border-radius 5px
			border none
		.text
			text-align center
			color #999999
			font-size 24rpx 
			margin-top 24rpx
</style>