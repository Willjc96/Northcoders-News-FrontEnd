import React, { Component } from "react";
import "../NavBar.css";
import * as api from "../api";
import { Link } from "@reach/router";

class NavBar extends Component {
	state = {
		topics: [],
	};

	componentDidMount() {
		this.fetchTopics();
	}

	render() {
		const { topics } = this.state;
		return (
			<nav className="navbar">
				<Link to={"/"}>
					<button
						id="all-btn"
						onClick={() => {
							this.handleClick();
						}}
					>
						All
					</button>
				</Link>
				{topics.map((topic) => {
					return (
						<Link to={`/topic/${topic.slug}`}>
							<button
								id={`${topic.slug}}-btn`}
								onClick={() => {
									this.handleClick();
								}}
							>
								{topic.slug}
							</button>
						</Link>
					);
				})}
			</nav>
		);
	}

	handleClick() {
		console.log("CLICKED");
		this.state.selectedTopic = "selected";
	}

	fetchTopics() {
		api.getTopics().then((topics) => {
			this.setState({ topics });
		});
	}
}

export default NavBar;
