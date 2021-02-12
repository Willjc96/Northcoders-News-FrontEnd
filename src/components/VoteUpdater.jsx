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
				<p>Like this {this.props.parent}?</p>
				<button
					disabled={voteChange === 1}
					onClick={() => {
						this.handleClick(1);
					}}
				>
					Yes
				</button>
				<p>{votes + voteChange}</p>
				<button
					disabled={voteChange === -1}
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
		const { id, parent } = this.props;
		this.setState((currentState) => {
			return { voteChange: currentState.voteChange + voteNumber };
		});
		api.patchVotes(id, voteNumber, parent).catch(console.log);
	};
}

export default VoteUpdater;
