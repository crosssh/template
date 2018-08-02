import { signInTypes } from "./sign-in.types";

export const updateError = (errorMessage: string) => {
  return {
    payload: {
      errorMessage
    },
    type: signInTypes.UPDATE_ERROR,
  }
}

export const updatePassword = (password: string) => {
  return {
    payload: {
      password
    },
    type: signInTypes.UPDATE_PASSWORD,
  }
}

export const updateUsername = (username: string) => {
  return {
    payload: {
      username
    },
    type: signInTypes.UPDATE_USERNAME,
  }
}