
import ArticlesSidebar from "./Articles-Sidebar";
import ArticlesSingleCard from "./Articles-Single-Card";
import ArticlesSingleComments from "./Articles-Single-Comments";

const ArticlesSingle = () => {

    return (
        <>
            <div className="Sidebar">
                <ArticlesSidebar />
            </div>
            <div className="Content">
                <ArticlesSingleCard />
                <ArticlesSingleComments />
            </div>
        </>
    )
}

export default ArticlesSingle;