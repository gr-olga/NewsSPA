<script setup lang="ts">
import {useNewsStore} from "@/stores/newsStore.js";
import {onMounted} from "vue";
import ListOfNews from "@/components/ListOfNews.vue";

const store = useNewsStore();
onMounted(() => store.fetchSearchedArticles());
</script>

<template>
  <div>
    <h1>Search</h1>
    <form>
      <label>Add a key-word for search
        <input type="text"/>
      </label>
      <label>Add date</label>
      <input type="text"/>
      <label>sort buy</label>
      <select>
        <option>relevancy</option>
        <option>popularity</option>
        <option>publishedAt</option>
      </select>
    </form>
    <div>
      <ListOfNews :news-list="store.searchedArticles"></ListOfNews>
    </div>
  </div>
</template>