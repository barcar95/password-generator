// Assignment Code

var generateBtn = document.querySelector("#generate");


function generatePassword() {
  

// prompt user for criteria
    // length 8 to 128 char
    // lowercase, upper, numbers, special char
  var passLength = window.prompt("How many characters would you like this password to be?");



// Input validation

// generate password from criteria


// Display password on page



  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
