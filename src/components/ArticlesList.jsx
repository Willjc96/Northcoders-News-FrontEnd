import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../api";

class ArticlesList extends Component {
	state = {
		articles: [
			{
				article_id: 20,
				article_title: "Is Will the best?",
				topic: "Documentary",
				author: "Me",
			},
		],
		isLoading: true,
	};

	componentDidMount() {
		this.fetchArticles();
	}

	render() {
		const { articles } = this.state;
		return (
			<main className="articlesList">
				{articles.map((article) => {
					return <ArticleCard key={article.article_id} {...article} />;
				})}
			</main>
		);
	}
	fetchArticles() {
		api.getArticles().then((articles) => {
			this.setState({ articles, isLoading: false });
		});
	}
}

export default ArticlesList;
