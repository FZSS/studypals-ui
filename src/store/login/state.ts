export interface LoginState {
  loggedIn: boolean;
  studentId: string | undefined;
  lectureId: string | undefined;
}

export const initialState: LoginState = {
  loggedIn: true, // TODO: reset
  studentId: '124',
  lectureId: '10086',
};
