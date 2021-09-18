import {
  SIGN_UP,
  LOGIN,
  LOGOUT,
  LOGIN_FAILED,
  REGISTER_FAILED,
  IS_LOGGED_IN,
} from "../actions/types";

const initialState = {
  currentUser: null,
  loggedIn: false,
  error: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
      };

    case LOGIN:
      return {
        ...state,
        currentUser: action.payload,
        loggedIn: true,
        error: "",
      };

    case LOGOUT:
      return {
        ...state,
        currentUser: null,
        loggedIn: false,
        error: "",
      };

    case LOGIN_FAILED:
      return {
        ...state,
        error: action.payload,
      };

    case REGISTER_FAILED:
      return {
        ...state,
        error: action.payload,
      };

    case IS_LOGGED_IN:
      return {
        ...state,
        currentUser: action.payload,
        loggedIn: true,
        error: "",
      };

    default:
      return state;
  }
}
