<template>
  <section class="page">
    <div class="card">
      <h2>领券中心</h2>
      <input v-model="keyword" class="input" placeholder="搜索商品关键词" />
    </div>
    <div class="card" v-for="item in goods" :key="item.id">
      <RouterLink :to="`/goods/${item.id}`" class="goods">
        <img :src="item.image" alt="" />
        <div>
          <p class="title">{{ item.title }}</p>
          <p class="sub">原价￥{{ item.originalPrice }} · 券后￥{{ item.finalPrice }}</p>
        </div>
      </RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { getGoodsList } from '../api/modules/goods'
import type { GoodsItem } from '../api/types'

const keyword = ref('')
const goods = ref<GoodsItem[]>([])

const load = async () => {
  goods.value = (await getGoodsList({ page: 1, pageSize: 20, keyword: keyword.value })).data.list
}

onMounted(load)
watch(keyword, load)
</script>
