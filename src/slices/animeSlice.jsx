import { createSlice } from "@reduxjs/toolkit";

const animeSlice = createSlice({
	name: "anime",
	initialState: {
		recentReleases: [],
		animeDetails: "",
		params: {
			keyw: "" || sessionStorage.getItem("keyw"),
			page: sessionStorage.getItem("page"),
		},
		episodeId: "" || JSON.parse(sessionStorage.getItem("episodeId")),
	},
	reducers: {
		addRecentReleases(state, action) {
			try {
				state.recentReleases = action.payload;
			} catch (error) {
				return error;
			}
		},
		addAnimeDetails(state, action) {
			try {
				state.animeDetails = action.payload;
			} catch (error) {
				return error;
			}
		},
		addParams(state, action) {
			try {
				const { title, page } = action.payload;
				state.params.keyw = title;
				state.params.page = page;
				sessionStorage.setItem("keyw", title);
				sessionStorage.setItem("page", page);
			} catch (error) {
				return error;
			}
		},
		addEpisodeId(state, action) {
			try {
				state.episodeId = action.payload;
				sessionStorage.setItem("episodeId", JSON.stringify(action.payload));
			} catch (error) {
				return error;
			}
		},
	},
});

export default animeSlice.reducer;
export const { addRecentReleases, addAnimeDetails, addParams, addEpisodeId } =
	animeSlice.actions;

// animeImg
// :
// "https://gogocdn.net/cover/kaminaki-sekai-no-kamisama-katsudou-1679555300.png"
// animeTitle
// :
// "Kaminaki Sekai no Kamisama Katsudou"
// episodesList
// :
// (7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]
// genres
// :
// (7) ['Action', 'Comedy', 'Ecchi', 'Fantasy', 'Isekai', 'Reincarnation', 'Seinen']
// otherNames
// :
// "Kamikatsu, 神無き世界のカミサマ活動"
// releasedDate
// :
// "2023"
// status
// :
// "Ongoing"
// synopsis
// :
// "Yukito's parents are the leaders of a cult. After he gets sacrificed, he gets reincarnated into another world where religion doesn't exist and porn books are akin to a child's doodles. He finds that it's also a world where your life and death is decided by the country. While obstructing his friend's execution, both of them lose their lives. Just at that moment, the god of his religion comes to their world and revives them. "
// totalEpisodes
// :
// "7"
// type
// :
// "Spring 2023 Anime"
