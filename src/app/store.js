import { configureStore } from "@reduxjs/toolkit";
import homepageReducer from "../features/homepage/homepageslice";

export const store = configureStore({
  reducer: {
    homepage: homepageReducer,
  },
}); 