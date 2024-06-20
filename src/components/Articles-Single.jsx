import { useState } from "react";

import ArticlesSidebar from "./Articles-Sidebar";
import ArticlesSingleCard from "./Articles-Single-Card";
import ArticlesSingleComments from "./Articles-Single-Comments";


const ArticlesSingle = ({ setShowSortBy }) => {

    const [articleComments, setArticleComments] = useState([]);

    const limit = 5;
    const [pageNumber, setPageNumber] = useState(1);
    const [totalCount, setTotalCount] = useState(0);

    return (
        <>
            <div className="Sidebar">
                <ArticlesSidebar />
            </div>
            <div className="Content">
                <ArticlesSingleCard setShowSortBy={setShowSortBy} />

                <ArticlesSingleComments
                    limit={limit}
                    pageNumber={pageNumber}
                    setPageNumber={setPageNumber}
                    totalCount={totalCount}
                    setTotalCount={setTotalCount}
                    articleComments={articleComments}
                    setArticleComments={setArticleComments}
                />
            </div>
        </>
    );
};

export default ArticlesSingle;
