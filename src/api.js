import axios from "axios";

const newsApi = axios.create({
    baseURL: "https://nc-huze-news.onrender.com",
});

export const getArticles = (
    topicFilter,
    sortByQuery,
    sortByIsDesc,
    limit,
    pageNumber
) => {
    let orderDirection = "";
    sortByIsDesc ? (orderDirection = "desc") : (orderDirection = "asc");
    return newsApi
        .get("/api/articles", {
            params: {
                topic: topicFilter,
                sort_by: sortByQuery,
                order: orderDirection,
                limit: limit,
                p: pageNumber,
            },
        })
        .then((response) => {
            return response.data;
        });
};

export const getArticleById = (article_id) => {
    return newsApi.get(`/api/articles/${article_id}`).then((response) => {
        return response.data.article;
    });
};

export const getCommentsByArticleId = (article_id, limit, pageNumber) => {
    return newsApi
        .get(`/api/articles/${article_id}/comments`, {
            params: { limit: limit, p: pageNumber },
        })
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

export const getUsers = () => {
    return newsApi.get("/api/users").then((response) => {
        return response.data;
    });
};

export const getUserByUsername = (username) => {
    return newsApi.get(`/api/users/${username}`).then((response) => {
        return response.data.user;
    })
}

export const postNewUser = (body) => {
    return newsApi.post("/api/users", body).then((response) => {
        return response.data.user;
    })
}

export const deleteUserByUsername = (username) => {
    return newsApi.delete(`/api/users/${username}`).then((response) => {
        return response.status === 204 ? true : false;
    })
}