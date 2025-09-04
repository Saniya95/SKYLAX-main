import { configureStore } from "@reduxjs/toolkit";
import cookiesReducer from "./cookiesReducer";
import FaqReducer from "./faqReducer";
import ReviewsReducer from "./reviewsReducer";

const store = configureStore({
  reducer: {
    cookies: cookiesReducer,
    faqsStore: FaqReducer,
    reviewsReducer: ReviewsReducer,
  },
});

export default store;
