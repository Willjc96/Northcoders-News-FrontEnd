import axios from "axios";

export const getArticles = () => {
	return axios
		.get("https://nc-news-api-front-end.herokuapp.com/api/articles")
		.then(({ data }) => {
			return data.articles;
		});
};
