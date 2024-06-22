import { useEffect, useState } from "react";

import ArticlesListCards from "../articles/Articles-List-Cards";
import ErrorComponent from "../Error-Component";

import { getArticles } from "../../api";

const HomeList = ({ homeArticles, setHomeArticles }) => {
    const [listError, setListError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const topicFilter = "";
    const limit = 1;
    const pageNumber = 1;
    const [sortByQuery, setSortByQuery] = useState("");
    const [sortByIsDesc, setSortByIsDesc] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getArticles(topicFilter, sortByQuery, sortByIsDesc, limit, pageNumber)
            .then(({ articles }) => {
                let randomArticle = Math.floor(
                    Math.random() * articles[0].total_count
                );
                return getArticles(
                    topicFilter,
                    sortByQuery,
                    sortByIsDesc,
                    limit,
                    randomArticle
                );
            })
            .then(({ articles }) => {
                setHomeArticles(articles);
                setIsLoading(false);
            })
            .catch((error) => {
                setListError(error);
            });
    }, [topicFilter, sortByQuery, sortByIsDesc, limit, pageNumber]);

    if (listError) return <ErrorComponent error={listError} />;
    if (isLoading) return <p>Loading Articles</p>;
    return (
        <div className="Content__list-cards">
            <ul>
                {homeArticles.map((article) => {
                    return (
                        <ArticlesListCards
                            article={article}
                            key={article.article_id}
                        />
                    );
                })}
            </ul>
        </div>
    );
};

export default HomeList;
