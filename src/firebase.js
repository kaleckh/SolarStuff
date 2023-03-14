import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import * as firebase from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyAAtgvo3NMrUQOJNnitbgdu1FZ3ikJrMlM",
    authDomain: "build-a-solar-solution.firebaseapp.com",
    projectId: "build-a-solar-solution",
    storageBucket: "build-a-solar-solution.appspot.com",
    messagingSenderId: "393974362497",
    appId: "1:393974362497:web:703acba0ab2656e03e3880",
    measurementId: "G-C42C3HREVH"
  };
  const app = initializeApp(firebaseConfig)

  export const auth = getAuth(app)

  
