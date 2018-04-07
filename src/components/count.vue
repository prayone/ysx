<template>
    <div class="timer">
      <span class="icon">{{hour}}</span>
      <span class="colon">:</span>
      <span class="icon">{{min}}</span>
      <span class="colon">:</span>
      <span class="icon">{{second}}</span>
    </div>
</template>

<script>
export default {
  data () {
    return {
      hour: '',
      min: '',
      second: ''
    }
  },
  created () {
    console.log('hhhhhhhhhhhh')
    setInterval(this.count, 1000)
  },
  methods: {
    count () {
      var outTime = new Date('2018/4/9')
      var newTime = new Date()
      var ms = parseInt((outTime.getTime() - newTime.getTime()) / 1000)
      var h = parseInt(ms / 3600 % 24)
      var m = parseInt(ms / 60 % 60)
      var s = parseInt(ms % 60)
      h < 10 ? 'h' + 0 : h
      m < 10 ? 'm' + 0 : m
      s < 10 ? 's' + 0 : s
      this.hour = h
      this.min = m
      this.second = s
    }
  }
}

</script>

<style lang="stylus">
  .timer
    display inline-block
    font-size 32rpx 
    color #555555
    span
      display inline-block
      height 40rpx
      line-height 40rpx
      text-align center
    .colon
      width 16rpx
    .icon
      color #ffffff
      width 44rpx 
      background url('../../static/img/timer_bg.png') center center no-repeat
      background-size 44rpx
      vertical-align middles
</style>
