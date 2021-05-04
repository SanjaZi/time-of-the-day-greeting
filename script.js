let getBody = document.body;
let message = document.createElement("h1");
let date = new Date();
let currentHour = date.getHours();
let createTxtMsg;

if (currentHour >=4 && currentHour < 10) {
	createTxtMsg = "Good Morning!";
} else if (currentHour >= 10 && currentHour < 12) {
	createTxtMsg = "Good Day!";
} else if (currentHour >= 12 && currentHour < 18) {
	createTxtMsg = "Good Afternoon!";
} else if (currentHour >= 18 && currentHour < 22) {
	createTxtMsg = "Good Evening!";
} else if ((currentHour >= 22 && currentHour < 24) || (currentHour >= 0 && currentHour < 4)) {
	createTxtMsg = "Good Night!";
} else {createTxtMsg = "What type of creature are you?";}


let greeting = document.createTextNode(createTxtMsg); //Here we create a variable that holds the value depending on the time of the day 
message.appendChild(greeting); //Here we appended that variable to a parent - H1
getBody.appendChild(message); //And here we appended the h1 to body

getBody.style.cssText = "height: 96vh; display: flex; justify-content: center; align-items: center;" //This code is for styling the body so our h1 is in the center of the screen

function myFunction(x) {
  if (x.matches) { // If media query matches
    message.style.cssText = "animation: jackInTheBox; animation-duration: 4s; text-align: center; font-size: 3em; color: #111; font-family: Helvetica";
  } else {
    message.style.cssText = "animation: jackInTheBox; animation-duration: 4s; text-align: center; font-size: 6em; color: #111; font-family: Helvetica";
  }
} //We needed this function so our greeting is mobile responsive, the only thing changed is the font size

var x = window.matchMedia("(max-width: 500px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes