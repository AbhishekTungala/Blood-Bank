// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyC_ZGPe0B3Sk57bRqeiTW0kDVe-ulJ_ZUk",
    authDomain: "blood-bank-a1145.firebaseapp.com",
    databaseURL: "https://blood-bank-a1145-default-rtdb.firebaseio.com",
    projectId: "blood-bank-a1145",
    storageBucket: "blood-bank-a1145.appspot.com",
    messagingSenderId: "1028485030243",
    appId: "1:1028485030243:web:2d60b12065c4ebc7167356",
    measurementId: "G-09050G883D"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference Firebase Database
const contactFormDB = firebase.database().ref("contactForm");

// Listen for Form Submit
document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    // Get Form Values
    var name = getElementVal("name");
    var email = getElementVal("email");
    var number = getElementVal("number");
    var title = getElementVal("title");
    var message = getElementVal("text");

    console.log("Form Data:", name, email, number, title, message);

    // Save to Firebase
    saveMessage(name, email, number, title, message);

    // Alert & Reset Form
    alert("Form submitted successfully!");
    document.getElementById("contactForm").reset();
}

// Function to Save Messages
function saveMessage(name, email, number, title, message) {
    let newFormEntry = contactFormDB.push();
    newFormEntry.set({
        name: name,
        email: email,
        phone: number,
        title: title,
        message: message
    });
}

// Function to Get Input Values
const getElementVal = (id) => document.getElementById(id).value;
