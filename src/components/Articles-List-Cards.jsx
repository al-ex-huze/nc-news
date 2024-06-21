import { Link } from "react-router-dom";

const ArticlesListCards = ({ article }) => {
    return (
        <li key={article.article_id}>
            <Link to={`/articles/${article.article_id}`}>
                <button className="Content__list-card">
                    <h3>{article.title}</h3>
                    <h3>{article.created_at}</h3>
                    {article.topic}
                    <img src={article.article_img_url} alt="Article Image"/>
                    {article.author}
                    <h3>{article.comment_count} Comments</h3>
                    <h3>{article.votes} Votes</h3>
                </button>
            </Link>
        </li>
    );
};

export default ArticlesListCards;
