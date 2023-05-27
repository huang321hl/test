import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '../layout/index.vue'

/** 常驻路由 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/login.vue'),
    // redirect: '/dashboard',
    meta: {
      title: 'login',
      icon: ''
    }
  },
  {
    path: '/',
    redirect: '/dashboard',
    meta: {
      title: 'dashboard',
      icon: ''
    }
  },
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'home',
      icon: ''
    },
    component: Layout,
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        meta: {
          title: '系统首页',
          icon: ''
        },
        component: () => import(/* webpackChunkName: "dashboard" */ '../views/dashboard.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
})

router.beforeEach((to, from, next) => {
  // document.title = `${to.meta.title} | vue-manage-system`;
  const role = localStorage.getItem('ms_username')
  console.log(role)
  if (!role && to.path !== '/login') {
    next('/login')
  }
  // else if (to.meta.permission) {
  //     // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
  //     role === 'admin'
  //         ? next()
  //         : next('/403');
  // }
  else {
    next()
  }
})

export default router
