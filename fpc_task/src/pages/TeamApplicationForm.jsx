// // // ApplicationForm.jsx
// // import React, { useState, useEffect } from 'react';
// // import { firestore } from '../firebase';
// // import './TeamApplicationForm.css';
// // import 'firebase/compat/firestore';

// // const ApplicationForm = ({ teamId, closeForm }) => {
// //     const [formData, setFormData] = useState({
// //         name: '',
// //         email: '',
// //         rollno: '',
// //         semester: '',
// //         proficientSkill: '',
// //         gpa: '',
// //         field: '',
// //         applyAsLeader: false
// //     });
// //     const [hasLeader, setHasLeader] = useState(true);

// //     useEffect(() => {
// //         // Fetch the team details from Firebase to check if there's a leader
// //         const fetchTeamDetails = async () => {
// //             const teamRef = firebase.firestore().collection('teams').doc(teamId);
// //             const doc = await teamRef.get();
// //             const teamData = doc.data();
// //             setHasLeader(!!teamData?.leaderId);
// //         };

// //         fetchTeamDetails();
// //     }, [teamId]);

// //     const handleChange = (e) => {
// //         const { name, value, type, checked } = e.target;
// //         setFormData(prevData => ({
// //             ...prevData,
// //             [name]: type === 'checkbox' ? checked : value
// //         }));
// //     };

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();

// //         try {
// //             await firebase.firestore().collection('applications').add({
// //                 ...formData,
// //                 teamId,
// //                 status: false // Default status is false
// //             });
// //             closeForm();
// //         } catch (error) {
// //             console.error("Error submitting application:", error);
// //         }
// //     };

// //     return (
// //         <div className="application-form-container">
// //             <form onSubmit={handleSubmit}>
// //                 <h2>Apply for Team</h2>
// //                 <label>
// //                     Name:
// //                     <input type="text" name="name" value={formData.name} onChange={handleChange} required />
// //                 </label>
// //                 <label>
// //                     Email:
// //                     <input type="email" name="email" value={formData.email} onChange={handleChange} required />
// //                 </label>
// //                 <label>
// //                     Roll Number:
// //                     <input type="text" name="rollno" value={formData.rollno} onChange={handleChange} required />
// //                 </label>
// //                 <label>
// //                     Semester:
// //                     <input type="text" name="semester" value={formData.semester} onChange={handleChange} required />
// //                 </label>
// //                 <label>
// //                     Proficient Skill:
// //                     <input type="text" name="proficientSkill" value={formData.proficientSkill} onChange={handleChange} required />
// //                 </label>
// //                 <label>
// //                     GPA:
// //                     <input type="text" name="gpa" value={formData.gpa} onChange={handleChange} required />
// //                 </label>
// //                 <label>
// //                     Field:
// //                     <input type="text" name="field" value={formData.field} onChange={handleChange} required />
// //                 </label>
// //                 {!hasLeader && (
// //                     <label>
// //                         Apply as Leader:
// //                         <input type="checkbox" name="applyAsLeader" checked={formData.applyAsLeader} onChange={handleChange} />
// //                     </label>
// //                 )}
// //                 <button type="submit" onClick={handleSubmit}>Submit Application</button>
// //                 <button type="button" onClick={closeForm}>Cancel</button>
// //             </form>
// //         </div>
// //     );
// // };

// // export default ApplicationForm;
// import React, { useState, useEffect } from 'react';
// import { firestore } from '../firebase'; // Importing the initialized firestore instance
// import './TeamApplicationForm.css';

// const ApplicationForm = ({ teamId, closeForm }) => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         rollno: '',
//         semester: '',
//         proficientSkill: '',
//         gpa: '',
//         field: '',
//         applyAsLeader: false
//     });
//     const [hasLeader, setHasLeader] = useState(true);

//     useEffect(() => {
//         // Fetch the team details from Firestore to check if there's a leader
//         const fetchTeamDetails = async () => {
//             const teamRef = firestore.collection('teams').doc(teamId); // Using firestore instance
//             const doc = await teamRef.get();
//             const teamData = doc.data();
//             setHasLeader(!!teamData?.leaderId);
//         };

//         fetchTeamDetails();
//     }, [teamId]);

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setFormData(prevData => ({
//             ...prevData,
//             [name]: type === 'checkbox' ? checked : value
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             await firestore.collection('applications').add({ // Using firestore instance
//                 ...formData,
//                 teamId,
//                 status: false // Default status is false
//             });
//             closeForm();
//         } catch (error) {
//             console.error("Error submitting application:", error);
//         }
//     };

//     return (
//         <div className="application-form-container">
//             <form onSubmit={handleSubmit}>
//                 <h2>Apply for Team</h2>
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
//                     <input type="text" name="rollno" value={formData.rollno} onChange={handleChange} required />
//                 </label>
//                 <label>
//                     Semester:
//                     <input type="text" name="semester" value={formData.semester} onChange={handleChange} required />
//                 </label>
//                 <label>
//                     Proficient Skill:
//                     <input type="text" name="proficientSkill" value={formData.proficientSkill} onChange={handleChange} required />
//                 </label>
//                 <label>
//                     GPA:
//                     <input type="text" name="gpa" value={formData.gpa} onChange={handleChange} required />
//                 </label>
//                 <label>
//                     Field:
//                     <input type="text" name="field" value={formData.field} onChange={handleChange} required />
//                 </label>
//                 {!hasLeader && (
//                     <label>
//                         Apply as Leader:
//                         <input type="checkbox" name="applyAsLeader" checked={formData.applyAsLeader} onChange={handleChange} />
//                     </label>
//                 )}
//                 <button type="submit">Submit Application</button>
//                 <button type="button" onClick={closeForm}>Cancel</button>
//             </form>
//         </div>
//     );
// };

// export default ApplicationForm;
import React, { useState, useEffect } from 'react';
import { firestore, collection, doc, getDoc } from '../firebase';
import './TeamApplicationForm.css';

const ApplicationForm = ({ teamId, closeForm }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        rollno: '',
        semester: '',
        proficientSkill: '',
        gpa: '',
        field: '',
        applyAsLeader: false
    });
    const [hasLeader, setHasLeader] = useState(true);

    useEffect(() => {
        // Fetch the team details from Firestore to check if there's a leader
        const fetchTeamDetails = async () => {
            const teamRef = doc(collection(firestore, 'teams'), teamId);
            const docSnapshot = await getDoc(teamRef);
            const teamData = docSnapshot.data();
            setHasLeader(!!teamData?.leaderId);
        };

        fetchTeamDetails();
    }, [teamId]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await firestore.collection('applications').add({
                ...formData,
                teamId,
                status: false // Default status is false
            });
            closeForm();
        } catch (error) {
            console.error("Error submitting application:", error);
        }
    };

    return (
        <div className="application-form-container">
            <form onSubmit={handleSubmit}>
                <h2>Apply for Team</h2>
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
                    <input type="text" name="rollno" value={formData.rollno} onChange={handleChange} required />
                </label>
                <label>
                    Semester:
                    <input type="text" name="semester" value={formData.semester} onChange={handleChange} required />
                </label>
                <label>
                    Proficient Skill:
                    <input type="text" name="proficientSkill" value={formData.proficientSkill} onChange={handleChange} required />
                </label>
                <label>
                    GPA:
                    <input type="text" name="gpa" value={formData.gpa} onChange={handleChange} required />
                </label>
                <label>
                    Field:
                    <input type="text" name="field" value={formData.field} onChange={handleChange} required />
                </label>
                {!hasLeader && (
                    <label>
                        Apply as Leader:
                        <input type="checkbox" name="applyAsLeader" checked={formData.applyAsLeader} onChange={handleChange} />
                    </label>
                )}
                <button type="submit" onClick={handleSubmit}>Submit Application</button>
                <button type="button" onClick={closeForm}>Cancel</button>
            </form>
        </div>
    );
};

export default ApplicationForm;
