import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ArticlesSingleAddComment from "./Articles-Single-Add-Comment";
import ArticlesSingleCommentsCards from "./Articles-Single-Comments-Cards";

import ErrorComponent from "../Error-Component";

import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";

import { getCommentsByArticleId } from "../../api";

const ArticlesSingleComments = ({
    singleArticleError,
    limit,
    pageNumber,
    setPageNumber,
    totalCount,
    setTotalCount,
    articleComments,
    setArticleComments,
}) => {
    const [commentsError, setCommentsError] = useState(null);
    const { article_id } = useParams();

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getCommentsByArticleId(article_id, limit, pageNumber)
            .then((comments) => {
                setArticleComments(comments);
                comments.length === 0
                    ? setTotalCount(0)
                    : setTotalCount(comments[0].total_count);
                setIsLoading(false);
            })
            .catch((error) => {
                setCommentsError(error);
            });
    }, [limit, pageNumber]);

    const handlePageLeft = () => {
        if (pageNumber > 1) setPageNumber(pageNumber - 1);
    };

    const handlePageRight = () => {
        if (pageNumber < totalCount / limit) setPageNumber(pageNumber + 1);
    };

    if (singleArticleError) return null;
    if (commentsError) return <ErrorComponent error={commentsError} />;
    if (isLoading) return <p>Loading Comments</p>;
    if (articleComments.length === 0) {
        return (
            <>
                <p>No Comments Yet</p>
                <ArticlesSingleAddComment
                    articleComments={articleComments}
                    setArticleComments={setArticleComments}
                />
            </>
        );
    }
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
            <div className="Content__pagination-container">
                <ul>
                    <li>
                        <button
                            aria-label="Page Left"
                            className="Content__pagination-button"
                            onClick={handlePageLeft}
                        >
                            <TiChevronLeftOutline />
                        </button>
                    </li>
                    <li>
                        <div className="Content__pagination-micro-card">
                            Page {pageNumber} of {Math.ceil(totalCount / limit)}
                        </div>
                    </li>
                    <li>
                        <button
                            aria-label="Page Right"
                            className="Content__pagination-button"
                            onClick={handlePageRight}
                        >
                            <TiChevronRightOutline />
                        </button>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default ArticlesSingleComments;
