<template>
  <section class="page">
    <div class="card" v-for="msg in list" :key="msg.id">
      <h3>{{ msg.title }} <small v-if="!msg.read">(未读)</small></h3>
      <p>{{ msg.content }}</p>
      <p class="sub">{{ msg.createdAt }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getMessages } from '../api/modules/user'
import type { MessageItem } from '../api/types'

const list = ref<MessageItem[]>([])
onMounted(async () => {
  list.value = (await getMessages()).data
})
</script>
