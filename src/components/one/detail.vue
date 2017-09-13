<template>
  <div class="aa">
    <div onclick="window.history.go(-1)">
      <<<<<
    </div>
    <div class="title">
      {{article.title}}

    </div>
    <div class="time">
      {{article.time | formatdate}}
    </div>

  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        article: {}
      }
    },
    mounted () {
//      var reg = /\/detail\/(\d+)/
//      var id = this.$route.path.match(reg)[1] - 1
//      console.log(this.$route.path)
//      this.fetdata(id)
    },
    activated () {
      var reg = /\/detail\/(\d+)/
      var id = this.$route.path.match(reg)[1] - 1
      console.log(this.$route.path)
      this.fetdata(id)
    },
    methods: {
      fetdata (id) {
        var _this = this
        var tim = new Date().getTime()
        this.$http.get('../../../static/data/article.data?' + tim).then(function (res) {
          _this.article = res.data[id]
        }).catch(function (err) {
          console.log(err)
        })
      }
    }
//    props: {
//      id: {
//      }
//    }
  }
</script>

<style lang="less" scoped>
  @import '../../assets/css/base.less';

  .aa {
    max-height: 100000/@rem;
    margin-top: 80/@rem;
    padding: 0 30/@rem 80/@rem;
    font-size: 30/@rem;
    line-height: 50/@rem;
    .title{
      width:100%;
      text-align: center;
      font-size: 40/@rem;
    }
    .time{
      height: 50/@rem;
      margin-top: 40/@rem;
      line-height: 50/@rem;
    }
  }
</style>
