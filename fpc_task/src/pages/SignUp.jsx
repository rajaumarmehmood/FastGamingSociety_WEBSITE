// // // import React, { useState } from 'react';
// // // import { auth, firestore } from '../firebase';
// // // import { createUserWithEmailAndPassword } from 'firebase/auth';
// // // import { setDoc, doc } from 'firebase/firestore';

// // // export default function SignUp() {
// // //   const [email, setEmail] = useState('');
// // //   const [password, setPassword] = useState('');
// // //   const [name, setName] = useState('');
// // //   const [role, setRole] = useState('User'); // Default role

// // //   const handleSignUp = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
// // //       const user = userCredential.user;

// // //       // Save user data to Firestore
// // //       await setDoc(doc(firestore, 'users', user.uid), {
// // //         name: name,
// // //         email: email,
// // //         role: role,
// // //       });

// // //       console.log("User signed up successfully!");
// // //       // Redirect or show a success message
// // //     } catch (error) {
// // //       console.error("Error signing up: ", error);
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       <h2>Sign Up</h2>
// // //       <form onSubmit={handleSignUp}>
// // //         <label>Name</label>
// // //         <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
// // //         <label>Email</label>
// // //         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
// // //         <label>Password</label>
// // //         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
// // //         <label>Role</label>
// // //         <select value={role} onChange={(e) => setRole(e.target.value)}>
// // //           <option value="User">User</option>
// // //           <option value="Admin">Admin</option>
// // //           <option value="Mentor">Mentor</option>
// // //         </select>
// // //         <button type="submit">Sign Up</button>
// // //       </form>
// // //     </div>
// // //   );
// // // }
// // // src/components/Signup.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth, firestore } from '../firebase';
// import { setDoc, doc } from 'firebase/firestore';
// import Navbar from './Navbar';
// import '../style.css';

// const Signup = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;
//       await setDoc(doc(firestore, 'users', user.uid), {
//         name,
//         email,
//         role: 'user', // default role
//       });
//       navigate('/dashboard');
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="container">
//         <h1>Sign Up</h1>
//         <form onSubmit={handleSignup}>
//           <label>Name:</label>
//           <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
//           <label>Email:</label>
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//           <label>Password:</label>
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//           <button type="submit">Sign Up</button>
//         </form>
//         {error && <p className="error">{error}</p>}
//         <p className="message" onClick={() => navigate('/login')}>Already have an account? Login</p>
//       </div>
//     </>
//   );
// };

// export default Signup;


// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { auth, signInWithGoogle } from '../firebase';
// // import { createUserWithEmailAndPassword } from "firebase/auth";
// // import '../style.css';
// // import googleLogo from '../assets/googlelogo.png';

// // const Signup = () => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   //const [role, setRole] = useState('student');
// //   const [error, setError] = useState('');
// //   const navigate = useNavigate();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
// //       const user = userCredential.user;
// //       console.log('User signed up:', user);
// //       navigate('/dashboard');
// //     } catch (error) {
// //       console.error('Error signing up:', error);
// //     }
// //   };

// //   return (
// //     <div className="container">
// //       <h2>Signup</h2>
// //       <form onSubmit={handleSubmit}>
// //         <input
// //           type="email"
// //           placeholder="Email"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //         />
// //         <input
// //           type="password"
// //           placeholder="Password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //         />
// //         {/* <select value={role} onChange={(e) => setRole(e.target.value)}>
// //           <option value="student">Student</option>
// //           <option value="mentor">Mentor</option>
// //           <option value="president">President</option>
// //           <option value="vice_president">Vice President</option>
// //           <option value="executive_body">Executive Body</option>
// //         </select> */}
// //         <button type="submit">Sign Up</button>
// //         {/* <button type="button" onClick={signInWithGoogle} className="google-button">
// //           Sign Up with Google
// //         </button> */}
// //         <button type="button" onClick={signInWithGoogle} className="google-button">
// //           <img src={googleLogo} alt="Google Logo" className="google-logo" />
// //           Continue with Google
// //         </button>
// //       </form>
// //       {error && <p className="error">{error}</p>}
// //       <p className="message" onClick={() => navigate('/login')}>Already have an account? Login</p>
// //     </div>
// //   );
// // };

// // export default Signup;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, firestore } from '../firebase';
import { setDoc, doc } from 'firebase/firestore';
import Navbar from './Navbar';
import '../style.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await setDoc(doc(firestore, 'users', user.uid), {
        name,
        email,
        role: 'user', // default role
      });
      navigate('/user-dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSignup}>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Sign Up</button>
        </form>
        {error && <p className="error">{error}</p>}
        <p className="message" onClick={() => navigate('/login')}>Already have an account? Login</p>
      </div>
    </>
  );
};

export default Signup;
