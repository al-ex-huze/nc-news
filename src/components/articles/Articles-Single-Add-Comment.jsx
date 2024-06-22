import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
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

    if (isPosting) return <p>Please Wait</p>;
    return (
        <div className="Content__comment-form">
            <form onSubmit={handleCommentSubmit}>
                <h3>Add New Comment</h3>
                <ul>
                    <li>Logged in as {userLoggedIn.username}</li>
                    <li>
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
                    </li>
                </ul>
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
