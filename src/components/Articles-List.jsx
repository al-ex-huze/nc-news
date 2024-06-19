import { useEffect, useState } from "react";
import { getArticles } from "../api";

import ArticlesListCards from "./Articles-List-Cards";

const ArticlesList = ({ topicFilter, articles, setArticles, sortByQuery, sortByIsDesc }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getArticles(topicFilter, sortByQuery, sortByIsDesc)
            .then(({ articles }) => {
                setArticles(articles);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [topicFilter, sortByQuery, sortByIsDesc]);

    if (isLoading) return <p>Loading Articles</p>;
    return (
        <div className="Content__list-cards">
            <ul>
                {articles.map((article) => {
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

export default ArticlesList;
