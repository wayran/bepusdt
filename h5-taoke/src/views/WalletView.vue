<template>
  <section class="page">
    <div class="card">
      <h2>钱包中心</h2>
      <p>可提现余额：￥{{ wallet?.availableBalance }}</p>
      <p class="sub">冻结金额：￥{{ wallet?.frozenBalance }}</p>
      <RouterLink class="btn" to="/withdraw">立即提现</RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getWallet } from '../api/modules/user'

const wallet = ref<any>()
onMounted(async () => {
  wallet.value = (await getWallet()).data
})
</script>
