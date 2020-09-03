import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAs0ccq-0KeCXrxLusRogvfBgN_ZpoGAkU",
    authDomain: "freedom-6eb49.firebaseapp.com",
    databaseURL: "https://freedom-6eb49.firebaseio.com",
    projectId: "freedom-6eb49",
    storageBucket: "freedom-6eb49.appspot.com",
    messagingSenderId: "475257600058",
    appId: "1:475257600058:web:2f931b030450d26e8add03",
    measurementId: "G-L251GCJ2YV"
};
  
firebase.initializeApp(firebaseConfig);

export default firebase;