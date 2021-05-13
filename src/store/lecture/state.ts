export interface OnboardingState {
  lectureStartTime: number | undefined;
  currentTime: number | undefined;
  aggregatedEvents: Array<AggregateEvent>;
}

export interface Note {
  timestamp?: number;
  content: string;
  studentId?: string;
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

export const initialState: OnboardingState = {
  lectureStartTime: 1620874302677, // TODO: reset
  currentTime: undefined,
  aggregatedEvents: [],
};
