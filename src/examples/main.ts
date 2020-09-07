import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/**导入全局初始化样式 */
import "/@packages/theme.scss";
import "/@packages/base.scss";

// 全局引入kview-ui 组件库
import KViewUI from '../packages'

const app = createApp(App)

KViewUI(app)

app.use(router).mount('#app');