
import { createContext } from "react";
import { useState, useEffect } from 'react';
import auth from "./firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";



export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider() ;



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

const googleSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
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

    const authInfo = { user, createUser,logOut,signInUser,loading,googleSignIn };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;