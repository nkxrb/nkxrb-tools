<template>
  <!-- 通用导航头部 -->
  <k-header>
    <!-- logo -->
    <div class="logo">
      <img src="./assets/logo.png" />
    </div>

    <!-- 顶部导航 -->
    <k-nav :data="navList">
      <!-- 此处演示自定义导航插槽 -->
      <template v-slot="scope">
        <span>{{scope.item.name}}</span>
      </template>
    </k-nav>

    <!-- 换肤、语言选择 -->

  </k-header>

  <!-- 路由对应的页面 -->
  <router-view></router-view>
</template>

<script>
export default {
  name: 'app',
  setup () {
    const fnOne = (e) => {
      console.log(111)
    }
    const navList = [
      { id: 1, name: '首页', path: '/' },
      {
        id: 2, name: '文档', path: '/doc', children: [
          { id: 21, name: '指南' }
        ]
      },
      {
        id: 3, name: '组件', path: '/components', children: [
          { id: 31, name: '按钮', path: '/button' },
          { id: 32, name: '头部', path: '/header' },
          { id: 33, name: '菜单', path: '/nav' }
        ]
      }
    ]

    return {
      fnOne,
      navList
    }
  }
} 
</script>

<style lang="scss">
@import "./assets/icon/icon.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background-color: #000;
  min-height: 100vh;

  .logo {
    width: 200px;
    height: 48px;
    display: flex;
    align-items: center;
    img {
      height: 24px;
    }
  }
}
</style>