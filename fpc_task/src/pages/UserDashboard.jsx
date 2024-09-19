// // // import React, { useState, useEffect } from 'react';
// // // import { firestore } from '../firebase';
// // // import { collection, getDocs } from 'firebase/firestore';
// // // import Navbar from './NavbarUser';
// // // import './UserDashboard.css';

// // // const UserDashboard = () => {
// // //   const [events, setEvents] = useState([]);

// // //   const fetchEvents = async () => {
// // //     const eventCollection = collection(firestore, 'events');
// // //     const eventSnapshot = await getDocs(eventCollection);
// // //     const eventsData = eventSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
// // //     setEvents(eventsData.filter(event => event.Status === true));
// // //   };

// // //   useEffect(() => {
// // //     fetchEvents();
// // //   }, []);

// // //   const renderTable = () => (
// // //     <table className="events-table">
// // //       <thead>
// // //         <tr>
// // //           <th>Title</th>
// // //           <th>Description</th>
// // //           <th>Registration Fee</th>
// // //           <th>Winning Prize</th>
// // //           <th>Society ID</th>
// // //         </tr>
// // //       </thead>
// // //       <tbody>
// // //         {events.map(event => (
// // //           <tr key={event.id}>
// // //             <td>{event.name}</td>
// // //             <td>{event.description}</td>
// // //             <td>{event.RegisterationFee}</td>
// // //             <td>{event.WinningPrice}</td>
// // //             <td>{event.societyId || 'N/A'}</td>
// // //           </tr>
// // //         ))}
// // //       </tbody>
// // //     </table>
// // //   );

// // //   return (
// // //     <>
// // //       <Navbar />
// // //       <div className="dashboard-container">
// // //         <h2>Your Dashboard</h2>
// // //         {renderTable()}
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default UserDashboard;
// // import React, { useState, useEffect } from 'react';
// // import { firestore } from '../firebase';
// // import { collection, getDocs } from 'firebase/firestore';
// // import Navbar from './NavbarUser';
// // import EventRegistrationForm from './EventRegisterationForm'; // Import the new form component
// // import './UserDashboard.css';

// // const UserDashboard = ({ user }) => { // Ensure user is passed as a prop
// //   const [events, setEvents] = useState([]);
// //   const [selectedEvent, setSelectedEvent] = useState(null);

// //   const fetchEvents = async () => {
// //     const eventCollection = collection(firestore, 'events');
// //     const eventSnapshot = await getDocs(eventCollection);
// //     const eventsData = eventSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
// //     setEvents(eventsData.filter(event => event.Status === true));
// //   };

// //   useEffect(() => {
// //     fetchEvents();
// //   }, []);

// //   const renderTable = () => (
// //     <table className="events-table">
// //       <thead>
// //         <tr>
// //           <th>Title</th>
// //           <th>Description</th>
// //           <th>Registration Fee</th>
// //           <th>Winning Prize</th>
// //           <th>Society ID</th>
// //         </tr>
// //       </thead>
// //       <tbody>
// //         {events.map(event => (
// //           <tr key={event.id} onClick={() => setSelectedEvent(event)}>
// //             <td>{event.name}</td>
// //             <td>{event.description}</td>
// //             <td>{event.RegisterationFee}</td>
// //             <td>{event.WinningPrice}</td>
// //             <td>{event.societyId || 'N/A'}</td>
// //           </tr>
// //         ))}
// //       </tbody>
// //     </table>
// //   );

// //   return (
// //     <>
// //       <Navbar />
// //       <div className="dashboard-container">
// //         <h2>Your Dashboard</h2>
// //         {renderTable()}
// //         {selectedEvent && user && ( // Ensure user is defined
// //           <EventRegistrationForm 
// //             event={selectedEvent} 
// //             user={user} 
// //             onClose={() => setSelectedEvent(null)} 
// //           />
// //         )}
// //       </div>
// //     </>
// //   );
// // };

// // export default UserDashboard;
// import React, { useState, useEffect } from 'react';
// import { firestore } from '../firebase';
// import { collection, getDocs, query, where } from 'firebase/firestore';
// import Navbar from './NavbarUser';
// import EventRegistrationForm from './EventRegisterationForm';
// import './UserDashboard.css';

// const UserDashboard = ({ user }) => {
//   const [events, setEvents] = useState([]);
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [isRegistered, setIsRegistered] = useState(false);

//   const fetchEvents = async () => {
//     const eventCollection = collection(firestore, 'events');
//     const eventSnapshot = await getDocs(eventCollection);
//     const eventsData = eventSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//     setEvents(eventsData.filter(event => event.Status === true));
//   };

//   useEffect(() => {
//     fetchEvents();
//   }, []);

//   const handleRowClick = async (event) => {
//     // Check if the user is already registered for this event
//     const registrationsRef = collection(firestore, 'registrations');
//     const q = query(registrationsRef, where('email', '==', user?.email), where('eventId', '==', event.id));
//     const querySnapshot = await getDocs(q);

//     if (!querySnapshot.empty) {
//       alert('You are already registered for this event.');
//       setIsRegistered(true);
//       setSelectedEvent(null);  // Ensure the form does not show
//     } else {
//       setSelectedEvent(event);
//       setIsRegistered(false);
//     }
//   };

//   const closeForm = () => {
//     setSelectedEvent(null);
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="dashboard-container">
//         <h2>Your Dashboard</h2>
//         <table className="events-table">
//           <thead>
//             <tr>
//               <th>Title</th>
//               <th>Description</th>
//               <th>Registration Fee</th>
//               <th>Winning Prize</th>
//               <th>Society ID</th>
//             </tr>
//           </thead>
//           <tbody>
//             {events.map(event => (
//               <tr key={event.id} onClick={() => handleRowClick(event)}>
//                 <td>{event.name}</td>
//                 <td>{event.description}</td>
//                 <td>{event.RegisterationFee}</td>
//                 <td>{event.WinningPrice}</td>
//                 <td>{event.societyId || 'N/A'}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         {selectedEvent && !isRegistered && (
//           <EventRegistrationForm event={selectedEvent} user={user} onClose={closeForm} />
//         )}
//       </div>
//     </>
//   );
// };

// export default UserDashboard;
import React, { useState, useEffect } from 'react';
import { firestore } from '../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import Navbar from './NavbarUser';
import EventRegistrationForm from './EventRegisterationForm';
import './UserDashboard.css';

const UserDashboard = ({ user }) => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);

  const fetchEvents = async () => {
    const eventCollection = collection(firestore, 'events');
    const eventSnapshot = await getDocs(eventCollection);
    const eventsData = eventSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setEvents(eventsData.filter(event => event.Status === true));
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleRowClick = async (event) => {
    console.log('User:', user);
    try {
      // Query the registrations collection to check if the user is already registered for the event
      const registrationsRef = collection(firestore, 'registrations');
      const q = query(
        registrationsRef,
        where('email', '==', user?.email),
        where('eventId', '==', event.id)
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        // If a document is found, the user is already registered
        alert('You are already registered for this event.');
        setIsRegistered(true);
        setSelectedEvent(null);
      } else {
        // If no document is found, allow the user to register
        setSelectedEvent(event);
        setIsRegistered(false);
      }
    } catch (error) {
      console.error('Error checking registration:', error);
    }
  };

  const closeForm = () => {
    setSelectedEvent(null);
  };

  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <h2>Your Dashboard</h2>
        <table className="events-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Registration Fee</th>
              <th>Winning Prize</th>
              <th>Society ID</th>
            </tr>
          </thead>
          <tbody>
            {events.map(event => (
              <tr key={event.id} onClick={() => handleRowClick(event)}>
                <td>{event.name}</td>
                <td>{event.description}</td>
                <td>{event.RegisterationFee}</td>
                <td>{event.WinningPrice}</td>
                <td>{event.societyId || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {selectedEvent && !isRegistered && (
          <EventRegistrationForm event={selectedEvent} user={user} onClose={closeForm} />
        )}
      </div>
    </>
  );
};

export default UserDashboard;
