// // // // // import React, { useState, useEffect } from 'react';
// // // // // import { firestore } from '../firebase';
// // // // // import { collection, getDocs, query, where, doc, updateDoc, arrayUnion } from 'firebase/firestore';
// // // // // import Navbar from './NavbarUser';
// // // // // import './UserTeams.css';

// // // // // const UserTeams = ({ user }) => {
// // // // //     const [teams, setTeams] = useState([]);
// // // // //     const [selectedTeam, setSelectedTeam] = useState(null);

// // // // //     const fetchTeams = async () => {
// // // // //         try {
// // // // //             const teamsRef = collection(firestore, 'teams');
// // // // //             const q = query(teamsRef);
// // // // //             const querySnapshot = await getDocs(q);
// // // // //             const teamsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
// // // // //             setTeams(teamsData);
// // // // //         } catch (error) {
// // // // //             console.error('Error fetching teams:', error);
// // // // //         }
// // // // //     };

// // // // //     useEffect(() => {
// // // // //         fetchTeams();
// // // // //     }, []);

// // // // //     const handleApplyClick = async (team) => {
// // // // //         try {
// // // // //             const userTeamsRef = doc(firestore, 'teams', team.id);
// // // // //             await updateDoc(userTeamsRef, {
// // // // //                 members: arrayUnion(user.uid) // Assumes user.uid is the ID of the current user
// // // // //             });
// // // // //             alert('You have successfully applied to join the team.');
// // // // //         } catch (error) {
// // // // //             console.error('Error applying to team:', error);
// // // // //             alert('There was an error applying to join the team.');
// // // // //         }
// // // // //     };

// // // // //     return (
// // // // //         <>
// // // // //             <Navbar />
// // // // //             <div className="user-teams-container">
// // // // //                 <h2>Available Teams</h2>
// // // // //                 <table className="teams-table">
// // // // //                     <thead>
// // // // //                         <tr>
// // // // //                             <th>Team Name</th>
// // // // //                             <th>Leader</th>
// // // // //                             <th>Apply</th>
// // // // //                         </tr>
// // // // //                     </thead>
// // // // //                     <tbody>
// // // // //                         {teams.map(team => (
// // // // //                             <tr key={team.id}>
// // // // //                                 <td>{team.teamName}</td>
// // // // //                                 <td>{team.leaderId}</td>
// // // // //                                 <td>
// // // // //                                     <button onClick={() => handleApplyClick(team)}>Apply</button>
// // // // //                                 </td>
// // // // //                             </tr>
// // // // //                         ))}
// // // // //                     </tbody>
// // // // //                 </table>
// // // // //             </div>
// // // // //         </>
// // // // //     );
// // // // // };

// // // // // export default UserTeams;
// // // // import React, { useState, useEffect } from 'react';
// // // // import { firestore } from '../firebase';
// // // // import { collection, getDocs } from 'firebase/firestore';
// // // // import NavbarUser from './NavbarUser';
// // // // import './UserTeams.css';

// // // // const UserTeams = () => {
// // // //     const [teams, setTeams] = useState([]);

// // // //     const fetchTeams = async () => {
// // // //         try {
// // // //             const teamsRef = collection(firestore, 'teams');
// // // //             const querySnapshot = await getDocs(teamsRef);
// // // //             const teamsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
// // // //             setTeams(teamsData);
// // // //         } catch (error) {
// // // //             console.error('Error fetching teams:', error);
// // // //         }
// // // //     };

// // // //     useEffect(() => {
// // // //         fetchTeams();
// // // //     }, []);

// // // //     return (
// // // //         <>
// // // //             <NavbarUser />
// // // //             <div className="user-teams-container">
// // // //                 <h2>Available Teams</h2>
// // // //                 <div className="teams-list">
// // // //                     {teams.map(team => (
// // // //                         <div key={team.id} className="team-container">
// // // //                             <h3 className="team-name">{team.teamName}</h3>
// // // //                             <p className="team-leader">Leader: {team.leaderId}</p>
// // // //                             <div className="team-members">
// // // //                                 <strong>Members:</strong>
// // // //                                 <ul>
// // // //                                     {team.members && team.members.length > 0 ? (
// // // //                                         team.members.map(memberId => (
// // // //                                             <li key={memberId}>{memberId}</li>
// // // //                                         ))
// // // //                                     ) : (
// // // //                                         <li>No members</li>
// // // //                                     )}
// // // //                                 </ul>
// // // //                             </div>
// // // //                         </div>
// // // //                     ))}
// // // //                 </div>
// // // //             </div>
// // // //         </>
// // // //     );
// // // // };

// // // // export default UserTeams;
// // // import React, { useState, useEffect } from 'react';
// // // import { firestore } from '../firebase';
// // // import { collection, getDocs } from 'firebase/firestore';
// // // import './UserTeams.css';

// // // const UserTeams = () => {
// // //   const [teams, setTeams] = useState([]);

// // //   const fetchTeams = async () => {
// // //     try {
// // //       const teamsRef = collection(firestore, 'teams');
// // //       const querySnapshot = await getDocs(teamsRef);
// // //       const teamsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
// // //       console.log('Fetched Teams Data:', teamsData);  // Log data to console
// // //       setTeams(teamsData);
// // //     } catch (error) {
// // //       console.error('Error fetching teams:', error);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchTeams();
// // //   }, []);

// // //   return (
// // //     <div className="user-teams-container">
// // //       <h2>Available Teams</h2>
// // //       <div className="teams-list">
// // //         {teams.length > 0 ? (
// // //           teams.map(team => (
// // //             <div key={team.id} className="team-container">
// // //               <h3 className="team-name">{team.teamName}</h3>
// // //               <p className="team-leader">Leader: {team.leaderId}</p>
// // //               <div className="team-members">
// // //                 <strong>Members:</strong>
// // //                 <ul>
// // //                   {team.members && team.members.length > 0 ? (
// // //                     team.members.map((memberId, index) => (
// // //                       <li key={index}>{memberId}</li>
// // //                     ))
// // //                   ) : (
// // //                     <li>No members</li>
// // //                   )}
// // //                 </ul>
// // //               </div>
// // //             </div>
// // //           ))
// // //         ) : (
// // //           <p>No teams available.</p>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default UserTeams;
// // import React, { useState, useEffect } from 'react';
// // import { firestore } from '../firebase';
// // import { collection, getDocs, query, where } from 'firebase/firestore';
// // import './UserTeams.css';

// // const UserTeams = () => {
// //   const [teams, setTeams] = useState([]);
// //   const [userData, setUserData] = useState({}); // State to hold user data

// //   const getUserData = async (userIds) => {
// //     try {
// //       const usersRef = collection(firestore, 'users');
// //       const userQuery = query(usersRef, where('__name__', 'in', userIds));
// //       const querySnapshot = await getDocs(userQuery);
// //       const userData = querySnapshot.docs.reduce((acc, doc) => {
// //         acc[doc.id] = doc.data();
// //         return acc;
// //       }, {});
// //       return userData;
// //     } catch (error) {
// //       console.error('Error fetching user data:', error);
// //       return {};
// //     }
// //   };

// //   const fetchTeams = async () => {
// //     try {
// //       const teamsRef = collection(firestore, 'teams');
// //       const querySnapshot = await getDocs(teamsRef);
// //       const teamsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
// //       setTeams(teamsData);

// //       // Fetch user data for leaders and members
// //       const leaderIds = teamsData.map(team => team.leaderId);
// //       const memberIds = teamsData.flatMap(team => team.members || []);
// //       const allUserIds = Array.from(new Set([...leaderIds, ...memberIds]));
// //       const fetchedUserData = await getUserData(allUserIds);
// //       setUserData(fetchedUserData);
// //     } catch (error) {
// //       console.error('Error fetching teams:', error);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchTeams();
// //   }, []);

// //   return (
// //     <div className="user-teams-container">
// //       <h2>Available Teams</h2>
// //       <div className="teams-list">
// //         {teams.length > 0 ? (
// //           teams.map(team => (
// //             <div key={team.id} className="team-container">
// //               <h3 className="team-name">{team.teamName}</h3>
// //               <p className="team-leader">
// //                 Leader: {userData[team.leaderId]?.name || 'Unknown'}
// //               </p>
// //               <div className="team-members">
// //                 <strong>Members:</strong>
// //                 <ul>
// //                   {team.members && team.members.length > 0 ? (
// //                     team.members.map((memberId, index) => (
// //                       <li key={index}>{userData[memberId]?.name || 'Unknown'}</li>
// //                     ))
// //                   ) : (
// //                     <li>No members</li>
// //                   )}
// //                 </ul>
// //               </div>
// //             </div>
// //           ))
// //         ) : (
// //           <p>No teams available.</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default UserTeams;
// import React, { useState, useEffect } from 'react';
// import { firestore } from '../firebase';
// import { collection, getDocs, query, where } from 'firebase/firestore';
// import ApplicationForm from './TeamApplicationForm';
// import Navbar from './NavbarUser';
// import './UserTeams.css';

// const UserTeams = ({ teams = [] }) => { // Set default value for teams
//     const [selectedTeam, setSelectedTeam] = useState(null);
//     const [showForm, setShowForm] = useState(false);

//     const handleTeamClick = (teamId) => {
//         setSelectedTeam(teamId);
//         setShowForm(true);
//     };

//     const closeForm = () => {
//         setShowForm(false);
//         setSelectedTeam(null);
//     };

//     // const UserTeams = () => {
//         // const [teams, setTeams] = useState([]);
//         const [userData, setUserData] = useState({}); // State to hold user data

//         // Function to fetch user data
//         const getUserData = async (userIds) => {
//             try {
//                 // Remove undefined or null IDs
//                 const validUserIds = userIds.filter(id => id);
//                 if (validUserIds.length === 0) {
//                     console.log('No valid user IDs to fetch.');
//                     return {};
//                 }

//                 console.log('Fetching user data for IDs:', validUserIds); // Debugging line
//                 const usersRef = collection(firestore, 'users');
//                 const userQuery = query(usersRef, where('__name__', 'in', validUserIds));
//                 const querySnapshot = await getDocs(userQuery);
//                 const fetchedUserData = querySnapshot.docs.reduce((acc, doc) => {
//                     acc[doc.id] = doc.data();
//                     return acc;
//                 }, {});
//                 console.log('Fetched user data:', fetchedUserData); // Debugging line
//                 return fetchedUserData;
//             } catch (error) {
//                 console.error('Error fetching user data:', error);
//                 return {};
//             }
//         };

//         // Function to fetch teams and user data
//         const fetchTeams = async () => {
//             try {
//                 const teamsRef = collection(firestore, 'teams');
//                 const querySnapshot = await getDocs(teamsRef);
//                 const teamsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//                 console.log('Fetched teams data:', teamsData); // Debugging line
//                 setTeams(teamsData);

//                 // Fetch user data for leaders and members
//                 const leaderIds = teamsData.map(team => team.leaderId).filter(id => id);
//                 const memberIds = teamsData.flatMap(team => team.members || []).filter(id => id);
//                 const allUserIds = Array.from(new Set([...leaderIds, ...memberIds]));
//                 console.log('User IDs to fetch:', allUserIds); // Debugging line
//                 const fetchedUserData = await getUserData(allUserIds);
//                 setUserData(fetchedUserData);
//             } catch (error) {
//                 console.error('Error fetching teams:', error);
//             }
//         };

//         useEffect(() => {
//             fetchTeams();
//         }, []);

//         return (
//             <>
//                 <Navbar />
//                 <div className="user-teams-container">
//                     <h2>Available Teams</h2>
//                     <div className="teams-list">
//                         {teams.length > 0 ? (
//                             teams.map(team => (
//                                 <div key={team.id} className="team-container">  onClick={() => handleTeamClick(team.teamId)}>
//                                     <h3 className="team-name">{team.teamName}</h3>
//                                     <p className="team-leader">
//                                         Leader: {userData[team.leaderId]?.name || 'Unknown'}
//                                     </p>
//                                     <div className="team-members">
//                                         <strong>Members:</strong>
//                                         <ul>
//                                             {team.members && team.members.length > 0 ? (
//                                                 team.members.map((memberId, index) => (
//                                                     <li key={index}>{userData[memberId]?.name || 'Unknown'}</li>
//                                                 ))
//                                             ) : (
//                                                 <li>No members</li>
//                                             )}
//                                         </ul>
//                                     </div>
//                                 </div>
//                             ))
//                         ) : (
//                             <p>No teams available.</p>
//                         )}
//                     </div>
//                     {showForm && selectedTeam && (
//                         <ApplicationForm teamId={selectedTeam} closeForm={closeForm} />
//                     )}
//                 </div>
//             </>
//         );
//     };

//     export default UserTeams;
import React, { useState, useEffect } from 'react';
import { firestore } from '../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import ApplicationForm from './TeamApplicationForm';
import Navbar from './NavbarUser';
import './UserTeams.css';

const UserTeams = () => {
    const [teams, setTeams] = useState([]); // Define state for teams
    const [selectedTeam, setSelectedTeam] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [userData, setUserData] = useState({}); // State to hold user data

    // Function to fetch user data
    const getUserData = async (userIds) => {
        try {
            // Remove undefined or null IDs
            const validUserIds = userIds.filter(id => id);
            if (validUserIds.length === 0) {
                console.log('No valid user IDs to fetch.');
                return {};
            }

            console.log('Fetching user data for IDs:', validUserIds); // Debugging line
            const usersRef = collection(firestore, 'users');
            const userQuery = query(usersRef, where('__name__', 'in', validUserIds));
            const querySnapshot = await getDocs(userQuery);
            const fetchedUserData = querySnapshot.docs.reduce((acc, doc) => {
                acc[doc.id] = doc.data();
                return acc;
            }, {});
            console.log('Fetched user data:', fetchedUserData); // Debugging line
            return fetchedUserData;
        } catch (error) {
            console.error('Error fetching user data:', error);
            return {};
        }
    };

    // Function to fetch teams and user data
    const fetchTeams = async () => {
        try {
            const teamsRef = collection(firestore, 'teams');
            const querySnapshot = await getDocs(teamsRef);
            const teamsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            console.log('Fetched teams data:', teamsData); // Debugging line
            setTeams(teamsData);

            // Fetch user data for leaders and members
            const leaderIds = teamsData.map(team => team.leaderId).filter(id => id);
            const memberIds = teamsData.flatMap(team => team.members || []).filter(id => id);
            const allUserIds = Array.from(new Set([...leaderIds, ...memberIds]));
            console.log('User IDs to fetch:', allUserIds); // Debugging line
            const fetchedUserData = await getUserData(allUserIds);
            setUserData(fetchedUserData);
        } catch (error) {
            console.error('Error fetching teams:', error);
        }
    };

    useEffect(() => {
        fetchTeams();
    }, []);

    const handleTeamClick = (teamId) => {
        setSelectedTeam(teamId);
        setShowForm(true);
    };

    const closeForm = () => {
        setShowForm(false);
        setSelectedTeam(null);
    };

    return (
        <>
            <Navbar />
            <div className="user-teams-container">
                <h2>Available Teams</h2>
                <div className="teams-list">
                    {teams.length > 0 ? (
                        teams.map(team => (
                            <div key={team.id} className="team-container" onClick={() => handleTeamClick(team.id)}>
                                <h3 className="team-name">{team.teamName}</h3>
                                <p className="team-leader">
                                    Leader: {userData[team.leaderId]?.name || 'Unknown'}
                                </p>
                                <div className="team-members">
                                    <strong>Members:</strong>
                                    <ul>
                                        {team.members && team.members.length > 0 ? (
                                            team.members.map((memberId, index) => (
                                                <li key={index}>{userData[memberId]?.name || 'Unknown'}</li>
                                            ))
                                        ) : (
                                            <li>No members</li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No teams available.</p>
                    )}
                </div>
                {showForm && selectedTeam && (
                    <ApplicationForm teamId={selectedTeam} closeForm={closeForm} />
                )}
            </div>
        </>
    );
};

export default UserTeams;
