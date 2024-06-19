import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import ArticlesList from "./Articles-List";
import ArticlesSidebar from "./Articles-Sidebar";
import ArticlesSidebarSort from "./Articles-Sidebar-Sort";

const Articles = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const topicQuery = searchParams.get("topic");
    const [articles, setArticles] = useState([]);

    const [topicFilter, setTopicFilter] = useState(topicQuery);
    const [sortByQuery, setSortByQuery] = useState("");
    const [sortByIsDesc, setSortByIsDesc] = useState(false);

    const [sortByArr, setSortByArr] = useState([
        "created_at",
        "comment_count",
        "votes",
    ]);

    const limit = 5;
    const [pageNumber, setPageNumber] = useState(1);
    const [totalCount, setTotalCount] = useState(0);

    useEffect(() => {
        setPageNumber(1);
        setTopicFilter(topicQuery);
    }, [topicQuery]);

    return (
        <>
            <div className="Sidebar">
                <ArticlesSidebar
                setPageNumber={setPageNumber}
                    setTopicFilter={setTopicFilter}
                    setSortByQuery={setSortByQuery}
                    sortByIsDesc={sortByIsDesc}
                    setSortByIsDesc={setSortByIsDesc}
                />
                <ArticlesSidebarSort
                    sortByArr={sortByArr}
                    setSortByArr={setSortByArr}
                    sortByIsDesc={sortByIsDesc}
                    setSortByIsDesc={setSortByIsDesc}
                    setSortByQuery={setSortByQuery}
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
                />
            </div>
        </>
    );
};

export default Articles;
