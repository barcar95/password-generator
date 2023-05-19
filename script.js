// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCaseChar = ("abcdefghijklmnopqrstuvwxyz").split("");
var upperCaseChar = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split("");
var numChar = ("0123456789").split("");
var specialChar = ("!#$%&'()*+,-./:;<=>?@[\]^_`{|}~!#$%&'()*+,-./:;<=>?@[\]^_`{|}~").split("");




// This function generates password via prompts and conditionals.
function generatePassword() {
  var charactersIncluded = [];
  var pushChar = [];
  var newPassword = "";

  // Variable holds value of initial prompt asking for amount of characters
  var charAmount = window.prompt("How many characters would you like your password to have?");

  // Conditional statement prompts user with additional password critertias depending on whether the value of the variable above fits the character length criteria
  if ((charAmount >= 8) && (charAmount <= 128)) {
    
    // if prompt condition is true, then the lowercase array will be added to empty array and a random character from the lowercase array will be pushed into pushcar array to ensure at least one of the lowercase characters is included in generated password
  if (window.confirm("Click 'OK' if you want to include lowercase characters.")){
    charactersIncluded = charactersIncluded.concat(lowerCaseChar);
    pushChar.push(lowerCaseChar[Math.floor(Math.random() * lowerCaseChar.length)]);
  }

    // same as condition above, but will push a uppercase char to ensure it is included in generated password
  if (window.confirm("Click 'OK' if you want to include uppercase characters.")){
    charactersIncluded = charactersIncluded.concat(upperCaseChar);
    pushChar.push(upperCaseChar[Math.floor(Math.random() * upperCaseChar.length)]);  }

    // same as condition above, but will push a numerical char to ensure it is included in generated password
  if (window.confirm("Click 'OK' if you want to include numbers.")){
    charactersIncluded = charactersIncluded.concat(numChar);
    pushChar.push(numChar[Math.floor(Math.random() * numChar.length)]);  }

    // same as condition above, but will push a special char to ensure it is included in generated password
  if (window.confirm("Click 'OK' if you want to include special characters.")){
    charactersIncluded = charactersIncluded.concat(specialChar);
    pushChar.push(specialChar[Math.floor(Math.random() * specialChar.length)]);  }

    // if character length condition is not met, then the alert message below will be displayed
  } else {
    window.alert("Character amount has to be 8 to 128 characters long");
  }

  // for loop generates random character depending on character amount inputted, pushes random char into array, and turns array to string without commas by use of join()
  var adjustedCharAmnt = charAmount - pushChar.length;
  for (var i = 0; i < adjustedCharAmnt; i++) {
      var index = Math.floor(Math.random() * charactersIncluded.length);
      pushChar.push(charactersIncluded[index]);
      
  } 
  newPassword = pushChar.join("");
  return newPassword;
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
