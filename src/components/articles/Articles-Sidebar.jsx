import { useEffect, useState } from "react";

import ArticlesSidebarTopics from "./Articles-Sidebar-Topics";
import ArticlesSidebarSort from "./Articles-Sidebar-Sort";

import ErrorComponent from "../Error-Component";

import { getTopics } from "../../api";

const ArticlesSidebar = ({
    setPageNumber,
    sortByQuery,
    setSortByQuery,
    sortByIsDesc,
    setSortByIsDesc,
    showSortBy,
}) => {
    const [topicsError, setTopicsError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);    

    const [topics, setTopics] = useState([]);
    const [sortByArr, setSortByArr] = useState([
        "created_at",
        "comment_count",
        "votes",
    ]);

    useEffect(() => {
        setIsLoading(true);
        getTopics()
            .then((topics) => {
                setTopics(topics);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log("DEBUG CATCH:" + error)
                setTopicsError(error);
            });
    }, []);

    if (topicsError) return <ErrorComponent error={topicsError} />
    if (isLoading) return <p>Loading Sidebar</p>;
    return (
        <>
            <ArticlesSidebarTopics
                setPageNumber={setPageNumber}
                topics={topics}
            />
            {showSortBy ? (
                <ArticlesSidebarSort
                    sortByArr={sortByArr}
                    setSortByArr={setSortByArr}
                    sortByIsDesc={sortByIsDesc}
                    setSortByIsDesc={setSortByIsDesc}
                    sortByQuery={sortByQuery}
                    setSortByQuery={setSortByQuery}
                />
            ) : null}
        </>
    );
};

export default ArticlesSidebar;
