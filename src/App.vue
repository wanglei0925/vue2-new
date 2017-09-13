<template>
  <div id="app">
    <loading v-show="loadh"></loading>
    <v-header v-show="showh"></v-header>
    <transition name="slide-down">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>

    <v-footer v-show="showf"></v-footer>
  </div>
</template>

<script>
  import header from './components/Hello.vue'
  import foot from './components/Footer'
  import loading from './components/loading/Loading.vue'
  import {mapGetters} from 'vuex'
  export default{
    props: {},
    data () {
      return {}
    },
    computed: mapGetters([
      'showh',
      'loadh',
      'showf'
    ]),
    watch: {
      $route (to, from) {
        if (to.path === '/my' || to.path.indexOf('detail') !== -1) {
          this.$store.dispatch('hideHeader')
        } else {
          this.$store.dispatch('showHeader')
        }
        if (to.path.indexOf('detail') === -1) {
          this.$store.dispatch('showFooter')
        } else {
          this.$store.dispatch('hideFooter')
        }
      }
    },
    components: {
      'v-header': header,
      'v-footer': foot,
      loading
    }
  }
</script>

<style lang="less" scoped>
  @import './assets/css/base.less';

  #app {
  }

  .slide-down-enter-active, .slide-down-leave {
    transition: all 0.5s ease;
    opacity: 0.7;
    transform: translate3d(0,100/@rem, 0);
  }

  .slide-down-enter {
    opacity: 1;
    transform: translate3d(0,0/@rem, 0);
  }
</style>
