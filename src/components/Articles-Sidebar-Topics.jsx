import { Link } from "react-router-dom";

const ArticlesSidebarTopics = ({ setPageNumber, topics }) => {
    return (
        <div className="Sidebar__topics">
            <div className="Sidebar__micro-card">Topics</div>
            <ul>
                <li>
                    <Link to="/articles/?topic=all">
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
        </div>
    );
};

export default ArticlesSidebarTopics;
