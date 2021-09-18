import React, { useContext, useEffect, useState } from "react";
import {auth} from "../config/firebase";

export const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)


  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function signup(email, pass){
    return auth.createUserWithEmailAndPassword(email, pass)
  }

  function logout(){
    return auth.signOut()
  }
  
  useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        setUser(user)
        setLoading(false)
      });

      return unsubscribe
  }, []);
  
  const value = {
    user,
    login,
    signup,
    logout,
  }


  return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
  );
};

// export const AuthConsumer = AuthContext.Consumer