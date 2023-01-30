import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext, useContext, useState } from "react";
import { auth } from "../fire";

export const authContext = createContext();
export const useAuth = () => useContext(authContext);

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  async function register(email, pass) {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        email,
        pass
      );

      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function logIn(logInEmail, logInPass) {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        logInEmail,
        logInPass
      );

      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function logOut() {
    await signOut(auth);
  }
  const values = { register, user, logOut, logIn };
  return (
    <authContext.Provider value={values}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
