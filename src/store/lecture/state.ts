export interface OnboardingState {
  lectureStartTime: number | undefined;
  currentTime: number | undefined;
}

export interface Note {
  timestamp: number | undefined;
  content: string;
  studentId: string | undefined;
}

export interface AggregateTopNotes {
  topNotes: Array<Note>;
  topReactions: Array<[string, number]>;
}

export const initialState: OnboardingState = {
  lectureStartTime: 1620874302677, // TODO: reset
  currentTime: undefined,
};
