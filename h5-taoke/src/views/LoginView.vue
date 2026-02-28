<template>
  <section class="page center">
    <div class="card">
      <h2>登录淘客联盟</h2>
      <input class="input" v-model="phone" placeholder="手机号" />
      <input class="input" v-model="captcha" placeholder="验证码（模拟）" />
      <button class="btn full" @click="handle">登录</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/user'

const phone = ref('13800138000')
const captcha = ref('123456')
const userStore = useUserStore()
const router = useRouter()

const handle = async () => {
  await userStore.handleLogin(phone.value, captcha.value)
  await userStore.fetchProfile()
  router.push('/')
}
</script>
