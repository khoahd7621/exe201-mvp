import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import { User } from "~/modules/profile/models";

export interface ProfileState {
  user: User;
}

const initialState: ProfileState = {
  user: {
    id: "",
    isSubscribed: false,
    email: "",
    name: "",
    role: "",
    subscriptionExpiredDate: null,
    status: "",
  },
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    fetch: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    remove: (state) => {
      state.user = {
        ...initialState.user,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { fetch, remove } = profileSlice.actions;

export default profileSlice.reducer;
