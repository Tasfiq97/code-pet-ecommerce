import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB1lfiigv0SPkXDyexazaYuyiDtTSYX1HM",
  authDomain: "assignment-task-f12fb.firebaseapp.com",
  projectId: "assignment-task-f12fb",
  storageBucket: "assignment-task-f12fb.appspot.com",
  messagingSenderId: "1092316123392",
  appId: "1:1092316123392:web:9acdd44801bd2e5f91e3e5"
};  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;