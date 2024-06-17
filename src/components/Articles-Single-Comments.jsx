import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ArticlesSingleCommentsCards from "./Articles-Single-Comments-Cards";

import { getCommentsByArticleId } from "../api";

const ArticlesSingleComments = () => {
    const { article_id } = useParams();
    const [articleComments, setArticleComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log("Single-Comments-Effect");
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
        <div className="Content__Single-comments-cards">
            <ul>
                {articleComments.map((comment) => {
                    return (
                        <ArticlesSingleCommentsCards
                            comment={comment}
                            key={comment.comment_id}
                        />
                    );
                })}
            </ul>
        </div>
    );
};

export default ArticlesSingleComments;
