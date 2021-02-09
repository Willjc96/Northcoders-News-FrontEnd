import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../api";

class ArticlesList extends Component {
	state = {
		articles: [],
		isLoading: true,
	};

	componentDidMount() {
		this.fetchArticles();
	}

	componentDidUpdate(prevProps) {
		const { topic } = this.props;
		if (topic != prevProps.topic) {
			this.fetchArticles(topic);
		}
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
	fetchArticles(topic) {
		api.getArticles(topic).then((articles) => {
			this.setState({ articles, isLoading: false });
		});
	}
}

export default ArticlesList;
