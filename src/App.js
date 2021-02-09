import "./App.css";
import Title from "./components/Title";
import Nav from "./components/NavBar";
import ArticlesList from "./components/ArticlesList";
import { Router } from "@reach/router";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Title />
				<Nav />
				<Router>
					<ArticlesList path="/" />
					<ArticlesList path="/topic/:topic" />
				</Router>
			</header>
		</div>
	);
}

export default App;
