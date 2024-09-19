// import React from 'react';
// import { Link } from 'react-router-dom';
// import { signOut } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom';
// import { auth } from '../firebase';
// import './NavbarPresident.css';

// const NavbarPresident = () => {
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         try {
//             signOut(auth);
//             navigate('/Login');
//         } catch (error) {
//             console.error('Logout failed:', error);
//         }
//     };

//     return (
//         <nav className="navbar">
//             <div className="navbar-brand">
//                 <Link to="/president-dashboard" className="navbar-brand-link">FGC</Link>
//             </div>
//             <div className="navbar-links">
//                 <Link to="/president-dashboard">Events</Link>
//                 <Link to="/president-dashboard/teams">Teams</Link>
//                 <Link to="/president-dashboard/societies">Societies</Link>
//                 <Link to="/president-dashboard/about">About Us</Link>
//                 <button className="logout-button" onClick={handleLogout}>Logout</button>
//             </div>
//         </nav>
//     );
// };

// export default NavbarPresident;
import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import './NavbarPresident.css';

const NavbarPresident = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        try {
            signOut(auth);
            navigate('/Login');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/president-dashboard" className="navbar-brand-link">FGC</Link>
            </div>
            <div className="navbar-links">
                <Link to="/president-dashboard">Events</Link>
                <Link to="/president-dashboard/teams">Teams</Link>
                <Link to="/president-dashboard/societies">Societies</Link>
                <Link to="/president-dashboard/gallery">Gallery</Link>
                <Link to="/president-dashboard/about">About Us</Link>
                <button className="logout-button" onClick={handleLogout}>Logout</button>
            </div>
        </nav>
    );
};

export default NavbarPresident;
