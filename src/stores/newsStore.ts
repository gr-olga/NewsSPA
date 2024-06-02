import {defineStore} from 'pinia';
import {getGeneralNews, getSpecificNews} from "@/api/api";
import {SortingType} from "@/constants/SortingType";
import type {News} from "@/types";
import {formatDate} from "@/utils/dateUtils";


interface NewsStore {
    generalArticles: Array<News>,
    searchedArticles: Array<News>,
    topic: string,
    date: string,
    sortBy: SortingType
}

export const useNewsStore = defineStore('news', {
    state: (): NewsStore => ({
        generalArticles: [],
        searchedArticles: [],
        topic: '',
        date: formatDate(new Date().toISOString()),
        sortBy: SortingType.Relevancy
    }),
    actions: {
        fetchGeneralArticles() {
            getGeneralNews().then((articles) => this.generalArticles = articles);
        },
        fetchSearchedArticles() {
            getSpecificNews(this.topic, this.date, this.sortBy).then(articles => this.searchedArticles = articles);
        },
        setTopic(topic: string) {
            this.topic = topic;
        },
        setDate(date: string) {
            this.date = date;
        },
        setSortBy(sortBy: SortingType) {
            this.sortBy = sortBy;
        }
    }
});
