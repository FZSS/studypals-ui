export const FAKE_START_TIME = 1621304043000;

export interface LectureState {
  myContents: Array<UserContent>;
  myContentsPending: boolean;
  postContentPending: boolean;
  lectureStartTime: number | undefined;
  currentTime: number | undefined;
  aggregatedEvents: Array<AggregateEvent>;
  aggregatedEventsPending: boolean;
}

export const initialState: LectureState = {
  postContentPending: false,
  myContentsPending: false,
  myContents: [],
  lectureStartTime: FAKE_START_TIME, // TODO: reset
  currentTime: undefined,
  aggregatedEvents: [],
  aggregatedEventsPending: false,
};

export interface PostContentOptions {
  type: 'NOTES' | 'REACTION';
  content: string;
  lectureId?: string;
  studentId?: string;
  timestamp: number;
}

export interface Note {
  timestamp?: number;
  content: string;
  studentId?: string;
}

export interface UserContent {
  type: 'NOTES' | 'REACTION';
  content: string;
  timestamp: number;
}

export interface Reaction {
  content: string;
  count: number;
}

export interface AggregateEvent {
  timestamp: number;
  topNotes: Array<Note>;
  topReactions: Array<Reaction>;
}
