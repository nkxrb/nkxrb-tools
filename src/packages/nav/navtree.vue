<template>
  <nav>
    <ul class="k-nav">
      <li v-for="item in data"
          :class="{'cur': clickItem == item[key]}"
          :key="item[key]"
          @click="mouseclick(item[key])"
          @mouseover="mouseover(item[key])"
          @mouseleave="mouseleave(item[key])">
        <!-- 导航链接 -->
        <router-link :to="item.path">
          <!-- 插槽 -->
          <slot v-if="$slots.default"
                :item="item"></slot>
          <span v-else>{{item.name}}</span>

          <!-- 若存在子类 -->
          <nav v-if="item.children && item.children.length>0 && hoverItem == item[key]"
               class="k-nav-item">
            <ul>
              <li v-for="child in item.children"
                  :key="child[key]">
                <router-link :to="child.path || '/#'">
                  <!-- 插槽 -->
                  <slot v-if="$slots.default"
                        :item="child"></slot>
                  <span v-else>{{child.name}}</span>
                </router-link>
              </li>
            </ul>
          </nav>
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<script lang="ts">
import { ref, Ref } from "vue";

export default {
  name: "kNavTree",
  props: {
    data: {
      type: Array,
      default: () => {
        return [];
      },
    },
    key: { type: String, default: "id" },
    children: { type: String, default: "children" },
  },
  setup(props, ctx) {
    // 当前选中的导航
    let curNavItem: Ref<any> = ref("");

    // 鼠标点击事件
    const mouseclickState = mouseclickEvent();

    // 鼠标悬浮事件
    const mouseoverState = mouseoverEvent();

    return {
      curNavItem,
      ...mouseclickState,
      ...mouseoverState,
    };
  },
};

// 鼠标点击事件
const mouseclickEvent = () => {
  let clickItem: Ref<any> = ref("");
  const mouseclick = (itemId: any) => {
    clickItem.value = itemId;
  };
  return {
    clickItem,
    mouseclick,
  };
};

// 鼠标悬浮事件
const mouseoverEvent = () => {
  // 鼠标悬停的导航
  let hoverItem: Ref<any> = ref("");

  const mouseover = (itemId: any) => {
    hoverItem.value = itemId;
  };
  const mouseleave = (itemId: any) => {
    hoverItem.value = "";
  };
  return {
    hoverItem,
    mouseover,
    mouseleave,
  };
};
</script>
<style lang="scss" scoped>
@import "./navtree.scss";
</style> 