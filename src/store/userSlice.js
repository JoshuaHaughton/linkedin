import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  user: null
};

//Using Redux Toolkit we can mutate the data like this, because it detects changes like this and handles it correctly in the background using a package called imgur
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

// Selectors
export const selectUser = (state) => state.user.user;


export default userSlice.reducer;
