import { postUser, postSession, deleteSession } from "../utils/session";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

const receiveCurrentUser = (user) => {
  return({
    type: RECEIVE_CURRENT_USER,
    user
  })
}

const logoutCurrentUser = () => {
  return({
    type: LOGOUT_CURRENT_USER
  })
}

// user object coming from a form
export const createNewUser = formUser => {
  return dispatch => {
    return postUser(formUser).then(user => dispatch(receiveCurrentUser(user)));
  }
}

export const login = formUser => {
  return dispatch => {
    postSession(formUser).then(user => dispatch(receiveCurrentUser(user)));
  }
}

export const logout = () => {
  return dispatch => {
    return deleteSession().then( () => dispatch(logoutCurrentUser()));
  }
}

