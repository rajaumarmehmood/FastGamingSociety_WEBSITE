import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDoc,
  doc,
  setDoc,
} from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
//const analytics = getAnalytics(app);
const firestore = getFirestore(app);

// Function to write user data
export async function writeUserData(userId, name, email, role) {
  const userRef = doc(firestore, "users", userId);
  try {
    await setDoc(userRef, {
      name: name,
      email: email,
      role: role,
    });
    console.log("User data saved successfully.");
  } catch (error) {
    console.error("Error saving user data: ", error);
  }
}

// Function to write society data
export async function writeSocietyData(societyId, year, mentorId, presidentId) {
  const societyRef = doc(firestore, "societies", societyId);
  try {
    await setDoc(societyRef, {
      year: year,
      mentorId: mentorId,
      presidentId: presidentId,
    });
    console.log("Society data saved successfully.");
  } catch (error) {
    console.error("Error saving society data: ", error);
  }
}

// Function to write event data
export async function writeEventData(
  eventId,
  name,
  description,
  date,
  createdBy,
  societyId
) {
  const eventRef = doc(firestore, "events", eventId);
  try {
    await setDoc(eventRef, {
      name: name,
      description: description,
      date: date,
      createdBy: createdBy,
      societyId: societyId,
    });
    console.log("Event data saved successfully.");
  } catch (error) {
    console.error("Error saving event data: ", error);
  }
}

// Function to write team data
export async function writeTeamData(teamId, name, executiveId, societyId) {
  const teamRef = doc(firestore, "teams", teamId);
  try {
    await setDoc(teamRef, {
      name: name,
      executiveId: executiveId,
      societyId: societyId,
    });
    console.log("Team data saved successfully.");
  } catch (error) {
    console.error("Error saving team data: ", error);
  }
}

// Function to add user to team
export async function addUserToTeam(userId, teamId, societyId) {
  const membershipRef = doc(firestore, "memberships", `${userId}_${teamId}`);
  try {
    await setDoc(membershipRef, {
      userId: userId,
      teamId: teamId,
      societyId: societyId,
    });
    console.log("Membership data saved successfully.");
  } catch (error) {
    console.error("Error saving membership data: ", error);
  }
}

// Function to read user data
export async function readUserData(userId) {
  const userRef = doc(firestore, "users", userId);
  try {
    const docSnap = await getDoc(userRef);
    if (docSnap.exists()) {
      console.log("User Data:", docSnap.data());
    } else {
      console.log("No data available for user ID:", userId);
    }
  } catch (error) {
    console.error("Error reading user data: ", error);
  }
}

// Function to read society data
export async function readSocietyData(societyId) {
  const societyRef = doc(firestore, "societies", societyId);
  try {
    const docSnap = await getDoc(societyRef);
    if (docSnap.exists()) {
      console.log("Society Data:", docSnap.data());
    } else {
      console.log("No data available for society ID:", societyId);
    }
  } catch (error) {
    console.error("Error reading society data: ", error);
  }
}

// Function to read event data
export async function readEventData(eventId) {
  const eventRef = doc(firestore, "events", eventId);
  try {
    const docSnap = await getDoc(eventRef);
    if (docSnap.exists()) {
      console.log("Event Data:", docSnap.data());
    } else {
      console.log("No data available for event ID:", eventId);
    }
  } catch (error) {
    console.error("Error reading event data: ", error);
  }
}

// Function to read team data
export async function readTeamData(teamId) {
  const teamRef = doc(firestore, "teams", teamId);
  try {
    const docSnap = await getDoc(teamRef);
    if (docSnap.exists()) {
      console.log("Team Data:", docSnap.data());
    } else {
      console.log("No data available for team ID:", teamId);
    }
  } catch (error) {
    console.error("Error reading team data: ", error);
  }
}
