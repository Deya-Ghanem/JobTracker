import { useEffect, useState } from "react"
import api from "../api/axios"
import AddJob from "../components/AddJob"
import { useContext } from "react"
import AuthContext from "../context/AuthContext"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import "./Dashboard.css"
function Dashboard(){
    const [ jobs, setJobs] = useState([])
    const [notes, setNotes] = useState({})
    const fetchJobs = async () => {
        const response = await api.get("jobs/")
        setJobs(response.data)
    }

    useEffect(() =>{
        fetchJobs()
    }, [])

    const { logout } = useContext(AuthContext)
    const navigate = useNavigate()

    return (
        <div className="dashboard-page">
            <div className="dashboard-container">
                <Header />
            <h2>Dashboard</h2>
            <AddJob onJobAdded={fetchJobs} />
            <button 
            className="logout-btn"
            onClick={() => {
                logout()
                navigate("/login")
            }}
            >Logout</button>
            <ul className="jobs-list">
                {jobs.map((job) =>(
                    <li className="job-card" key={job.id}>
                        <div className="job-title">
                            <strong>{job.company_name}</strong> - {job.role} - {job.status}
                        </div>
                        
                        <select 
                            value = {job.status}
                            onChange={async (e) => {
                                const newStatus = e.target.value

                                await api.patch(`jobs/${job.id}/`, {
                                    status : newStatus,
                                })

                                fetchJobs()
                            }}
                            >
                                <option value="applied">Applied</option>
                                <option value="interview">Interview</option>
                                <option value="offer">Offer</option>
                                <option value="rejected">Rejected</option>
                            </select>
                            <textarea
                                value={notes[job.id] ?? job.notes ?? ""}
                                onChange={(e) => 
                                    setNotes({
                                        ...notes,
                                        [job.id]: e.target.value,
                                    })
                            }
                            placeholder = "Add notes"
                            />
                            <div className="job-acctions">
                                <button className="save-btn"
                                onClick={async () => {
                                    await api.patch(`jobs/${job.id}/`, {
                                        notes: notes[job.id],
                                    })
                                    fetchJobs()
                                }}
                            >Save Notes </button>
                        <button className="delete-btn"
                         onClick={async () => {
                            await api.delete(`jobs/${job.id}/`)
                            fetchJobs()
                        }}
                        >
                        Delete Job❌
                        </button>
                            </div>
                            
                        
                    </li>
                ))}
            </ul>

            </div>
            
        </div>
    )
}

export default Dashboard