<template>
  <section class="page" v-if="detail">
    <img :src="detail.image" class="detail-cover" alt="" />
    <div class="card">
      <h2>{{ detail.title }}</h2>
      <p class="sub">店铺：{{ detail.shopName }}</p>
      <p>券后价 ￥{{ detail.finalPrice }} （券{{ detail.couponAmount }}）</p>
      <p class="sub">推广链接：{{ detail.promotionLink }}</p>
      <button class="btn full" @click="createPoster">生成分享海报</button>
      <p class="sub" v-if="posterUrl">海报地址：{{ posterUrl }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { createSharePoster, getGoodsDetail } from '../api/modules/goods'
import type { GoodsDetail } from '../api/types'

const detail = ref<GoodsDetail>()
const posterUrl = ref('')
const route = useRoute()

onMounted(async () => {
  detail.value = (await getGoodsDetail(Number(route.params.id))).data
})

const createPoster = async () => {
  if (!detail.value) return
  posterUrl.value = (await createSharePoster(detail.value.id)).data.posterUrl
}
</script>
