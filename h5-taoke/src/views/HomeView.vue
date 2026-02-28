<template>
  <section class="page">
    <header class="hero card">
      <div>
        <h2>Hi，{{ summary?.userName }}</h2>
        <p>今日预估收益 ￥{{ summary?.todayIncome.toFixed(2) }}</p>
      </div>
      <RouterLink to="/wallet" class="btn">钱包</RouterLink>
    </header>

    <div class="banner card" v-if="banners[0]">
      <img :src="banners[0].image" alt="banner" />
    </div>

    <div class="card">
      <h3>分类</h3>
      <div class="grid-4">
        <div v-for="cat in categories" :key="cat.id" class="cat-item">{{ cat.icon }} {{ cat.name }}</div>
      </div>
    </div>

    <div class="card">
      <h3>推荐高佣</h3>
      <RouterLink v-for="item in goods" :key="item.id" :to="`/goods/${item.id}`" class="goods">
        <img :src="item.image" alt="" />
        <div>
          <p class="title">{{ item.title }}</p>
          <p class="sub">券后￥{{ item.finalPrice }} · 佣金{{ Math.round(item.commissionRate * 100) }}%</p>
        </div>
      </RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getGoodsList } from '../api/modules/goods'
import { getHomeBanners, getHomeCategories, getHomeSummary } from '../api/modules/home'
import type { Banner, Category, GoodsItem, HomeSummary } from '../api/types'

const summary = ref<HomeSummary>()
const banners = ref<Banner[]>([])
const categories = ref<Category[]>([])
const goods = ref<GoodsItem[]>([])

onMounted(async () => {
  summary.value = (await getHomeSummary()).data
  banners.value = (await getHomeBanners()).data
  categories.value = (await getHomeCategories()).data
  goods.value = (await getGoodsList({ page: 1, pageSize: 8 })).data.list
})
</script>
