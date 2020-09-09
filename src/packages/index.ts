import { ComponentOptions } from 'vue'

import KButton from '/@packages/button/Button.vue'
import KHeader from '/@packages/header/Header.vue'
import KMenu from '/@packages/menu/Menu.vue'

const components: ComponentOptions[] = [
  KHeader,
  KMenu,
  KButton
]

// vue3.0的组件全局注册方法
const register = function (app: ComponentOptions) {
  components.forEach(component => {
    app.component(component.name, component)
  });
}


export default register

export {
  KButton,
  KHeader
}