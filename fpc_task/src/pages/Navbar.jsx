// // // import React from 'react';
// // // import { Link } from 'react-router-dom';
// // // import { auth } from '../firebase';
// // // import { signOut } from 'firebase/auth';
// // // import './Navbar.css';

// // // const Navbar = ({ user }) => {
// // //   const handleLogout = () => {
// // //     signOut(auth).then(() => {
// // //       // Redirect or handle logout success
// // //     }).catch((error) => {
// // //       // Handle Errors
// // //       console.error(error);
// // //     });
// // //   };

// // //   return (
// // //     <nav className="navbar">
// // //       <div className="navbar-brand">FGC</div>
// // //       <div className="navbar-links">
// // //         {user ? (
// // //           <>
// // //             <Link to="/events">Events</Link>
// // //             <Link to="/teams">Teams</Link>
// // //             <Link to="/societies">Societies</Link>
// // //             <Link to="/about">About Us</Link>
// // //             <button className="logout-button" onClick={handleLogout}>Logout</button>
// // //           </>
// // //         ) : (
// // //           <>
// // //             <Link to="/login">Login</Link>
// // //             <Link to="/signup">Sign Up</Link>
// // //           </>
// // //         )}
// // //       </div>
// // //     </nav>
// // //   );
// // // };

// // // export default Navbar;
// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import { auth } from '../firebase';
// // import { signOut } from 'firebase/auth';
// // import './Navbar.css';

// // const Navbar = ({ user }) => {
// //   const handleLogout = () => {
// //     signOut(auth).then(() => {
// //       // Redirect or handle logout success
// //     }).catch((error) => {
// //       // Handle Errors
// //       console.error(error);
// //     });
// //   };

// //   return (
// //     <nav className="navbar">
// //       <div className="navbar-brand">
// //         <Link to="/" className="navbar-brand-link">FGC</Link>
// //       </div>
// //       <div className="navbar-links">
// //         {user ? (
// //           <>
// //             <Link to="/events">Events</Link>
// //             <Link to="/teams">Teams</Link>
// //             <Link to="/societies">Societies</Link>
// //             <Link to="/about">About Us</Link>
// //             <button className="logout-button" onClick={handleLogout}>Logout</button>
// //           </>
// //         ) : (
// //           <>
// //             <Link to="/login">Login</Link>
// //             <Link to="/signup">Sign Up</Link>
// //           </>
// //         )}
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { auth } from '../firebase';
// import { signOut } from 'firebase/auth';
// import './Navbar.css';

// const Navbar = ({ user }) => {
//   const handleLogout = () => {
//     signOut(auth).then(() => {
//       // Redirect or handle logout success
//     }).catch((error) => {
//       console.error(error);
//     });
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-brand">
//         <Link to="/" className="navbar-brand-link">FGC</Link>
//       </div>
//       <div className="navbar-links">
//         {user ? (
//           <>
//             <Link to="/events">Events</Link>
//             <Link to="/teams">Teams</Link>
//             <Link to="/societies">Societies</Link>
//             <Link to="/about">About Us</Link>
//             <button className="logout-button" onClick={handleLogout}>Logout</button>
//           </>
//         ) : (
//           <>
//             <Link to="/login">Login</Link>
//             <Link to="/signup">Sign Up</Link>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth, firestore } from '../firebase';
import { signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import './Navbar.css';

const Navbar = ({ user }) => {
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    const fetchUserRole = async () => {
      if (user) {
        const userDoc = doc(firestore, 'users', user.uid);
        const userSnapshot = await getDoc(userDoc);
        setUserRole(userSnapshot.data().role);
      }
    };

    fetchUserRole();
  }, [user]);

  const handleLogout = () => {
    signOut(auth).then(() => {
      // Redirect or handle logout success
    }).catch((error) => {
      console.error(error);
    });
  };

  const getDashboardLink = () => {
    if (userRole === 'mentor') {
      return '/mentor-dashboard';
    } else if (userRole === 'president') {
      return '/president-dashboard';
    } else {
      return '/user-dashboard';
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-brand-link">FGC</Link>
      </div>
      <div className="navbar-links">
        {user ? (
          <>
            <Link to={getDashboardLink()}>Dashboard</Link>
            <Link to={`${getDashboardLink()}/events`}>Events</Link>
            <Link to="/teams">Teams</Link>
            <Link to="/societies">Societies</Link>
            <Link to="/about">About Us</Link>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

