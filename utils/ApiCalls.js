import Instance from "./AxiosConfig";

export const GetAllMovies = async () => {
	try {
		const response = await Instance.get("/");
		return response.data;
	} catch (error) {
		console.error(error);
	}
};



export const GetSingleMovie = async (id) => {
	try {
		const response = await Instance.get(`/${id}`);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};
