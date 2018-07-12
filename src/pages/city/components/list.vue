<template>
  <div class="list" ref="wapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="botton-list">
          <div class="botton-wapper">
            <div class="botton">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="botton-list">
          <div class="botton-wapper" v-for="item in hot" :key="item.id">
            <div class="botton">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item,key) in city" :key = 'key'
      :ref = "key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list" v-for="inner in item" :key="inner.id">
          <div class="item border-topbottom">{{inner.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'list',
  props: {
    hot: Array,
    city: {},
    alpha: String
  },
  data () {
    return {}
  },
  methods: {},
  mounted () {
    this.scroll = new BScroll(this.$refs.wapper)
    console.log('aaa' + this.city)
  },
  watch: {
    alpha () {
      if (this.alpha){
        const ele=this.$refs[this.alpha][0]
        this.scroll.scrollToElement(ele)
      }
    }
  }
}

</script>

<style lang="stylus" scoped>
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc

  .border-bottom
    &:before
      border-color: #ccc

  .list
    overflow: hidden
    position: absolute
    top: 1.8rem
    left: 0
    bottom: 0
    right: 0
    .title
      line-height: .54rem
      background: #eee
      padding-left: .2rem
      color: #666
      font-size: .26rem
    .botton-list
      overflow: hidden
      padding: .1rem
      .botton-wapper
        flex: auto
        width: 33.33%
        box-sizing: border-box
        .botton
          margin: .1rem
          padding: .1rem 0
          border: .02rem solid #ccc
          border-radius: .1rem
    .item-list
      .item
        text-align: start
        line-height: .76rem
        padding-left: .2rem

</style>
