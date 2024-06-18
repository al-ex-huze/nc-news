import { useEffect, useState } from "react";
import { getTopics } from "../api";

const ArticlesSidebar = ({ topicFilter, setTopicFilter }) => {
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
            <button
                                className="Sidebar_button"
                                onClick={() => setTopicFilter("")}
                            >
                                all
                            </button>
                {topics.map((topic) => {
                    return (
                        <li key={topic.slug}>
                            <button
                                className="Sidebar_button"
                                onClick={() => setTopicFilter(topic.slug)}
                            >
                                {topic.slug}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default ArticlesSidebar;
