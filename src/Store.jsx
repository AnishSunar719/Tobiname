import animeSlice from "./slices/animeSlice";
import { configureStore } from "@reduxjs/toolkit";
const Store = configureStore({
	reducer: {
        animeSlice,
    },
});

export default Store;