import { configureStore, Action } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { ThunkAction } from 'redux-thunk';
import lectureReducer from 'store/lecture/slice';
import loginReducer from 'store/login/slice';

const rootReducer = combineReducers({
  lecture: lectureReducer,
  login: loginReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
