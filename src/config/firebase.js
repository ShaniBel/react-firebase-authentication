// import * as firebase from 'firebase/app'
// import 'firebase/auth'


import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// import {initializeApp} from 'firebase/app'
// import {getAuth } from 'firebase/auth'




const firebaseConfig = {

  apiKey: process.env.REACT_APP_API_KEY,

  authDomain: process.env.REACT_APP_AUTHDOMAIN,

  projectId: process.env.REACT_APP_PROJECTID,

  storageBucket: process.env.REACT_APP_STORAGEBUCKET,

  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,

  appId: process.env.REACT_APP_APPID,


};

const app = firebase.initializeApp(firebaseConfig)
// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app)
export const auth = app.auth();

export default firebase