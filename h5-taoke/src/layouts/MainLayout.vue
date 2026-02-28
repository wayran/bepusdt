<template>
  <section class="layout">
    <main class="content">
      <router-view />
    </main>
    <TabBar />
  </section>
</template>

<script setup lang="ts">
import TabBar from '../components/TabBar.vue'
</script>
