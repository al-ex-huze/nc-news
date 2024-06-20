import { useEffect, useState } from "react";
import { getArticles } from "../api";

import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";

import ArticlesListCards from "./Articles-List-Cards";

const ArticlesList = ({
    topicFilter,
    articles,
    limit,
    pageNumber,
    setPageNumber,
    setArticles,
    totalCount,
    setTotalCount,
    sortByQuery,
    sortByIsDesc,
    setShowSortBy,
}) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setShowSortBy(true);
        getArticles(topicFilter, sortByQuery, sortByIsDesc, limit, pageNumber)
            .then(({ articles }) => {
                setTotalCount(articles[0].total_count);
                setArticles(articles);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [topicFilter, sortByQuery, sortByIsDesc, limit, pageNumber]);

    const handlePageLeft = () => {
        if (pageNumber > 1) setPageNumber(pageNumber - 1);
    };

    const handlePageRight = () => {
        if (pageNumber < totalCount / limit) setPageNumber(pageNumber + 1);
    };

    if (isLoading) return <p>Loading Articles</p>;
    return (
        <>
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
            <div className="Content__pagination-container">
                <ul>
                    <li>
                        <button
                            className="Content__pagination-button"
                            onClick={handlePageLeft}
                        >
                            <TiChevronLeftOutline />
                        </button>
                    </li>
                    <li>
                        <div className="Content__pagination-micro-card">
                            Page {pageNumber} of {Math.ceil(totalCount / limit)}
                        </div>
                    </li>
                    <li>
                        <button
                            className="Content__pagination-button"
                            onClick={handlePageRight}
                        >
                            <TiChevronRightOutline />
                        </button>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default ArticlesList;
