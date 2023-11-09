import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app)

const googleAuthProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = async (email, password) => {
    setLoading(true);
    try {
      return await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Error creating user:", error.code, error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }


  const userSignout = () => {
    setLoading(true);
    return signOut(auth);
  }

const googleLogIn = async () => {
  setLoading(true);
  try {
    const response = await signInWithPopup(auth, googleAuthProvider);
 
    return response;
  } catch (error) {
    console.error(error.message);
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      console.log('My Current user is', currentUser)
      setLoading(false);
    })
    return () => {
      return unsubscribe();
    }
  }, [])
  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        createUser,
        signIn,
        userSignout,
        googleLogIn
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;