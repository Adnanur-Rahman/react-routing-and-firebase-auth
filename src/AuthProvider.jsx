import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from './Firebase.config';


const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null);
    const [loading, setLoading]=useState(true);
    const createUser=(email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInUser=(email, password)=>{
          setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signOutUser=()=>{
          setLoading(true);
        return signOut(auth);
    }
    const signInwithGoogle=()=>{
          setLoading(true);
            return signInWithPopup(auth, googleProvider);
    }
    const signInwithGithub=()=>{
          setLoading(true);
            return signInWithPopup(auth, githubProvider);
    }
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth, (currentUser)=>{
console.log('current user in auth state change', currentUser);
setUser(currentUser);
setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    }, [])
    const authInfo={
        user,
        loading,
        createUser,
        signInUser,
        signOutUser,
        signInwithGoogle,
        signInwithGithub,

    };
    return (
      <AuthContext value={authInfo}>
        {children}
      </AuthContext>
    );
};

export default AuthProvider;