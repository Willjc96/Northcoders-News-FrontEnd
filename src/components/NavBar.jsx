import React, { Component } from "react";
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
					<button>All</button>
				</Link>
				<Link to={"/topic/coding"}>
					<button>Coding</button>
				</Link>
				<Link to={"/topic/football"}>
					<button>Football</button>
				</Link>
				<Link to={"/topic/cooking"}>
					<button>Cooking</button>
				</Link>
			</nav>
		);
	}

	fetchTopics() {
		api.getTopics().then((topics) => {
			this.setState({ topics });
		});
	}
}

export default NavBar;
