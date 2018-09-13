import Vue from 'vue'
import Router from 'vue-router'
import Detail from '@/pages/detail/Detail'
import Home from '@/pages/home/home'
import City from '@/pages/city/City'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/city',
      name: 'City',
      component: City
    }, {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    }
  ]
})
