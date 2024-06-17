import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getArticleById } from "../api";

const ArticlesSingleCard = () => {
    const { article_id } = useParams();
    const [singleArticle, setSingleArticle] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // console.log("Articles-Single-Effect")
        setIsLoading(true);
        getArticleById(article_id)
            .then((article) => {
                setSingleArticle(article);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [article_id]);

    if (isLoading) return <p>Loading Article</p>;
    return (
        <div className="Content__Single-card">
            <h3>{singleArticle.title}</h3>
            <button>
                <h3>By {singleArticle.author}</h3>
            </button>
            <button>
                <h3>In {singleArticle.topic}</h3>
            </button>
            <p>
            {singleArticle.body}
            </p>
            <img src={singleArticle.article_img_url} />
            <h3>{singleArticle.created_at}</h3>
            <button>{singleArticle.comment_count} Votes</button>
        </div>
    );
};

export default ArticlesSingleCard;
