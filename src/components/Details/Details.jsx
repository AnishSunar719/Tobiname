import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { addAnimeDetails, addEpisodeId } from "../../slices/animeSlice";
import Loading from "../Loading/Loading";
import "./Details.css";

function Details() {
	const dispatch = useDispatch();
	const { id } = useParams();
	useEffect(() => {
		const getDetails = async () => {
			const data = await (
				await fetch(`http://localhost:3000/anime-details/${id}`)
			).json();
			dispatch(addAnimeDetails(data));
		};
		getDetails();
	}, []);
	const {
		animeImg,
		animeTitle,
		otherNames,
		synopsis,
		type,
		status,
		totalEpisodes,
		episodesList,
		releasedDate,
		genres,
	} = useSelector((state) => state.animeSlice.animeDetails);
	return (
		<div className="details-container">
			<div className="details-upper">
				<img src={animeImg} alt={animeTitle} className="details-img" />
				<div>
					<div>
						<h1 className="details-h1">{animeTitle}</h1>
						<p className="details-p">Genre: {[genres].join(" , ")}</p>
						<p className="details-p">Othernames: {otherNames}</p>
						<p className="details-p">Type: {type}</p>
						<p className="details-p">Status: {status}</p>
						<p className="details-p">Released Date: {releasedDate}</p>
						<p className="details-p">Total Episodes: {totalEpisodes}</p>
					</div>
					<div className="details-upper-lower">
						<h2 className="details-h2">Synopsis</h2>
						<p className="details-p">{synopsis}</p>
					</div>
				</div>
			</div>

			<div className="details-lower">
				<h1 className="details-lower-h2">EPISODES</h1>
				<div className="episodes">
					{episodesList ? (
						episodesList.map((episode) => {
							return (
								<div className="epi" key={episode.episodeId}>
									<Link to={`/vidcdn/watch/${episode.episodeId}`}>
										<p
											className="details-lower-p"
											onClick={() => dispatch(addEpisodeId(episode.episodeId))}
										>
											Episode- {episode.episodeNum}
										</p>
									</Link>
								</div>
							);
						})
					) : (
						<Loading />
					)}
				</div>
			</div>
		</div>
	);
}

export default Details;
