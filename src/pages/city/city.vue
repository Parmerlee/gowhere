<template>
  <div>
    <city-header></city-header>
    <city-search :cities = 'cities'></city-search>
    <city-list :city = 'cities' :hot = 'hotcities' :alpha = 'alpha'></city-list>
    <city-alpha :city = 'cities'
    @alpha = 'alphaClick'></city-alpha>
  </div>

</template>

<script>
import axios from 'Axios'
import CityHeader from './components/head.vue'
import CitySearch from './components/search'
import CityList from './components/list'
import CityAlpha from './components/alphabet'
export default {
  name: 'City',
  components: {
    CityHeader: CityHeader,
    CitySearch: CitySearch,
    CityList: CityList,
    CityAlpha: CityAlpha
  },
  mounted () {
    this.getCityInfo()
  },
  methods: {
    getCityInfo () {
      axios.get('/static/mock/city.json')
        .then(this.handleDataSucc)
    },
    handleDataSucc (res) {
      console.log(res)
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotcities = data.hotCities
      }
    },
    alphaClick (res) {
      this.alpha = res
    }
  },
  data () {
    return {
      cities: {},
      hotcities: [],
      alpha: ''
    }
  }
}
</script>

<style>

</style>
