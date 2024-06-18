const ArticlesSingleCommentsCards = ( { comment }) => {

    return (
        <li key={comment.comment_id}>
                <div className="Content__single-comment-card">
                    <p>{comment.body}</p>
                    {comment.created_at}
                    <button>By {comment.author}</button>
                    <button>{comment.votes} Votes</button>
                </div>
        </li>
    );
}

export default ArticlesSingleCommentsCards