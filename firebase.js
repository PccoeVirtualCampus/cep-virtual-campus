// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase Config (replace with your actual config)
const firebaseConfig = {
  apiKey: "AIzaSyBiie3izNZuBFGMokKQsahFGIf3M6iV7Lw",
  authDomain: "cepvirtualcampus.firebaseapp.com",
  projectId: "cepvirtualcampus",
  storageBucket: "cepvirtualcampus.appspot.com",
  messagingSenderId: "905682910672",
  appId: "1:905682910672:web:7fbd1930f941fcba7b4dd5",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
