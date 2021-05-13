import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from 'store/lecture/state';

const LectureSlice = createSlice({
  name: 'lecture',
  initialState,
  reducers: {
    updateLectureStartTime(state, action: PayloadAction<number>) {
      state.lectureStartTime = action.payload;
    },
    updateCurrentTime(state, action: PayloadAction<number>) {
      state.currentTime = action.payload;
    },
  },
});

export const updateLectureStartTime =
  LectureSlice.actions.updateLectureStartTime;

export const updateCurrentTime = LectureSlice.actions.updateCurrentTime;

export default LectureSlice.reducer;
