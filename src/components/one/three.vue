<template>
  <div class="aa">
    <div class="font">
      我是第三个页面
    </div>
    <ul>
      <li v-for="(index,item) in arrlist">
        <div v-if="index.username" class="username">
          {{index.username}}
        </div>
        <div v-if="index.rateTime"  class="time">
          {{index.rateTime}}
        </div>
        <div v-if="index.text" class="text">
          {{index.text}}
        </div>
      </li>
    </ul>



  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    data () {
      return {
        arrlist: []
      }
    },
    mounted () {
//        获取数据
      this.fetdata()
    },
    methods: {
      fetdata () {
        var _this = this
        this.$http.get('../../../static/data/data.json').then(function (res) {
          _this.arrlist = res.data.ratings
          console.log(res.data.ratings)
        }).catch(function (err) {
          console.log(err)
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  @import '../../assets/css/base.less';
  .font{
    font-size:36/@rem;
    line-height: 50/@rem;
  }
  .aa {
    max-height: 100000/@rem;
    margin-top: 80/@rem;
    padding-bottom: 80/@rem;
    font-size: 100/@rem;
    ul{
      margin:0;
      padding:20/@rem 20/@rem 0;
      list-style: none;
      box-sizing: border-box;
      width:100%;
      li{
        padding:20/@rem;
        box-sizing: border-box;
        background: #16e3da;
        margin-bottom: 20/@rem;
        box-sizing: border-box;
      }
    }
  }
  .time{
    font-size:30/@rem;
  }
  .text{
    font-size:30/@rem;
    line-height: 50/@rem;
  }
  .username{
    font-size:32/@rem;
    line-height: 50/@rem;
  }
</style>
