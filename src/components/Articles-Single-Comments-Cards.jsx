import { useContext, useState } from "react";
import { TiCancel, TiTrash } from "react-icons/ti";
import { UserContext } from "../contexts/User-Context";
import { deleteArticleComment } from "../api";
import { GiConsoleController } from "react-icons/gi";

const ArticlesSingleCommentsCards = ({ comment }) => {
    const { userLoggedIn, setUserLoggedIn } = useContext(UserContext);

    const [isDeleting, setIsDeleting] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false);
    const [error, setError] = useState(null);

    const handleDelete = () => {
        setIsDeleting(true);
        deleteArticleComment(comment.comment_id)
            .then((confirmation) => {
                if (confirmation) {
                    setIsDeleting(false);
                    setIsDeleted(true);
                }
            })
            .catch((error) => {
                setIsDeleting(false);
                setError(" Delete Unsuccessful - Try Refreshing the Page ");
            });
    };

    if (isDeleting)
        return <div className="Content__single-comment-card">Please Wait</div>;
    if (isDeleted)
        return (
            <div className="Content__single-comment-card">Comment Deleted</div>
        );

    return (
        <li key={comment.comment_id}>
            <div className="Content__single-comment-card">
                <p>{comment.body}</p>
                {comment.created_at}
                <button>By {comment.author}</button>
                <div className="Content__micro-card-container">
                    {comment.votes} Votes
                </div>
                {error ? (
                    <p>
                        <TiCancel /> {error} <TiCancel />
                    </p>
                ) : null}
                <div className="Content__delete-button-container">
                    {userLoggedIn.username === comment.author ? (
                        <button
                            className="Content__delete-button"
                            onClick={handleDelete}
                        >
                            Delete
                        </button>
                    ) : null}
                </div>
            </div>
        </li>
    );
};

export default ArticlesSingleCommentsCards;
