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
    fetchUserContentsPending(state) {
      state.myContentsPending = true;
    },
    fetchUserContentsFulfilled(state, action: PayloadAction<UserContent[]>) {
      state.myContents = action.payload;
      state.myContentsPending = false;
    },
    fetchUserContentsFailed(state, action: PayloadAction<string>) {
      state.myContentsPending = false;
    },
    fetchEventsPending(state) {
      state.aggregatedEventsPending = true;
    },
    fetchEventsFulfilled(state, action: PayloadAction<AggregateEvent[]>) {
      state.aggregatedEvents = action.payload;
      state.aggregatedEventsPending = false;
    },
    fetchEventsFailed(state, action: PayloadAction<string>) {
      state.aggregatedEventsPending = false;
    },
    postContentPending(state) {
      state.postContentPending = true;
    },
    postContentFulfilled(state) {
      state.postContentPending = false;
    },
    postContentFailed(state) {
      state.postContentPending = false;
    },
  },
});

export const updateLectureStartTime =
  lectureSlice.actions.updateLectureStartTime;

export const {
  fetchEventsFulfilled,
  fetchEventsFailed,
  updateCurrentTime,
  fetchUserContentsFulfilled,
  postContentPending,
  postContentFulfilled,
  postContentFailed,
  fetchEventsPending,
  fetchUserContentsFailed,
} = lectureSlice.actions;

export const postContent = (options: PostContentOptions): AppThunk => async (
  dispatch
) => {
  try {
    dispatch(postContentPending());
    await postNoteOrComment(options);
    dispatch(postContentFulfilled());
    dispatch(getContents(options.studentId, options.lectureId));
  } catch (error) {
    dispatch(postContentFailed());
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
  } catch (error) {
    dispatch(fetchUserContentsFailed(error.message));
    // TODO handle error
  }
};

export const fetchLectureEvents = (lectureId?: string): AppThunk => async (
  dispatch
) => {
  try {
    dispatch(fetchEventsPending());
    const events = await getEvents(lectureId);
    dispatch(fetchEventsFulfilled(events));
  } catch (error) {
    dispatch(fetchEventsFailed(error.message));
  }
};

export default lectureSlice.reducer;
