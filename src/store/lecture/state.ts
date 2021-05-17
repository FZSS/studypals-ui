export interface LectureState {
  myContents: Array<UserContent>;
  lectureStartTime: number | undefined;
  currentTime: number | undefined;
  aggregatedEvents: Array<AggregateEvent>;
}

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

export const initialState: LectureState = {
  myContents: [],
  lectureStartTime: 1621222510895, // TODO: reset
  currentTime: undefined,
  aggregatedEvents: [],
};
