<template>
  <div class="home">
    <!-- logo -->
    <div class="logo">
      <span>KVIEW</span>
    </div>

    <!-- 特性概括 -->
    <div class="feature">
      <h1>简洁、高效</h1>
    </div>

    <!-- start -->
    <div class="start">
      <button>开始</button>
      <button>GITEE</button>
      <button>
        <div class="icon-github"></div>
      </button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.icon-github1 {
  content: url("../assets/icon/github.svg");
  width: 16px;
  height: 16px;
  // background-image: url("../assets/advert.png");
  color: red;
}
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  .logo {
    font-size: 80px;
  }
}
</style>