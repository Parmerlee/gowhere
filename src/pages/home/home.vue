<template>
  <div>
    <home-header :city = 'city'></home-header>
    <home-swiper :list = 'swiperList'></home-swiper>
    <home-icons v-if="true" :iconList = 'iconList'></home-icons>
    <home-recommend  :recommendList="recommendList"></home-recommend>
    <home-weekend v-if="true" :weekendList ='weekendList'></home-weekend>
    <!--<router-link to citylist" class="hocitylist</router-link>-->
  </div>
</template>

<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/swiper'
import HomeIcons from './components/icons'
import HomeRecommend from './components/recommend'
import HomeWeekend from './components/weekend'
import axios from 'Axios'
export default {

  name: 'Home',
  components: {
    HomeWeekend,
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend
  },
  data () {
    return {
      city: '',
      swiperList: Array,
      iconList: Array,
      recommendList: Array,
      weekendList: Array
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/static/mock/index.json')
        .then(this.getHomeSucc)
    },
    getHomeSucc (res) {
      res = res.data
      console.log(res)

      if (res.ret && res.data) {
        this.city = res.data.city
        this.swiperList = res.data.swiperList
        this.iconList = res.data.iconList
        this.recommendList = res.data.recommendList
        this.weekendList = res.data.weekendList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style>

</style>
