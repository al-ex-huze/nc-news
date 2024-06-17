
import ArticlesSidebar from "./Articles-Sidebar";
import ArticlesSingleCard from "./Articles-Single-Card";

const ArticlesSingle = () => {

    return (
        <>
            <div className="Sidebar">
                <ArticlesSidebar />
            </div>
            <div className="Content">
                <ArticlesSingleCard />
            </div>
        </>
    )
}

export default ArticlesSingle;