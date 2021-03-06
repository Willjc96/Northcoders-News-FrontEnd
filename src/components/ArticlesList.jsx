import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../api";

class ArticlesList extends Component {
	state = {
		articles: [],
		isLoading: true,
	};

	componentDidMount() {
		this.fetchArticles(this.props.topic);
	}

	componentDidUpdate(prevProps) {
		const { topic } = this.props;
		if (topic != prevProps.topic) {
			this.fetchArticles(topic);
		}
	}

	render() {
		const { articles } = this.state;
		if (this.state.isLoading) {
			return (
				<>
					<p>Loading articles...</p>
					<div className="loading-screen"></div>
				</>
			);
		}
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
