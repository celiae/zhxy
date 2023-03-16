import { createSlice } from "@reduxjs/toolkit";

const username = localStorage.getItem("username");

export const navSlice = createSlice({
  name: "nav",
  initialState: {
    active: 0,
  },
  reducers: {
    setActive: (state, action) => {
      state.active = action.payload;
    },
  },
});

export const { setActive } = navSlice.actions;

export default navSlice.reducer;

export const selectNavAll = (state) => state.nav;
