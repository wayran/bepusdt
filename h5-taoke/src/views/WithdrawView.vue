<template>
  <section class="page">
    <div class="card">
      <h2>提现申请</h2>
      <input class="input" v-model.number="form.amount" placeholder="提现金额" />
      <input class="input" v-model="form.accountName" placeholder="账户姓名" />
      <input class="input" v-model="form.accountNo" placeholder="账户号码" />
      <button class="btn full" @click="submit">提交</button>
      <p class="sub" v-if="result">申请已提交：{{ result.withdrawId }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { withdraw } from '../api/modules/user'

const form = ref({ amount: 200, accountType: 'alipay' as const, accountNo: '188****1234', accountName: '张三' })
const result = ref<any>()
const submit = async () => {
  result.value = (await withdraw(form.value)).data
}
</script>
