  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBwkdgB_SoMB-eK0nxr8lQ1HxZlmYr-EpM",
    authDomain: "projeto-teste-8bdd7.firebaseapp.com",
    projectId: "projeto-teste-8bdd7",
    storageBucket: "projeto-teste-8bdd7.appspot.com",
    messagingSenderId: "411171481639",
    appId: "1:411171481639:web:29130d7a8289e3f64f4602"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  export default app