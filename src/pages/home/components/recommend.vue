<template>
  <div>
    <div class="recommond-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for=" item of recommendList " :key="item.id">
          <img class="item-img" :src="item.imgUrl"/>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-btn">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default{
  name: 'HomeRecommend',
  props: {
    recommendList: Array
  },
  data () {
    return {
      recommendList1: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/b1/b1da46b5326eb99e90.water.jpg_200x200_2f0a2f3f.jpg',
        titie: '标题1',
        desc: '详细描述1'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/b1/b1da46b5326eb99e90.water.jpg_200x200_2f0a2f3f.jpg',
        titie: '标题2',
        desc: '详细描述2'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/b1/b1da46b5326eb99e90.water.jpg_200x200_2f0a2f3f.jpg',
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
    margin-top: .2rem
    text-indent: .2rem
    text-align: start
    font-size 20px
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      height: 1.7rem
      width: 1.7rem
      padding: .1rem
    .item-info
     flex: 1
     padding: .1rem
     min-width: 0
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
     .item-btn
      line-height: .14rem
      margin-top: .16rem
      background: #ff9300
      padding: .2rem
      border-radius: .2rem
      color: #fff
      text-align: start
      float: left

</style>
