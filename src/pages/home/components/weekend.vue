<template>
  <div>
    <div class="recommond-title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for=" item of weekendList " :key="item.id">
        <div class="item-img-wapper">
          <img class="item-img" :src="item.imgUrl"/>
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default{
  name: 'HomeWeekend',
  props: {
    weekendList: {}
  },
  data () {
    return {
      weekendList1: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1507/e0/4aae49007c8a64.jpg_r_640x214_65a42783.jpg',
        titie: '标题1',
        desc: '详细描述1'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1507/e0/4aae49007c8a64.jpg_r_640x214_65a42783.jpg',
        titie: '标题2',
        desc: '详细描述2'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1507/e0/4aae49007c8a64.jpg_r_640x214_65a42783.jpg',
        titie: '标题3',
        desc: '详细描述32222222222'
      }]

    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'

  .recommond-title
    line-height: .8rem
    background: #eee
    text-indent: .2rem
    text-align: start
    font-size 20px
  .item-img-wapper
   overflow: hidden
   height: 0
   padding-bottom: 38.09%
   margin: .1rem
   .item-img
      width: 100%
 .item-info
  padding: .1rem
  margin-top: -.2rem
  .item-title
    line-height: .54rem
    font-size: .32rem
    text-align: start
    ellipse()
  .item-desc
    line-height: .28rem
    color: blue
    text-align: start
    ellipse()

</style>
