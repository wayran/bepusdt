<template>
  <section class="page">
    <div class="card">
      <h2>订单中心</h2>
      <div class="chips">
        <button v-for="s in statuses" :key="s.value" class="chip" @click="query(s.value)">{{ s.label }}</button>
      </div>
    </div>
    <div class="card" v-for="item in list" :key="item.id">
      <p>{{ item.goodsTitle }}</p>
      <p class="sub">订单金额￥{{ item.orderAmount }} · 预估佣金￥{{ item.estimatedCommission }}</p>
      <p class="sub">状态：{{ item.status }} · {{ item.createTime }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getOrderList } from '../api/modules/order'
import type { OrderItem } from '../api/types'

const statuses = [
  { value: '', label: '全部' },
  { value: 'pending', label: '付款中' },
  { value: 'paid', label: '已付款' },
  { value: 'settled', label: '已结算' }
]

const list = ref<OrderItem[]>([])
const query = async (status?: string) => {
  list.value = (await getOrderList(status)).data.list
}
onMounted(() => query())
</script>
