import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { PERSIST, REHYDRATE, persistStore } from "redux-persist";
import persistReducer from "redux-persist/lib/persistReducer";
import storage from "redux-persist/lib/storage";

import authReducer from "./slices/authSlice";
import profileReducer from "./slices/profileSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage: storage,
  blacklist: ["profile"],
};

const rootReducers = combineReducers({
  auth: authReducer,
  profile: profileReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [REHYDRATE, PERSIST],
      },
    }),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
