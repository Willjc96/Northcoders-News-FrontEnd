import React, { Component } from "react";
import * as api from "../api";

class NavBar extends Component {
	state = {
		articles: [],
	};

	componentDidMount() {
		this.fetchArticles();
	}

	render() {
		return <nav className="navbar">NavBar</nav>;
	}

	fetchArticles() {
		api.getArticles().then((articles) => {
			this.setState({ articles });
		});
	}
}

export default NavBar;
