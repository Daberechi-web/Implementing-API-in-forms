

import { FaFire, FaDumbbell, FaTint, FaRunning, FaHeart, FaMoon, FaCog, FaSignOutAlt, FaHome, FaHeartbeat } from "react-icons/fa";
import "./Dashboard.css"
import { Link } from "react-router-dom";

const Dashboard = () => {

    return (
        <div className="dashboard">
            <div className="sidebar">
                <h2 className="logo"> <FaHeartbeat/> GFWE</h2>
                <nav>
                    <ul>
                        <li> <FaCog /> Settings</li>
                        <li> <FaSignOutAlt /> Logout</li>
                        <li> <FaHome/> <Link to= "/">Home</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <main className="main">
                <h1>HOLA GYMRAT</h1>

                <div className="stats-grid">

                    <div className="stat-card">
                        <FaFire className="icon" />
                        <h3>Calories Burned</h3>
                        <p>500 kcal</p>
                    </div>

                    <div className="stat-card">
                        <FaDumbbell className="icon" />
                        <h3>Workout Time</h3>
                        <p>60 mins</p>
                    </div>

                    <div className="stat-card">
                        <FaTint className="icon" />
                        <h3>Water Intake</h3>
                        <p>2.5 L</p>
                    </div>

                    <div className="stat-card">
                        <FaRunning className="icon" />
                        <h3>Workouts</h3>
                        <p>3</p>
                    </div>

                    <div className="stat-card">
                        <FaHeart className="icon" />
                        <h3>Heart Rate</h3>
                        <p>102 bpm</p>
                    </div>

                    <div className="stat-card">
                        <FaMoon className="icon" />
                        <h3>Sleep Time</h3>
                        <p>7.2 hrs</p>
                    </div>
                </div>


                <div className="chart">
                    <h2>Weekly Progress</h2>
                    <div className="chart-placeholder">[ Chart goes here ]</div>
                </div>
            </main>
        </div>
    );
};



export default Dashboard