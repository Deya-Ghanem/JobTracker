import { createContext, useState} from "react"
import api from "../api/axios"

const AuthContext = createContext()

export function AuthProvider({ children }){
    const [user, setUser] = useState(null)

    const login = async (username, password) => {
        const response = await api.post("auth/login/", {
            username,
            password,
        })

        localStorage.setItem("access_token", response.data.access)
        localStorage.setItem("refresh_token", response.data.refresh)

        setUser(username)
    }
    const logout = () => {
        localStorage.clear()
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext