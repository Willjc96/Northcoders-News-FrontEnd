import React from "react";
import * as api from "../api";

const VoteUpdater = ({ votes, id }) => {
	const handleClick = (voteChange) => {
		api.patchVotes(id, voteChange).catch(console.log);
	};

	return (
		<div className="VoteUpdater">
			<p>Like this article?</p>
			<button
				onClick={() => {
					handleClick(1);
				}}
			>
				Yes
			</button>
			<p>{votes}</p>
			<button
				onClick={() => {
					handleClick(-1);
				}}
			>
				No
			</button>
		</div>
	);
};

export default VoteUpdater;
