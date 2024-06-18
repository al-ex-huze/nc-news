import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../api";

const ArticlesSidebar = ({ setTopicFilter }) => {
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

    if (isLoading) return <p>Loading Topics</p>;
    return (
        <>
            <ul>
                <li>
                    <Link to="/articles/">
                        <button
                            className="Sidebar_button"
                            onClick={() => setTopicFilter("")}
                        >
                            All
                        </button>
                    </Link>
                </li>
                {topics.map((topic) => {
                    return (
                        <li key={topic.slug}>
                            <Link to={`/articles/?topic=${topic.slug}`}>
                                <button
                                    className="Sidebar_button"
                                    onClick={() => setTopicFilter(topic.slug)}
                                >
                                    {topic.slug.charAt(0).toUpperCase() +
                                        topic.slug.slice(1)}
                                </button>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default ArticlesSidebar;
