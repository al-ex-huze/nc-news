import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { TiArrowDownOutline, TiArrowUpOutline } from "react-icons/ti";

import { getTopics } from "../api";

const ArticlesSidebar = ({
    setTopicFilter,
    setSortByQuery,
    sortByIsDesc,
    setSortByIsDesc,
}) => {
    const [topics, setTopics] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
                console.log(error);
            });
    }, []);

    const handleSortToggle = () => {
        setSortByIsDesc((currentSort) => {
            return currentSort === true ? false : true;
        });
    };

    if (isLoading) return <p>Loading Sidebar</p>;
    return (
        <>
            <ul className="Sidebar__topics">
                <li>
                    <Link to="/articles/">
                        <button className="Sidebar__button">All</button>
                    </Link>
                </li>
                {topics.map((topic) => {
                    return (
                        <li key={topic.slug}>
                            <Link to={`/articles/?topic=${topic.slug}`}>
                                <button className="Sidebar__button">
                                    {topic.slug.charAt(0).toUpperCase() +
                                        topic.slug.slice(1)}
                                </button>
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <ul className="Sidebar__sort-by">
                {sortByArr.map((sortByEle) => {
                    return (
                        <li key={sortByEle}>
                            <button
                                className="Sidebar__query-button"
                                onClick={() => setSortByQuery(sortByEle)}
                            >
                                {sortByEle}
                            </button>
                        </li>
                    );
                })}
                <li>
                    <button
                        className="Sidebar__query-button"
                        onClick={handleSortToggle}
                    >
                        {sortByIsDesc ? (
                            <TiArrowDownOutline />
                        ) : (
                            <TiArrowUpOutline />
                        )}
                    </button>
                </li>
            </ul>
        </>
    );
};

export default ArticlesSidebar;
