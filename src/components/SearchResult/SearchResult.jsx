import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import NotFound from "../NotFound/NotFound";
import Card from "../Card/Card";
import "./SearchResult.css";

function SearchResult() {
	const [result, setResult] = useState([]);
	const { keyw, page } = useSelector((state) => state.animeSlice.params);
	useEffect(() => {
		const getSearchResult = async () => {
			const data = await (
				await fetch(`http://localhost:3000/search?keyw=${keyw}&page=${page}`)
			).json();
			setResult(data);
		};
		getSearchResult();
	}, [keyw]);
	return (
		<div className="search-container">
			<h1 className="search-h1">Showing results for "{keyw}"</h1>
			<div className="search-wrapper">
				{result ? (
					result.map((item) => {
						const { animeImg, animeTitle, status, animeId } = item;
						return (
							<div className="search-results" key={animeId}>
								<Link to={`/anime-details/${animeId}`}>
									<Card img={animeImg} title={animeTitle} status={status} />
								</Link>
							</div>
						);
					})
				) : (
					<Loading />
				)}
			</div>
		</div>
	);
}

export default SearchResult;
