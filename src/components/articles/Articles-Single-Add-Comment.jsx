import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { TiCancel } from "react-icons/ti";
import { UserContext } from "../../contexts/User-Context";
import { postArticleComment } from "../../api";

const ArticlesSingleAddComment = ({ articleComments, setArticleComments }) => {
    const { article_id } = useParams();

    const { userLoggedIn, setUserLoggedIn } = useContext(UserContext);

    const [usernameInput, setUsernameInput] = useState("");
    const [bodyInput, setBodyInput] = useState("");

    const [isPosting, setIsPosting] = useState(false);
    const [error, setError] = useState(null);

    const handleCommentSubmit = (event) => {
        event.preventDefault();
        setIsPosting(true);
        const newComment = {
            username: userLoggedIn.username,
            body: bodyInput,
        };
        postArticleComment(newComment, article_id)
            .then((response) => {
                setArticleComments((articleComments) => [
                    response,
                    ...articleComments,
                ]);
                setUsernameInput("");
                setBodyInput("");
                setIsPosting(false);
            })
            .catch((error) => {
                setError(" Post Unsuccessful - Something Went Wrong ");
            });
    };
    if (userLoggedIn.username === undefined)
        return (
            <Link to="/users">
                <div className="Content__comment-form-container">
                    <button>
                        <p>Login or Register to Comment & Vote</p>
                    </button>
                </div>
            </Link>
        );
    if (isPosting) return <p>Please Wait</p>;
    return (
        <div className="Content__comment-form-container">
            <form onSubmit={handleCommentSubmit}>
                <h3>Post Comment</h3>
                <div className="Content__single-card-comment-micro-container">
                    <img src={userLoggedIn.avatar_url} />
                    <p>{userLoggedIn.username}</p>
                </div>
                <label>
                    <input
                        className="Content__comment-input"
                        required
                        placeholder="Type comment..."
                        value={bodyInput}
                        onChange={(event) => {
                            setBodyInput(event.target.value);
                        }}
                    />
                </label>
                <button type="submit">Post</button>
            </form>
            {error ? (
                <p>
                    <TiCancel /> {error} <TiCancel />
                </p>
            ) : null}
        </div>
    );
};

export default ArticlesSingleAddComment;
