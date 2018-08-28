<template>
  <div>
  <div class="search">
    <input v-model="keyword" class="searchInput" type="text" placeholder="输入城市名称或拼音"/>
  </div>
    <div class="search-conent" ref="search"
    v-show="keyword">
      <ul>
        <li class="search-item border-bottom"
          v-for='item of list' :key='item.id'
            @click="clickhot(item.name)" >
          {{item.name}}
        </li>
        <li class="search-item border-bottom" v-show="!list.length" >没有匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import {mapMutations} from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  methods: {
    clickhot (city) {
      this.click(city)
      this.$router.push('/')
    },
    ...mapMutations(['click'])
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
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
 .search-conent
  overflow: hidden
  position: absolute
  top: 1.80rem
  left: 0
  right: 0
  bottom: 0
  z-index: 1
  background-color: #eeeeee
  .search-item
   line-height: .62rem
   padding-left: .2rem
   background: #fff
   color: #666
</style>
