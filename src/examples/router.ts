import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

// 定义懒加载函数
const view = (name: string) => import(/* webpackChunkName: "views" */ `./${name}.vue`)

// 自定义页面路由
const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: import(/* webpackChunkName: "views" */ `./home/index.vue`) }, // 首页
  {                                                               // 组件
    path: '/components', name: 'components', component: view('components/index'), children: [
      { path: '/button', name: 'button', component: view('components/button/index') }, // 按钮
      { path: '/nav', name: 'nav', component: view('components/nav/index') }, // 导航
      { path: '/modal', name: 'modal', component: view('components/modal/index') }, // 模态框
    ]
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
