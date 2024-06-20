import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TiThumbsDown, TiThumbsUp, TiCancel } from "react-icons/ti";
import { UserContext } from "../contexts/User-Context";
import { getArticleById, patchArticleVotes } from "../api";

const ArticlesSingleCard = ({ setShowSortBy }) => {
    const { article_id } = useParams();
    const [singleArticle, setSingleArticle] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { userLoggedIn, setUserLoggedIn } = useContext(UserContext);
    const [optimisticVotes, setOptimisticVotes] = useState(0);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        setShowSortBy(false);
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
        if (!userLoggedIn.votedOnArticle.includes(article_id)) {
            setOptimisticVotes(optimisticVotes - 1);
            setError(null);
            patchArticleVotes(-1, singleArticle.article_id)
                .then(userLoggedIn.votedOnArticle.push(article_id))
                .catch((error) => {
                    setOptimisticVotes(singleArticle.votes);
                    setError(" Vote Not Registered - Something Went Wrong ");
                });
        }
    };
    const handleUpVote = () => {
        if (!userLoggedIn.votedOnArticle.includes(article_id)) {
            setOptimisticVotes(optimisticVotes + 1);
            setError(null);
            patchArticleVotes(1, singleArticle.article_id)
                .then(userLoggedIn.votedOnArticle.push(article_id))
                .catch((error) => {
                    setOptimisticVotes(singleArticle.votes);
                    setError(" Vote Not Registered - Something Went Wrong ");
                });
        }
    };

    if (isLoading) return <p>Loading Article</p>;
    return (
        <div className="Content__single-card">
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
            <div className="Content__micro-card-container">
                <button onClick={handleDownVote}>
                    <TiThumbsDown />
                </button>
                <div className="Content__micro-card">
                    {optimisticVotes} Votes
                </div>
                <button onClick={handleUpVote}>
                    <TiThumbsUp />
                </button>
            </div>
            {error ? (
                <p>
                    <TiCancel /> {error} <TiCancel />
                </p>
            ) : null}
        </div>
    );
};

export default ArticlesSingleCard;
