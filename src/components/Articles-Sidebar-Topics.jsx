import { Link } from "react-router-dom";

const ArticlesSidebarTopics = ({ setPageNumber, topics }) => {
    return (
        <div className="Sidebar__topics">
            <ul>
                <li>
                    <Link to="/articles/">
                        <button
                            className="Sidebar__button"
                            // onClick={() => {
                            //     setPageNumber(1);
                            // }}
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
                                    className="Sidebar__button"
                                    // onClick={() => {
                                    //     setPageNumber(1);
                                    // }}
                                >
                                    {topic.slug.charAt(0).toUpperCase() +
                                        topic.slug.slice(1)}
                                </button>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default ArticlesSidebarTopics;
