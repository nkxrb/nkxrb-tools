<template>
  <header class="k-header">
    <slot></slot>
  </header>
</template>
<script>
export default {
  name: 'kHeader'
}
</script>
<style lang="scss" scoped>
.k-header {
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 0 24px;
  height: 48px;
  // border-bottom: 1px solid #d9d9d9;
  box-shadow: 2px 1px 6px 0px #666;
}
@media screen and (max-width: 786px) {
  .k-header {
    padding: 0 12px;
  }
}
</style>
