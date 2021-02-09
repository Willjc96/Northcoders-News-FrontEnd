import "./App.css";
import Title from "./components/Title";
import Nav from "./components/NavBar";
import ArticlesList from "./components/ArticlesList";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Title />
				<Nav />
				<ArticlesList />
			</header>
		</div>
	);
}

export default App;
