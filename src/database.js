// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAST7OUnGU63uY-LhqOA96Pn-3msyEV8M4",
  authDomain: "chat-fire-9fcef.firebaseapp.com",
  projectId: "chat-fire-9fcef",
  storageBucket: "chat-fire-9fcef.appspot.com",
  messagingSenderId: "123600341320",
  appId: "1:123600341320:web:564fcc3bc80d08693ccb7d"
};

// Initialize Firebase
const db = initializeApp(firebaseConfig);
export default db;
