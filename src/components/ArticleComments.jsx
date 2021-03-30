import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../api";
import VoteUpdater from "./VoteUpdater";
import CommentAdder from "./CommentAdder";

class ArticleComments extends Component {
	state = {
		comments: [],
		isLoading: true,
	};

	componentDidMount() {
		this.fetchComments(this.props.article_id);
	}

	render() {
		const { isLoading } = this.state;
		const { article_id } = this.props;
		if (isLoading) {
			return <p className="loading">Loading comments...</p>;
		}
		return (
			<main className="comments-section">
				<Link to={`/articles/${this.props.article_id}`} id="return-to-article-link">
					<button className="return-to-article">Back to article</button>
				</Link>
				<>
					<CommentAdder article_id={article_id} addComment={this.addComment} />
				</>
				<section className="comments-list">
					{this.state.comments.map((comment) => {
						return (
							<p className="comment-card">
								{comment.comment_id}
								<br></br>
								{comment.body}
								<p className="comment-votes">
									<VoteUpdater votes={comment.votes} id={comment.comment_id} parent="comment" />
								</p>
							</p>
						);
					})}
				</section>
			</main>
		);
	}

	addComment = (newComment) => {
		this.setState((currentState) => {
			return { comments: [newComment, ...currentState.comments] };
		});
	};

	fetchComments(article_id) {
		api.getComments(article_id).then(({ comments }) => {
			this.setState({ comments, isLoading: false });
		});
	}
}

export default ArticleComments;
