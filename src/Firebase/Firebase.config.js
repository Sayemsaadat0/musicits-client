// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// todo  firebase environemt 
const firebaseConfig = {
  apiKey: "AIzaSyCjeZZTHL_NTEC4nPxoeHOXaoU8kG-xnp0",
  authDomain: "musicits.firebaseapp.com",
  projectId: "musicits",
  storageBucket: "musicits.appspot.com",
  messagingSenderId: "650516088703",
  appId: "1:650516088703:web:14e0559a5117810ffd3c4a"
};

// Initialize Firebase
const MusicitsApp = initializeApp(firebaseConfig);

export default MusicitsApp