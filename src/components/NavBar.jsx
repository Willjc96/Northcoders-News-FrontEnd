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
				<ul>
					<li>
						<Link to={"/"}>
							<button>All</button>
						</Link>
					</li>
					<li>
						<Link to={"/topic/coding"}>
							<button>All</button>
						</Link>
					</li>
				</ul>
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
