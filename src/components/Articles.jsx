import { useState } from "react";

import ArticlesList from "./Articles-List";
import ArticlesSidebar from "./Articles-Sidebar";

const Articles = () => {
    const [articles, setArticles] = useState([]);    

    return (
        <>
            <div className="Sidebar">
                <ArticlesSidebar />
            </div>
            <div className="Content">
                <ArticlesList articles={articles} setArticles={setArticles} />
            </div>
        </>
    );
};

export default Articles;
