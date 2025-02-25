// Firebase configuration and initialization
// Add these at the top of your script.js file

// Import Firebase SDK
// Make sure to include these scripts in your HTML before your script.js
// <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js"></script>
// <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-auth-compat.js"></script>

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZruga4OtjR8wbLCELGNIi67rkMKJcn4Y",
  authDomain: "test-61e96.firebaseapp.com",
  projectId: "test-61e96",
  storageBucket: "test-61e96.firebasestorage.app",
  messagingSenderId: "537480910527",
  appId: "1:537480910527:web:e4a5fd6a90a1558e0d980a",
  measurementId: "G-6MV5YXMQ0X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = firebase.auth();

// DOM elements for authentication
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const logoutBtn = document.getElementById('logoutBtn');
const userProfileSection = document.getElementById('userProfile');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const authModal = document.getElementById('authModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const authError = document.getElementById('authError');
const userDisplayName = document.getElementById('userDisplayName');

// Auth state observer
auth.onAuthStateChanged(user => {
  if (user) {
    // User is signed in
    console.log('User is signed in:', user.email);
    if (loginBtn) loginBtn.style.display = 'none';
    if (signupBtn) signupBtn.style.display = 'none';
    if (logoutBtn) logoutBtn.style.display = 'block';
    if (userProfileSection) {
      userProfileSection.style.display = 'block';
      if (userDisplayName) {
        userDisplayName.textContent = user.displayName || user.email;
      }
    }
    
    // Close the modal if it's open
    if (authModal) {
      $(authModal).modal('hide');
    }
  } else {
    // User is signed out
    console.log('User is signed out');
    if (loginBtn) loginBtn.style.display = 'block';
    if (signupBtn) signupBtn.style.display = 'block';
    if (logoutBtn) logoutBtn.style.display = 'none';
    if (userProfileSection) userProfileSection.style.display = 'none';
  }
});

// Login functionality
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in successfully
        const user = userCredential.user;
        console.log('Login successful', user);
        if (authError) authError.textContent = '';
      })
      .catch((error) => {
        console.error('Login error:', error);
        if (authError) authError.textContent = error.message;
      });
  });
}

// Sign up functionality
if (signupForm) {
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const displayName = document.getElementById('signupName').value;
    
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed up successfully
        const user = userCredential.user;
        console.log('Signup successful', user);
        
        // Update user profile with display name
        return user.updateProfile({
          displayName: displayName
        });
      })
      .then(() => {
        if (authError) authError.textContent = '';
      })
      .catch((error) => {
        console.error('Signup error:', error);
        if (authError) authError.textContent = error.message;
      });
  });
}

// Logout functionality
if (logoutBtn) {
  logoutBtn.addEventListener('click', () => {
    auth.signOut()
      .then(() => {
        console.log('User signed out');
      })
      .catch((error) => {
        console.error('Logout error:', error);
      });
  });
}

// Social media authentication (Google)
const googleAuthBtn = document.getElementById('googleAuthBtn');
if (googleAuthBtn) {
  googleAuthBtn.addEventListener('click', () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
      .then((result) => {
        console.log('Google auth successful', result.user);
        if (authError) authError.textContent = '';
      })
      .catch((error) => {
        console.error('Google auth error:', error);
        if (authError) authError.textContent = error.message;
      });
  });
}

// Modal functions
if (loginBtn) {
  loginBtn.addEventListener('click', () => {
    $(authModal).modal('show');
    document.querySelector('#authModal .nav-tabs .nav-link[href="#login"]').click();
  });
}

if (signupBtn) {
  signupBtn.addEventListener('click', () => {
    $(authModal).modal('show');
    document.querySelector('#authModal .nav-tabs .nav-link[href="#signup"]').click();
  });
}

if (closeModalBtn) {
  closeModalBtn.addEventListener('click', () => {
    $(authModal).modal('hide');
  });
}

// Keep all of your existing code below this line

if (window.screen.width <= 1130) {
    function removeall() {
        $(".cir_border").css("border", "none");
    }
    $("#sec").on("click", function () {
        removeall();
        $("#sec").css("border", "2px solid whitesmoke");
        $("#sec").css("border-radius", "20px");
    });
    $("#pri").on("click", function () {
        removeall();
        $("#pri").css("border", "2px solid whitesmoke");
        $("#pri").css("border-radius", "20px");
    });
    $("#tri").on("click", function () {
        removeall();
        $("#tri").css("border", "2px solid whitesmoke");
        $("#tri").css("border-radius", "20px");
    });
    $("#quad").on("click", function () {
        removeall();
        $("#quad").css("border", "2px solid whitesmoke");
        $("#quad").css("border-radius", "20px");
    });
    $("#quint").on("click", function () {
        removeall();
        $("#quint").css("border", "2px solid whitesmoke");
        $("#quint").css("border-radius", "20px");
    });
    $("#hex").on("click", function () {
        removeall();
        $("#hex").css("border", "2px solid whitesmoke");
        $("#hex").css("border-radius", "20px");
    });
    $("#hept").on("click", function () {
        removeall();
        $("#hept").css("border", "2px solid whitesmoke");
        $("#hept").css("border-radius", "20px");
    });
}

$("#about").on("mouseover", function () {
    introAboutLogoTransition();
});

$("input").on("change", function () {
    $("body").toggleClass("blue");
});

// Light/Dark toggle
const checkbox = document.getElementById("checkbox");

function introAboutLogoTransition() {
    $("#about-quad").css("top", "70%");
    $("#about-quad").css("opacity", "1");
}

function checkDarkMode() {
    if (
        localStorage.getItem("tourism_website_darkmode") !== null &&
        localStorage.getItem("tourism_website_darkmode") === "true"
    ) {
        document.body.classList.add("dark");
        checkbox.checked = true;
    }
}
checkDarkMode();

checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
    document.body.classList.contains("dark")
        ? localStorage.setItem("tourism_website_darkmode", true)
        : localStorage.setItem("tourism_website_darkmode", false);
});

// scroll button

let mybutton = document.getElementById("upbtn");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Update Navbar While Scrolling
function updateNav() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links li a");

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();

        if (window.screen.width <= 425) {
            if (rect.top <= 1300) {
                navLinks.forEach((navLink) => {
                    navLink.classList.remove("active");
                });
                navLinks[index].classList.add("active");
            }
        } else if (425 <= window.screen.width <= 768) {
            if (rect.top <= 1250) {
                navLinks.forEach((navLink) => {
                    navLink.classList.remove("active");
                });
                navLinks[index].classList.add("active");
            }
        } else {
            if (rect.top <= 1000) {
                navLinks.forEach((navLink) => {
                    navLink.classList.remove("active");
                });
                navLinks[index].classList.add("active");
            }
        }
    });
}

window.addEventListener("scroll", updateNav);
