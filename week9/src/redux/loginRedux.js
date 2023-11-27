import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId: null,
  userPw: null,
  token: null,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setId: (state, action) => {
      state.userId = action.payload;
    },
    setPassword: (state, action) => {
      state.userPw = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setId, setToken, setPassword } = loginSlice.actions;
export default loginSlice.reducer;
