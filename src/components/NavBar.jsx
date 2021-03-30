import React, { Component } from "react";
import "../NavBar.css";
import * as api from "../api";
import { Link } from "@reach/router";

class NavBar extends Component {
	state = {
		topics: [],
		selected: "all",
	};

	componentDidMount() {
		this.fetchTopics();
	}

	render() {
		const { topics, selected } = this.state;
		return (
			<nav className="navbar">
				<Link to={"/"}>
					<button
						id="all-btn"
						onClick={(event) => {
							this.handleClick(event);
						}}
					>
						All
					</button>
				</Link>
				{topics.map((topic) => {
					return (
						<Link to={`/topic/${topic.slug}`}>
							<button className={selected === topic.slug && "selected"} id={`${topic.slug}-btn`} onClick={this.handleClick}>
								{topic.slug}
							</button>
						</Link>
					);
				})}
			</nav>
		);
	}

	handleClick = (event) => {
		this.setState({ selected: event.target.value });
	};
	fetchTopics() {
		api.getTopics().then((topics) => {
			this.setState({ topics });
		});
	}
}

export default NavBar;
