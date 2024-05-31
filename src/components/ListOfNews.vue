<script setup lang="ts">
import type {News} from "@/types";
import NewsItem from "@/components/NewsItem.vue";

defineProps<{
  newsList: Array<News>
}>();

</script>

<template>
  <main>
    <div v-for="item in newsList">
      <NewsItem :news="item"></NewsItem>
    </div>
  </main>
</template>
<style scoped>
main{
  display: grid;
  grid-template-columns: auto auto;
  gap: 5px;
  margin: 1rem;
  padding: 1rem;
}
</style>