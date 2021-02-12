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
		if (this.state.isLoading) {
			return <p>Loading...</p>;
		}
		return (
			<main className="article-page">
				<h2>{this.state.article.title}</h2>
				<p>{this.state.article.topic}</p>
				<p>{this.state.article.body}</p>
				<Link to={`/articles/${this.state.article.article_id}/comments`}>
					<button className="comments-btn">Comments</button>
				</Link>
				<VoteUpdater
					votes={this.state.article.votes}
					id={this.state.article.article_id}
					article={true}
				/>
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
