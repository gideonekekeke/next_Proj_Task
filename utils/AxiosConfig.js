import axios from "axios";

const Instance = axios.create({
	baseURL: "https://imdb-top-100-movies.p.rapidapi.com",
	headers: {
		"X-RapidAPI-Key": "482fca5e46msh9b5bacc663ba77cp1af51cjsn6984053e95e1",
		"X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
	},
});

export default Instance;
