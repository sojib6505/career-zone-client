import { useEffect, useState } from "react"
import AuthContext from "./AuthContext"
import { auth } from "../firebase/firebase.init"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


export default function ContextProvider({ children }) {
  const [user, setUser] = useState(null)
  const [firebaseLoading, setFirebaeLoading] = useState(true)

  //register user
  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  //sign in user
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
  //observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser)
      }
      else {
        console.log('user logout')
      }
      setFirebaeLoading(false)
    })
    return () => unSubscribe()
  }, [])
  //signOut User
  const signOutUser = () => {
    return signOut(auth)
  }
  const userInfo = {
    register,
    signIn,
    user,
    firebaseLoading,
    signOutUser
  }
  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  )
}

