import { LOGIN, LOGOUT, LOGIN_FAILED, LOADING, REGISTER_FAILED, IS_LOGGED_IN } from "./types";
import { auth } from "../config/firebase";
import history from "../history";


export const signup = (email, pass) => (dispatch) => {
    auth.createUserWithEmailAndPassword(email, pass).then((user) =>{
        console.log(user);
    }).catch((e) => {
        dispatch({
            type: REGISTER_FAILED,
            payload: e.message.split("Firebase:")[1],
          });
    })
};

export const login = (email, pass , redirectUrl) => (dispatch) => {
  console.log("in login action");
  auth
  .signInWithEmailAndPassword(email, pass)
  .then((user) => {
      history.push(redirectUrl)
      dispatch({
        type: LOGIN,
        payload: user,
      });
    })
    .catch((e) => {
      dispatch({
        type: LOGIN_FAILED,
        payload: "something is wrong with your email or password",
      });
    });
};

export const isLoggedIn = () => (dispatch) =>{
    auth.onAuthStateChanged((user) => {
        if(user){
            dispatch({
                type: IS_LOGGED_IN,
                payload: user
            })
        }else{
            dispatch({
                type: IS_LOGGED_IN,
                payload: user
            })
        }   
    })
}

export const logout = (redirectUrl) => (dispatch) => {
    history.push(redirectUrl)
    auth.signOut().then(() => {
        dispatch({
            type: LOGOUT
        })
    })
};

export const setLoading = () => {
  return {
    type: LOADING,
  };
};
