import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import HlsPlayer from "react-hls-player";
import Loading from "../Loading/Loading";
import NotFound from "../NotFound/NotFound";
import "./Player.css";
// import { addEpisodeId } from "../../slices/animeSlice";

function Player() {
	const [play, setPlay] = useState("");
	const { id } = useParams();
	useEffect(() => {
		const getData = async () => {
			try {
				const data = await (
					await fetch(`http://localhost:3000/vidcdn/watch/${id}`)
				).json();
				setPlay(data);
			} catch (error) {
				return error;
			}
		};
		getData();
	}, [id]);

	// const getData2 = async (id1) => {
	// 	try {
	// 		const data = await (
	// 			await fetch(`http://localhost:3000/vidcdn/watch/${id1}`)
	// 		).json();
	// 		setPlay(data);
	// 	} catch (error) {
	// 		return error;
	// 	}
	// };

	const name = id.replace(/-/g, " ").split(" ")[0];
	const split = id.split("-");
	const episode = parseInt(split[split.length - 1]);
	// const handleClick = (button) => {
	// 	let prevEp = episode - 1;
	// 	let nextEp = episode + 1;
	// 	let epiName = split.slice(0, split.length - 1);
	// 	let id1;
	// 	if (button === "prev") {
	// 		id1 = [...epiName, prevEp.toString()].join("-");
	// 		id = id1;
	// 		dispatch(addEpisodeId(id1));
	// 		getData2(id1);
	// 	} else {
	// 		id1 = [...epiName, nextEp.toString()].join("-");
	// 		getData2(id1);
	// 	}
	// };

	return (
		<div className="player-container">
			<div>
				<h1 className="player-title">
					Now playing{" "}
					{name.charAt(0).toUpperCase() + name.slice(1) + " Episode " + episode}
				</h1>
			</div>
			<div className="lower">
				{episode < 2 ? (
					""
				) : (
					<button
						className="player-button"
						style={{ left: 0 }}
						// onClick={() => handleClick("prev")}
					>
						Prev
					</button>
				)}
				<div>
					{play ? (
						play.sources ? (
							<HlsPlayer
								src={play.sources[0].file}
								autoPlay={true}
								controls={true}
								width="640px"
								height="480px"
								className="player"
							/>
						) : (
							<NotFound />
						)
					) : (
						<Loading />
					)}
				</div>
				<button
					className="player-button"
					style={{ right: 0 }}
					// onClick={() => handleClick("next")}
				>
					Next
				</button>
			</div>
		</div>
	);
}

export default Player;
