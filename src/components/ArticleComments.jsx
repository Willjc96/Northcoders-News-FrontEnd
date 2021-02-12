import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../api";
import "../App.css";
import VoteUpdater from "./VoteUpdater";

class ArticleComments extends Component {
	state = {
		comments: [],
	};

	componentDidMount() {
		this.fetchComments(this.props.article_id);
	}

	render() {
		return (
			<main className="comments-section">
				<Link
					to={`/articles/${this.props.article_id}`}
					id="return-to-article-link"
				>
					<button className="return-to-article">Back to article</button>
				</Link>
				<form>
					<input
						type="text"
						className="submit-comment"
						placeholder="Type a comment..."
						size="10"
					/>
					<br />
					<input type="submit"></input>
				</form>
				<section className="comments-list">
					{this.state.comments.map((comment) => {
						return (
							<p className="comment-card">
								{comment.comment_id}
								<br></br>
								{comment.body}
								<p className="comment-votes">{comment.votes}</p>
								<VoteUpdater votes={comment.votes} id={comment.comment_id} />
							</p>
						);
					})}
				</section>
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
