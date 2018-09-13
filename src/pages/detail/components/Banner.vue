<template>
  <div>
    <div class="banner" @click = 'handleClick'>
      <img v-show="true" src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg"/>
      <div class="banner-info">
        <div class="banner-title">大连圣亚海洋世界(AAAA景区)</div>
        <div class="banner-num"> <span class="iconfont back-icon">&#xe692;</span>39</div>
      </div>
    </div>
    <common-gallary
      v-show="showGallary"
      @close = 'handleGallaryClick'
      :imags = imgs
    ></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary.vue'
export default {
  name: 'Banner',
  props: {

  },
  components: {
    CommonGallary
  },
  data () {
    return {
      showGallary: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1501/fb/fb16e5527fb70e86.water.jpg_r_800x800_4629294c.jpg', 'http://img1.qunarzz.com/sight/p0/1501/f1/f1273a73d5f095c4.water.jpg_r_800x800_c2cf7d6e.jpg']
    }
  },
  methods: {
    handleClick () {
      this.showGallary = true
    },
    handleGallaryClick () {
      this.showGallary = false
    }
  }
}

</script>

<style lang="stylus" scoped>
  .banner
   position: relative
   overflow: hidden
   height: 0
   padding-bottom: 55%
   img
    width: 100%
   .banner-info
     display: flex
     position: absolute
     left: 0
     right: 0
     bottom: 0
     line-height: .6rem
     justify-content: space-between
     color: white
     background-image: linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8))
     .banner-title
      text-align: flex-start
      font-size: .32rem
      padding: 0 .2rem
     .banner-num
      margin-top: .14rem
      padding:0 .4rem
      height: .32rem
      line-height: .32rem
      border-radius: .2rem
      font-size: .24rem
      background: rgba(0,0,0,.1)

</style>
