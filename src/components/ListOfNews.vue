<script setup lang="ts">
import type { News } from '@/types'
import NewsItem from '@/components/NewsItem.vue'

defineProps<{
  newsList: Array<News>
}>()
</script>

<template>
  <div class="news_list_box">
    <div v-for="(item, index) in newsList" :key="index">
      <NewsItem :news="item"></NewsItem>
    </div>
  </div>
</template>

<style scoped>
.news_list_box {
  display: grid;
  grid-template-columns: auto auto;
  gap: 5px;
}

@media (max-width: 1000px) {
  .news_list_box {
    grid-template-columns: auto;
  }
}
</style>
