import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAkCKCxBjAxEJNZnhteT6N4v4xjLWrGIY0",
  authDomain: "booking-app-dev-64722.firebaseapp.com",
  projectId: "booking-app-dev-64722",
  storageBucket: "booking-app-dev-64722.appspot.com",
  messagingSenderId: "164539538769",
  appId: "1:164539538769:web:0f55bb5fdefc5f78884770",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line import/prefer-default-export
export const auth = getAuth(app);
