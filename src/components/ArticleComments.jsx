import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../api";
import "../App.css";

class ArticleComments extends Component {
	state = {
		comments: [],
	};

	componentDidMount() {
		this.fetchComments(this.props.article_id);
	}

	render() {
		return (
			<main>
				{this.state.comments.map((comment) => {
					return <p className="comment-card">{comment.body}</p>;
				})}
			</main>
		);
	}

	fetchComments(article_id) {
		api.getComments(article_id).then(({ comments }) => {
			this.setState({ comments });
		});
	}
}

export default ArticleComments;
