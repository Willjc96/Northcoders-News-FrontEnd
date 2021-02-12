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
			<div className="VoteUpdater">
				<p>Like this {this.props.article ? "article" : "comment"}?</p>
				<button
					onClick={() => {
						this.handleClick(1);
					}}
				>
					Yes
				</button>
				<p>{votes + voteChange}</p>
				<button
					onClick={() => {
						this.handleClick(-1);
					}}
				>
					No
				</button>
			</div>
		);
	}
	handleClick = (voteNumber) => {
		const { id } = this.props;
		this.setState((currentState) => {
			return { voteChange: currentState.voteChange + voteNumber };
		});
		api.patchVotes(id, voteNumber).catch(console.log);
	};
}

export default VoteUpdater;
