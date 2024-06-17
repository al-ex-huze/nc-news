import { useEffect, useState } from "react";
import { getArticles } from "../api";

const ArticlesList = ({ articles, setArticles}) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getArticles()
        .then(({ articles }) => {
            setArticles(articles);
            setIsLoading(false);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])

    if (isLoading) return <p>Loading Articles</p>
    return (
        <div className="Content">
            <ul>
                {articles.map((article) => {
                    return (
                        <li key={article.article_id}>
                            <button className="Content__list-card">
                                <h3>{article.title}</h3>
                                {article.topic}
                                <img src={article.article_img_url}/>
                                {article.author}
                                <h3>{article.votes}</h3>
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ArticlesList;