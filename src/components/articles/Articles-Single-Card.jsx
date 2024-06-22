import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TiThumbsDown, TiThumbsUp, TiCancel } from "react-icons/ti";
import { UserContext } from "../../contexts/User-Context";
import { getArticleById, patchArticleVotes } from "../../api";
import { formatDate } from "../../utils/formatDate";

import ErrorComponent from "../Error-Component";

const ArticlesSingleCard = ({
    singleArticleError,
    setSingleArticleError,
    setShowSortBy,
}) => {
    const [voteError, setVoteError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const { userLoggedIn, setUserLoggedIn } = useContext(UserContext);
    const { article_id } = useParams();

    const [singleArticle, setSingleArticle] = useState([]);
    const [optimisticVotes, setOptimisticVotes] = useState(0);

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
                setSingleArticleError(error);
            });
    }, [article_id]);

    const handleDownVote = () => {
        if (userLoggedIn.username !== undefined) {
            if (!userLoggedIn.votedOnArticle.includes(article_id)) {
                setOptimisticVotes(optimisticVotes - 1);
                setVoteError(null);
                patchArticleVotes(-1, singleArticle.article_id)
                    .then(userLoggedIn.votedOnArticle.push(article_id))
                    .catch((error) => {
                        setOptimisticVotes(singleArticle.votes);
                        setVoteError(
                            " Vote Not Registered - Something Went Wrong "
                        );
                    });
            }
        }
    };
    const handleUpVote = () => {
        if (userLoggedIn.username !== undefined) {
            if (!userLoggedIn.votedOnArticle.includes(article_id)) {
                setOptimisticVotes(optimisticVotes + 1);
                setVoteError(null);
                patchArticleVotes(1, singleArticle.article_id)
                    .then(userLoggedIn.votedOnArticle.push(article_id))
                    .catch((error) => {
                        setOptimisticVotes(singleArticle.votes);
                        setVoteError(
                            " Vote Not Registered - Something Went Wrong "
                        );
                    });
            }
        }
    };

    if (singleArticleError)
        return <ErrorComponent error={singleArticleError} />;
    if (isLoading) return <p>Loading Article</p>;
    return (
        <div className="Content__single-card">
            <div className="Content__single-card-micro-container">
                <h3>{singleArticle.title}</h3>
            </div>
            <div className="Content__single-card-micro-container">
                <p>{singleArticle.body}</p>
            </div>
            <img src={singleArticle.article_img_url} alt="Article Image" />
            <div className="Content__single-card-micro-container">
                <button>
                    <h3>By {singleArticle.author}</h3>
                </button>
                <button>
                    <h3>In {singleArticle.topic}</h3>
                </button>
            </div>
            <div className="Content__single-card-micro-container">
                <h3>{formatDate(singleArticle.created_at)}</h3>
            </div>
            <div className="Content__single-card-vote-micro-container">
                {userLoggedIn.username !== undefined ?
                <button aria-label="Down Vote" onClick={handleDownVote}>
                    <TiThumbsDown />
                </button> : null}
                <div className="Content__micro-card">
                    {optimisticVotes} Votes
                </div>
                {userLoggedIn.username !== undefined ?
                <button aria-label="Up Vote" onClick={handleUpVote}>
                    <TiThumbsUp />
                </button> : null}
            </div>
            {voteError ? (
                <p>
                    <TiCancel /> {voteError} <TiCancel />
                </p>
            ) : null}
        </div>
    );
};

export default ArticlesSingleCard;
