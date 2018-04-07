<template lang="pug">
	div.teambuy
		div.header.common_class
			div.header_left
				img(src="/static/img/course_pagemin.png")
			div.header_right
				p.course_title 每日一句古诗文课程
				p.course_detail 查看课程详情>>
				div.three_team
					img(src="/static/img/three_team.png")
				p.price
					span 团购价
					span.unit ￥
					span.num 199&nbsp;
					span (单买价￥299)
		div.content.common_class
			div.head_img
				div.img_circle
						i.leader_icon
						img(src="/static/img/header.png")
				div.img_circle
					img(src="/static/img/header.png")
				div.img_circle(@click="jump")
					img(src="/static/img/header.png")
			div.text
				span 仅剩
				span.number 2
				span 个名额,&nbsp;距离结束&nbsp;
				count
			div.join_btn
				button.team_btn 我要参团
		div.footer.common_class
			p.team_info
				span.team_title 参团须知:
				span.invite.same_icon 邀请好友参团
				span.start_course.same_icon 成团即开课
				span.back_money 不成团全额退款
</template> 
<script>
    import count from '@/components/count'
    export default {
      components: {
        count
      },
      methods: {
        jump () {
          const url = '../invitejoin/invitejoin'
          wx.navigateTo({url})
        }
      }
    }
</script>
 <style lang="stylus">
	page
		background-color #f9f9f9
	.common_class
		margin-top 14rpx
		padding 34rpx
		background-color #ffffff
	.header
		display flex
		justify-content flex-start
		.header_left
			width 220rpx
			height 300rpx
			margin-right 46rpx
			border-radius 4rpx
			img
				width 100%
				height 100%
		.header_right
			.course_title
				font-weight 600 
				font-size 36rpx
				color #010101
				height 70rpx
				line-height 70rpx
			.course_detail
				font-size 26rpx 
				color #999999
			.three_team
				width 136rpx 
				height 40rpx
				margin 70rpx 0 6rpx 0
				img
					width 100%
					height 100%
			.price
				font-size 28rpx
				color #999999
				.unit
					color #fb8a11
					font-size 30rpx
				.num 
					color #fb8a11
					font-size 48rpx
					font-weight 600
	.content
		.head_img
			height 105rpx
			display flex
			align-items center
			justify-content space-around
			padding 10rpx 90rpx
			.img_circle
				width 100rpx 
				height 100rpx
				border-radius 50%
				position relative
				.leader_icon
					position absolute
					top 66rpx
					left 4rpx
					display inline-block
					width 98rpx
					height 43rpx
					background url('../../../static/img/leader.png') no-repeat
					background-size 90rpx 38rpx
				img
					width 100%
					height 100%
		.text
			margin 50rpx 0
			text-align center
			color #555555
			font-size 34rpx
			.number
				color #FB8A11
				font-size 36rpx
		.team_btn
			height 100rpx
			line-height 100rpx
			background-color #FB8A11
			color #ffffff
			border-radius 5px
			border none
	.footer
		height 70rpx 
		line-height 70rpx
		border 1px solid red
		.team_info
			color #777777
			font-size 24rpx
			.team_title
				color #333333
				font-size 30rpx
			span
				display inline-block
				text-align center
				height 50rpx
				line-height 50rpx
				background-size 100% 100%
				
			.same_icon
				width 170rpx 
			.invite
				background url('../../../static/img/invite.png') left center no-repeat
			.start_course
				background url('../../../static/img/start_course.png') left center no-repeat
			.back_money
				width 204rpx
				background url('../../../static/img/back_money.png') left center no-repeat
				
</style>