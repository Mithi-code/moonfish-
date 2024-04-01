import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
  },
  reducers: {
    addUser: (state, action) => {
      
      state.users.push(action.payload);
    },
  },
});

export const { addUser } = userSlice.actions;

export const selectUsers = (state) => state.user.users;

export default userSlice.reducer;