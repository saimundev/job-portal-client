"use client";

import { createSlice } from "@reduxjs/toolkit";
import { getCookie } from "cookies-next";
import { jwtDecode } from "jwt-decode";

interface UserState {
  user: {
    userId: string;
    name: string;
    email: string;
    role: boolean;
  } | null;
  token: string | null;
}

const token = getCookie("access_token");

const initialState: UserState = {
  user: token ? jwtDecode(token) : null,
  token: token ? token : null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserToken: (state, action) => {
      state.user = jwtDecode(action.payload);
      state.token = action.payload;
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { getUserToken, logOut } = userSlice.actions;
export default userSlice.reducer;
