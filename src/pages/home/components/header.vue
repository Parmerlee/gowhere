<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont back-icon">&#xe632;</span>
      输入城市/游玩/主题景点</div>
    <router-link to ='/city'>
      <div class="header-right">{{city}}
        <span class="iconfont back-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
 @import '~styles/varibles.styl'
  .header
    display: flex
    line-height: $headerHeight
    background:$bgCol
    color:#fff
    .header-left
      width: .64rem
      float: left
      .back-icon
       text-align:center
       font-size:.4rem
    .header-input
      height:.64rem
      line-height:.64rem
      margin-top:.12rem
      margin-left:.2rem
      background:#ffffff
      -webkit-border-radius: .1rem
      -moz-border-radius: .1rem
      border-radius: .1rem
      flex: 1
      color: #cccccc
      text-align:start
      padding-left:.1rem
    .header-right
      width: 1.24rem
      float: right
      text-align:center
      color: #ffffff
      .back-icon
        padding-left:-0.2rem
        font-size:0.24rem

</style>
