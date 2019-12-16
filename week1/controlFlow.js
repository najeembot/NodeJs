var isEven = function(number) {
  if(number % 2 === 0) {
    return true;
  }
  else {
    return false;  
  }
};
// If/else if/else

var isEven = function(number) {
  if(number % 2 === 0) {
    return true;
  }
  else if(isNaN(number) === true) {
    return "That is not a number, you must input a number!";  
  }
  else {
    return false;  
  }
};
// For or while

for(var counter = 1;counter <= 5;counter++) {
    console.log("This is a for loop");    
}
// the switch statement

var dinner = prompt("What do you want for dinner?","Type your dinner choice here");

switch(dinner){
  case 'sandwich':
    console.log("Sure thing! One sandwich, coming up.");
    break;
  case 'soup':
    console.log("Got it! Tomato's my favorite.");
    break;
  case 'salad':
    console.log("Sounds good! How about a caesar salad?");
    break;
  case 'pie':
    console.log("Pie's not a meal!");
    break;
  default:
    console.log("Huh! I'm not sure what " + dinner + " is. How does a sandwich sound?");
}
// Adding to an existing switch

var color = prompt("What's your favorite primary color?","Type your favorite color here");

switch(color) {
  case 'red':
    console.log("Red's a good color!");
    break;
  case 'blue':
    console.log("That's my favorite color, too!");
    break;
  case 'yellow':
    console.log("Yellow is okay...") 
    break;
  default:
    console.log("I don't think that's a primary color!");
}
// Practicing with switch

var chocolate = prompt("What's your favorite chocolate?","Type your favorite chocolate here.");

switch(chocolate) {
  case 'licorice':
    console.log("Gross!");
    break;
  case 'gum':
    console.log("I like gum!");
    break;
  case 'beets':
    console.log("...is that even a chocolate?");
    break;
  default:
    console.log("I don't recognize that chocolate D:");
    break;
}
// Practice more with switch

scvar answer = prompt("How are you feeling","Insert Feels Here");

switch(answer) {
  case 'Happy':
    console.log("Yay, I'm happy too!");
    break;
  case 'Sad':
    console.log("Aww, too bad!");
    break;
  case 'Meh':
    console.log("Have a smile to brighten up your day!");
    break;
  default:
    console.log("You're a robot...");
    break;
}
// All on your own

var answer = prompt("What color is #TheDress?");
switch(answer) {
    case 'Blue and Black':
        console.log("Yeah!");
        break;
    case 'Gold and White':
        console.log("No!");
        break;
    case 'It does not Matter':
        console.log("Whatever");
        break;
    default:
        console.log("That's not a valid answer.");
        break;
}
// Mid-lesson breather

var answer = prompt("What color is #TheDress?");
switch(answer) {
    case 'Blue and Black':
        console.log("Yeah!");
        break;
    case 'Gold and White':
        console.log("No!");
        break;
    case 'It does not Matter':
        console.log("Whatever");
        break;
    default:
        console.log("That's not a valid answer.");
        break;
}
// Overview

// Complete lines 3 and 4!

var iLoveJavaScript = true;
var iLoveLearning = true;

if(iLoveJavaScript && iLoveLearning) {
  // if iLoveJavaScript AND iLoveLearning:
  console.log("Awesome! Let's keep learning!");
} else if(!(iLoveJavaScript || iLoveLearning)) {
  // if NOT iLoveJavaScript OR iLoveLearning:
  console.log("Let's see if we can change your mind.");
} else {
  console.log("You only like one but not the other? We'll work on it.");
}
// And

var hungry = true;
var foodHere= true;
var eat = function() {
  if(hungry && foodHere){
      return true;
  }
  else{
      return false;  
  }
};
// Or

var tired = true;
var bored = false;
var nap = function() {
  if(tired || bored){
      return true;
  }
  else{
      return false;
  }
}
// Not

var programming = false;
var happy = function() {
  if(programming != false){
    return false;  
  }
  else{
    return true;  
  }
}