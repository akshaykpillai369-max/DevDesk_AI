import { useEffect, useState } from "react"
import { createContext} from "react"

const AuthContext = createContext()

export default function AuthProvider({children}){
    
const [access, setAccess] = useState('')


useEffect(() => {
    const hash = window.location.hash
    const params = new URLSearchParams(hash.substring(1))
    const accessToken = params.get("access")
    

    if (accessToken){

        setAccess(accessToken)
        window.history.replaceState(null, '', '/success')

    }

}, [])

     return (
        <AuthContext value={access}>
            {children}
        </AuthContext>
    )

}