import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { TiCancel, TiTrash } from "react-icons/ti";
import { UserContext } from "../../contexts/User-Context";
import { deleteArticleComment } from "../../api";
import { timeAgo } from "../../utils/timeAgo";

const ArticlesSingleCommentsCards = ({ comment }) => {
    const { userLoggedIn, setUserLoggedIn } = useContext(UserContext);

    const [isDeleting, setIsDeleting] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false);
    const [error, setError] = useState(null);

    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

    const toggleDeleteConfirm = () => {
        setShowDeleteConfirm(!showDeleteConfirm);
    };

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
                setError(" Delete Unsuccessful - Something Went Wrong");
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
                {timeAgo(comment.created_at)}
                <Link to={`/users/${comment.author}`}>
                    <button>By {comment.author}</button>
                </Link>
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
                            onClick={toggleDeleteConfirm}
                        >
                            Delete Comment
                        </button>
                    ) : null}
                    {showDeleteConfirm && (
                        <button
                            className="Content__delete-confirm-button"
                            onClick={handleDelete}
                        >
                            Confirm Delete
                        </button>
                    )}
                </div>
            </div>
        </li>
    );
};

export default ArticlesSingleCommentsCards;
