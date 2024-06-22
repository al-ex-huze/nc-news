import { useEffect, useState } from "react";

const HomeList = () => {
    const [listError, setListError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setShowSortBy(true);
        getArticles(topicFilter, sortByQuery, sortByIsDesc, limit, pageNumber)
            .then(({ articles }) => {
                setTotalCount(articles[0].total_count);
                setArticles(articles);
                setIsLoading(false);
            })
            .catch((error) => {
                setListError(error);
            });
    }, [topicFilter, sortByQuery, sortByIsDesc, limit, pageNumber]);
    return (
        <>HOME LIST</>
    )
};

export default HomeList;
