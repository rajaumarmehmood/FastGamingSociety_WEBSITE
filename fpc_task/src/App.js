// // import React from 'react';
// // import { Routes, Route } from 'react-router-dom';
// // import { BrowserRouter as Router } from 'react-router-dom';
// // import Home from './pages/Home';
// // import Login from './pages/Login';
// // import SignUp from './pages/SignUp';
// // import Dashboard from './pages/Dashboard';
// // import ForgotPassword from './pages/ForgetPassword';

// // function App() {
// //   return (
// //     <Routes>
// //       <Route path="/" element={<Home />} />
// //       <Route path="/login" element={<Login />} />
// //       <Route path="/signup" element={<SignUp />} />
// //       <Route path="/dashboard" element={<Dashboard />} />
// //       <Route path="/forgot-password" element={<ForgotPassword />} />
// //     </Routes>
// //   );
// // }

// // export default App;
// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import SignUp from './pages/SignUp';
// import UserDashboard from './pages/UserDashboard';
// import MentorDashboard from './pages/MentorDashboard';
// import PresidentDashboard from './pages/PresidentDashboard';
// import ForgotPassword from './pages/ForgetPassword';

// function App() {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/user-dashboard" element={<UserDashboard />} />
//         <Route path="/mentor-dashboard" element={<MentorDashboard />} />
//         <Route path="/president-dashboard" element={<PresidentDashboard />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />
//       </Routes>
//     </>
//   );
// }

// export default App;
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import UserDashboard from './pages/UserDashboard';
import MentorDashboard from './pages/MentorDashboard';
import PresidentDashboard from './pages/PresidentDashboard';
import ForgotPassword from './pages/ForgetPassword';
import { useAuthState } from 'react-firebase-hooks/auth';
import { firestore, auth } from './firebase';
import { doc, getDoc } from 'firebase/firestore';
import NavbarGuest from './pages/NavbarGuest';
import NavbarUser from './pages/NavbarUser';
import NavbarMentor from './pages/NavbarMentor';
import GalleryPresident from './pages/GalleryPresident';
import GalleryMentor from './pages/GalleryMentor';
import GalleryUser from './pages/GalleryUser';
import NavbarPresident from './pages/NavbarPresident';
import UserEvent from './pages/UserEvent';
import UserTeams from './pages/UserTeams';
import TeamApplicationForm from './pages/TeamApplicationForm';

function App() {
  const [user] = useAuthState(auth);
  const [userRole, setUserRole] = React.useState('');

  React.useEffect(() => {
    const fetchUserRole = async () => {
      if (user) {
        const userDoc = doc(firestore, 'users', user.uid);
        const userSnapshot = await getDoc(userDoc);
        const role = userSnapshot.data().role;
        setUserRole(role);
      }
    };
    fetchUserRole();
  }, [user]);

  let NavbarComponent = NavbarGuest; // Default to guest navbar

  if (userRole === 'user') {
    NavbarComponent = NavbarUser;
  } else if (userRole === 'mentor') {
    NavbarComponent = NavbarMentor;
  } else if (userRole === 'president') {
    NavbarComponent = NavbarPresident;
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/mentor-dashboard" element={<MentorDashboard />} />
        <Route path="/president-dashboard" element={<PresidentDashboard />} />
        <Route path="/president-dashboard/gallery" element={<GalleryPresident />} />
        <Route path="/mentor-dashboard/gallery" element={<GalleryMentor />} />
        <Route path="/user-dashboard/gallery" element={<GalleryUser />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/user-event" element={<UserEvent />} />
        <Route path="/user-teams" element={<UserTeams />} />
        <Route path="/team-application-form" element={<TeamApplicationForm />} />
      </Routes>
    </>
  );
}

export default App;
