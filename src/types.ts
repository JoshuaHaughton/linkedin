export interface InputState {
  value: string;
  isTouched: boolean;
}

export interface UserState {
  user : {
    user: {
      email: string;
      uid: string
      displayName: string
      photoURL: string
    }
  }
}