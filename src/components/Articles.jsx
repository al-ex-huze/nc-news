import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import ArticlesList from "./Articles-List";
import ArticlesSidebar from "./Articles-Sidebar";

const Articles = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const topicQuery = searchParams.get("topic");
    const [articles, setArticles] = useState([]);
    const [topicFilter, setTopicFilter] = useState(topicQuery);

    useEffect(() => {
        setTopicFilter(topicQuery);
    }, [topicQuery])

    return (
        <>
            <div className="Sidebar">
                <ArticlesSidebar setTopicFilter={setTopicFilter} />
            </div>
            <div className="Content">
                <ArticlesList
                    topicFilter={topicFilter}
                    setTopicFilter={setTopicFilter}
                    articles={articles}
                    setArticles={setArticles}
                />
            </div>
        </>
    );
};

export default Articles;
