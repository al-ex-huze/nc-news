import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { TiThumbsDown, TiThumbsUp, TiCancel } from "react-icons/ti";

import { getArticleById, patchArticleVotes } from "../api";

const ArticlesSingleCard = () => {
    const { article_id } = useParams();
    const [singleArticle, setSingleArticle] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [optimisticVotes, setOptimisticVotes] = useState(0);
    const [error, setError] = useState(null);

    useEffect(() => {
        // console.log("Articles-Single-Effect")
        setIsLoading(true);
        getArticleById(article_id)
            .then((article) => {
                setSingleArticle(article);
                setOptimisticVotes(article.votes);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [article_id]);


    const handleDownVote = () => {
        setOptimisticVotes(optimisticVotes - 1);
        setError(null);
        patchArticleVotes(-1, singleArticle.article_id)
        .catch((error) => {
            setOptimisticVotes(singleArticle.votes);
            setError("Vote Not Registered - Try Refreshing Page");
        });
    };
    const handleUpVote = () => {
        setOptimisticVotes(optimisticVotes + 1);
        setError(null);
        patchArticleVotes(1, singleArticle.article_id)
        .catch((error) => {
            setOptimisticVotes(singleArticle.votes);
            setError("Vote Not Registered - Try Refreshing Page");
        });
    };

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
            <p>{singleArticle.body}</p>
            <img src={singleArticle.article_img_url} />
            <h3>{singleArticle.created_at}</h3>
            <button onClick={handleDownVote}>
                <TiThumbsDown />
            </button>
            <button>{optimisticVotes} Votes</button>
            <button onClick={handleUpVote}>
                <TiThumbsUp />
            </button>
            {error ? <p><TiCancel /> {error} <TiCancel /></p> : null}
        </div>
    );
};

export default ArticlesSingleCard;
;