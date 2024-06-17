import axios from "axios";

const newsApi = axios.create({
    baseURL : "https://nc-huze-news.onrender.com/"
})

export const getArticles = () => {
    return newsApi
    .get("/api/articles")
    .then((response) => {
        return response.data;
    })
}

export const getArticleById = ( article_id ) => {
    return newsApi
    .get(`/api/articles/${article_id}`)
    .then((response) => {
        return response.data.article;
    })
}