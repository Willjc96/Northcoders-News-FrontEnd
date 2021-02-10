import React from "react";
import { Link } from "@reach/router";
import ArticleBody from "./ArticleBody";

const ArticleCard = ({
	title,
	article_id,
	created_at,
	votes,
	topic,
	author,
	comment_count,
}) => {
	return (
		<section className="article-card">
			<h2>{title}</h2>
			<p>Topic: {topic}</p>
			<p>Author: {author}</p>
			<Link to={`/articles/${article_id}`}>
				<button>Read Article</button>
			</Link>
		</section>
	);
};

export default ArticleCard;
