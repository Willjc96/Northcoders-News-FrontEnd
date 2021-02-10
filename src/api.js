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
	const topicQuery = topic ? `${url}?topic=${topic}` : url;

	return axios.get(topicQuery).then(({ data }) => {
		return data.articles;
	});
};

export const getArticleById = (article_id) => {
	const url = `https://nc-news-api-front-end.herokuapp.com/api/articles/${article_id}`;

	return axios.get(url).then(({ data }) => {
		return data.article;
	});
};
// query does not execute when navigating from the "All" topics page
// page snaps to a part of the page when navigating
