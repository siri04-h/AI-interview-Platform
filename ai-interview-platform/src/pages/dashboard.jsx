import "./dashboard.css";
import { useNavigate } from "react-router-dom";
function Dashboard() {
    const navigate = useNavigate();
    return(
        <div className="dash">
            <h1>Welcome, User</h1>

            <p>Ready for your next interview</p>
 
            <div className="cards">
                <div className="card">
                    <h2>DSA Practice</h2>
                    <button onClick={() => navigate("/dsa")}> Solve Questions</button>
                </div>

                <div className="card">
                    <h2>Mock Interview</h2>
                    <button onClick={() => navigate("/mock")}>AI asks questions</button>
                </div>

                <div className="card">
                    <h2>Progress</h2>
                    <button onClick={() =>navigate("/progress")}>View your stats</button>
                </div>

                <div className="card">
                    <h2>Profile</h2>
                    <button onClick={() =>navigate("/profile")}>Edit your details</button>
                </div>
                </div>
            </div>
    );
}

export default Dashboard;