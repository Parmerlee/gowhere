<template>
  <ul class="list">
    <li class = "item" v-for="item in letters" :key="item"
        :ref="item"
    @click = "clickListener"
    @touchstart = 'touchstart'
    @touchmove = 'touchmove'
    @touchend = 'touchend'
    >{{item}}</li>
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
      state: false,
      startY: 0,
      timer: null
    }
  },
  methods: {
    clickListener (e) {
      this.$emit('alpha', e.target.innerText)
    },
    touchstart (e) {
      this.state = true
    },
    touchmove (e) {
      if (this.state) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 74
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('alpha', this.letters[index])
          }
        }, 16)
      }
    },
    touchend (e) {
      this.state = false
    }
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.city) {
        letters.push(i)
      }
      return letters
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
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
