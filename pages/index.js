import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import MovieCard from "@/components/commons/MovieCard";
import SearchInput from "@/components/SearchInput";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GetAllMovies } from "@/utils/ApiCalls";
import { useEffect, useState } from "react";


export default function Home() {
	const [searchQuery, setSearchQuery] = useState("");
	const [filteredData, setFilteredData] = useState([]);
	const [movieData, setMovieData] = useState([]);

	const fetchResult = async () => {
		try {
			const response = await GetAllMovies();
			console.log("fghjhk", response);
			setMovieData(response);
		} catch (err) {
			return err;
		}
	};

	const updateFilteredData = (query) => {
		setSearchQuery(query);
		if (query === "") {
			setFilteredData(movieData);
		} else {
			const filtered = movieData.filter((product) =>
				product.title.toLowerCase().includes(query.toLowerCase()),
			);
			setFilteredData(filtered);
		}
	};

	useEffect(() => {
		let mounted = true;

		if (mounted) {
			fetchResult();
		}

		return () => {
			mounted = false;
		};
	}, []);

	// Initial load of data into filteredData
	useEffect(() => {
		setFilteredData(movieData);
	}, [movieData]);

	return (
		<main data-testid='home'>
			<Header />
			<Hero />
			<br />
			<SearchInput onSearch={updateFilteredData} />

			<div className='flex flex-wrap m-10 gap-5  justify-center min-h-[100vh]'>
				{filteredData?.length >= 1 ? (
					<div className='flex flex-wrap m-10  gap-5 justify-center min-h-[100vh]'>
						{filteredData.map((props) => (
							<MovieCard props={props} />
						))}
					</div>
				) : (
					<div>Loading...</div>
				)}
			</div>
			<Footer />
		</main>
	);
}
