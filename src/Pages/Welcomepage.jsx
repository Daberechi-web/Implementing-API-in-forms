

import './Welcomepage.css'
import WelcomeCard from "../Components/WelcomeCard";
import { FaHeartbeat, FaCarrot, FaTrophy } from 'react-icons/fa';

const Welcome = () => {
    return (


        <section>

            
            
            <div className="welcome-container">

                <header className="hero">
                    <h1>Track Your Progress,<br />Achieve Your Goals</h1>
                    <p>Your journey to a healthier lifestyle starts here.</p>
                </header>


                <section className="features">
                    <WelcomeCard
                           icon={<FaHeartbeat />}
                        title="Workout Tracking"
                        text="Log your exercises, track your sets and reps, and monitor progress over time."
                        color="#2ecc71"
                    />
                       
        
                    <WelcomeCard
                        icon={<FaCarrot />}
                        title="Nutrition & Macros"
                        text="Easily log your meals and track your caloric intake and macronutrients."
                        color="#f1c40f"
                    />
                    <WelcomeCard
                        icon={<FaTrophy />}
                        title="Goal Setting"
                        text="Set realistic goals and stay motivated as you hit new milestones."
                        color="#3498db"
                    />
                </section>

            </div>



        </section>




    );
}
export default Welcome