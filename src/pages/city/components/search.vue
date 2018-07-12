<template>
  <div class="search">
    <input class="searchInput" type="text" placeholder="输入城市名称或拼音"/>
  </div>
</template>

<script>
export default {
  name: 'CitySearch',
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
  .search
   height: .72rem
   padding: .1rem
   background: $bgCol
   .searchInput
    margin-top: 0.1rem
    box-sizing: border-box
    height: .62rem
    line-height: .62rem
    padding-right: 0.1rem
    width: 100%
    text-align: center
    border-radius: .05rem
    color: #666
</style>
