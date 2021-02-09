import axios from "axios";

export const getTopics = () => {
	return axios
		.get("https://nc-news-api-front-end.herokuapp.com/api/topics")
		.then(({ data }) => {
			return data.topics;
		});
};
