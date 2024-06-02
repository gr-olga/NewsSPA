<script setup lang="ts">
import {useNewsStore} from "@/stores/newsStore.js";
import {onMounted, reactive} from "vue";
import ListOfNews from "@/components/ListOfNews.vue";
import {SortingType} from "@/constants/SortingType";
import {formatDate} from "@/utils/dateUtils";

const store = useNewsStore();
onMounted(() => store.fetchSearchedArticles());

const state = reactive({
  topic: store.topic,
  date: store.date,
  sortBy: store.sortBy
})

const onSubmit = () => {
  store.setTopic(state.topic);
  store.setSortBy(state.sortBy as SortingType);
  store.setDate(formatDate(state.date))
  store.fetchSearchedArticles();
}
</script>

<template>
  <div>
    <h1>Search</h1>
    <form @submit.prevent="onSubmit">
      <label>Add a key-word for search
        <input v-model="state.topic" type="text"/>
      </label>
      <label>Add date</label>
      <input v-model="state.date" type="date"/>
      <label>sort buy</label>
      <select v-model="state.sortBy">
        <option>relevancy</option>
        <option>popularity</option>
        <option>publishedAt</option>
      </select>
      <button type="submit">Search</button>
    </form>
    <div>
      <h3>{{ store.topic }} / {{store.date}}</h3>
      <ListOfNews :news-list="store.searchedArticles"></ListOfNews>
    </div>
  </div>
</template>