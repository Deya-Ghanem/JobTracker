import { useState, useContext, useEffect } from "react"
import AuthContext from "../context/AuthContext"
import { useNavigate } from "react-router-dom"
import "./login.css"
function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const { login } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try{
             await login(username, password)
             navigate("/dashboard")
        } catch(err) {
            alert("Login Failed")
        }
        useEffect(() => {
            const token = localStorage.getItem("access_token")
            if(token) {
                navigate("/dashboard")
            }
        }, [])
    }
    
    return (
        <div className="Login-page">
<div className="login-box">
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <input
                className="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
            <input
                className="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />

            <button type="submit">Login</button>
            
        </form>
        
        <h2> new to the website?</h2>
        <button onClick={() => {
            navigate("/register")
        }}>register</button>
        </div>

        </div>
        
    )
}

export default Login