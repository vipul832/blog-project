import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { act } from "react-dom/test-utils";

const initialvalue = {
  userId: "",
  name: "",
  email: "",
  profileImage: "",
};

const userSlicer = createSlice({
  name: "user",
  initialState: initialvalue,
  reducers: {
    setUser: (state, actions) => {
      state.userId = actions.payload.data._id;
      state.name = actions.payload.data.username;
      state.email = actions.payload.data.email;
      state.profileImage = actions.payload.data.profilePic;
      console.log("hi", actions.payload.data);
    },
  },
});

export const getUserInfo = (state: RootState) => state.user;

export const { setUser } = userSlicer.actions;

export default userSlicer.reducer;
