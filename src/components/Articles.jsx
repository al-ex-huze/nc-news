import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import ArticlesList from "./Articles-List";
import ArticlesSidebar from "./Articles-Sidebar";

const Articles = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const topicQuery = searchParams.get("topic");
    const [articles, setArticles] = useState([]);
    const [topicFilter, setTopicFilter] = useState(topicQuery);

    const [sortByQuery, setSortByQuery] = useState("");
    const [sortByIsDesc, setSortByIsDesc] = useState(false);

    useEffect(() => {
        setTopicFilter(topicQuery);
    }, [topicQuery]);

    return (
        <>
            <div className="Sidebar">
                <ArticlesSidebar
                    setTopicFilter={setTopicFilter}
                    setSortByQuery={setSortByQuery}
                    sortByIsDesc={sortByIsDesc}
                    setSortByIsDesc={setSortByIsDesc}
                />
            </div>
            <div className="Content">
                <ArticlesList
                    topicFilter={topicFilter}
                    setTopicFilter={setTopicFilter}
                    articles={articles}
                    setArticles={setArticles}
                    sortByQuery={sortByQuery}
                    sortByIsDesc={sortByIsDesc}
                />
            </div>
        </>
    );
};

export default Articles;
