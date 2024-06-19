import { useEffect, useState } from "react";

import ArticlesSidebarTopics from "./Articles-Sidebar-Topics";

import { getTopics } from "../api";

const ArticlesSidebar = ({
    setPageNumber,
    setTopicFilter,
    setSortByQuery,
    sortByIsDesc,
    setSortByIsDesc,
}) => {
    const [topics, setTopics] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getTopics()
            .then((topics) => {
                setTopics(topics);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    if (isLoading) return <p>Loading Sidebar</p>;
    return (
        <ArticlesSidebarTopics setPageNumber={setPageNumber} topics={topics} />
    );
};

export default ArticlesSidebar;
