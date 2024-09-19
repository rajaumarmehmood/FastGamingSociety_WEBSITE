// // // // import React, { useState, useEffect } from 'react';
// // // // import { firestore } from '../firebase';
// // // // import { collection, getDocs, addDoc, updateDoc, doc } from 'firebase/firestore';
// // // // import Navbar from './NavbarMentor';
// // // // import './MentorDashboard.css';

// // // // const MentorDashboard = () => {
// // // //   const [events, setEvents] = useState([]);
// // // //   const [newEvent, setNewEvent] = useState('');

// // // //   const fetchEvents = async () => {
// // // //     const eventCollection = collection(firestore, 'events');
// // // //     const eventSnapshot = await getDocs(eventCollection);
// // // //     const eventsData = eventSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
// // // //     setEvents(eventsData);
// // // //   };

// // // //   useEffect(() => {
// // // //     fetchEvents();
// // // //   }, []);

// // // //   const handleAddEvent = async () => {
// // // //     const eventCollection = collection(firestore, 'events');
// // // //     await addDoc(eventCollection, { title: newEvent, status: true });
// // // //     setNewEvent('');
// // // //     fetchEvents();
// // // //   };

// // // //   const handleEditEvent = async (id, newTitle) => {
// // // //     const eventDoc = doc(firestore, 'events', id);
// // // //     await updateDoc(eventDoc, { title: newTitle });
// // // //     fetchEvents();
// // // //   };

// // // //   const renderTable = () => (
// // // //     <table className="events-table">
// // // //       <thead>
// // // //         <tr>
// // // //           <th>Title</th>
// // // //           <th>Description</th>
// // // //           <th>Registration Fee</th>
// // // //           <th>Winning Prize</th>
// // // //           <th>Society ID</th>
// // // //           <th>Actions</th>
// // // //         </tr>
// // // //       </thead>
// // // //       <tbody>
// // // //         {events.map(event => (
// // // //           <tr key={event.id}>
// // // //             <td>{event.name}</td>
// // // //             <td>{event.description}</td>
// // // //             <td>{event.RegisterationFee}</td>
// // // //             <td>{event.WinningPrice}</td>
// // // //             <td>{event.societyId?.id || 'N/A'}</td>
// // // //             <td>
// // // //               <button onClick={() => handleEditEvent(event.id, prompt('Edit event title:', event.title))}>
// // // //                 Edit
// // // //               </button>
// // // //             </td>
// // // //           </tr>
// // // //         ))}
// // // //       </tbody>
// // // //     </table>
// // // //   );

// // // //   return (
// // // //     <>
// // // //       <Navbar />
// // // //       <div className="dashboard-container">
// // // //         <h2>Mentor Dashboard</h2>
// // // //         {renderTable()}
// // // //         <div className="add-event">
// // // //           <input
// // // //             type="text"
// // // //             value={newEvent}
// // // //             onChange={e => setNewEvent(e.target.value)}
// // // //             placeholder="New event title"
// // // //           />
// // // //           <button onClick={handleAddEvent}>Add Event</button>
// // // //         </div>
// // // //       </div>
// // // //     </>
// // // //   );
// // // // };

// // // // export default MentorDashboard;
// // // import React, { useState, useEffect } from 'react';
// // // import { firestore } from '../firebase';
// // // import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
// // // import Navbar from './NavbarMentor';
// // // import './MentorDashboard.css';

// // // const MentorDashboard = () => {
// // //   const [events, setEvents] = useState([]);
// // //   const [newEvent, setNewEvent] = useState('');

// // //   const fetchEvents = async () => {
// // //     const eventCollection = collection(firestore, 'events');
// // //     const eventSnapshot = await getDocs(eventCollection);
// // //     const eventsData = eventSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
// // //     setEvents(eventsData);
// // //   };

// // //   useEffect(() => {
// // //     fetchEvents();
// // //   }, []);

// // //   const handleAddEvent = async () => {
// // //     const eventCollection = collection(firestore, 'events');
// // //     await addDoc(eventCollection, { 
// // //       title: newEvent, 
// // //       description: '',
// // //       RegisterationFee: '',
// // //       WinningPrice: '',
// // //       societyId: null,
// // //       status: false // Initially setting the status to false (Pending)
// // //     });
// // //     setNewEvent('');
// // //     fetchEvents();
// // //   };

// // //   const handleEditEvent = async (id, updatedEvent) => {
// // //     const eventDoc = doc(firestore, 'events', id);
// // //     await updateDoc(eventDoc, updatedEvent);
// // //     fetchEvents();
// // //   };

// // //   const handleDeleteEvent = async (id) => {
// // //     const eventDoc = doc(firestore, 'events', id);
// // //     await deleteDoc(eventDoc);
// // //     fetchEvents();
// // //   };

// // //   const handleAcceptEvent = async (id) => {
// // //     const eventDoc = doc(firestore, 'events', id);
// // //     await updateDoc(eventDoc, { status: true });
// // //     fetchEvents();
// // //   };

// // //   const renderTable = () => (
// // //     <table className="events-table">
// // //       <thead>
// // //         <tr>
// // //           <th>Title</th>
// // //           <th>Description</th>
// // //           <th>Registration Fee</th>
// // //           <th>Winning Prize</th>
// // //           <th>Society ID</th>
// // //           <th>Status</th>
// // //           <th>Actions</th>
// // //         </tr>
// // //       </thead>
// // //       <tbody>
// // //         {events.map(event => (
// // //           <tr key={event.id}>
// // //             <td>{event.name}</td>
// // //             <td>{event.description}</td>
// // //             <td>{event.RegisterationFee}</td>
// // //             <td>{event.WinningPrice}</td>
// // //             <td>{event.societyId?.id || 'N/A'}</td>
// // //             <td>{event.status ? 'Approved' : 'Pending'}</td>
// // //             <td>
// // //               <button onClick={() => handleEditEvent(event.id, {
// // //                 title: prompt('Edit event title:', event.title),
// // //                 description: prompt('Edit event description:', event.description),
// // //                 RegisterationFee: prompt('Edit registration fee:', event.RegisterationFee),
// // //                 WinningPrice: prompt('Edit winning prize:', event.WinningPrice),
// // //               })}>
// // //                 Edit
// // //               </button>
// // //               <button onClick={() => handleDeleteEvent(event.id)}>Delete</button>
// // //               {!event.status && (
// // //                 <button onClick={() => handleAcceptEvent(event.id)}>Accept</button>
// // //               )}
// // //             </td>
// // //           </tr>
// // //         ))}
// // //       </tbody>
// // //     </table>
// // //   );

// // //   return (
// // //     <>
// // //       <Navbar />
// // //       <div className="dashboard-container">
// // //         <h2>Mentor Dashboard</h2>
// // //         {renderTable()}
// // //         <div className="add-event">
// // //           <input
// // //             type="text"
// // //             value={newEvent}
// // //             onChange={e => setNewEvent(e.target.value)}
// // //             placeholder="New event title"
// // //           />
// // //           <button onClick={handleAddEvent}>Add Event</button>
// // //         </div>
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default MentorDashboard;
// // import React, { useState, useEffect } from 'react';
// // import { firestore } from '../firebase';
// // import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
// // import Navbar from './NavbarMentor';
// // import './MentorDashboard.css';

// // const MentorDashboard = () => {
// //   const [events, setEvents] = useState([]);
// //   const [newEvent, setNewEvent] = useState('');
// //   const [editEventId, setEditEventId] = useState(null);
// //   const [editEventDetails, setEditEventDetails] = useState({ title: '', description: '', registrationFee: '', winningPrice: '', societyId: '' });

// //   const fetchEvents = async () => {
// //     const eventCollection = collection(firestore, 'events');
// //     const eventSnapshot = await getDocs(eventCollection);
// //     const eventsData = eventSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
// //     setEvents(eventsData);
// //   };

// //   useEffect(() => {
// //     fetchEvents();
// //   }, []);

// //   const handleAddEvent = async () => {
// //     const eventCollection = collection(firestore, 'events');
// //     await addDoc(eventCollection, { title: newEvent, status: false });
// //     setNewEvent('');
// //     fetchEvents();
// //   };

// //   const handleEditEvent = (id, details) => {
// //     setEditEventId(id);
// //     setEditEventDetails(details);
// //   };

// //   const handleSaveEdit = async () => {
// //     const eventDoc = doc(firestore, 'events', editEventId);
// //     await updateDoc(eventDoc, {
// //       title: editEventDetails.title,
// //       description: editEventDetails.description,
// //       registrationFee: editEventDetails.registrationFee,
// //       winningPrice: editEventDetails.winningPrice,
// //       societyId: editEventDetails.societyId
// //     });
// //     setEditEventId(null);
// //     fetchEvents();
// //   };

// //   const handleDeleteEvent = async (id) => {
// //     const eventDoc = doc(firestore, 'events', id);
// //     await deleteDoc(eventDoc);
// //     fetchEvents();
// //   };

// //   const handleAcceptEvent = async (id) => {
// //     const eventDoc = doc(firestore, 'events', id);
// //     await updateDoc(eventDoc, { status: true });
// //     fetchEvents();
// //   };

// //   const renderTable = () => (
// //     <table className="events-table">
// //       <thead>
// //         <tr>
// //           <th>Title</th>
// //           <th>Description</th>
// //           <th>Registration Fee</th>
// //           <th>Winning Prize</th>
// //           <th>Society ID</th>
// //           <th>Status</th>
// //           <th>Actions</th>
// //         </tr>
// //       </thead>
// //       <tbody>
// //         {events.map(event => (
// //           <tr key={event.id}>
// //             <td>
// //               {editEventId === event.id ? (
// //                 <input
// //                   type="text"
// //                   value={editEventDetails.title}
// //                   onChange={(e) => setEditEventDetails({ ...editEventDetails, title: e.target.value })}
// //                 />
// //               ) : (
// //                 event.title
// //               )}
// //             </td>
// //             <td>
// //               {editEventId === event.id ? (
// //                 <input
// //                   type="text"
// //                   value={editEventDetails.description}
// //                   onChange={(e) => setEditEventDetails({ ...editEventDetails, description: e.target.value })}
// //                 />
// //               ) : (
// //                 event.description
// //               )}
// //             </td>
// //             <td>
// //               {editEventId === event.id ? (
// //                 <input
// //                   type="number"
// //                   value={editEventDetails.registrationFee}
// //                   onChange={(e) => setEditEventDetails({ ...editEventDetails, registrationFee: e.target.value })}
// //                 />
// //               ) : (
// //                 event.registrationFee
// //               )}
// //             </td>
// //             <td>
// //               {editEventId === event.id ? (
// //                 <input
// //                   type="number"
// //                   value={editEventDetails.winningPrice}
// //                   onChange={(e) => setEditEventDetails({ ...editEventDetails, winningPrice: e.target.value })}
// //                 />
// //               ) : (
// //                 event.winningPrice
// //               )}
// //             </td>
// //             <td>
// //               {editEventId === event.id ? (
// //                 <input
// //                   type="text"
// //                   value={editEventDetails.societyId}
// //                   onChange={(e) => setEditEventDetails({ ...editEventDetails, societyId: e.target.value })}
// //                 />
// //               ) : (
// //                 event.societyId || 'N/A'
// //               )}
// //             </td>
// //             <td>
// //               {event.status ? 'Approved' : 'Pending'}
// //             </td>
// //             <td>
// //               {editEventId === event.id ? (
// //                 <button onClick={handleSaveEdit}>Save</button>
// //               ) : (
// //                 <>
// //                   <button onClick={() => handleEditEvent(event.id, event)}>Edit</button>
// //                   <button onClick={() => handleDeleteEvent(event.id)}>Delete</button>
// //                   {!event.status && <button onClick={() => handleAcceptEvent(event.id)}>Accept</button>}
// //                 </>
// //               )}
// //             </td>
// //           </tr>
// //         ))}
// //       </tbody>
// //     </table>
// //   );

// //   return (
// //     <>
// //       <Navbar />
// //       <div className="dashboard-container">
// //         <h2>Mentor Dashboard</h2>
// //         {renderTable()}
// //         <div className="add-event">
// //           <input
// //             type="text"
// //             value={newEvent}
// //             onChange={e => setNewEvent(e.target.value)}
// //             placeholder="New event title"
// //           />
// //           <button onClick={handleAddEvent}>Add Event</button>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default MentorDashboard;
// import React, { useState, useEffect } from 'react';
// import { firestore } from '../firebase';
// import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';
// import Navbar from './NavbarMentor';
// import './MentorDashboard.css';

// const MentorDashboard = () => {
//   const [events, setEvents] = useState([]);
//   const [newEvent, setNewEvent] = useState('');
//   const [editEventId, setEditEventId] = useState(null);
//   const [editEventDetails, setEditEventDetails] = useState({
//     description: '',
//     RegisterationFee: '',
//     WinningPrice: '',
//     societyId: ''
//   });

//   const fetchEvents = async () => {
//     const eventCollection = collection(firestore, 'events');
//     const eventSnapshot = await getDocs(eventCollection);
//     const eventsData = eventSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//     setEvents(eventsData);
//   };

//   useEffect(() => {
//     fetchEvents();
//   }, []);

//   const handleAddEvent = async () => {
//     const eventCollection = collection(firestore, 'events');
//     await addDoc(eventCollection, { title: newEvent, status: false }); // Assuming new events are initially pending
//     setNewEvent('');
//     fetchEvents();
//   };

//   const handleEditEvent = (id, event) => {
//     setEditEventId(id);
//     setEditEventDetails({
//       description: event.description || '',
//       RegisterationFee: event.RegisterationFee || '',
//       WinningPrice: event.WinningPrice || '',
//       societyId: event.societyId || '' // Assuming societyId is an object with an 'id' property
//     });
//   };

//   const handleSaveEdit = async () => {
//     const eventDoc = doc(firestore, 'events', editEventId);
//     await updateDoc(eventDoc, { 
//       description: editEventDetails.description,
//       RegisterationFee: editEventDetails.RegisterationFee,
//       WinningPrice: editEventDetails.WinningPrice,
//       societyId: editEventDetails.societyId // Ensure this is a simple value, not an object
//     });
//     setEditEventId(null);
//     fetchEvents();
//   };

//   const handleDeleteEvent = async (id) => {
//     const eventDoc = doc(firestore, 'events', id);
//     await deleteDoc(eventDoc);
//     fetchEvents();
//   };

//   const handleAcceptEvent = async (id) => {
//     const eventDoc = doc(firestore, 'events', id);
//     await updateDoc(eventDoc, { Status: true });
//     fetchEvents();
//   };

//   const renderTable = () => (
//     <table className="events-table">
//       <thead>
//         <tr>
//           <th>Title</th>
//           <th>Description</th>
//           <th>Registration Fee</th>
//           <th>Winning Prize</th>
//           <th>Society ID</th>
//           <th>Status</th>
//           <th>Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         {events.map(event => (
//           <tr key={event.id}>
//             <td>{event.name}</td>
//             <td>
//               {editEventId === event.id ? (
//                 <input
//                   type="text"
//                   value={editEventDetails.description}
//                   onChange={(e) => setEditEventDetails({ ...editEventDetails, description: e.target.value })}
//                 />
//               ) : (
//                 event.description
//               )}
//             </td>
//             <td>
//               {editEventId === event.id ? (
//                 <input
//                   type="number"
//                   value={editEventDetails.RegisterationFee}
//                   onChange={(e) => setEditEventDetails({ ...editEventDetails, registrationFee: e.target.value })}
//                 />
//               ) : (
//                 event.RegisterationFee
//               )}
//             </td>
//             <td>
//               {editEventId === event.id ? (
//                 <input
//                   type="number"
//                   value={editEventDetails.WinningPrice}
//                   onChange={(e) => setEditEventDetails({ ...editEventDetails, winningPrice: e.target.value })}
//                 />
//               ) : (
//                 event.WinningPrice
//               )}
//             </td>
//             <td>
//               {editEventId === event.id ? (
//                 <input
//                   type="text"
//                   value={editEventDetails.societyId}
//                   onChange={(e) => setEditEventDetails({ ...editEventDetails, societyId: e.target.value })}
//                 />
//               ) : (
//                 event.societyId || 'N/A' // Ensure to access a valid property of societyId
//               )}
//             </td>
//             <td>{event.Status ? 'Approved' : 'Pending'}</td>
//             <td>
//               {editEventId === event.id ? (
//                 <button onClick={handleSaveEdit}>Save</button>
//               ) : (
//                 <>
//                   <button onClick={() => handleEditEvent(event.id, event)}>Edit</button>
//                   <button onClick={() => handleDeleteEvent(event.id)}>Delete</button>
//                   {!event.Status && <button onClick={() => handleAcceptEvent(event.id)}>Accept</button>}
//                 </>
//               )}
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );

//   return (
//     <>
//       <Navbar />
//       <div className="dashboard-container">
//         <h2>Mentor Dashboard</h2>
//         {renderTable()}
//         <div className="add-event">
//           <input
//             type="text"
//             value={newEvent}
//             onChange={e => setNewEvent(e.target.value)}
//             placeholder="New event title"
//           />
//           <button onClick={handleAddEvent}>Add Event</button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MentorDashboard;
import React, { useState, useEffect } from 'react';
import { firestore } from '../firebase';
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import Navbar from './NavbarMentor';
import './MentorDashboard.css';

const MentorDashboard = () => {
  const [events, setEvents] = useState([]);
  const [newEventDetails, setNewEventDetails] = useState({
    name: '',
    description: '',
    RegisterationFee: '',
    WinningPrice: '',
    societyId: ''
  });
  const [editEventId, setEditEventId] = useState(null);
  const [editEventDetails, setEditEventDetails] = useState({
    description: '',
    RegisterationFee: '',
    WinningPrice: '',
    societyId: ''
  });

  const fetchEvents = async () => {
    const eventCollection = collection(firestore, 'events');
    const eventSnapshot = await getDocs(eventCollection);
    const eventsData = eventSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setEvents(eventsData);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleAddEvent = async () => {
    const eventCollection = collection(firestore, 'events');
    await addDoc(eventCollection, { 
      name: newEventDetails.name, 
      description: newEventDetails.description,
      RegisterationFee: newEventDetails.RegisterationFee,
      WinningPrice: newEventDetails.WinningPrice,
      societyId: newEventDetails.societyId,
      Status: false // Assuming new events are initially pending
    });
    setNewEventDetails({
      name: '',
      description: '',
      RegisterationFee: '',
      WinningPrice: '',
      societyId: ''
    });
    fetchEvents();
  };

  const handleEditEvent = (id, event) => {
    setEditEventId(id);
    setEditEventDetails({
      description: event.description || '',
      RegisterationFee: event.RegisterationFee || '',
      WinningPrice: event.WinningPrice || '',
      societyId: event.societyId || ''
    });
  };

  const handleSaveEdit = async () => {
    const eventDoc = doc(firestore, 'events', editEventId);
    await updateDoc(eventDoc, { 
      description: editEventDetails.description,
      RegisterationFee: editEventDetails.RegisterationFee,
      WinningPrice: editEventDetails.WinningPrice,
      societyId: editEventDetails.societyId
    });
    setEditEventId(null);
    fetchEvents();
  };

  const handleDeleteEvent = async (id) => {
    const eventDoc = doc(firestore, 'events', id);
    await deleteDoc(eventDoc);
    fetchEvents();
  };

  const handleAcceptEvent = async (id) => {
    const eventDoc = doc(firestore, 'events', id);
    await updateDoc(eventDoc, { Status: true });
    fetchEvents();
  };

  const renderTable = () => (
    <table className="events-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Registration Fee</th>
          <th>Winning Prize</th>
          <th>Society ID</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {events.map(event => (
          <tr key={event.id}>
            <td>{event.name}</td>
            <td>
              {editEventId === event.id ? (
                <input
                  type="text"
                  value={editEventDetails.description}
                  onChange={(e) => setEditEventDetails({ ...editEventDetails, description: e.target.value })}
                />
              ) : (
                event.description
              )}
            </td>
            <td>
              {editEventId === event.id ? (
                <input
                  type="number"
                  value={editEventDetails.RegisterationFee}
                  onChange={(e) => setEditEventDetails({ ...editEventDetails, registrationFee: e.target.value })}
                />
              ) : (
                event.RegisterationFee
              )}
            </td>
            <td>
              {editEventId === event.id ? (
                <input
                  type="number"
                  value={editEventDetails.WinningPrice}
                  onChange={(e) => setEditEventDetails({ ...editEventDetails, winningPrice: e.target.value })}
                />
              ) : (
                event.WinningPrice
              )}
            </td>
            <td>
              {editEventId === event.id ? (
                <input
                  type="text"
                  value={editEventDetails.societyId}
                  onChange={(e) => setEditEventDetails({ ...editEventDetails, societyId: e.target.value })}
                />
              ) : (
                event.societyId || 'N/A'
              )}
            </td>
            <td>{event.Status ? 'Approved' : 'Pending'}</td>
            <td>
              {editEventId === event.id ? (
                <button onClick={handleSaveEdit}>Save</button>
              ) : (
                <>
                  <button onClick={() => handleEditEvent(event.id, event)}>Edit</button>
                  <button onClick={() => handleDeleteEvent(event.id)}>Delete</button>
                  {!event.Status && <button onClick={() => handleAcceptEvent(event.id)}>Accept</button>}
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <h2>Mentor Dashboard</h2>
        {renderTable()}
        <div className="add-event">
          <h3>Add New Event</h3>
          <input
            type="text"
            value={newEventDetails.name}
            onChange={e => setNewEventDetails({ ...newEventDetails, name: e.target.value })}
            placeholder="Event title"
          />
          <input
            type="text"
            value={newEventDetails.description}
            onChange={e => setNewEventDetails({ ...newEventDetails, description: e.target.value })}
            placeholder="Event description"
          />
          <input
            type="number"
            value={newEventDetails.RegisterationFee}
            onChange={e => setNewEventDetails({ ...newEventDetails, RegisterationFee: e.target.value })}
            placeholder="Registration Fee"
          />
          <input
            type="number"
            value={newEventDetails.WinningPrice}
            onChange={e => setNewEventDetails({ ...newEventDetails, WinningPrice: e.target.value })}
            placeholder="Winning Prize"
          />
          <input
            type="text"
            value={newEventDetails.societyId}
            onChange={e => setNewEventDetails({ ...newEventDetails, societyId: e.target.value })}
            placeholder="Society ID"
          />
          <button onClick={handleAddEvent}>Add Event</button>
        </div>
      </div>
    </>
  );
};

export default MentorDashboard;
