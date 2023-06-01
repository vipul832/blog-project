import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/userSlice";
import { userPostsApi } from "../api/postsApi";

export const store = configureStore({
  reducer: {
    user: userReducer,
    [userPostsApi.reducerPath]: userPostsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userPostsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
