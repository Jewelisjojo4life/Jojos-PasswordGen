// Assignment code here
const Symbols = "!@#$%^&*()+[]{}|/";
const lowerCase = "abcdefghjklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHJKLMNOPQRSTUVWXYZ";
const numbers = "1234567890";
const generateButton = document.getElementById("generate");

function generatePassword() {
  let finalPasswordArray = [];
  let results = "";
  let passwordLength = prompt("Enter a minimum of 8 charaters up to 128");

  //converting password length to number
  passwordLength = parseInt(passwordLength);

  if (passwordLength < 8 || passwordLength > 128 || !passwordLength) {
    alert("You have to type a number between 8 and 128 chars");
    return null; // this will not let the user procees, will stop the rest of the app from running
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
    return null;
  }

  // for loop to generate the password
  for (let i = 0; i < passwordLength; ++i) {
    let random = Math.floor(
      Math.random() * Math.floor(finalPasswordArray.length)
    );
    results += finalPasswordArray[random];
  }
  return results;
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
