/**
 * Created by Administrator on 2018/8/28.
 */
let  defaultcity = '武汉'
try {
  if (localStorage.city){
    defaultcity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultcity
}
