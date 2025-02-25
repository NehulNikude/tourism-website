// Firebase configuration and initialization
const firebaseConfig = {
    apiKey: "AIzaSyBZruga4OtjR8wbLCELGNIi67rkMKJcn4Y",
    authDomain: "test-61e96.firebaseapp.com",
    projectId: "test-61e96",
    storageBucket: "test-61e96.firebasestorage.app",
    messagingSenderId: "537480910527",
    appId: "1:537480910527:web:e4a5fd6a90a1558e0d980a",
    measurementId: "G-6MV5YXMQ0X"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Existing responsive navigation code
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

// Authentication Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const userProfileSection = document.getElementById('userProfile');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const authModal = $('#authModal');
    const authError = document.getElementById('authError');
    const userDisplayName = document.getElementById('userDisplayName');

    // Auth state observer
    auth.onAuthStateChanged(user => {
        if (user) {
            loginBtn.style.display = 'none';
            signupBtn.style.display = 'none';
            userProfileSection.style.display = 'block';
            userDisplayName.textContent = user.displayName || user.email;
            authModal.modal('hide');
        } else {
            loginBtn.style.display = 'block';
            signupBtn.style.display = 'block';
            userProfileSection.style.display = 'none';
        }
    });

    // Login form handler
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        auth.signInWithEmailAndPassword(email, password)
            .then(() => {
                authError.textContent = '';
            })
            .catch((error) => {
                authError.textContent = error.message;
            });
    });

    // Signup form handler
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        const displayName = document.getElementById('signupName').value;

        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                return userCredential.user.updateProfile({
                    displayName: displayName
                });
            })
            .then(() => {
                authError.textContent = '';
            })
            .catch((error) => {
                authError.textContent = error.message;
            });
    });

    // Logout handler
    logoutBtn.addEventListener('click', () => {
        auth.signOut();
    });

    // Google Auth handler
    const googleAuthBtn = document.getElementById('googleAuthBtn');
    googleAuthBtn.addEventListener('click', () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
            .catch((error) => {
                authError.textContent = error.message;
            });
    });
});

// Existing about section code
$("#about").on("mouseover", function () {
    introAboutLogoTransition();
});

// Existing theme toggle code
$("input").on("change", function () {
    $("body").toggleClass("blue");
});

// Light/Dark toggle functionality
const checkbox = document.getElementById("checkbox");

function introAboutLogoTransition() {
    $("#about-quad").css("top", "70%");
    $("#about-quad").css("opacity", "1");
}

function checkDarkMode() {
    if (localStorage.getItem("tourism_website_darkmode") === "true") {
        document.body.classList.add("dark");
        checkbox.checked = true;
    }
}

checkDarkMode();

checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("tourism_website_darkmode", document.body.classList.contains("dark"));
});

// Scroll button functionality
let mybutton = document.getElementById("upbtn");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    mybutton.style.display = document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? "block" : "none";
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Navbar scroll update
function updateNav() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links li a");

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const threshold = window.screen.width <= 425 ? 1300 : 
                         window.screen.width <= 768 ? 1250 : 1000;

        if (rect.top <= threshold) {
            navLinks.forEach(navLink => navLink.classList.remove("active"));
            navLinks[index].classList.add("active");
        }
    });
}

window.addEventListener("scroll", updateNav);
