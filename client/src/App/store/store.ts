import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/userSlice";
import { userPostsApi } from "../api/Api";
import authReducer from "../feature/authSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    [userPostsApi.reducerPath]: userPostsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userPostsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
