// signin.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAIz0KAgI2WtomaSAXmCHkG1A2J1YBd01I",
    authDomain: "muki-e592c.firebaseapp.com",
    projectId: "muki-e592c",
    storageBucket: "muki-e592c.appspot.com",
    messagingSenderId: "534097424264",
    appId: "1:534097424264:web:68025dadc25ab26bd3543d"
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const signinForm = document.getElementById('signin-form');
const signinEmail = document.getElementById('signin-email');
const signinPassword = document.getElementById('signin-password');
const signinMessage = document.getElementById('signin-message');

signinForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const email = signinEmail.value;
    const password = signinPassword.value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            // Redirect to dashboard upon successful sign-in
            window.location.href = "index.html";
        })
        .catch((error) => {
            const errorMessage = error.message;
            signinMessage.textContent = "Signin error: " + errorMessage;
            console.error("Signin error:", errorMessage);
        });
});