<template>
  <ul class="list">
    <li class="item" v-for="(item,key) in city"
    @click = "clickListener">{{key}}</li>
  </ul>
</template>

<script>
export default {
  name: 'alphabet',
  props: {
    city: {}
  },
  data () {
    return {
    }
  },
  methods: {
    clickListener (e) {
      this.$emit('alpha', e.target.innerText)
    }
  }
}

</script>

<style lang="stylus" scoped>
  .list
   display: flex
   flex-direction: column
   justify-content: center
   position: absolute
   top: 1.88rem
   right: 0
   width: .4rem
   bottom: 0
   .item
    line-height: .4rem

</style>
