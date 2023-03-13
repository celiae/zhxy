import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice";
import navReducer from "./navSlice";

export default configureStore({
  reducer: {
    login: loginReducer,
    nav: navReducer,
  },
});
