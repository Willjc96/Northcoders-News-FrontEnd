import React, { Component } from "react";
import * as api from "../api";

class VoteUpdater extends Component {
	state = {
		voteChange: 0,
	};

	render() {
		const { votes } = this.props;
		const { voteChange } = this.state;
		return (
			<div className="voteUpdater">
				{/* <p>Like this {this.props.parent}?</p> */}
				<button
					className="likeBtn"
					disabled={voteChange === 1}
					onClick={() => {
						this.handleClick(1);
					}}
				>
					Like
				</button>
				<p className="voteCount">{votes + voteChange}</p>
				<button
					className="dislikeBtn"
					disabled={voteChange === -1}
					onClick={() => {
						this.handleClick(-1);
					}}
				>
					Dislike
				</button>
			</div>
		);
	}
	handleClick = (voteNumber) => {
		const { id, parent } = this.props;
		this.setState((currentState) => {
			return { voteChange: currentState.voteChange + voteNumber };
		});
		api.patchVotes(id, voteNumber, parent).catch(console.log);
	};
}

export default VoteUpdater;
