// import React from 'react';
// import { Link } from 'react-router-dom';
// import { signOut } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom';
// import { auth } from '../firebase';
// import './NavbarUser.css';

// const NavbarUser = () => {
//     const navigate = useNavigate();

//   const handleLogout = () => {
//     try {
//         signOut(auth);
//         navigate('/Login');
//       } catch (error) {
//         console.error('Logout failed:', error);
//       }
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-brand">
//         <Link to="/user-dashboard" className="navbar-brand-link">FGC</Link>
//       </div>
//       <div className="navbar-links">
//         <Link to="/user-event">Events</Link>
//         <Link to="/user-teams">Teams</Link>
//         <Link to="/user-dashboard/societies">Societies</Link>
//         <Link to="/user-dashboard/about">About Us</Link>
//         <button className="logout-button" onClick={handleLogout}>Logout</button>
//       </div>
//     </nav>
//   );
// };

// export default NavbarUser;
import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import './NavbarUser.css';

const NavbarUser = () => {
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
                <Link to="/user-dashboard" className="navbar-brand-link">FGC</Link>
            </div>
            <div className="navbar-links">
                <Link to="/user-event">Events</Link>
                <Link to="/user-teams">Teams</Link>
                <Link to="/user-dashboard/societies">Societies</Link>
                <Link to="/user-dashboard/about">About Us</Link>
                <Link to="/user-dashboard/gallery">Gallery</Link> {/* Added Gallery link */}
                <button className="logout-button" onClick={handleLogout}>Logout</button>
            </div>
        </nav>
    );
};

export default NavbarUser;
