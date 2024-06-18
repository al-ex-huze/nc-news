import { useState } from "react";

import ArticlesSidebar from "./Articles-Sidebar";
import ArticlesSingleCard from "./Articles-Single-Card";
import ArticlesSingleComments from "./Articles-Single-Comments";
import ArticlesSingleAddComment from "./Articles-Single-Add-Comment";

const ArticlesSingle = () => {
    const [articleComments, setArticleComments] = useState([]);

    return (
        <>
            <div className="Sidebar">
                <ArticlesSidebar />
            </div>
            <div className="Content">
                <ArticlesSingleCard />
                <ArticlesSingleAddComment
                    articleComments={articleComments}
                    setArticleComments={setArticleComments}
                />
                <ArticlesSingleComments
                    articleComments={articleComments}
                    setArticleComments={setArticleComments}
                />
            </div>
        </>
    );
};

export default ArticlesSingle;
