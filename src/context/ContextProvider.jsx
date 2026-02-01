import { useState } from "react"
import AuthContext from "./AuthContext"
import { auth } from "../firebase/firebase.init"
import { createUserWithEmailAndPassword } from "firebase/auth";


export default function ContextProvider({children}) {
       const register = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)   
    }
    const userInfo = {
        register
    }
  return (
    <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
  )
}

