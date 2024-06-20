import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import ArticlesList from "./Articles-List";
import ArticlesSidebar from "./Articles-Sidebar";

const Articles = ({ showSortBy, setShowSortBy }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const topicQuery = searchParams.get("topic");
    const [articles, setArticles] = useState([]);

    const [topicFilter, setTopicFilter] = useState(topicQuery);
    const [sortByQuery, setSortByQuery] = useState("");
    const [sortByIsDesc, setSortByIsDesc] = useState(false);

    const limit = 5;
    const [pageNumber, setPageNumber] = useState(1);
    const [totalCount, setTotalCount] = useState(0);

    useEffect(() => {
        setTopicFilter(topicQuery);
    }, [topicQuery]);

    return (
        <>
            <div className="Sidebar">
                <ArticlesSidebar
                    setPageNumber={setPageNumber}
                    setTopicFilter={setTopicFilter}
                    sortByQuery={sortByQuery}
                    setSortByQuery={setSortByQuery}
                    sortByIsDesc={sortByIsDesc}
                    setSortByIsDesc={setSortByIsDesc}
                    topicQuery={topicQuery}
                    showSortBy={showSortBy}
                />
            </div>
            <div className="Content">
                <ArticlesList
                    topicFilter={topicFilter}
                    setTopicFilter={setTopicFilter}
                    articles={articles}
                    limit={limit}
                    pageNumber={pageNumber}
                    setPageNumber={setPageNumber}
                    setArticles={setArticles}
                    sortByQuery={sortByQuery}
                    sortByIsDesc={sortByIsDesc}
                    totalCount={totalCount}
                    setTotalCount={setTotalCount}
                    setShowSortBy={setShowSortBy}
                />
            </div>
        </>
    );
};

export default Articles;
