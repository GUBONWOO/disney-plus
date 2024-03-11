// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBDjm5jBmv5duVbVx_4QOGW1BKAYkqN71I',
  authDomain: 'disney-app-a038a.firebaseapp.com',
  projectId: 'disney-app-a038a',
  storageBucket: 'disney-app-a038a.appspot.com',
  messagingSenderId: '926522085586',
  appId: '1:926522085586:web:ac39e8e9574f4fee9d1d0b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
