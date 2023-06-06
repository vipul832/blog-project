import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/userSlice";
import { postApi } from "../api/postApi";
import { authApi } from "../api/authApi";
import authReducer from "../feature/authSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    [postApi.reducerPath]: postApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([postApi.middleware, authApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
