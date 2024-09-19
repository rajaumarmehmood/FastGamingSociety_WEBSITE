// // import React, { useState } from 'react';
// // import { auth } from '../firebase';
// // import { signInWithEmailAndPassword } from 'firebase/auth';

// // export default function Login() {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');

// //   const handleLogin = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await signInWithEmailAndPassword(auth, email, password);
// //       console.log("User logged in successfully!");
// //       // Redirect or show a success message
// //     } catch (error) {
// //       console.error("Error logging in: ", error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Login</h2>
// //       <form onSubmit={handleLogin}>
// //         <label>Email</label>
// //         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
// //         <label>Password</label>
// //         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
// //         <button type="submit">Login</button>
// //       </form>
// //     </div>
// //   );
// // }
// // src/components/Login.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../firebase';
// import { Link } from 'react-router-dom';
// import Navbar from './Navbar';
// import '../style.css';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       navigate('/');
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="container">
//         <h1>Login</h1>
//         <form onSubmit={handleLogin}>
//           <label>Email:</label>
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//           <label>Password:</label>
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//           <button type="submit">Login</button>
//         </form>
//         <Link to="/forgot-password" className="forgot-password-link">Forgot Password?</Link>
//         {error && <p className="error">{error}</p>}
//         <p className="message" onClick={() => navigate('/signup')}>Don't have an account? Sign Up</p>
//       </div>
//     </>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, firestore } from '../firebase';
import { getDoc, doc } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import '../style.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const userDoc = doc(firestore, 'users', user.uid);
      const userSnapshot = await getDoc(userDoc);
      const role = userSnapshot.data().role;

      if (role === 'mentor') {
        navigate('/mentor-dashboard');
      } else if (role === 'president') {
        navigate('/president-dashboard');
      } else {
        navigate('/user-dashboard');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Login</button>
        </form>
        <Link to="/forgot-password" className="forgot-password-link">Forgot Password?</Link>
        {error && <p className="error">{error}</p>}
        <p className="message" onClick={() => navigate('/signup')}>Don't have an account? Sign Up</p>
      </div>
    </>
  );
};

export default Login;
