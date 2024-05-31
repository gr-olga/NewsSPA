<script setup lang="ts">
import ListOfNews from "@/components/ListOfNews.vue";
import {useNewsStore} from "@/stores/newsStore";

const store = useNewsStore();
store.fetchArticles();


</script>

<template>
  <form>
    <label>Add a key-word for search
    <input type="text"  />
    </label>
    <label>Add date</label>
    <input type="text"  />
    <input type="text"  />
  </form>
  <ListOfNews :news-list="store.articles"></ListOfNews>
</template>
