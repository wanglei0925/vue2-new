import Vue from 'vue'
import Router from 'vue-router'
import one from '@/components/one/one'
import two from '@/components/one/two'
import three from '@/components/one/three'
import detail from '@/components/one/detail'
import my from '@/components/one/my'
Vue.use(Router)
export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
  routes: [
    {
      path: '',
      redirect: '/one'
    }, {
      path: '/one',
      component: one
    }, {
      path: '/two',
      component: two
    }, {
      path: '/three',
      component: three
    }, {
      path: '/my',
      component: my
    }, {
      path: '/detail/:id',
      component: detail
    }
  ]
})
