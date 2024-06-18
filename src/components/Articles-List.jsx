import { useEffect, useState } from "react";

import ArticlesListCards from "./Articles-List-Cards";

import { getArticles } from "../api";

const ArticlesList = ({ topicFilter, articles, setArticles }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getArticles(topicFilter)
            .then(({ articles }) => {
                setArticles(articles);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [topicFilter]);

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
