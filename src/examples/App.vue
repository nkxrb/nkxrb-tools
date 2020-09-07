<template>
  <!-- 根据路由跳转 -->
  <k-button type="primary" @click="fnOne">主要按钮</k-button>
  <k-button type="default">默认按钮</k-button>
  <k-button type="link">链接按钮</k-button>
  <k-button type="text">文本按钮</k-button>
  <k-button type="dash">虚线按钮</k-button>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'app',
  setup () {
    const fnOne = (e) => {
      console.log(111)
    }

    return {
      fnOne
    }
  }
} 
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $k-theme-bg;
  background-color: $k-theme-color;
  min-height: 100vh;
}
</style>