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
				<Link to={"/topic/coding"}>
					<button
						id="coding-btn"
						onClick={() => {
							this.handleClick();
						}}
					>
						Coding
					</button>
				</Link>
				<Link to={"/topic/football"}>
					<button
						id="football-btn"
						onClick={() => {
							this.handleClick();
						}}
					>
						Football
					</button>
				</Link>
				<Link to={"/topic/cooking"}>
					<button
						id="cooking-btn"
						onClick={() => {
							this.handleClick();
						}}
					>
						Cooking
					</button>
				</Link>
			</nav>
		);
	}

	handleClick() {
		console.log("CLICKED");
	}

	fetchTopics() {
		api.getTopics().then((topics) => {
			this.setState({ topics });
		});
	}
}

export default NavBar;
