<template>
  <nav class="tabbar">
    <RouterLink v-for="tab in tabs" :key="tab.to" :to="tab.to" class="tab" active-class="active">
      <span>{{ tab.icon }}</span>
      <p>{{ tab.label }}</p>
    </RouterLink>
  </nav>
</template>

<script setup lang="ts">
const tabs = [
  { to: '/', label: '首页', icon: '🏠' },
  { to: '/coupons', label: '领券', icon: '🎟️' },
  { to: '/orders', label: '订单', icon: '🧾' },
  { to: '/profile', label: '我的', icon: '👤' }
]
</script>
