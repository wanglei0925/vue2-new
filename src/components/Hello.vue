<template>
  <div class="header">
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
            name: '商品',
            label: '/one'
          },
          {
            name: '评论',
            label: '/two'
          },
          {
            name: '商家',
            label: '/three'
          }]
      }
    }
  }
</script>

<style lang="less" scoped>
  @import  './../assets/css/base.less';
  .header{
    overflow: hidden;
    width:100%;
    background: #ddd;
    position: fixed;
    top:0;
    left:0;
    z-index: 33;
    font-size:40/@rem;
    height: 80/@rem;
  }
  .nav{
    list-style: none;
    margin: 0;
    display: flex;
    padding:0;
    height: 80/@rem;
    line-height: 80/@rem;
    border-bottom: 1px solid #ddd;
    li{
      width: 33.3333333333333333333%;
      text-align: center;
      a{
        color:#333;
        text-decoration: none;
      }
    }
  }
  .active{
    a{
      color: red!important;
    }
  }
</style>
