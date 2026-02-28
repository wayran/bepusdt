import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getProfile, login } from '../api/modules/user'

export const useUserStore = defineStore('user', () => {
  const token = ref('')
  const profile = ref<any>(null)

  const handleLogin = async (phone: string, captcha: string) => {
    const res = await login({ phone, captcha })
    token.value = res.data.token
  }

  const fetchProfile = async () => {
    const res = await getProfile()
    profile.value = res.data
  }

  return { token, profile, handleLogin, fetchProfile }
})
