<template>
  <section class="page">
    <div class="card profile" v-if="profile">
      <img :src="profile.avatar" alt="avatar" class="avatar" />
      <div>
        <h2>{{ profile.nickName }}</h2>
        <p class="sub">{{ profile.level }} · 邀请码 {{ profile.inviteCode }}</p>
      </div>
    </div>
    <div class="card">
      <p>累计收益 ￥{{ profile?.totalIncome }}</p>
      <p>团队人数 {{ profile?.followers }}</p>
    </div>
    <RouterLink class="card action" to="/wallet">💰 我的钱包</RouterLink>
    <RouterLink class="card action" to="/messages">🔔 消息中心</RouterLink>
    <RouterLink class="card action" to="/login">🔐 切换账号</RouterLink>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '../stores/user'

const store = useUserStore()
const { profile } = storeToRefs(store)
onMounted(store.fetchProfile)
</script>
