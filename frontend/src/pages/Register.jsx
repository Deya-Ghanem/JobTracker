import { useState } from "react"
import api from "../api/axios"
import { useNavigate } from "react-router-dom"

function Register(){
    const [ username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault()
        try{
            await api.post("auth/register/", {
                username,
                password,
                email,
            })
            navigate("/login")
        } catch(err){
            setError("Registration failed")
        }
    }
    return (
        <div>
            <h2>Register</h2>
            {error && <p>{error}</p>}

            <form onSubmit={handleSubmit}>
                <input 
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                />
                    <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register