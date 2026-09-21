import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({children}){

    const {isAuthenticated, isLoading} = useAuth()

    if (isLoading) {
    return (
        <div className="flex min-h-screen items-center justify-center bg-[#09090b] text-white">
            <div className="flex flex-col items-center gap-5">

                <svg
                    className="size-10 animate-spin text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="12"
                        cy="12"
                        r="9"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="opacity-20"
                    />

                    <path
                        d="M21 12a9 9 0 0 1-9 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </svg>

                <div className="text-center">
                    <p className="text-sm font-medium text-white/80">
                        Loading DevDesk
                    </p>

                    <p className="mt-1 text-xs text-white/30">
                        Restoring your session...
                    </p>
                </div>

            </div>
        </div>
    )
}

    else if(isAuthenticated){

        return children

    }

    


    return <Navigate to ='/login'/>
    

}