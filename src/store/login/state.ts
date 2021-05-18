export interface LoginState {
  loggedIn: boolean;
  studentId: string | undefined;
  lectureId: string | undefined;
}

export const initialState: LoginState = {
  loggedIn: false, // TODO: reset
  studentId: '12345',
  lectureId: '7',
};
