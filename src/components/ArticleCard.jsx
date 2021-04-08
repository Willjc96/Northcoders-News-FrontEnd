import React from "react";
import { Link } from "@reach/router";

const ArticleCard = ({ title, article_id, created_at, votes, topic, author, comment_count }) => {
	return (
		<section className="article-card">
			<h2 className="cardTitle">{title}</h2>
			<p className="cardTopic">Topic: {topic[0].toUpperCase() + topic.slice([1])}</p>
			<p>Author: {author[0].toUpperCase() + author.slice([1])}</p>
			<Link to={`/articles/${article_id}`}>
				<button className="readArticle-btn">Read Article</button>
			</Link>
		</section>
	);
};

export default ArticleCard;
