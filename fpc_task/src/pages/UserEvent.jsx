import React, { useState, useEffect } from 'react';
import { firestore } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import Navbar from './NavbarUser';
import EventRegistrationForm from './EventRegisterationForm'; // Import the new form component
import './UserEvent.css';

const UserDashboard = ({ user }) => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

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
          <tr key={event.id} onClick={() => setSelectedEvent(event)}>
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
      <div className="dashboard-container">
        <h2>Your Dashboard</h2>
        {renderTable()}
        {selectedEvent && (
          <EventRegistrationForm 
            event={selectedEvent} 
            user={user} 
            onClose={() => setSelectedEvent(null)} 
          />
        )}
      </div>
    </>
  );
};

export default UserDashboard;
