import React from "react";

const ArticleCard = ({
	article_title,
	article_id,
	created_at,
	votes,
	topic,
	author,
	comment_count,
}) => {
	return (
		<section className="article-card">
			<h2>{article_title}</h2>
			<p>{topic}</p>
			<p>{author}</p>
			<p>{article_id}</p>
		</section>
	);
};

export default ArticleCard;
