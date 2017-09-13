<template>
  <div class="footer">
    <ul class="nav">
      <li v-for="(val,index) in liData" :class="{active:$route.path===val.label}">
        <router-link :to="val.label">{{val.name}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    data () {
      return {
        liData: [
          {
            name: '首页',
            label: '/one'
          },
          {
            name: '我的',
            label: '/my'
          }]
      }
    }
  }
</script>

<style lang="less" scoped>
  @rem:46.875rem;
  .footer{
    position: fixed;
    bottom:0;
    left:0;
    width:100%;
    font-size:40/@rem;
    height: 80/@rem;
    background: #ddd;
  }
  .nav{
    list-style: none;
    margin: 0;
    display: flex;
    padding:0;
    height: 80/@rem;
    line-height: 80/@rem;
    li{
      width: 50%;
      text-align: center;
      a{
        font-size:32/@rem;
        text-decoration: none;
      }
    }
  }
  .active{
    a{
      color: red;
    }
  }
</style>
