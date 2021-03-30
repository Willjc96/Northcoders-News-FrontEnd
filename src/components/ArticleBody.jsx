import React, { Component } from "react";
import * as api from "../api";
import { Link } from "@reach/router";
import VoteUpdater from "./VoteUpdater";

class ArticleBody extends Component {
	state = {
		article: null,
		isLoading: true,
	};

	componentDidMount() {
		this.fetchArticleById();
	}

	render() {
		const { article } = this.state;
		if (this.state.isLoading) {
			return (
				<>
					<p>Loading...</p>
					<div className="loading-screen"></div>
				</>
			);
		}
		return (
			<main className="article-page">
				<h2>{article.title}</h2>
				<p>{article.topic}</p>
				<p>{article.body}</p>
				<Link to={`/articles/${article.article_id}/comments`}>
					<button className="comments-btn">Comments</button>
				</Link>
				<VoteUpdater votes={article.votes} id={article.article_id} parent="article" />
			</main>
		);
	}

	fetchArticleById() {
		api.getArticleById(this.props.article_id).then((article) => {
			this.setState({ article, isLoading: false });
		});
	}
}

export default ArticleBody;
