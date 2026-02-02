import { Navigate, useLocation } from "react-router"
import useAuth from "../hooks/useAuth"

export default function PrivateRoutes({children}) {
    const {user,firebaseLoading} = useAuth()
    const location = useLocation()
    if(firebaseLoading){
        return <p>loading.........</p>
    }
    if(user){
       return children
    }
    else{
       return <Navigate to='/sign_in' state={{from: location.pathname}} replace />
    }

    
}
