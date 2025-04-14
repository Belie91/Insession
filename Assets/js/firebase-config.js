// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-storage.js";

// Your Firebase Configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };

//to store student registaion data
{
  //mmh
  //"name": "John Doe",
  //"email": ",
  //mhh
  "courseName": "Mathematics",
  "time": "10:00 AM",
  "correctPin": "1234"
}
