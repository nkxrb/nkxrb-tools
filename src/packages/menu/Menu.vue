<template>
  <div class="k-menu">
    <ul>
      <li v-for="item in data" :key="item[key]" @mouseover="mouseover" @mouseleave="mouseleave">
        <!-- 菜单链接 -->
        <router-link :to="item.path">
          <!-- 插槽 -->
          <slot v-if="$slots.default" :slot-scope="item"></slot>
          <span v-else>{{item.name}}</span>

          <!-- 若存在子类 -->
          <div class="k-menu-item" v-if="item.children && item.children.length>0 && isShowChildren">
            <ul>
              <li v-for="child in item.children" :key="child[key]">
                <router-link :to="child.path">
                  <!-- 插槽 -->
                  <slot v-if="$slots.default" :slot-scope="child"></slot>
                  <span v-else>{{child.name}}</span>
                </router-link>
              </li>
            </ul>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { ref, Ref } from "vue";
export default {
  name: "kMenu",
  props: {
    data: {
      type: Object,
      default: () => {
        return {};
      },
    },
    key: { type: String, default: "id" },
    children: { type: String, default: "children" },
  },
  setup(props) {
    let isShowChildren: Ref<Boolean> = ref(false);
    const mouseover = () => {
      isShowChildren.value = true;
    };
    const mouseleave = () => {
      isShowChildren.value = false;
    };

    return {
      isShowChildren,
      mouseover,
      mouseleave,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "./menu.scss";
</style>