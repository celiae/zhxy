import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    system: localStorage.getItem("system"),
    username: localStorage.getItem("username"),
    login: localStorage.getItem("login"),
    avatar: "",
    createDate: "",
    lastLogin: "",
    contribution: 0,
  },
  reducers: {
    setSystem: (state, action) => {
      state.system = action.payload;
      localStorage.setItem("system", "zhxy");
    },
    setUsername: (state, action) => {
      state.username = action.payload;
      localStorage.setItem("username", action.payload);
    },
    setLogin: (state, action) => {
      state.login = action.payload;
      localStorage.setItem("login", action.payload);
    },
    setAvatar: (state, action) => {
      state.avatar = action.payload;
    },
    setCreateDate: (state, action) => {
      state.createDate = action.payload;
    },
    setLastLogin: (state, action) => {
      state.lastLogin = action.payload;
    },
    setContribution: (state, action) => {
      state.contribution = action.payload;
    },
    setLogout: (state) => {
      localStorage.setItem("username", "");
      state.username = "";
      localStorage.setItem("login", false);
      state.login = false;
      state.avatar = "";
      state.createDate = "";
      state.lastLogin = "";
      state.contribution = 0;
    },
  },
});

export const {
  setSystem,
  setUsername,
  setLogin,
  setAvatar,
  setCreateDate,
  setLastLogin,
  setContribution,
  setLogout,
} = loginSlice.actions;

export default loginSlice.reducer;

export const selectLoginInfo = (state) => state.login;
