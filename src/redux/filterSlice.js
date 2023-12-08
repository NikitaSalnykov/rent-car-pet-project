import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterBrand: "",
  filterPrice: "",
  filterMileageTo: '',
  filterMileageFrom: '',
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilterBrand: (state, { payload }) => {
      state.filterBrand = payload;
    },
    setFilterPrice: (state, { payload }) => {
      state.filterPrice = payload;
    },
    setFilterMileageFrom: (state, { payload }) => {
      state.filterMileageFrom = payload;
    },
    setFilterMileageTo: (state, { payload }) => {
      state.filterMileageTo = payload;
    },
  },
});

export const { setFilterBrand,
  setFilterPrice,
  setFilterMileageFrom,
  setFilterMileageTo
 } = filterSlice.actions;

export default filterSlice.reducer;

//Selectors
export const getFilterPrice = (state) => state.filter.filterPrice;
export const getFilterMileageTo = (state) => state.filter.filterMileageTo;
export const getFilterMileageFrom = (state) => state.filter.filterMileageFrom;
export const getFilterBrand = (state) => state.filter.filterBrand;
