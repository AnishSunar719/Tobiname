import React, { useState } from "react";
import Loading from "../Loading/Loading";
import Card from "../Card/Card";
import "./GenreList.css";
import { Link } from "react-router-dom";

function AnimeList() {
	const [animeList, setAnimeList] = useState(
		[] || JSON.parse(sessionStorage.getItem("genre"))
	);
	const [genre, setGenre] = useState("");
	const genres = [
		"action",
		"adventure",
		"cars",
		"comedy",
		"crime",
		"dementia",
		"demons",
		"drama",
		"dub",
		"ecchi",
		"family",
		"fantasy",
		"game",
		"gourmet",
		"harem",
		"historical",
		"horror",
		"josei",
		"kids",
		"magic",
		"martial-arts",
		"mecha",
		"military",
		"mystery",
		"parody",
		"police",
		"psychological",
		"romance",
		"samurai",
		"school",
		"sci-fi",
		"seinen",
		"shoujo",
		"shoujo-ai",
		"shounen",
		"shounen-ai",
		"space",
		"sports",
		"super-power",
		"supernatural",
		"suspense",
		"thriller",
		"vampire",
		"yaoi",
		"yuri",
		"isekai",
	];
	const getAllAnime = async (g) => {
		try {
			const data = await (
				await fetch(`http://localhost:3000/genre/${g}`)
			).json();
			setAnimeList(data);
			sessionStorage.setItem("genre", JSON.stringify(data));
		} catch (error) {
			return error.message;
		}
	};
	return (
		<div className="genre-container">
			<div className="genre-list">
				{genres.map((item, idx) => {
					return (
						<div key={idx}>
							<div
								onClick={() => {
									setAnimeList([]);
									getAllAnime(item);
									setGenre(item);
								}}
							>
								<p className="genre-item">{item}</p>
							</div>
						</div>
					);
				})}
			</div>
			{genre ? (
				<h1 className="genre-h1">Showing Result for "{genre}" genre </h1>
			) : (
				""
			)}
			{animeList ? (
				<div className="genre-lower">
					{animeList.map((item, idx) => {
						const { animeImg, animeId, animeTitle, releasedDate } = item;
						return (
							<div key={idx} className="genre-wrapper">
								<Link to={`/anime-details/${animeId}`}>
									<Card
										title={animeTitle}
										img={animeImg}
										releasedDate={releasedDate}
									/>
								</Link>
							</div>
						);
					})}
				</div>
			) : (
				<Loading />
			)}
		</div>
	);
}

export default AnimeList;
