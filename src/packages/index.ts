import { ComponentOptions } from 'vue'

import KButton from '/@packages/button/button.vue'

const components: ComponentOptions[] = [
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
  KButton
}