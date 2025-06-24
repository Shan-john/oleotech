// src/features/homepage/homepageSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchHomePageData } from "./homepageAPI";

// Async thunk
export const getHomepageData = createAsyncThunk(
  "homepage/fetchData",
  async () => {
    const response = await fetchHomePageData();
     console.log(response);
    return response;
  }
);

const homepageSlice = createSlice({
  name: "homepage",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getHomepageData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getHomepageData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getHomepageData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default homepageSlice.reducer;
