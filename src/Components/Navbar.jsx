

import { FaHeartbeat } from 'react-icons/fa';
import './Navbar.css';
import { Link } from 'react-router-dom';
const Nav = () => {

    return (
        <div>
            <nav className="navbar">
                
                <h2>  <FaHeartbeat className='logo-icon' />  GetFitWithEhma</h2>
               
                <ul className="navbar-links">
                    <li>
                        <Link to="/login">LogIn</Link>
                    </li>
                    <li>
                        <Link to="/signup">SignUp</Link>
                    </li>
                </ul>
            </nav>
        </div>

    );
};
export default Nav


