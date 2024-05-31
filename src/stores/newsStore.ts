import { defineStore } from 'pinia';
import {getSpecificNews} from "@/api/api";
import { SortingType} from "@/constants/SortingType";
import type {News} from "@/types";


export const useNewsStore = defineStore('news', {
  state: () => ({
    articles: [] as ReadonlyArray<News>,
    topic: 'apple',
    date: "2024-05-30",
    sortBy: SortingType.Relevancy
  }),
  getters: {

  },
  actions: {
    fetchArticles(): void {
      getSpecificNews(this.topic, this.date, this.sortBy).then(articles => {
        this.articles = articles;
      });
    },
  }
});
