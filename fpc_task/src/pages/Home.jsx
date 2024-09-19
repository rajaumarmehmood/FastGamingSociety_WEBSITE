// // // // // // // // import React, { useRef, useState, useEffect } from "react";
// // // // // // // // import { firestore } from "../firebase"; // Import firestore
// // // // // // // // import { addDoc, collection, getDocs } from "@firebase/firestore";
// // // // // // // // import {
// // // // // // // //   writeUserData,
// // // // // // // //   writeSocietyData,
// // // // // // // //   writeEventData,
// // // // // // // //   writeTeamData,
// // // // // // // //   addUserToTeam,
// // // // // // // //   readUserData,
// // // // // // // //   readSocietyData,
// // // // // // // //   readEventData,
// // // // // // // //   readTeamData,
// // // // // // // // } from "../db_initializer"; // Import functions from db_initializer

// // // // // // // // export default function Home() {
// // // // // // // //   const messageRef = useRef();
// // // // // // // //   const [messages, setMessages] = useState([]);
// // // // // // // //   const messagesCollectionRef = collection(firestore, "messages"); // Correct reference to Firestore collection

// // // // // // // //   const handleSave = async (e) => {
// // // // // // // //     e.preventDefault();
// // // // // // // //     const message = messageRef.current.value; // Correct way to access input value
// // // // // // // //     if (message) {
// // // // // // // //       try {
// // // // // // // //         await addDoc(messagesCollectionRef, { text: message });
// // // // // // // //         console.log("Message saved successfully!");
// // // // // // // //         messageRef.current.value = ""; // Clear input field after saving
// // // // // // // //         fetchMessages(); // Refresh the list of messages
// // // // // // // //       } catch (error) {
// // // // // // // //         console.error("Error adding document: ", error);
// // // // // // // //       }
// // // // // // // //     } else {
// // // // // // // //       console.log("Please enter a message.");
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const fetchMessages = async () => {
// // // // // // // //     try {
// // // // // // // //       const data = await getDocs(messagesCollectionRef);
// // // // // // // //       setMessages(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
// // // // // // // //     } catch (error) {
// // // // // // // //       console.error("Error fetching messages: ", error);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   useEffect(() => {
// // // // // // // //     fetchMessages();
// // // // // // // //   }, []);

// // // // // // // //   // Call some initializer functions for demonstration
// // // // // // // //   useEffect(() => {
// // // // // // // //     (async () => {
// // // // // // // //       await writeUserData("Hammad", "Hammad", "i222433@nu.edu.pk", "Mentor");
// // // // // // // //       await writeSocietyData("society2024", 2024, "Hammad", "president123");
// // // // // // // //       await writeEventData(
// // // // // // // //         "event123",
// // // // // // // //         "Gaming Tournament",
// // // // // // // //         "Annual gaming tournament",
// // // // // // // //         "2024-08-01",
// // // // // // // //         "president123",
// // // // // // // //         "society2024"
// // // // // // // //       );
// // // // // // // //       await writeTeamData(
// // // // // // // //         "team123",
// // // // // // // //         "Operations Team",
// // // // // // // //         "executive123",
// // // // // // // //         "society2024"
// // // // // // // //       );
// // // // // // // //       await addUserToTeam("member456", "team123", "society2024");

// // // // // // // //       await readUserData("Hammad");
// // // // // // // //       await readSocietyData("society2024");
// // // // // // // //       await readEventData("event123");
// // // // // // // //       await readTeamData("team123");
// // // // // // // //     })();
// // // // // // // //   }, []);

// // // // // // // //   return (
// // // // // // // //     <div>
// // // // // // // //       <form onSubmit={handleSave}>
// // // // // // // //         <label>Enter Message</label>
// // // // // // // //         <input type="text" ref={messageRef} />
// // // // // // // //         <button type="submit">Save</button>
// // // // // // // //       </form>
// // // // // // // //       <div>
// // // // // // // //         <h2>Messages</h2>
// // // // // // // //         {messages.length > 0 ? (
// // // // // // // //           <ul>
// // // // // // // //             {messages.map((message) => (
// // // // // // // //               <li key={message.id}>{message.text}</li>
// // // // // // // //             ))}
// // // // // // // //           </ul>
// // // // // // // //         ) : (
// // // // // // // //           <p>No messages found</p>
// // // // // // // //         )}
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }
// // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // import { firestore, auth } from '../firebase';
// // // // // // // import { collection, getDocs, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore'; 
// // // // // // // // import { collection, getDocs, addDoc, updateDoc, doc } from 'firebase/firestore';
// // // // // // // import { useAuthState } from 'react-firebase-hooks/auth';
// // // // // // // import { useNavigate } from 'react-router-dom';
// // // // // // // import {
// // // // // // //   writeUserData,
// // // // // // //   writeSocietyData,
// // // // // // //   writeEventData,
// // // // // // //   writeTeamData,
// // // // // // //   addUserToTeam,
// // // // // // //   readUserData,
// // // // // // //   readSocietyData,
// // // // // // //   readEventData,
// // // // // // //   readTeamData,
// // // // // // // } from "../db_initializer"; // Import functions from db_initializer
// // // // // // // import './Home.css';

// // // // // // // const Home = () => {
// // // // // // //   const [events, setEvents] = useState([]);
// // // // // // //   const [newEvent, setNewEvent] = useState('');
// // // // // // //   const [user] = useAuthState(auth);
// // // // // // //   const [userRole, setUserRole] = useState('');
// // // // // // //   const navigate = useNavigate();

// // // // // // //   useEffect(() => {
// // // // // // //     const fetchEvents = async () => {
// // // // // // //       const eventCollection = collection(firestore, 'events');
// // // // // // //       const eventSnapshot = await getDocs(eventCollection);
// // // // // // //       setEvents(eventSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
// // // // // // //     };

// // // // // // //     const fetchUserRole = async () => {
// // // // // // //       if (user) {
// // // // // // //         const userDoc = doc(firestore, 'users', user.uid);
// // // // // // //         const userSnapshot = await getDoc(userDoc);
// // // // // // //         setUserRole(userSnapshot.data().role);
// // // // // // //       }
// // // // // // //     };

// // // // // // //     fetchEvents();
// // // // // // //     fetchUserRole();
// // // // // // //   }, [user]);

// // // // // // //   const handleAddEvent = async () => {
// // // // // // //     const eventCollection = collection(firestore, 'events');
// // // // // // //     await addDoc(eventCollection, { title: newEvent });
// // // // // // //     setNewEvent('');
// // // // // // //     fetchEvents();
// // // // // // //   };

// // // // // // //   const handleEditEvent = async (id, newTitle) => {
// // // // // // //     const eventDoc = doc(firestore, 'events', id);
// // // // // // //     await updateDoc(eventDoc, { title: newTitle });
// // // // // // //     fetchEvents();
// // // // // // //   };

// // // // // // //   useEffect(() => {
// // // // // // //     (async () => {
// // // // // // //       await writeUserData("Hammad", "Hammad", "i222433@nu.edu.pk", "Mentor");
// // // // // // //       await writeSocietyData("society2024", 2024, "Hammad", "president123");
// // // // // // //       await writeEventData(
// // // // // // //         "event123",
// // // // // // //         "Gaming Tournament",
// // // // // // //         "Annual gaming tournament",
// // // // // // //         "2024-08-01",
// // // // // // //         "president123",
// // // // // // //         "society2024"
// // // // // // //       );
// // // // // // //       await writeTeamData(
// // // // // // //         "team123",
// // // // // // //         "Operations Team",
// // // // // // //         "executive123",
// // // // // // //         "society2024"
// // // // // // //       );
// // // // // // //       await addUserToTeam("member456", "team123", "society2024");

// // // // // // //       await readUserData("Hammad");
// // // // // // //       await readSocietyData("society2024");
// // // // // // //       await readEventData("event123");
// // // // // // //       await readTeamData("team123");
// // // // // // //     })();
// // // // // // //   }, []);

// // // // // // //   if (!user) {
// // // // // // //     return (
// // // // // // //       <div className="home-container">
// // // // // // //         <h2>Upcoming Events</h2>
// // // // // // //         {events.map(event => (
// // // // // // //           <div key={event.id} className="event">
// // // // // // //             <p>{event.title}</p>
// // // // // // //           </div>
// // // // // // //         ))}
// // // // // // //       </div>
// // // // // // //     );
// // // // // // //   }

// // // // // // //   return (
// // // // // // //     <div className="home-container">
// // // // // // //       <h2>Upcoming Events</h2>
// // // // // // //       {events.map(event => (
// // // // // // //         <div key={event.id} className="event">
// // // // // // //           <p>{event.title}</p>
// // // // // // //           {userRole === 'mentor' && (
// // // // // // //             <button onClick={() => handleEditEvent(event.id, prompt('Edit event title:', event.title))}>
// // // // // // //               Edit
// // // // // // //             </button>
// // // // // // //           )}
// // // // // // //         </div>
// // // // // // //       ))}
// // // // // // //       {userRole === 'mentor' && (
// // // // // // //         <div className="add-event">
// // // // // // //           <input
// // // // // // //             type="text"
// // // // // // //             value={newEvent}
// // // // // // //             onChange={e => setNewEvent(e.target.value)}
// // // // // // //             placeholder="New event title"
// // // // // // //           />
// // // // // // //           <button onClick={handleAddEvent}>Add Event</button>
// // // // // // //         </div>
// // // // // // //       )}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Home;
// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import { firestore, auth } from '../firebase';
// // // // // // import { collection, getDocs, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore';
// // // // // // import { useAuthState } from 'react-firebase-hooks/auth';
// // // // // // import { useNavigate } from 'react-router-dom';
// // // // // // import './Home.css';

// // // // // // const Home = () => {
// // // // // //   const [events, setEvents] = useState([]);
// // // // // //   const [newEvent, setNewEvent] = useState('');
// // // // // //   const [user] = useAuthState(auth);
// // // // // //   const [userRole, setUserRole] = useState('');
// // // // // //   const navigate = useNavigate();

// // // // // //   useEffect(() => {
// // // // // //     const fetchEvents = async () => {
// // // // // //       const eventCollection = collection(firestore, 'events');
// // // // // //       const eventSnapshot = await getDocs(eventCollection);
// // // // // //       setEvents(eventSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
// // // // // //     };

// // // // // //     const fetchUserRole = async () => {
// // // // // //       if (user) {
// // // // // //         const userDoc = doc(firestore, 'users', user.uid);
// // // // // //         const userSnapshot = await getDoc(userDoc);
// // // // // //         setUserRole(userSnapshot.data().role);
// // // // // //       }
// // // // // //     };

// // // // // //     fetchEvents();
// // // // // //     fetchUserRole();
// // // // // //   }, [user]);

// // // // // //   const handleAddEvent = async () => {
// // // // // //     const eventCollection = collection(firestore, 'events');
// // // // // //     await addDoc(eventCollection, { title: newEvent });
// // // // // //     setNewEvent('');
// // // // // //     fetchEvents();
// // // // // //   };

// // // // // //   const handleEditEvent = async (id, newTitle) => {
// // // // // //     const eventDoc = doc(firestore, 'events', id);
// // // // // //     await updateDoc(eventDoc, { title: newTitle });
// // // // // //     fetchEvents();
// // // // // //   };

// // // // // //   if (!user) {
// // // // // //     return (
// // // // // //       <div className="home-container">
// // // // // //         <h2>Upcoming Events</h2>
// // // // // //         {events.map(event => (
// // // // // //           <div key={event.id} className="event">
// // // // // //             <p>{event.title}</p>
// // // // // //           </div>
// // // // // //         ))}
// // // // // //       </div>
// // // // // //     );
// // // // // //   }

// // // // // //   return (
// // // // // //     <div className="home-container">
// // // // // //       <h2>Upcoming Events</h2>
// // // // // //       {events.map(event => (
// // // // // //         <div key={event.id} className="event">
// // // // // //           <p>{event.title}</p>
// // // // // //           {userRole === 'mentor' && (
// // // // // //             <button onClick={() => handleEditEvent(event.id, prompt('Edit event title:', event.title))}>
// // // // // //               Edit
// // // // // //             </button>
// // // // // //           )}
// // // // // //         </div>
// // // // // //       ))}
// // // // // //       {userRole === 'mentor' && (
// // // // // //         <div className="add-event">
// // // // // //           <input
// // // // // //             type="text"
// // // // // //             value={newEvent}
// // // // // //             onChange={e => setNewEvent(e.target.value)}
// // // // // //             placeholder="New event title"
// // // // // //           />
// // // // // //           <button onClick={handleAddEvent}>Add Event</button>
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Home;
// // // // // import React, { useState, useEffect } from 'react';
// // // // // import { firestore, auth } from '../firebase';
// // // // // import { collection, getDocs, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore';
// // // // // import { useAuthState } from 'react-firebase-hooks/auth';
// // // // // import Navbar from './Navbar'; // Import Navbar
// // // // // import './Home.css';

// // // // // const Home = () => {
// // // // //   const [events, setEvents] = useState([]);
// // // // //   const [newEvent, setNewEvent] = useState('');
// // // // //   const [user] = useAuthState(auth);
// // // // //   const [userRole, setUserRole] = useState('');

// // // // //   const fetchEvents = async () => {
// // // // //     const eventCollection = collection(firestore, 'events');
// // // // //     const eventSnapshot = await getDocs(eventCollection);
// // // // //     setEvents(eventSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     const fetchUserRole = async () => {
// // // // //       if (user) {
// // // // //         const userDoc = doc(firestore, 'users', user.uid);
// // // // //         const userSnapshot = await getDoc(userDoc);
// // // // //         setUserRole(userSnapshot.data().role);
// // // // //       }
// // // // //     };

// // // // //     fetchEvents();
// // // // //     fetchUserRole();
// // // // //   }, [user]);

// // // // //   const handleAddEvent = async () => {
// // // // //     const eventCollection = collection(firestore, 'events');
// // // // //     await addDoc(eventCollection, { title: newEvent });
// // // // //     setNewEvent('');
// // // // //     fetchEvents();  // Ensure fetchEvents is called correctly
// // // // //   };

// // // // //   const handleEditEvent = async (id, newTitle) => {
// // // // //     const eventDoc = doc(firestore, 'events', id);
// // // // //     await updateDoc(eventDoc, { title: newTitle });
// // // // //     fetchEvents();  // Ensure fetchEvents is called correctly
// // // // //   };

// // // // //   if (!user) {
// // // // //     return (
// // // // //       <>
// // // // //         <Navbar/> {/* Add Navbar */}
// // // // //         <div className="home-container">
// // // // //           <h2>Upcoming Events</h2>
// // // // //           {events.map(event => (
// // // // //             <div key={event.id} className="event">
// // // // //               <p>{event.name}</p>
// // // // //               <p>{event.description}</p>
// // // // //               <p>{event.RegisterationFee}</p>
// // // // //               <p>{event.WinningPrice}</p>
// // // // //               <p>{event.societyId.id}</p>
// // // // //             </div>
// // // // //           ))}
// // // // //         </div>
// // // // //       </>
// // // // //     );
// // // // //   }

// // // // //   return (
// // // // //     <>
// // // // //       <Navbar user={user} /> {/* Add Navbar */}
// // // // //       <div className="home-container">
// // // // //         <h2>Upcoming Events</h2>
// // // // //         {events.map(event => (
// // // // //           <div key={event.id} className="event">
// // // // //             <p>{event.title}</p>
// // // // //             {userRole === 'mentor' && (
// // // // //               <button onClick={() => handleEditEvent(event.id, prompt('Edit event title:', event.title))}>
// // // // //                 Edit
// // // // //               </button>
// // // // //             )}
// // // // //           </div>
// // // // //         ))}
// // // // //         {userRole === 'mentor' && (
// // // // //           <div className="add-event">
// // // // //             <input
// // // // //               type="text"
// // // // //               value={newEvent}
// // // // //               onChange={e => setNewEvent(e.target.value)}
// // // // //               placeholder="New event title"
// // // // //             />
// // // // //             <button onClick={handleAddEvent}>Add Event</button>
// // // // //           </div>
// // // // //         )}
// // // // //       </div>
// // // // //     </>
// // // // //   );
// // // // // };

// // // // // export default Home;
// // // // import React, { useState, useEffect } from 'react';
// // // // import { firestore, auth } from '../firebase';
// // // // import { collection, getDocs, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore';
// // // // import { useAuthState } from 'react-firebase-hooks/auth';
// // // // import Navbar from './Navbar'; // Import Navbar
// // // // import './Home.css';

// // // // const Home = () => {
// // // //   const [events, setEvents] = useState([]);
// // // //   const [newEvent, setNewEvent] = useState('');
// // // //   const [user] = useAuthState(auth);
// // // //   const [userRole, setUserRole] = useState('');

// // // //   const fetchEvents = async () => {
// // // //     const eventCollection = collection(firestore, 'events');
// // // //     const eventSnapshot = await getDocs(eventCollection);
// // // //     setEvents(eventSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
// // // //   };

// // // //   useEffect(() => {
// // // //     const fetchUserRole = async () => {
// // // //       if (user) {
// // // //         const userDoc = doc(firestore, 'users', user.uid);
// // // //         const userSnapshot = await getDoc(userDoc);
// // // //         setUserRole(userSnapshot.data().role);
// // // //       }
// // // //     };

// // // //     fetchEvents();
// // // //     fetchUserRole();
// // // //   }, [user]);

// // // //   const handleAddEvent = async () => {
// // // //     const eventCollection = collection(firestore, 'events');
// // // //     await addDoc(eventCollection, { title: newEvent });
// // // //     setNewEvent('');
// // // //     fetchEvents();  // Ensure fetchEvents is called correctly
// // // //   };

// // // //   const handleEditEvent = async (id, newTitle) => {
// // // //     const eventDoc = doc(firestore, 'events', id);
// // // //     await updateDoc(eventDoc, { title: newTitle });
// // // //     fetchEvents();  // Ensure fetchEvents is called correctly
// // // //   };

// // // //   if (!user) {
// // // //     return (
// // // //       <>
// // // //         <Navbar /> {/* Add Navbar */}
// // // //         <div className="home-container">
// // // //           <h2>Upcoming Events</h2>
// // // //           <table className="events-table">
// // // //             <thead>
// // // //               <tr>
// // // //                 <th>Title</th>
// // // //                 <th>Description</th>
// // // //                 <th>Registration Fee</th>
// // // //                 <th>Winning Prize</th>
// // // //                 <th>Society ID</th>
// // // //               </tr>
// // // //             </thead>
// // // //             <tbody>
// // // //               {events.map(event => (
// // // //                 <tr key={event.id}>
// // // //                   <td>{event.name}</td>
// // // //                   <td>{event.description}</td>
// // // //                   <td>{event.RegisterationFee}</td>
// // // //                   <td>{event.WinningPrice}</td>
// // // //                   <td>{event.societyId.id}</td>
// // // //                 </tr>
// // // //               ))}
// // // //             </tbody>
// // // //           </table>
// // // //         </div>
// // // //       </>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <>
// // // //       <Navbar user={user} /> {/* Add Navbar */}
// // // //       <div className="home-container">
// // // //         <h2>Upcoming Events</h2>
// // // //         <table className="events-table">
// // // //           <thead>
// // // //             <tr>
// // // //               <th>Title</th>
// // // //               <th>Description</th>
// // // //               <th>Registration Fee</th>
// // // //               <th>Winning Prize</th>
// // // //               <th>Society ID</th>
// // // //               {(userRole === 'mentor' || userRole==='president') && <th>Actions</th>}
// // // //             </tr>
// // // //           </thead>
// // // //           <tbody>
// // // //             {events.map(event => (
// // // //               <tr key={event.id}>
// // // //                 <td>{event.name}</td>
// // // //                 <td>{event.description}</td>
// // // //                 <td>{event.RegisterationFee}</td>
// // // //                 <td>{event.WinningPrice}</td>
// // // //                 <td>{event.societyId.id}</td>
// // // //                 {(userRole === 'mentor' || userRole==='president') && (
// // // //                   <td>
// // // //                     <button onClick={() => handleEditEvent(event.id, prompt('Edit event title:', event.title))}>
// // // //                       Edit
// // // //                     </button>
// // // //                   </td>
// // // //                 )}
// // // //               </tr>
// // // //             ))}
// // // //           </tbody>
// // // //         </table>
// // // //         {(userRole === 'mentor' || userRole==='president') && (
// // // //           <div className="add-event">
// // // //             <input
// // // //               type="text"
// // // //               value={newEvent}
// // // //               onChange={e => setNewEvent(e.target.value)}
// // // //               placeholder="New event title"
// // // //             />
// // // //             <button onClick={handleAddEvent}>Add Event</button>
// // // //           </div>
// // // //         )}
// // // //       </div>
// // // //     </>
// // // //   );
// // // // };

// // // // export default Home;
// // // import React, { useState, useEffect } from 'react';
// // // import { firestore, auth } from '../firebase';
// // // import { collection, getDocs, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore';
// // // import { useAuthState } from 'react-firebase-hooks/auth';
// // // import Navbar from './Navbar'; // Import Navbar
// // // import './Home.css';

// // // const Home = () => {
// // //   const [events, setEvents] = useState([]);
// // //   const [newEvent, setNewEvent] = useState('');
// // //   const [user] = useAuthState(auth);
// // //   const [userRole, setUserRole] = useState('');

// // //   const fetchEvents = async (role) => {
// // //     const eventCollection = collection(firestore, 'events');
// // //     const eventSnapshot = await getDocs(eventCollection);
// // //     const eventsData = eventSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    
// // //     if (role === 'mentor' || role === 'president') {
// // //       setEvents(eventsData);
// // //     } else {
// // //       setEvents(eventsData.filter(event => event.Status === true));
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     const fetchUserRole = async () => {
// // //       if (user) {
// // //         const userDoc = doc(firestore, 'users', user.uid);
// // //         const userSnapshot = await getDoc(userDoc);
// // //         const role = userSnapshot.data().role;
// // //         setUserRole(role);
// // //         fetchEvents(role);
// // //       } 
// // //       // else {
// // //       //   fetchEvents('guest'); // Handle guests who are not logged in
// // //       // }
// // //     };

// // //     fetchUserRole();
// // //   }, [user]);

// // //   const handleAddEvent = async () => {
// // //     const eventCollection = collection(firestore, 'events');
// // //     await addDoc(eventCollection, { title: newEvent, status: true });
// // //     setNewEvent('');
// // //     fetchEvents(userRole);  // Ensure fetchEvents is called correctly
// // //   };

// // //   const handleEditEvent = async (id, newTitle) => {
// // //     const eventDoc = doc(firestore, 'events', id);
// // //     await updateDoc(eventDoc, { title: newTitle });
// // //     fetchEvents(userRole);  // Ensure fetchEvents is called correctly
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
// // //           {(userRole === 'mentor' || userRole === 'president') && <th>Actions</th>}
// // //         </tr>
// // //       </thead>
// // //       <tbody>
// // //         {events.map(event => (
// // //           <tr key={event.id}>
// // //             <td>{event.name}</td>
// // //             <td>{event.description}</td>
// // //             <td>{event.RegisterationFee}</td>
// // //             <td>{event.WinningPrice}</td>
// // //             <td>{event.societyId?.id || 'N/A'}</td> {/* Handle potential undefined object */}
// // //             {(userRole === 'mentor' || userRole === 'president') && (
// // //               <td>
// // //                 <button onClick={() => handleEditEvent(event.id, prompt('Edit event title:', event.title))}>
// // //                   Edit
// // //                 </button>
// // //               </td>
// // //             )}
// // //           </tr>
// // //         ))}
// // //       </tbody>
// // //     </table>
// // //   );

// // //   if (!user) {
// // //     return (
// // //       <>
// // //         <Navbar /> {/* Add Navbar */}
// // //         <div className="home-container">
// // //           <h2>Upcoming Events</h2>
// // //           {renderTable()}
// // //         </div>
// // //       </>
// // //     );
// // //   }

// // //   return (
// // //     <>
// // //       <Navbar user={user} /> {/* Add Navbar */}
// // //       <div className="home-container">
// // //         <h2>Upcoming Events</h2>
// // //         {renderTable()}
// // //         {(userRole === 'mentor' || userRole === 'president') && (
// // //           <div className="add-event">
// // //             <input
// // //               type="text"
// // //               value={newEvent}
// // //               onChange={e => setNewEvent(e.target.value)}
// // //               placeholder="New event title"
// // //             />
// // //             <button onClick={handleAddEvent}>Add Event</button>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default Home;
// // import React, { useState, useEffect } from 'react';
// // import { firestore, auth } from '../firebase';
// // import { collection, getDocs, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore';
// // import { useAuthState } from 'react-firebase-hooks/auth';
// // import Navbar from './Navbar'; // Import Navbar
// // import './Home.css';

// // const Home = () => {
// //   const [events, setEvents] = useState([]);
// //   const [newEvent, setNewEvent] = useState('');
// //   const [user] = useAuthState(auth);
// //   const [userRole, setUserRole] = useState('');

// //   // Fetch events based on user role
// //   const fetchEvents = async (role) => {
// //     const eventCollection = collection(firestore, 'events');
// //     const eventSnapshot = await getDocs(eventCollection);
// //     const eventsData = eventSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

// //     console.log('Fetched events:', eventsData); // Debugging line

// //     if (role === 'mentor' || role === 'president') {
// //       setEvents(eventsData);
// //     } else {
// //       setEvents(eventsData.filter(event => event.Status === true));
// //     }
// //   };

// //   // Fetch user role and events
// //   useEffect(() => {
// //     const fetchUserRole = async () => {
// //       if (user) {
// //         const userDoc = doc(firestore, 'users', user.uid);
// //         const userSnapshot = await getDoc(userDoc);
// //         const role = userSnapshot.data().role;
// //         setUserRole(role);
// //         fetchEvents(role);
// //       } else {
// //         fetchEvents('guest'); // Handle guests who are not logged in
// //         setEvents([]); // Clear events when user logs out
// //         setUserRole(''); // Clear userRole when user logs out
// //       }
// //     };

// //     fetchUserRole();
// //   }, [user]);

// //   // Add a new event
// //   const handleAddEvent = async () => {
// //     const eventCollection = collection(firestore, 'events');
// //     await addDoc(eventCollection, { title: newEvent, status: true });
// //     setNewEvent('');
// //     fetchEvents(userRole);  // Ensure fetchEvents is called correctly
// //   };

// //   // Edit an existing event
// //   const handleEditEvent = async (id, newTitle) => {
// //     const eventDoc = doc(firestore, 'events', id);
// //     await updateDoc(eventDoc, { title: newTitle });
// //     fetchEvents(userRole);  // Ensure fetchEvents is called correctly
// //   };

// //   // Render the events table
// //   const renderTable = () => (
// //     <table className="events-table">
// //       <thead>
// //         <tr>
// //           <th>Title</th>
// //           <th>Description</th>
// //           <th>Registration Fee</th>
// //           <th>Winning Prize</th>
// //           <th>Society ID</th>
// //           {(userRole === 'mentor' || userRole === 'president') && <th>Actions</th>}
// //         </tr>
// //       </thead>
// //       <tbody>
// //         {events.map(event => (
// //           <tr key={event.id}>
// //             <td>{event.name}</td>
// //             <td>{event.description}</td>
// //             <td>{event.RegisterationFee}</td>
// //             <td>{event.WinningPrice}</td>
// //             <td>{event.societyId?.id || 'N/A'}</td> {/* Handle potential undefined object */}
// //             {(userRole === 'mentor' || userRole === 'president') && (
// //               <td>
// //                 <button onClick={() => handleEditEvent(event.id, prompt('Edit event title:', event.title))}>
// //                   Edit
// //                 </button>
// //               </td>
// //             )}
// //           </tr>
// //         ))}
// //       </tbody>
// //     </table>
// //   );

// //   if (!user) {
// //     return (
// //       <>
// //         <Navbar /> {/* Add Navbar */}
// //         <div className="home-container">
// //           <h2>Upcoming Events</h2>
// //           {renderTable()} {/* Render table for non-logged-in users */}
// //         </div>
// //       </>
// //     );
// //   }

// //   return (
// //     <>
// //       <Navbar user={user} /> {/* Add Navbar */}
// //       <div className="home-container">
// //         <h2>Upcoming Events</h2>
// //         {renderTable()} {/* Render table for logged-in users */}
// //         {(userRole === 'mentor' || userRole === 'president') && (
// //           <div className="add-event">
// //             <input
// //               type="text"
// //               value={newEvent}
// //               onChange={e => setNewEvent(e.target.value)}
// //               placeholder="New event title"
// //             />
// //             <button onClick={handleAddEvent}>Add Event</button>
// //           </div>
// //         )}
// //       </div>
// //     </>
// //   );
// // };

// // export default Home;
// import React, { useState, useEffect } from 'react';
// import { firestore, auth } from '../firebase';
// import { collection, getDocs, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import Navbar from './Navbar';
// import './Home.css';

// const Home = () => {
//   const [events, setEvents] = useState([]);
//   const [newEvent, setNewEvent] = useState('');
//   const [user] = useAuthState(auth);
//   const [userRole, setUserRole] = useState('');

//   const fetchEvents = async (role) => {
//     const eventCollection = collection(firestore, 'events');
//     const eventSnapshot = await getDocs(eventCollection);
//     const eventsData = eventSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

//     console.log('Fetched events:', eventsData);

//     if (role === 'mentor' || role === 'president') {
//       setEvents(eventsData);
//     } else {
//       setEvents(eventsData.filter(event => event.Status === true));
//     }
//   };

//   useEffect(() => {
//     const fetchUserRole = async () => {
//       if (user) {
//         const userDoc = doc(firestore, 'users', user.uid);
//         const userSnapshot = await getDoc(userDoc);
//         const role = userSnapshot.data().role;
//         setUserRole(role);
//         fetchEvents(role);
//       } else {
//         fetchEvents('guest');
//         setEvents([]);
//         setUserRole('');
//       }
//     };

//     fetchUserRole();
//   }, [user]);

//   const handleAddEvent = async () => {
//     const eventCollection = collection(firestore, 'events');
//     await addDoc(eventCollection, { title: newEvent, status: true });
//     setNewEvent('');
//     fetchEvents(userRole);
//   };

//   const handleEditEvent = async (id, newTitle) => {
//     const eventDoc = doc(firestore, 'events', id);
//     await updateDoc(eventDoc, { title: newTitle });
//     fetchEvents(userRole);
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
//           {(userRole === 'mentor' || userRole === 'president') && <th>Actions</th>}
//         </tr>
//       </thead>
//       <tbody>
//         {events.map(event => (
//           <tr key={event.id}>
//             <td>{event.name}</td>
//             <td>{event.description}</td>
//             <td>{event.RegisterationFee}</td>
//             <td>{event.WinningPrice}</td>
//             <td>{event.societyId?.id || 'N/A'}</td>
//             {(userRole === 'mentor' || userRole === 'president') && (
//               <td>
//                 <button onClick={() => handleEditEvent(event.id, prompt('Edit event title:', event.title))}>
//                   Edit
//                 </button>
//               </td>
//             )}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );

//   return (
//     <>
//       <Navbar user={user} />
//       <div className="home-container">
//         <h2>Upcoming Events</h2>
//         {renderTable()}
//         {(userRole === 'mentor' || userRole === 'president') && (
//           <div className="add-event">
//             <input
//               type="text"
//               value={newEvent}
//               onChange={e => setNewEvent(e.target.value)}
//               placeholder="New event title"
//             />
//             <button onClick={handleAddEvent}>Add Event</button>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Home;
import React, { useState, useEffect } from 'react';
import { firestore } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import Navbar from './Navbar';
import './Home.css';

const Home = () => {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    const eventCollection = collection(firestore, 'events');
    const eventSnapshot = await getDocs(eventCollection);
    const eventsData = eventSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setEvents(eventsData.filter(event => event.Status === true));
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const renderTable = () => (
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
          <tr key={event.id}>
            <td>{event.name}</td>
            <td>{event.description}</td>
            <td>{event.RegisterationFee}</td>
            <td>{event.WinningPrice}</td>
            <td>{event.societyId || 'N/A'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <>
      <Navbar />
      <div className="home-container">
        <h2>Upcoming Events</h2>
        {renderTable()}
      </div>
    </>
  );
};

export default Home;
