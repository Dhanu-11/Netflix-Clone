import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDF9hmNRKV7mT6vCOvlA2tW8L-9ZJwYvLA",
  authDomain: "react-netflix-clone-7d3f8.firebaseapp.com",
  projectId: "react-netflix-clone-7d3f8",
  storageBucket: "react-netflix-clone-7d3f8.appspot.com",
  messagingSenderId: "742470075395",
  appId: "1:742470075395:web:4d3be18ce0ff038f8a7a36",
  measurementId: "G-2ZHN8CSEKJ"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);







// const firebaseConfig = {
//   apiKey: "AIzaSyC1Hf0_rdWLBzDPJPcO9CJN4y6M6-EgKH4",
//   authDomain: "react-auth-6788d.firebaseapp.com",
//   projectId: "react-auth-6788d",
//   storageBucket: "react-auth-6788d.appspot.com",
//   messagingSenderId: "131797845021",
//   appId: "1:131797845021:web:3f7ff4766e2b89ca5d32f4",
//   measurementId: "G-VWPBR1NSLL",
// };


// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
