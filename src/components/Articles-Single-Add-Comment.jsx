import { useState } from "react";
import { useParams } from "react-router-dom";

import { TiCancel } from "react-icons/ti";

import { postArticleComment } from "../api";

const ArticlesSingleAddComment = ({ articleComments, setArticleComments }) => {
    const { article_id } = useParams();

    const [usernameInput, setUsernameInput] = useState("");
    const [bodyInput, setBodyInput] = useState("");

    const [isPosting, setIsPosting] = useState(false);
    const [error, setError] = useState(null);

    const handleCommentSubmit = (event) => {
        event.preventDefault();
        setIsPosting(true);
        const newComment = {
            username: usernameInput,
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
            setError("Post Unsuccessful - Try Refreshing the Page");
        });
    };

    if (isPosting) return <p>Please Wait</p>;
    return (
        <div className="Content__comment-form">
            <form onSubmit={handleCommentSubmit}>
                <h3>Add New Comment</h3>
                <ul>
                    <li>
                        <label>
                            Username 
                            <input
                                required
                                value={usernameInput}
                                onChange={(event) => {
                                    setUsernameInput(event.target.value);
                                }}
                            />
                        </label>
                    </li>
                    <li>
                        <label>
                            Comment 
                            <input
                                className="Content__comment-input"
                                required
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
