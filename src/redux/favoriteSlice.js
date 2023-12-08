import { createSlice } from "@reduxjs/toolkit";
import { startOfWeek } from "date-fns";

const initialState = {
favorite: []
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    setFavorite: (state, { payload }) => {
      state.favorite.push(payload)
    },
    deleteFavorite: (state, { payload }) => {
      state.favorite = state.favorite.filter(el=> el.id !== payload)
    },

  },
});

export const { setFavorite,
  deleteFavorite,
 } = favoriteSlice.actions;

export default favoriteSlice.reducer;

//Selectors
export const getFavorite = (state) => state.favorite.favorite;