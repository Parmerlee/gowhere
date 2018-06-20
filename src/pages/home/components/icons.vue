<template>
  <div class="icons">
    <swiper>
      <!--利用computed函数计算出需要循环的页码以及每个页码里包含的元素，从而控制页面的滑动；然后再具体取值具体展示-->
      <swiper-slide v-for="(page1,index) of pages" :key="index">
        <div class="icon" v-for="item of page1" :key="item.id">
          <div class="icon-img">
            <img class="img-icon-content" :src="item.imgUrl"/>
          </div>
          <p class="icon-desc">{{item.des}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import SwiperSlide from '../../../../node_modules/vue-awesome-swiper/src/slide'
export default{
  components: {SwiperSlide},
  name: 'HomeIcons',
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  },
  data () {
    return {
      iconList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        des: '热门景点1'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        des: '热门景点2'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        des: '热门景点3'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        des: '热门景点4'
      }, {
        id: '0005',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        des: '热门景点5'
      }, {
        id: '0006',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        des: '热门景点6'
      }, {
        id: '0007',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        des: '热门景点7'
      }, {
        id: '0008',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        des: '热门景点8'
      }, {
        id: '0009',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        des: '热门景点9'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>>.swiper-container
   height: 0
   padding-bottom:50%
   overflow: hidden
  .icons
    margin-top: .08rem
   .icon
    position: relative
    overflow: hidden
    float: left
    width: 25%
    height: 0
    padding-bottom: 25%
    .icon-img
     position:absolute
     top: 0
     left: 0
     right: 0
     bottom: 0
     box-sizing: border-box
     padding: .1rem
     .img-icon-content
      display: inline-block
      height 85%
      margin: 0 auto
    .icon-desc
     position: absolute
     margin-top 1.1rem
     left: 0
     right: 0
     bottom: 0
     height: .44rem
     line-height: .44rem
     text-align: center
     color: $textCol
     ellipse()

</style>
