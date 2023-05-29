import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

const initialvalue = {
  userId: "1",
  name: "vishal",
  email: "vishal@gmail.com",
  profileImage: "",
};

const userSlicer = createSlice({
  name: "user",
  initialState: initialvalue,
  reducers: {
    setUser: (state) => {
      console.log(state);
    },
  },
});

export const getUserInfo = (state: RootState) => state.user;

export default userSlicer.reducer;
