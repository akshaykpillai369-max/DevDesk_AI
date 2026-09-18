import { useEffect, useState, createContext, useContext} from "react"
import token from "../services/token"
import api from "../services/api"
const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({children}){
    
const [access, setAccess] = useState('')
const isAuthenticated = Boolean(access)
const [isLoading, setIsLoading] = useState(true)
const [user, setUser] = useState(null)
const [error, setError] = useState('')


useEffect(() => {
    const hash = window.location.hash
    const params = new URLSearchParams(hash.substring(1))
    const accessToken = params.get("access")

    if (access) {
        token.setToken(access)

        api.get('/users/me/')
            .then((res) => {
                setUser(res.data)
            })
            .catch((err) => {
                setError('Error getting the user')
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    else if (accessToken) {
        setAccess(accessToken)
        token.setToken(accessToken)

        window.history.replaceState(null, '', '/dashboard')
    }

    else {
        api.post('/users/token/refresh/')
            .then((res) => {
                setAccess(res.data.access)
                token.setToken(res.data.access)
            })
            .catch((err) => {
                setError('Error fetching details')
                setIsLoading(false)
            })
    }

}, [access])

    

     return (
        <AuthContext value={{access, isAuthenticated, isLoading, user, error}}>
            {children}
        </AuthContext>
    )

}