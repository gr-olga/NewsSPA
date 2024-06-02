import axios from "axios";
import type {SortingType} from "@/constants/SortingType";

const API_KEY = 'c5083103aa0845fba332e08c33de9887'
const BaseUrl = 'https://newsapi.org/v2/'


export async function getSpecificNews(topic: string, date: string, sortBy: SortingType) {
    try {
        const fullUrl = `${BaseUrl}everything?q=${topic}&to=${date}&sortBy=${sortBy}&pageSize=10&apiKey=${API_KEY}`;
        const res = await axios.get(fullUrl)
        return res.data.articles
    } catch (e) {
        console.log(e)
    }
}

export async function getGeneralNews() {
    try {
        const fullUrl = `${BaseUrl}top-headlines?country=nl&apiKey=${API_KEY}`;
        const res = await axios.get(fullUrl)
        return res.data.articles
    } catch (e) {
        console.log(e)
    }
}