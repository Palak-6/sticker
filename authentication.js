// Import Firebase
import firebase from 'firebase/app';
import 'firebase/auth';

// Initialize Firebase with your project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD8MHQbzuPGNLSPa77HH1ug_K3M_O8jXKg',
  authDomain: 'nextjs-288f3.firebaseapp.com',
  projectId: 'nextjs-288f3',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Function to sign up a user
const signup = async (email, password) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    return { success: true, message: 'User signed up successfully.' };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

// Function to log in a user
const login = async (email, password) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    return { success: true, message: 'User logged in successfully.' };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

// Function to log out the current user
const logout = async () => {
  try {
    await firebase.auth().signOut();
    return { success: true, message: 'User logged out successfully.' };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

// Function to get the current user
const getCurrentUser = () => {
  return firebase.auth().currentUser;
};

export { signup, login, logout, getCurrentUser };
