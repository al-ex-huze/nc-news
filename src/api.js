import axios from "axios";

const newsApi = axios.create({
    baseURL: "https://nc-huze-news.onrender.com",
});

export const getArticles = (topicFilter, sortByQuery, sortByIsDesc) => {
    let orderDirection = "";
    sortByIsDesc ? orderDirection = "desc" : orderDirection = "asc";
    return newsApi
        .get("/api/articles", { params: { topic: topicFilter, sort_by: sortByQuery, order: orderDirection } })
        .then((response) => {
            return response.data;
        });
};

export const getArticleById = (article_id) => {
    return newsApi.get(`/api/articles/${article_id}`).then((response) => {
        return response.data.article;
    });
};

export const getCommentsByArticleId = (article_id) => {
    return newsApi
        .get(`/api/articles/${article_id}/comments`)
        .then((response) => {
            return response.data.comments;
        });
};

export const patchArticleVotes = (inc_votes, article_id) => {
    return newsApi
        .patch(`/api/articles/${article_id}`, { inc_votes: inc_votes })
        .then((response) => {
            return response.status === 200 ? true : false;
        });
};

export const postArticleComment = (body, article_id) => {
    return newsApi
        .post(`/api/articles/${article_id}/comments`, body)
        .then((response) => {
            return response.data.comment;
        });
};

export const deleteArticleComment = (comment_id) => {
    return newsApi.delete(`/api/comments/${comment_id}`).then((response) => {
        return response.status === 204 ? true : false;
    });
};

export const getTopics = () => {
    return newsApi.get("/api/topics").then((response) => {
        return response.data.topics;
    });
};
