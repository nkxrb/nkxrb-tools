<template>
  <!-- 通用导航头部 -->
  <k-header class="kv-header">
    <!-- logo -->
    <div class="logo">
      <img src="./assets/logo.png" />
    </div>
    <div class="right">
      <!-- 顶部导航 -->
      <k-nav :data="navList">
        <!-- 此处演示自定义导航插槽 -->
        <template v-slot="scope">
          <span>{{scope.item.name}}</span>
          <i class=""></i>
        </template>
      </k-nav>
      <!-- 换肤、语言选择 -->
      <div>
        <k-button type="text">语言</k-button>
        <k-button type="text">主题</k-button>
      </div>
    </div>

  </k-header>

  <!-- 路由对应的页面 -->
  <main>
    <router-view></router-view>
  </main>
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
        id: 2, name: '学习', path: '/doc', children: [
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
@import "./assets/css/reset.scss";
@import "./assets/css/textshadow.css";
@import "./assets/icon/icon.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
  background-color: #fff;
  min-height: 100vh;
  main {
    min-height: calc(100vh - 49px);

    // 解决子类第一个元素设置margin-top时 边距重叠问题
    box-sizing: border-box;
    padding: 1px;
  }
}
</style>

<style  lang="scss" scoped>
.kv-header {
  justify-content: space-between;
  .logo {
    width: 200px;
    height: 48px;
    display: flex;
    align-items: center;
    img {
      height: 24px;
    }
  }
  .right {
    display: flex;
    align-items: center;
  }
}
</style>