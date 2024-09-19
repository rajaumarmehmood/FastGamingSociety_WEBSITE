// import React from 'react';
// import { Link } from 'react-router-dom';
// import { signOut } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom';
// import { auth } from '../firebase';
// import './NavbarMentor.css';


// const NavbarMentor = () => {
//     const navigate = useNavigate();

//     const handleLogout = async () => {
//       try {
//         await signOut(auth);
//         navigate('/Login');
//       } catch (error) {
//         console.error('Logout failed:', error);
//       }
//     }

//   return (
//     <nav className="navbar">
//       <div className="navbar-brand">
//         <Link to="/mentor-dashboard" className="navbar-brand-link">FGC</Link>
//       </div>
//       <div className="navbar-links">
//         <Link to="/mentor-dashboard">Events</Link>
//         <Link to="/mentor-dashboard/teams">Teams</Link>
//         <Link to="/mentor-dashboard/societies">Societies</Link>
//         <Link to="/mentor-dashboard/about">About Us</Link>
//         <button className="logout-button" onClick={handleLogout}>Logout</button>
//       </div>
//     </nav>
//   );
// };

// export default NavbarMentor;
import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import './NavbarMentor.css';

const NavbarMentor = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/Login');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/mentor-dashboard" className="navbar-brand-link">FGC</Link>
            </div>
            <div className="navbar-links">
                <Link to="/mentor-dashboard">Events</Link>
                <Link to="/mentor-dashboard/teams">Teams</Link>
                <Link to="/mentor-dashboard/societies">Societies</Link>
                <Link to="/mentor-dashboard/about">About Us</Link>
                <Link to="/mentor-dashboard/gallery">Gallery</Link> {/* Added Gallery link */}
                <button className="logout-button" onClick={handleLogout}>Logout</button>
            </div>
        </nav>
    );
};

export default NavbarMentor;

