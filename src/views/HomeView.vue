<script setup lang="ts">
import ListOfNews from "@/components/ListOfNews.vue";
import {useNewsStore} from "@/stores/newsStore";
import {onMounted} from "vue";

const store = useNewsStore();
onMounted(() => store.fetchGeneralArticles());
</script>

<template>
  <div>
    <router-link to="/search">
      <h2>If you want find news by date of by topic follow the link </h2>
    </router-link>
  </div>
  <Suspense>
    <ListOfNews :news-list="store.generalArticles"></ListOfNews>
  </Suspense>
</template>
