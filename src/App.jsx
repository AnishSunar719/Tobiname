import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Slider from "./components/Slider/Slider";
import Details from "./components/Details/Details";
import Player from "./components/Player/Player";
import SearchResult from "./components/SearchResult/SearchResult";
import GenreList from "./components/GenreList/GenreList";
import NotFound from "./components/NotFound/NotFound";
import "./App.css";

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Slider />} />
				<Route path="/anime-details/:id" element={<Details />} />
				<Route path="/vidcdn/watch/:id" element={<Player />} />
				<Route path="/search" element={<SearchResult />} />
				<Route path="/animelist/" element={<GenreList />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
