/**
 * Created by Administrator on 2018/8/28.
 */
export default {
  click (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
  }
}
