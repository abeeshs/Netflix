import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
   name: "user",
   initialState: null,
   reducers: {
      setUsers: (state, action) => {
         console.log(action.payload);

         return action.payload;
      },
      removeUser: (state, action) => {
         state = null;
      },
   },
});

export const { setUsers,removeUser } = userSlice.actions;
export default userSlice.reducer;
