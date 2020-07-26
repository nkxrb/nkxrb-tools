<template>
  <button class="bud-button">
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  name: 'budButton',
  props: {

  }
}
</script>