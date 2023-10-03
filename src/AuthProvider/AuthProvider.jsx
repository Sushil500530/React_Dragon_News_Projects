
import { createContext } from "react";
import { useState, useEffect } from 'react';
import auth from "./firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";




export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email,password) => {
    return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in the Auth state change', currentUser);
            setUser(currentUser)
            return () => {
                unSubscribe()
            }
        })
        // const unSubscribe = ()
    }, [])

    const authInfo = { user, createUser,logOut,signInUser };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;