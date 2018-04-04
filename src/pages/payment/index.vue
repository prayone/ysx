<template lang='pug'>
  div.payment
    div.content
      div.course_info
        p.title 课程信息
        p.course_name 课程名称 : 
          span 每日一句古诗文课程
        p.payment_grade 
          span.text 购买年级 : 
      div.pay_form
        p.title 购买账户
        div.user
          i.user-icon
          input(placeholder="请输入您的手机号")
        div.password
          i.password-icon   
          input.password-input(type="text",placeholder="请输入验证码")
          div.code 获取验证码
      div.pay_btn
        button 立即支付￥199
</template>
<script>
  export default{
    data () {
      return {
        // countries: ["中国", "美国", "英国"],
        // countryIndex: 0,
        // accounts: ["微信号", "QQ", "Email"],
        // accountIndex: 0
      }
    },
    methods: {
      bindCountryChange: function (e) {
        // console.log('picker country 发生选择改变，携带值为', e.detail.value);
        // this.setData({
        //     countryIndex: e.detail.value
        // })
      },
      bindAccountChange: function (e) {
          // console.log('picker account 发生选择改变，携带值为', e.detail.value);
          // this.setData({
          //     accountIndex: e.detail.value
          // })
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .title
    margin 46rpx 0 34rpx 0
    font-size 34rpx
    color #333333
    font-weight bold
    padding-top 38rpx
  .course_info,.pay_form
    padding 0 0 34rpx 40rpx
  .course_info
    position relative
    &::after
      position absolute
      width 100%
      top 0
      left 0
      background-color #f7f7f7
      height 12rpx
      content ''
    .course_name
      font-size 28rpx
      color #777777
      span
        color #333333
    .payment_grade
      margin-top 18rpx
      font-size 28rpx
      color #777777 
  .pay_form 
    font-size 28rpx
    position relative
    &::after 
      position absolute
      width 100%
      top 0
      left 0
      background-color #f7f7f7
      height 12rpx
      content ''
    input
      border 1px solid #e4e4e4
      background-color #fcfcfc
      padding-left 72rpx
      width 676rpx
      height 94rpx
      border-radius 3px
      box-sizing border-box
    .password
      margin-top 10rpx
      .password-input
        box-sizing border-box
        display inline-block
        width 462rpx
        border-right none
        border-top-right-radius 0
        border-bottom-right-radius 0
      .code
        box-sizing border-box
        position absolute
        border 1px solid #e4e4e4
        display inline-block
        width 214rpx
        height 94rpx
        color #FB8A11
        font-size 30rpx
        line-height 94rpx
        background-color #fcfcfc
        border-top-right-radius 3px
        border-bottom-right-radius 3px
        text-align center
    .user,.password
      position relative
      .user-icon,.password-icon
        position absolute
        bottom 30rpx
        left 20rpx
        display inline-block
        width 36rpx
        height 36rpx
        background url('../../../static/img/phone.png') center center no-repeat
        background-size 28rpx 
      .password-icon
        background url('../../../static/img/password.png') center center no-repeat
        background-size 28rpx
        top 30rpx
  .pay_btn
    position relative
  button 
    position fixed
    left 0
    bottom 0
    width 100%
    color #ffffff
    background-color #FB8A11
    height 106rpx
    line-height 106rpx
    border-radius 0
</style>