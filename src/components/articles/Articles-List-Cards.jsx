import { Link } from "react-router-dom";

import { timeAgo } from "../../utils/timeAgo";

const ArticlesListCards = ({ article }) => {
    return (
        <li key={article.article_id}>
            <Link to={`/articles/${article.article_id}`}>
                <button className="Content__list-card">
                    <div className="Content__list-card-micro-container">
                        <h3>{article.title}</h3>
                    </div>
                    <div className="Content__list-card-micro-container">
                        <div className="Content__list-card-author">
                            By {article.author}
                        </div>
                    </div>
                    <div className="Content__list-card-micro-container">
                        <div className="Content__list-card-vote-count">
                            {article.votes} Votes
                        </div>
                    </div>
                    <img src={article.article_img_url} alt="Article Image" />
                    <div className="Content__list-card-micro-container">
                        <div className="Content__list-card-time">
                            {timeAgo(article.created_at)}
                        </div>
                        <div className="Content__list-card-comment-count">
                            {article.comment_count} Comments
                        </div>
                    </div>
                    <div className="Content__list-card-micro-container">
                        <div className="Content__list-card-time">
                            in {article.topic}
                        </div>
                    </div>
                </button>
            </Link>
        </li>
    );
};

export default ArticlesListCards;
