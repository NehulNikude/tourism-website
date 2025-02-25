// Initialize Firebase immediately when the script loads
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

// Add event listeners after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const authModal = new bootstrap.Modal(document.getElementById('authModal'));
    
    loginBtn.addEventListener('click', () => {
        authModal.show();
        document.querySelector('#login-tab').click();
    });

    signupBtn.addEventListener('click', () => {
        authModal.show();
        document.querySelector('#signup-tab').click();
    });
});
