<template>
  <div class="components">
    <div class="left">
      <k-nav-tree></k-nav-tree>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.compnents {
  display: flex;
  .left {
    width: 200px;
  }
  .right {
    width: calc(100% - 200px);
  }
}
</style>