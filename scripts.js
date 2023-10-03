/*********************** Exercise 1 ********************* */

// Navigate to your Github profile page
// Identify as many different pieces of functionality that likely use functions.
// List the functions here:
// ⭐️ button clicks, page alerts, pop-ups, promotional banners, search bar, home page button, log in and out features




















/*********************** Exercise 2 ********************* */
// Fix each function's syntax so that it will correctly run the code in the code block.

// Suggested workflow:

// 1. Uncomment a function—that is, remove the `//` from the start of each of its lines. (Command-/ will toggle commenting on and off in VS Code!)
// 2. Fix the function so that it no longer gives you an error.
// 3. Repeat.



  let sayHello  = function() {
  console.log("Hello, You have been greeted!");
  alert("Hello");
}

sayHello();






let sayBye  = function() {
  console.log("It's always nice seeing you!");
  alert("It was good seeing you !");
}

sayBye();







let saySeeYouSoon  = function() {
  console.log("See you later my friend .");
  alert("¡Hasta Luego, Amigo!");
}

saySeeYouSoon();













/*********************** Exercise 3 ********************* */
// Call the following function so that a random number is alerted in the browser.
// If you don't want to keep getting alerts in this assignment,
// then once you've confirmed it works, feel free to comment the function call.

function alertRandom() {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  console.log("Your random number is " + randomNumber + "." );
  alert("Your random number is " + randomNumber + ".");
}







alertRandom();



















/*********************** Exercise 4 ********************* */

// Declare a function that prompts the user's for their favorite drink and logs the following phrase to the console. "Your favorite drink is ________."
let favDrink = function() {
  let userDrink = prompt("What is your favorite drink?");
  console.log("Your favorite drink is a " + userDrink + ".");
  alert ("Oooo delectable decision!, We love " + userDrink + "'s too!");
}


// Execute the function so that you see "Your favorite drink is [whatever you typed in the prompt]." in the console.
favDrink();
// Feel free to comment out the execution line after you're done, so you don't keep getting prompted.



















/*********************** Exercise 5 ********************* */

let user = {
  id: 32,
  fullName: "Trinity Armstead",
  languages: ["JavaScript", "Python", "Ruby"],
};

// Declare a function that creates an alert that says, "Welcome, Trinity! You know JavaScript, Python, and Ruby."
// Make sure not to use the literal string "Trinity" or the words in the `languages` array.
function userWelcome() {
  console.log("Welcome " + user.fullName.slice(0, 7) + ", " + " You know " + user.languages[0] + ", " + user.languages[1] + ", and " + user.languages[2] + ".")
  alert("Welcome " + user.fullName.slice(0, 7) + ", " + " You know " + user.languages[0] + ", " + user.languages[1] + ", and " + user.languages[2] + ".")};
 

// Execute the function.
userWelcome();


// Below, NOT in a function, change the object's properties in these ways:
// 1. The name should be "Krystal Thomas".
// 2. The second language should be `Racket`.

user.fullName = "Krystal Thomas";
user.languages[1] = "Racket";


// Execute the function again, and you should see a different message printed than the first time, with a different name and a different second language listed.
userWelcome();


//Feel free to comment out the function calls once you've confirmed they work.

























/*********************** Exercise 6 ********************* */

// Declare a function that prompts the user for their birth year and prints to the console the sentence, "Your approximate age is [the value in the age variable]."

// Hint: Don't forget that values come in from a user as strings! Subtracting a string from `todaysYear` won't quite work.
// Is there a way to convert it to a number first?

// You can use the following code in your function to calculate the user's approximate age:

let birthYear;
let todaysDate = new Date();
let todaysYear = todaysDate.getFullYear();
let age = todaysYear - Number(birthYear);


// Execute the function. Feel free to comment it out once you've confirmed it works.
function userAgeMessage() { 
  birthYear = prompt ("Please enter your year of birth:");
  age = todaysYear - parseFloat(birthYear);
  console.log("Your approximate age is " + age + "." )
  alert ("Your approximate age is " + age + "." );
}


userAgeMessage();








































/*********************** Exercise 7 ********************* */

// Declare a function that prompts the user for the following things: age, favoriteColor, favoriteYour.
// Inside the function, create an object to store the user's responses.
// Inside the function, log the following sentence to the console with the user's responses: "Your age is ____, your favorite color is ______, and your favorite movie is ______".



// Execute the function








/*********************** Exercise 8 ********************* */

// Declare a function that prompts the user for two numbers. Add the two numbers together and log the result to the console.





// Execute the function three times.
