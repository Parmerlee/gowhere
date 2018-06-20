<template>
  <div>
    <div class="recommond-title">热销推荐</div>
    <ul>
      <li class="item">
        <div class="item-img">
          <img src="http://img1.qunarzz.com/sight/p0/1603/b1/b1da46b5326eb99e90.water.jpg_200x200_2f0a2f3f.jpg"/>
        </div>
        <p>武汉欢乐谷</p>
        <p>武汉欢乐谷真好玩</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default{
  name: 'HomeRecommend'
}
</script>

<style lang="stylus" scoped>
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

</style>
