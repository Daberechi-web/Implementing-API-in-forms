

import './WelcomeCard.css'
const WelcomeCard = ({ icon, title, text, color }) => {
  return (
    <div className="welcome-card">
      <div className="icon" style={{ color: color }}>
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default WelcomeCard;