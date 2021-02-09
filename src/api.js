import axios from "axios";

export const getTopics = () => {
	return axios
		.get("https://nc-news-api-front-end.herokuapp.com/api/topics")
		.then(({ data }) => {
			return data.topics;
		});
};

export const getArticles = (topic) => {
	const url = "https://nc-news-api-front-end.herokuapp.com/api/articles";
	const queryTern = topic ? `${url}?topic=${topic}` : url;

	return axios.get(queryTern).then(({ data }) => {
		return data.articles;
	});
};
