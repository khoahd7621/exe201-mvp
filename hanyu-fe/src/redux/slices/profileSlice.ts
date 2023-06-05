import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import profileApi from "~/modules/profile/apis/profileApi";
import { User } from "~/modules/profile/models";
import { logout } from "./authSlice";

// First, create the thunk
export const fetchUserProfile = createAsyncThunk(
  "profiles/fetchUserProfile",
  async (_, thunkApi) => {
    try {
      const response = await profileApi.fetch();
      return response.data;
    } catch (error) {
      thunkApi.dispatch(remove());
      thunkApi.dispatch(logout());
      return Promise.reject(error);
    }
  }
);

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
    remove: (state) => {
      state.user = {
        ...initialState.user,
      };
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchUserProfile.fulfilled, (state, action: PayloadAction<User>) => {
        state.user = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state) => {
        state.user = {
          ...initialState.user,
        };
      });
  },
});

// Action creators are generated for each case reducer function
export const { remove } = profileSlice.actions;

export default profileSlice.reducer;
