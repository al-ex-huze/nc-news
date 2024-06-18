import { useState } from "react";

import ArticlesList from "./Articles-List";
import ArticlesSidebar from "./Articles-Sidebar";

const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [topicFilter, setTopicFilter] = useState("");

    return (
        <>
            <div className="Sidebar">
                <ArticlesSidebar setTopicFilter={setTopicFilter} />
            </div>
            <div className="Content">
                <ArticlesList
                    topicFilter={topicFilter}
                    articles={articles}
                    setArticles={setArticles}
                />
            </div>
        </>
    );
};

export default Articles;
