import React from "react";
import "./Card.css";
function Card({ title, img, status, releasedDate }) {
	return (
		<div>
			<img src={img} alt={title} className="card-img" />
			<h1 className="card-h1">{title}</h1>
			<p className="card-p">{status}</p>
			{releasedDate ? <p className="card-p">Year - {releasedDate}</p> : ""}
		</div>
	);
}

export default Card;
