// Assignment code here
const Symbols = "!@#$%^&*()+[]{}|/";
const lowerCase = "abcdefghjklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHJKLMNOPQRSTUVWXYZ";
const numbers = "1234567890";
const generateButton = document.getElementById("generateBtn");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  let finalPasswordArray = [];
  let passwordLength = prompt("Enter a minimum of 8 charaters up to 128");

  //converting password length to number
  passwordLength = parseInt(passwordLength);

  if (passwordLength < 8 || passwordLength > 128 || !passwordLength) {
    alert("You have to type a number between 8 and 128 chars");
    return; // this will not let the user procees, will stop the rest of the app from running
  }

  // user answers
  let wantsLowercase = confirm("Do you want lower cases");
  let wantsUppercase = confirm("Do you want uppercase");
  let wantsSymbols = confirm("Do you want symbols");
  let wantsNumbers = confirm("Do you want number");

  if (wantsLowercase) finalPasswordArray.push(...lowerCase); // push the lowercase into final array
  if (wantsUppercase) finalPasswordArray.push(...upperCase);
  if (wantsSymbols) finalPasswordArray.push(...Symbols);
  if (wantsNumbers) finalPasswordArray.push(...numbers);

  if (!wantsLowercase && !wantsUppercase && !wantsSymbols && !wantsNumbers) {
    alert("Please choose at least one type of characters");
    return;
  }

  // for loop to generate the password
  let i;
  for (let i = 0; i < parseInt(passwordLength); i++)
    var writePassword = Math.floor(Math.random() * 4);

  passwordLength += finalPasswordArray;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
