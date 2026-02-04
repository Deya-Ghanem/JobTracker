import { useState } from "react"
import api from '../api/axios'

function AddJob({ onJobAdded}) {
    const [company, setCompany] = useState("")
    const [role, setRole] = useState("")
    const [status, setStatus] = useState("applied")

    const handleSubmit = async (e) => {
        e.preventDefault()
    

    try{
        await api.post("jobs/", {
            company_name : company,
            role : role,
            status: status,
        })
        setCompany("")
        setRole("")
        setStatus("")

        onJobAdded()
    } catch (err) {
        alert("Failed to add ")
    }

 }
 return (
    <form onSubmit={handleSubmit}>
        <input 
            placeholder="Company name"
            value={company}
            onChange={(e) => setCompany(e.target.value)} 
            required    
        />

        <input 
            placeholder="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)} 
            required    
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="applied">Applied</option>
            <option value="interview">Interview</option>
            <option value="offer">Offer</option>
            <option value="rejected">Rejected</option>
        </select>

        <button type="submit">Add</button>
    </form>
 )
}

export default AddJob