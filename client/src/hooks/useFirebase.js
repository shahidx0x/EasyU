import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
  } from "@firebase/auth";
import axios from "axios";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
  const [user, SetUser] = useState({});
  const auth = getAuth();
  const [role, setRole] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api-v1/users/role/${user.email}`)
      .then((res) => setRole(res.data));
  }, [user.email]);
  const gProvider = new GoogleAuthProvider();

  const signInGoogle = () => {
    return signInWithPopup(auth, gProvider);
  };

  const registerUser = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const login = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const logout = () => {
    signOut(auth).then(() => {
      SetUser({});
      localStorage.removeItem("isAuth");
      localStorage.removeItem("isAdm");
      localStorage.removeItem("isDoc");
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        SetUser(user);
      }
      return unsubscribe;
    });
  }, []);



  return {
    auth,
    gProvider,
    user,
    role,
    updateProfile,
    SetUser,
    registerUser,
    login,
    logout,
    signInGoogle,
  };
};
  
  export default useFirebase;
  