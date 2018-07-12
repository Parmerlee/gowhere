<template>
  <div class="header"> 城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader',
  props: {

  },
  data () {
    return {
    }
  },
  methods: {
  }
}

</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .header
   position: relative
   overflow: hidden
   height: .86rem
   line-height: $headerHeight
   text-align: center
   background: $bgCol
   font-size: .36rem
   color: white
   .header-back
     position: absolute
     top: 0
     left: 0.1rem
     text-align:center
     font-size:.4rem
     color: white
</style>
