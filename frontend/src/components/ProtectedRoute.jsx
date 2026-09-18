import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({children}){

    const {isAuthenticated, isLoading} = useAuth()

    if(isLoading){
    
        return <p>Loading...</p>
    }

    else if(isAuthenticated){

        return children

    }

    


    return <Navigate to ='/login'/>
    

}