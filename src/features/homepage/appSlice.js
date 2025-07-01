// src/features/homepage/homepageSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchHomePageData } from "./homepageAPI";
import {fetchSerivedata} from "./servicepageApi";

// Async thunk
export const getHomepageData = createAsyncThunk(
  "homepage/fetchData",
  async () => {
    const response = await fetchHomePageData();
     console.log(response);
    return response;
  }
);

export const getServicepageDate = createAsyncThunk("servicepage/fetchData",async()=>{
  const response = await fetchSerivedata();
  console.log(response);
  return response;
})

const appSlice = createSlice({
  name: "appPage",
  initialState: {
    homepageData: null,
    serviceData: null,
    homepageLoading: false,
    serviceLoading: false,
    homepageError: null,
    serviceError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // --- Homepage Thunk ---
      .addCase(getHomepageData.pending, (state) => {
        state.homepageLoading = true;
        state.homepageError = null;
      })
      .addCase(getHomepageData.fulfilled, (state, action) => {
        state.homepageLoading = false;
        state.homepageData = action.payload;
      })
      .addCase(getHomepageData.rejected, (state, action) => {
        state.homepageLoading = false;
        state.homepageError = action.error.message;
      })

      // --- Service Page Thunk ---
      .addCase(getServicepageDate.pending, (state) => {
        state.serviceLoading = true;
        state.serviceError = null;
      })
      .addCase(getServicepageDate.fulfilled, (state, action) => {
        state.serviceLoading = false;
        state.serviceData = action.payload;
      })
      .addCase(getServicepageDate.rejected, (state, action) => {
        state.serviceLoading = false;
        state.serviceError = action.error.message;
      });
  },
});


export default appSlice.reducer;
