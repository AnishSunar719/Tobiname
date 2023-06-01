import React, { useEffect, useState } from "react";
import { addRecentReleases } from "../../slices/animeSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import "./Slider.css";

function Slider() {
	const [index, setIndex] = useState(0);
	const dispatch = useDispatch();
	const recentReleases = useSelector(
		(state) => state.animeSlice.recentReleases
	);
	useEffect(() => {
		const getRecenetRelase = async () => {
			const data = await (
				await fetch("http://localhost:3000/recent-release")
			).json();
			dispatch(addRecentReleases(data));
		};
		getRecenetRelase();
	}, []);

	setTimeout(() => setIndex(index !== 4 ? index + 1 : 0), 3000);

	return (
		<div className="slider-container">
			<div>
				<p className="slider-title">Recent Releases</p>
			</div>

			<div
				className="slider-titles"
				style={{ transform: `translateX(${-100 * index}vw)` }}
			>
				{recentReleases.slice(0, 5).map((item, idx) => {
					const { animeImg, animeId, animeTitle, episodeNum, subOrDub } = item;
					return (
						<div className="slider-wrapper" key={idx}>
							<Link to={`/anime-details/${animeId}`}>
								<div className="slider-wrapper-container">
									<img src={animeImg} alt={animeTitle} className="slider-img" />
									<div className="desc">
										<p className="desc-title">{animeTitle}</p>
										<p className="desc-text">Episode {episodeNum}</p>
										<p className="desc-text">{subOrDub}</p>
									</div>
								</div>
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
}
export default Slider;
