<script setup lang="ts">
import ListOfNews from "@/components/ListOfNews.vue";
import {useNewsStore} from "@/stores/newsStore";
import {onMounted} from "vue";

const store = useNewsStore();
onMounted(() => store.fetchGeneralArticles());
</script>

<template>
  <div class="home_view__link">
    <router-link to="/search" class="link">
      <p>Search</p>
    </router-link>
  </div>
  <h2 class="title">General news</h2>
  <Suspense>
    <ListOfNews :news-list="store.generalArticles"></ListOfNews>
  </Suspense>
</template>

<style scoped>
.home_view__link {
  display: flex;
  justify-content: end;
  margin: 1rem;
  padding: 1rem;
}

.title {
  color: #333;
  font-size: 1.5rem;
  padding: 1rem;
  margin-left: 4rem;
  font-weight: bold;
}

.link {
  text-decoration: none;
  align-self: start;
  font-size: 1rem;
  border: 1px solid #333;
  border-radius: 1rem;
  padding: 1rem;
  cursor: pointer;
  color: #1f3f4d;
  transition: background-color 0.3s;
}

.link:hover {
  background-color: #e3e2e2;
}
</style>