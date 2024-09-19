// // // import React, { useState } from 'react';
// // // import { firestore } from '../firebase';
// // // import { addDoc, collection } from 'firebase/firestore';
// // // import './EventRegisterationForm.css';

// // // const EventRegistrationForm = ({ event, user, onClose }) => {
// // //     const [formData, setFormData] = useState({
// // //         name: user.name,
// // //         email: user.email,
// // //         eventId: event.id,
// // //         eventName: event.name,
// // //     });

// // //     const handleChange = (e) => {
// // //         const { name, value } = e.target;
// // //         setFormData(prevState => ({
// // //             ...prevState, [name]: value,
// // //         }));
// // //     };

// // //     const handleSubmit = async (e) => {
// // //         e.preventDefault();
// // //         try {
// // //             await addDoc(collection(firestore, 'registrations'), formData);
// // //             alert('Registration successful!');
// // //             onClose(); // Close the form after submission
// // //         } catch (error) {
// // //             console.error('Error registering for event:', error);
// // //         }
// // //     };

// // //     return (
// // //         <div className="registration-form-container">
// // //             <h2>Register for {event.name}</h2>
// // //             <form onSubmit={handleSubmit}>
// // //                 <label>
// // //                     Name:
// // //                     <input type="text" name="name" value={formData.name} onChange={handleChange} required />
// // //                 </label>
// // //                 <label>
// // //                     Email:
// // //                     <input type="email" name="email" value={formData.email} onChange={handleChange} required />
// // //                 </label>
// // //                 {/* Add any other necessary fields here */}
// // //                 <button type="submit">Register</button>
// // //                 <button type="button" onClick={onClose}>Cancel</button>
// // //             </form>
// // //         </div>
// // //     );
// // // };

// // // export default EventRegistrationForm;
// // import React, { useState } from 'react';
// // import { firestore } from '../firebase';
// // import { addDoc, collection } from 'firebase/firestore';
// // import './EventRegisterationForm.css';

// // const EventRegistrationForm = ({ event, user, onClose }) => {
// //     const [formData, setFormData] = useState({
// //         name: user?.name || '', // Safely access user properties
// //         email: user?.email || '',
// //         eventId: event.id,
// //         eventName: event.name,
// //     });

// //     const handleChange = (e) => {
// //         const { name, value } = e.target;
// //         setFormData(prevState => ({
// //             ...prevState, [name]: value,
// //         }));
// //     };

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         try {
// //             await addDoc(collection(firestore, 'registrations'), formData);
// //             alert('Registration successful!');
// //             onClose(); // Close the form after submission
// //         } catch (error) {
// //             console.error('Error registering for event:', error);
// //         }
// //     };

// //     return (
// //         <div className="registration-form-container">
// //             <h2>Register for {event.name}</h2>
// //             <form onSubmit={handleSubmit}>
// //                 <label>
// //                     Name:
// //                     <input type="text" name="name" value={formData.name} onChange={handleChange} required />
// //                 </label>
// //                 <label>
// //                     Email:
// //                     <input type="email" name="email" value={formData.email} onChange={handleChange} required />
// //                 </label>
// //                 {/* Add any other necessary fields here */}
// //                 <button type="submit">Register</button>
// //                 <button type="button" onClick={onClose}>Cancel</button>
// //             </form>
// //         </div>
// //     );
// // };

// // export default EventRegistrationForm;
// import React, { useState, useEffect } from 'react';
// import { firestore } from '../firebase';
// import { addDoc, collection, query, where, getDocs } from 'firebase/firestore';


// const EventRegistrationForm = ({ event, user, onClose }) => {
//     const [formData, setFormData] = useState({
//         name: user?.name || '',
//         email: user?.email || '',
//         rollNo: '',
//         semester: '',
//         field: '',
//         eventId: event.id,
//         eventName: event.name,
//     });

//     const [isAlreadyRegistered, setIsAlreadyRegistered] = useState(false);

//     useEffect(() => {
//         const checkRegistration = async () => {
//             const registrationsRef = collection(firestore, 'registrations');
//             const q = query(
//                 registrationsRef,
//                 where('email', '==', user?.email),
//                 where('eventId', '==', event.id)
//             );
//             const querySnapshot = await getDocs(q);
//             if (!querySnapshot.empty) {
//                 setIsAlreadyRegistered(true);
//             }
//         };

//         if (user && event) {
//             checkRegistration();
//         }
//     }, [user, event]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevState => ({
//             ...prevState, [name]: value,
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (isAlreadyRegistered) {
//             alert('You are already registered for this event.');
//             return;
//         }

//         try {
//             await addDoc(collection(firestore, 'registrations'), formData);
//             alert('Registration successful!');
//             onClose();
//         } catch (error) {
//             console.error('Error registering for event:', error);
//         }
//     };

//     return (
//         <div className="registration-form-container">
//             <h2>Register for {event.name}</h2>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     Name:
//                     <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//                 </label>
//                 <label>
//                     Email:
//                     <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//                 </label>
//                 <label>
//                     Roll Number:
//                     <input type="text" name="rollNo" value={formData.rollNo} onChange={handleChange} required />
//                 </label>
//                 <label>
//                     Semester:
//                     <input type="text" name="semester" value={formData.semester} onChange={handleChange} required />
//                 </label>
//                 <label>
//                     Field:
//                     <input type="text" name="field" value={formData.field} onChange={handleChange} required />
//                 </label>
//                 <button type="submit" disabled={isAlreadyRegistered}>
//                     {isAlreadyRegistered ? 'Already Registered' : 'Register'}
//                 </button>
//                 <button type="button" onClick={onClose}>Cancel</button>
//             </form>
//         </div>
//     );
// };

// export default EventRegistrationForm;
import React, { useState } from 'react';
import { firestore } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';
// import './EventRegisterationForm.css';

const EventRegistrationForm = ({ event, user, onClose }) => {
    const [formData, setFormData] = useState({
        name: user?.name || '',
        email: user?.email || '',
        rollNo: '',
        semester: '',
        field: '',
        eventId: event.id,
        eventName: event.name,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState, [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(firestore, 'registrations'), formData);
            alert('Registration successful!');
            onClose();
        } catch (error) {
            console.error('Error registering for event:', error);
        }
    };

    return (
        <div className="registration-form-container">
            <h2>Register for {event.name}</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
                <label>
                    Roll Number:
                    <input type="text" name="rollNo" value={formData.rollNo} onChange={handleChange} required />
                </label>
                <label>
                    Semester:
                    <input type="text" name="semester" value={formData.semester} onChange={handleChange} required />
                </label>
                <label>
                    Field:
                    <input type="text" name="field" value={formData.field} onChange={handleChange} required />
                </label>
                <button type="submit">Register</button>
                <button type="button" onClick={onClose}>Cancel</button>
            </form>
        </div>
    );
};

export default EventRegistrationForm;
