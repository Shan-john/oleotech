import { configureStore } from "@reduxjs/toolkit";
import homepageReducer from "../features/homepage/appSlice";

export const store = configureStore({
  reducer: {
    appPage: homepageReducer,
  },
}); 