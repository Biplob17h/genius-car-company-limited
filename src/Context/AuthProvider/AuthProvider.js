import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../Firebase/Firebase.config';

const auth = getAuth(app)

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    const GoogleProvider = new GoogleAuthProvider()

    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        return signOut(auth)
    }
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, GoogleProvider)
    }
    const updateUser = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (crrentUser) => {
            setUser(crrentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])
    const AuthInfo = { user, signIn, signUp, logOut, googleSignIn, loading, updateUser }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;