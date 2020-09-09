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
  background-color: #000;
  align-items: center;
  padding: 0 12px;
  height: 48px;
  box-shadow: 2px 1px 6px 0px #fff;
}
</style>
