import { ComponentOptions } from 'vue'

import Button from '/@packages/button/button.vue'
import Header from '/@packages/header/header.vue'
import Nav from '/@packages/nav/nav.vue'

const components: ComponentOptions[] = [
  Header,
  Nav,
  Button
]

// vue3.0的组件全局注册方法
const register = function (app: ComponentOptions) {
  components.forEach(component => {
    app.component(component.name, component)
  });
}


export default register

export {
  Header,
  Nav,
  Button
}