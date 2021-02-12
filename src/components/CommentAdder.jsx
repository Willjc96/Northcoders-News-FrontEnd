import React, { Component } from "react";
import * as api from "../api";

class CommentAdder extends Component {
	state = {
		comment: "",
	};

	render() {
		const { comment } = this.state;
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type="text"
					className="submit-comment"
					placeholder="Type a comment..."
					size="10"
					onChange={(event) => this.setState({ comment: event.target.value })}
					value={comment}
				/>
				<br />
				<input type="submit"></input>
			</form>
		);
	}
	handleSubmit = (event) => {
		event.preventDefault();
		const { comment } = this.state;
		const { article_id } = this.props;
		const username = "tickle122";
		api
			.postComment(article_id, username, comment)
			.then((comment) => {
				this.props.addComment(comment);
				this.setState({ comment: "" });
			})
			.catch((error) => console.dir(error));
	};
}

export default CommentAdder;
