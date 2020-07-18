<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name:'app',
  components:{

  },
  data() {
    return {
      res:{}
    }
  },
  mounted() {
    //1.public下面的mock json public是根目录
    // 1.本地加载请求静态json文件形式
    // this.axios.get('/mock/user/login.json').then(res => {
    //   this.res = res
    // })
    // 2.easymock模拟接口
    this.axios.get('/user/login').then(res => {
      this.res = res
    })
    // 3.本地集成mock.js实现数据mock
  }
}
</script>

<style lang="scss">

</style>
