import { createContext, useState, useEffect } from "react";
import { auth } from "../firebase/config";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from "firebase/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true);

  const register = (email, password) => createUserWithEmailAndPassword(auth, email, password);
  
  const login = (email, password) => signInWithEmailAndPassword(auth, email, password);
  
  const logout = () => signOut(auth);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoadingAuth(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, register, login, logout, loadingAuth }}>
      {children}
    </AuthContext.Provider>
  );
};