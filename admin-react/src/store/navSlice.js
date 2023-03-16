import { createSlice } from "@reduxjs/toolkit";

export const navSlice = createSlice({
  name: "nav",
  initialState: {
    active: 0,
    array: [],
  },
  reducers: {
    setActive: (state, action) => {
      state.active = action.payload;
    },
    setArray: (state, action) => {
      state.array = action.payload;
    },
  },
});

export const { setActive, setArray } = navSlice.actions;

export default navSlice.reducer;

export const selectNavAll = (state) => state.nav;
