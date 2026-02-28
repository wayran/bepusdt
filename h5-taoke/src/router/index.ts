import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../layouts/MainLayout.vue'),
      children: [
        { path: '', component: () => import('../views/HomeView.vue') },
        { path: 'coupons', component: () => import('../views/CouponView.vue') },
        { path: 'orders', component: () => import('../views/OrderView.vue') },
        { path: 'profile', component: () => import('../views/ProfileView.vue') }
      ]
    },
    { path: '/login', component: () => import('../views/LoginView.vue') },
    { path: '/goods/:id', component: () => import('../views/GoodsDetailView.vue') },
    { path: '/wallet', component: () => import('../views/WalletView.vue') },
    { path: '/withdraw', component: () => import('../views/WithdrawView.vue') },
    { path: '/messages', component: () => import('../views/MessageView.vue') }
  ]
})

export default router
