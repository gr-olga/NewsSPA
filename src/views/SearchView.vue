<script setup lang="ts">
import {useNewsStore} from "@/stores/newsStore.js";
import {reactive} from "vue";
import ListOfNews from "@/components/ListOfNews.vue";
import {SortingType} from "@/constants/SortingType";
import {formatDate} from "@/utils/dateUtils";
import {useRouter} from "vue-router";

const store = useNewsStore();
const router = useRouter();

const state = reactive({
  topic: store.topic,
  date: store.date,
  sortBy: store.sortBy
})

const onSubmit = () => {
  store.setTopic(state.topic);
  if (state.sortBy) store.setSortBy(state.sortBy as SortingType);
  if (state.date) store.setDate(formatDate(state.date))
  store.fetchSearchedArticles();
}
</script>

<template>
  <div>
    <button @click="router.go(-1)">Back</button>
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
      <button :disabled="!state.topic" type="submit">Search</button>
    </form>
    <div>
      <ListOfNews :news-list="store.searchedArticles"></ListOfNews>
    </div>
  </div>
</template>