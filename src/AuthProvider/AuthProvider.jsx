
import { createContext } from "react";
import { useState, useEffect } from 'react';
import auth from "./firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";




export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(true) ;

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email,password) => {
        setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in the Auth state change', currentUser);
            setUser(currentUser)
            setLoading(false)
            return () => {
                unSubscribe()
            }
        })
        // const unSubscribe = ()
    }, [])

    const authInfo = { user, createUser,logOut,signInUser,loading };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;