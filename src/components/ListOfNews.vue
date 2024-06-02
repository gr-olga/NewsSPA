<script setup lang="ts">
import type {News} from "@/types";
import NewsItem from "@/components/NewsItem.vue";

defineProps<{
  newsList: Array<News>
}>();

</script>

<template>
  <div class="news_list_box">
    <div v-for="item in newsList">
      <NewsItem :news="item"></NewsItem>
    </div>
  </div>

</template>
<style scoped>
.news_list_box {
  display: grid;
  grid-template-columns: auto auto;
  gap: 5px;
  //margin: 1rem;
  //padding: 1rem;
}
</style>