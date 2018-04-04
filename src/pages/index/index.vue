<template lang="pug">
  .container(@click="clickHandle('test click', $event)")
    .userinfo(@click='bindViewTap')
      img.userinfo-avatar(v-if='userInfo.avatarUrl', :src='userInfo.avatarUrl', background-size='cover')
      .userinfo-nickname
        card(:text='userInfo.nickName')
    .usermotto
      .user-motto
        card(:text='motto')
    form.form-container
      input.form-control(type='text', v-model='motto', placeholder='v-model')
      input.form-control(type='text', v-model.lazy='motto', placeholder='v-model.lazy')
    a.counter(href='/pages/counter/counter') 去往Vuex示例页面
    toast(:message="toastTxt", :visible.synnc="visible"  position="center" @upvisible="upvisible")
    button(@click="setVisible()") toggle toast
    button(@click="zf()") 微信支付
</template>

<script>
import card from '@/components/card'
import toast from '@/modules/toast/toast.vue'
import {getlogin} from '@/common/js/token'
import { payment, crorder } from '@/api/order'
export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {},
      visible: false,
      toastTxt: '123123'
    }
  },
  components: {
    card,
    toast
  },
  methods: {
    setVisible () {
      this.visible = true
    },
    bindViewTap () {
      const url = '../logs/logs'
      wx.navigateTo({ url })
    },
    async zf () {
      let code = await this.$ysx.login().then((res) => {
        return res.code
      })
      await payment(code)
      let data = await crorder().then((res) => {
        let data = res.data.data
        return {
          'timeStamp': data.timeStamp,
          'nonceStr': data.nonceStr,
          'package': data.package,
          'signType': data.signType,
          'paySign': data.paySign
        }
      })
      await this.$ysx.requestPayment(data).then((res) => {
        console.log(res)
      }, (err) => {
        console.log(err)
      })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
              // console.log(this.userInfo)
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },
  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  },
  mounted () {
    getlogin()
  }
}
</script>

<style scoped lang="stylus">
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
