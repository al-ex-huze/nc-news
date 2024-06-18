import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ArticlesSingleAddComment from "./Articles-Single-Add-Comment";
import ArticlesSingleCommentsCards from "./Articles-Single-Comments-Cards";

import { getCommentsByArticleId } from "../api";

const ArticlesSingleComments = ({ articleComments, setArticleComments }) => {
    const { article_id } = useParams();

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getCommentsByArticleId(article_id)
            .then((comments) => {
                setArticleComments(comments);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    if (isLoading) return <p>Loading Comments</p>;
    return (
        <>
            <ArticlesSingleAddComment
                articleComments={articleComments}
                setArticleComments={setArticleComments}
            />
            <ul className="Content__comments">
                {articleComments.map((comment) => {
                    return (
                        <ArticlesSingleCommentsCards
                            comment={comment}
                            key={comment.comment_id}
                        />
                    );
                })}
            </ul>
        </>
    );
};

export default ArticlesSingleComments;
