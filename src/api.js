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

export const getComments = (article_id) => {
	const url = `https://nc-news-api-front-end.herokuapp.com/api/articles/${article_id}/comments`;

	return axios.get(url).then(({ data }) => {
		return data;
	});
};

export const patchVotes = (id, voteChange, placeOfVote) => {
	const url = `https://nc-news-api-front-end.herokuapp.com/api/${placeOfVote}s/${id}`;
	return axios.patch(url, { inc_votes: voteChange });
};

export const postComment = (article_id, username, comment) => {
	const url = `https://nc-news-api-front-end.herokuapp.com/api/articles/${article_id}/comments`;
	return axios
		.post(url, { body: comment, username })
		.then((response) => response.data.comment);
};
