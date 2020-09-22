<template>
  <div class="home">
    <!-- logo -->
    <div class="logo">
      <span class="color-logo text-outline">KVIEW</span>
    </div>

    <!-- 特性概括 -->
    <div class="feature">
      <span style="color: #ff9b00;">简洁</span>
      <span> | </span>
      <span style="color: #b7f557;">高效</span>
    </div>

    <!-- start -->
    <div class="start">
      <k-button type="text">开始-></k-button>
      <k-button type="text">
        <div class="icon-gitee"></div>
        <div class="">GITEE</div>
      </k-button>
      <k-button type="text">
        <div class="icon-github"></div>
        <div>GITHUB</div>
      </k-button>
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
  height: 100%;
  .logo {
    margin: 15vh 20px 30px;
    font-size: 8rem;
  }
  .color-logo {
    color: #000;
  }
  .feature {
    font-size: 30px;
    margin: 25px;
  }
  .start {
    display: flex;
    justify-content: center;
    button {
      margin: 15px;
      div {
        height: 32px;
        display: inline-block;
        line-height: 32px;
        margin: 0 6px;
        color: #333;
      }
    }
  }
}
</style>