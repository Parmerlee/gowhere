<template>
  <div class="container" @click = 'handleClick'>
    <div class="wapper">
      <swiper :options = "swiperOptions">
        <!-- slides -->
        <swiper-slide v-for="(item,index) in imags"
          :key = "index">
          <img  class="gallary-img" :src="item" />
        </swiper-slide>

        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>

      </swiper>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CommonGallary',
  props: {
    imags: {
      type: Array
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    handleClick () {
      this.$emit('close')
    }
  }
}

</script>

<style lang="stylus" scoped>
  .container >>>.swiper-pagination
    overflow: inherit
  .container
   background: black
   display: flex
   z-index: 99
   position: fixed
   left: 0
   right: 0
   top: 0
   bottom: 0
   justify-content: center
   flex-direction: column
   .wapper
    width: 100%
    height: 0
    padding-bottom: 100%
    .gallary-img
     width: 100%
    .swiper-pagination
     color: white
     bottom: -1rem

</style>
