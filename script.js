// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays
var specialChar = ["!", "'", "#", "$", "%", "&", "(", ")", "*", "+", "-", "=", "@", "~", "^", "<"]
var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var letterLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var letterUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write variables for each selection (num. upper, lower, special characters)
// Prompt user to confirm password length (10-50) //
// Prompt user to confirm if they want uppercase //
// Prompt user to confirm if they want lowercase //
// Prompt user to confirm if they want numbers //
// Prompt user to confirm if they want special characters //
// Confirm user input //
// Return randomly generated password//