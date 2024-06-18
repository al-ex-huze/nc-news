import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ArticlesList from "./Articles-List";
import ArticlesSidebar from "./Articles-Sidebar";

const Articles = () => {
    const { topic } = useParams();
    const [articles, setArticles] = useState([]);
    const [topicFilter, setTopicFilter] = useState(topic);

    return (
        <>
            <div className="Sidebar">
                <ArticlesSidebar setTopicFilter={setTopicFilter} />
            </div>
            <div className="Content">
                <ArticlesList
                    topic={topic}
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
