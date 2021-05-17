import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  AggregateEvent,
  initialState,
  PostContentOptions,
  UserContent,
} from 'store/lecture/state';
import { AppThunk } from 'store/store';
import { getEvents, postNoteOrComment, fetchUserContents } from 'api/studyPals';

const lectureSlice = createSlice({
  name: 'lecture',
  initialState,
  reducers: {
    updateLectureStartTime(state, action: PayloadAction<number>) {
      state.lectureStartTime = action.payload;
    },
    updateCurrentTime(state, action: PayloadAction<number>) {
      state.currentTime = action.payload;
    },
    fetchUserContentsPending(state, action: PayloadAction) {},
    fetchUserContentsFulfilled(state, action: PayloadAction<UserContent[]>) {
      state.myContents = action.payload;
    },
    fetchUserContentsFailed(state, action: PayloadAction<string>) {},
    fetchEventsPending(state, action: PayloadAction) {},
    fetchEventsFulfilled(state, action: PayloadAction<AggregateEvent[]>) {
      state.aggregatedEvents = action.payload;
    },
    fetchEventsFailed(state, action: PayloadAction<string>) {},
  },
});

export const updateLectureStartTime =
  lectureSlice.actions.updateLectureStartTime;

export const {
  fetchEventsFulfilled,
  fetchEventsFailed,
  updateCurrentTime,
  fetchUserContentsFulfilled,
} = lectureSlice.actions;

export const postContent = (options: PostContentOptions): AppThunk => async (
  dispatch
) => {
  // TODO Dispatch pending
  try {
    await postNoteOrComment(options);
    dispatch(getContents(options.studentId, options.lectureId));
  } catch (error) {
    // TODO handle error
  }
};

export const getContents = (
  studentId?: string | undefined,
  lectureId?: string | undefined
): AppThunk => async (dispatch) => {
  try {
    const contents = await fetchUserContents(studentId, lectureId);
    dispatch(fetchUserContentsFulfilled(contents));
  } catch (error) {}
};

export const fetchLectureEvents = (lectureId?: string): AppThunk => async (
  dispatch
) => {
  // TODO Dispatch pending
  try {
    const events = await getEvents(lectureId);
    dispatch(fetchEventsFulfilled(events));
  } catch (error) {
    dispatch(fetchEventsFailed(error.message));
  }
};

export default lectureSlice.reducer;
