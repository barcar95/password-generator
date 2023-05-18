// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCaseChar = ("abcdefghijklmnopqrstuvwxyz").split("");
var upperCaseChar = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split("");
var numChar = ("0123456789").split("");
var specialChar = ("!#$%&'()*+,-./:;<=>?@[\]^_`{|}~!#$%&'()*+,-./:;<=>?@[\]^_`{|}~").split("");



function generatePassword() {






  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
