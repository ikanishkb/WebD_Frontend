var firstname;
firstname = prompt("Enter first name");

var lastname;
lastname = prompt("Enter last name");

var age;
age = prompt("Enter age");

console.log(`Your full name is ${firstname} ${lastname}`);
console.log("Your age is " + age +" years old");  

alert("Your age is roughly: " + age*365 + "days." );

var number = 5;
var guessNumber;
guessNumber = prompt("Guess a number between 1 & 10");
if(Number(guessNumber) == number){
    alert("You guessed it correctly!");
}
else if(Number(guessNumber)>number){
    alert("Too high. Take another guess");
}
else{
    alert("Too low. Take another guess");
}