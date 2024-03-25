// signup.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

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

const signupForm = document.getElementById('signup-form');
const signupFirstName = document.getElementById('signup-firstname');
const signupLastName = document.getElementById('signup-lastname');
const signupEmail = document.getElementById('signup-email');
const signupPassword = document.getElementById('signup-password');
const signupMessage = document.getElementById('signup-message');

signupForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const email = signupEmail.value;
    const password = signupPassword.value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            signupMessage.textContent = "Signup successful: " + user.email;
            console.log("Signup successful:", user);
            // Optionally, redirect the user to another page after signup
        })
        .catch((error) => {
            const errorMessage = error.message;
            signupMessage.textContent = "Signup error: " + errorMessage;
            console.error("Signup error:", errorMessage);
        });
});