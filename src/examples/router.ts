import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import Home from './Home.vue'

// 定义懒加载函数
const view = (name: string) => import(/* webpackChunkName: "views" */ `./${name}.vue`)

// 自定义页面路由
const routes: RouteRecordRaw[] = [
  { path: '/home', name: 'home', component: Home }, // 首页
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
