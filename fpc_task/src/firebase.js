// // import { initializeApp } from "firebase/app";
// // import { getFirestore } from "@firebase/firestore";
// // //import { getAnalytics } from "firebase/analytics";
// // import { getAuth } from "firebase/auth"; // Import Firebase Auth

// // const firebaseConfig = {
// //   apiKey: "AIzaSyC43GSJEJiyETwoVF--j25Ty-3kK-baoSs",
// //   authDomain: "fir-pro-52bd7.firebaseapp.com",
// //   projectId: "fir-pro-52bd7",
// //   storageBucket: "fir-pro-52bd7.appspot.com",
// //   messagingSenderId: "168101037107",
// //   appId: "1:168101037107:web:a59458f76bd9995739cf46",
// //   measurementId: "G-6WYLBBJ4DX"
// // };

// // // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// // //const analytics = getAnalytics(app);
// // const firestore = getFirestore(app);
// // const auth = getAuth(app); // Initialize Firebase Auth

// // export { firestore, auth };
// // firebase.js
// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: "AIzaSyC43GSJEJiyETwoVF--j25Ty-3kK-baoSs",
//   authDomain: "fir-pro-52bd7.firebaseapp.com",
//   projectId: "fir-pro-52bd7",
//   storageBucket: "fir-pro-52bd7.appspot.com",
//   messagingSenderId: "168101037107",
//   appId: "1:168101037107:web:a59458f76bd9995739cf46",
//   measurementId: "G-6WYLBBJ4DX"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const firestore = getFirestore(app);

// export { auth, firestore };

import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC43GSJEJiyETwoVF--j25Ty-3kK-baoSs",
  authDomain: "fir-pro-52bd7.firebaseapp.com",
  projectId: "fir-pro-52bd7",
  storageBucket: "fir-pro-52bd7.appspot.com",
  messagingSenderId: "168101037107",
  appId: "1:168101037107:web:a59458f76bd9995739cf46",
  measurementId: "G-6WYLBBJ4DX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    // The signed-in user info.
    const user = result.user;
    console.log(user);
    // You can also store user data in the Firestore if needed
  } catch (error) {
    console.error("Error during Google sign-in:", error);
  }
};

export { firestore, signInWithGoogle, auth, storage, collection, doc, getDoc };
