<template>
  <!-- 根据路由跳转 -->
  <k-header>
    <div style="width: 200px; height: 48px;line-height:48px;">
      <img style="height: 80%" src="./assets/logo.png" />
    </div>
    <k-menu :data="menuList"></k-menu>
  </k-header>
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
    const menuList = [
      { id: 1, name: '首页', path: '/home' },
      {
        id: 2, name: '组件', path: '/components', children: [
          { id: 21, name: '按钮', path: '/button' },
          { id: 22, name: '头部', path: '/header' },
          { id: 23, name: '菜单', path: '/menu' }
        ]
      }
    ]

    return {
      fnOne,
      menuList
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
  color: #fff;
  background-color: #333;
  min-height: 100vh;

  .logo {
    width: 200px;
    height: 48px;
    img {
      height: 100%;
    }
  }
}
</style>