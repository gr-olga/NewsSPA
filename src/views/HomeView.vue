<script setup lang="ts">
import ListOfNews from "@/components/ListOfNews.vue";
import {useNewsStore} from "@/stores/newsStore";
import {onMounted} from "vue";

const store = useNewsStore();
onMounted(() => store.fetchGeneralArticles());
</script>

<template>
  <Suspense>
    <ListOfNews :news-list="store.generalArticles"></ListOfNews>
  </Suspense>
</template>
