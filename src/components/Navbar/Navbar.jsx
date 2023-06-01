import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Navbar.css";
import { Link, createSearchParams } from "react-router-dom";
import { addParams } from "../../slices/animeSlice";

function Navbar() {
	const dispatch = useDispatch();
	const [search, setSearch] = useState("");
	const [title, setTitle] = useState("");
	const [page, setPage] = useState(1);
	const handleChange = (e) => {
		setSearch(e.target.value);
		setTitle(e.target.value);
	};
	const params = { keyw: title, page: page !== 1 ? page : 1 };
	return (
		<nav className="nav-container">
			<Link to={"/"}>
				<div className="nav-item">
					<img src="/img/navbar-anime-girl.png" alt="" className="nav-img" />
					<p className="nav-title">Tobiname</p>
				</div>
			</Link>
			<div className="nav-item">
				<ul className="nav-links">
					<Link to={"/"}>
						<li>Home</li>
					</Link>
					<Link to={"/animelist"}>
						<li>Search By Genre</li>
					</Link>
				</ul>
			</div>
			<div className="nav-item">
				<div className="nav-search">
					<input
						type="text"
						name="search"
						id="search"
						value={search}
						onChange={handleChange}
						autoComplete="off"
						className="nav-searchBox"
					/>
					<Link to={`/search?${createSearchParams(params)}`}>
						<button
							onClick={() => {
								dispatch(addParams({ title, page }));
							}}
						>
							Search
						</button>
					</Link>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
