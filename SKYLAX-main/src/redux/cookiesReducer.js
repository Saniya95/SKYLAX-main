import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cookie: true,
};

const CookieSlice = createSlice({
  name: "cookieSlice",
  initialState,
  reducers: {
    Cookies: (state, action) => {
      state.cookie = action.payload;
    },
  },
});

export const { Cookies } = CookieSlice.actions;

export default CookieSlice.reducer;
