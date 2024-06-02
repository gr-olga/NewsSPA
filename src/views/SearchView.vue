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
  <div class="search_head">
    <button @click="router.go(-1)" class="back_btn">Back to all news</button>
    <h1 class="title">Search</h1>
  </div>
  <p class="form_title">Search for news by topic, date and sort by</p>
  <form @submit.prevent="onSubmit" class="search_view__form">
    <div class="input_box">
      <label>Add a key-word for search</label>
      <input class="text_input" v-model="state.topic" type="text"/>
    </div>
    <div class="input_box">
      <label>Add date</label>
      <input class="text_input" v-model="state.date" type="date"/>
    </div>
    <div class="input_box">
      <label>sort buy</label>
      <select class="text_input" v-model="state.sortBy">
        <option>relevancy</option>
        <option>popularity</option>
        <option>publishedAt</option>
      </select>
    </div>
    <button class="form_btn" :disabled="!state.topic" type="submit">Search</button>
  </form>
  <div>
  </div>
  <ListOfNews :news-list="store.searchedArticles"></ListOfNews>
</template>

<style scoped>
.search_head {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
}

.back_btn {
  align-self: start;
  font-size: 1rem;
  font-weight: bold;
  border: 1px solid #333;
  border-radius: 1rem;
  padding: 1rem;
}

.title {
  color: #333;
  font-size: 1.5rem;
  padding: 1rem;
  margin-left: 4rem;
  font-weight: bold;
}

.form_title {
  font-size: 1rem;
  color: #333;
  margin: 1rem;
}

.search_view__form {
  display: flex;
  gap: 1rem;
  margin: 1rem;
  align-items: center;
}

.input_box {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.text_input {
  padding: 1rem;
  border: 1px solid #333;
  border-radius: 1rem;
}
.form_btn{
  padding: 1rem;
  border: 1px solid #333;
  border-radius: 1rem;
  background-color: #03a062;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  align-self: end;
  transition: background-color 0.3s;
}

.form_btn:disabled {
  background-color: #b96464;
  color: #333;
  cursor: not-allowed;
}

</style>