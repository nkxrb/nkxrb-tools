<template>
  <button :class="classes">
    <i v-if="icon"
       :class="`k-icon ${icon}`"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>
<script lang="ts">
export default {
  name: "KButton",
  props: {
    type: { type: String, default: "default" },
    icon: { type: String },
    status: { type: String },
  },
  setup(props, { attrs, emit, slots }) {
    // 选择性绑定class
    const classes = {
      [`k-button-${props.type}`]: props.type,
      [`k-button-${props.status}`]: props.status,
    };

    return { props, classes };
  },
};
</script>
<style lang="scss">
@import "./button.scss";
</style>