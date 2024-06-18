import { useState } from "react";

import ArticlesSidebar from "./Articles-Sidebar";
import ArticlesSingleCard from "./Articles-Single-Card";
import ArticlesSingleComments from "./Articles-Single-Comments";

const ArticlesSingle = () => {
    const [articleComments, setArticleComments] = useState([]);

    return (
        <>
            <div className="Sidebar">
                <ArticlesSidebar />
            </div>
            <div className="Content">
                <ArticlesSingleCard />
                
                <ArticlesSingleComments
                    articleComments={articleComments}
                    setArticleComments={setArticleComments}
                />
            </div>
        </>
    );
};

export default ArticlesSingle;
