import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from 'store/login/state';

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    updateLoginStatus(state, action: PayloadAction<[boolean, string, string]>) {
      state.loggedIn = action.payload[0];
      state.studentId = action.payload[1];
      state.lectureId = action.payload[2];
    },
  },
});

export const updateLoginStatus = loginSlice.actions.updateLoginStatus;

export default loginSlice.reducer;
