<script setup lang="ts">
import type {News} from "@/types";
import {formatDate} from "../utils/dateUtils";

defineProps<{
  news: News
}>();
</script>

<template>
  <div class="news_item">
    <div class="title_box">
      <h2>{{ news.title }}</h2>
      <p class="source_name"> Material from: {{ news.source.name }}</p>
    </div>
    <div class="item_box">
      <img :src="news.urlToImage" class="image" alt="news image" v-if="news.urlToImage">
      <div class="image_placeholder" v-if="!news.urlToImage"></div>
      <div class=text_box>
        <p class="description">{{ news.description }}</p>
        <div>
          <p>{{ news.author }}</p>
          <p>{{ formatDate(news.publishedAt) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.news_item {
  margin: 1rem;
  padding: 1rem;
}

.item_box {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
  border: 1px solid #a0a0a0;
  background-color: rgb(250 250 250);;
  border-radius: 1rem;
  margin: 1rem;
  padding: 1rem;
}
.text_box {
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-inline: 1rem;
}

.title_box {
  display: flex;
  flex-direction: column;
  margin: 1rem;
  font-size: 1rem;
  color: #333;
}

.source_name {
  font-size: 0.5rem;
  color: #491d1d;
}

.image {
  width: 20vw;
  height: auto;
  border-radius: 0.8rem;
}

.image_placeholder {
  width: 20vw;
  height: 10vw;
  background-color: #7a7777;
  border-radius: 0.8rem;
}

.description {
  font-size: 1rem;
  color: #333;
}
</style>