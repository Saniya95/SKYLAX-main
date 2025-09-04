import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reviews: [],
};

const ReviewsSlice = createSlice({
  name: "reviewsSlice",
  initialState,
  reducers: {
    setReviews: (state, action) => {
      state.reviews = action.payload || [];
    },
  },
});

export const { setReviews } = ReviewsSlice.actions;

export default ReviewsSlice.reducer;
