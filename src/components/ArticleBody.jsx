import React, { Component } from "react";
import * as api from "../api";
import { Link } from "@reach/router";

class ArticleBody extends Component {
	state = {
		article: null,
		isLoading: true,
	};

	componentDidMount() {
		this.fetchArticleById();
	}

	render() {
		if (this.state.isLoading === false) {
			return (
				<main className="articlePage">
					<h2>{this.state.article.title}</h2>
					<p>{this.state.article.topic}</p>
				</main>
			);
		}
		return <p>Loading...</p>;
	}

	fetchArticleById() {
		api.getArticleById(this.props.article_id).then((article) => {
			this.setState({ article, isLoading: false });
		});
	}
}

export default ArticleBody;
