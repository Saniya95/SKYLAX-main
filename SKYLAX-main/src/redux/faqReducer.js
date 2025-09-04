import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  faqs: [],
};

const FaqsSlice = createSlice({
  name: "faqSlice",
  initialState,
  reducers: {
    Faqs: (state, action) => {
      state.faqs = action.payload || false;
    },
  },
});

export const { Faqs } = FaqsSlice.actions;

export default FaqsSlice.reducer;
