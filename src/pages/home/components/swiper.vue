<template>
  <div class="wapper">
    <swiper :options="swiperOption" v-if= 'isShow' >
      <!-- slides -->
     <swiper-slide v-for="item of list" :key="item.id">
       <img  class="swiper-img" :src="item.imgUrl" />
     </swiper-slide>

     <!-- Optional controls -->
     <div class="swiper-pagination" slot="pagination"></div>

    </swiper>
  </div>
</template>
<script>
export default{
  name: 'HomeSwiper',
  props: {
    list: {}
  },
  computed: {
    isShow () {
      return this.list.length
    }
  },
  data () {
    return {
      // 有疑问
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      imageList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1805/3b/ef86879aa50e3002.jpg_750x200_2a108508.jpg'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1805/e5/59fad13a64807d02.jpg_750x200_713ae984.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wapper >>>.swiper-pagination-bullet.swiper-pagination-bullet-active
    background:#ffffff
  .wapper >>>.swiper-pagination-bullet
    background:red
  .wapper
    overflow:hidden
    width:100%
    height:0
    padding-bottom:31.25%
    background: #eee
    .swiper-img
     width 100%

</style>
