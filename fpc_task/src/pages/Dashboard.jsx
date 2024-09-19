// import React, { useState, useEffect } from 'react';
// import { auth, firestore } from '../firebase';
// import { doc, getDoc } from 'firebase/firestore';

// export default function Dashboard() {
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       if (auth.currentUser) {
//         const userDoc = doc(firestore, 'users', auth.currentUser.uid);
//         const docSnap = await getDoc(userDoc);
//         if (docSnap.exists()) {
//           setUserData(docSnap.data());
//         }
//       }
//     };

//     fetchUserData();
//   }, []);

//   if (!userData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>Dashboard</h2>
//       {userData.role === 'Admin' && <AdminDashboard />}
//       {userData.role === 'Mentor' && <MentorDashboard />}
//       {userData.role === 'User' && <UserDashboard />}
//     </div>
//   );
// }

// const AdminDashboard = () => <div>Admin Dashboard</div>;
// const MentorDashboard = () => <div>Mentor Dashboard</div>;
// const UserDashboard = () => <div>User Dashboard</div>;
// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, firestore } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import '../style.css';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDoc = await getDoc(doc(firestore, 'users', user.uid));
        setUser(userDoc.data());
      } else {
        navigate('/');
      }
    };
    fetchUser();
  }, [navigate]);

  const handleLogout = () => {
    auth.signOut();
    navigate('/');
  };

  if (!user) return null;

  return (
    <div className="container dashboard">
      <h1>Welcome, {user.name}</h1>
      <p>Your role is: {user.role}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
