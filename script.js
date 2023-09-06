// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function to generate a secure password
function generatePassword() {
  // Define character sets for password criteria
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  // Prompt for password length
  var passwordLength = prompt("Enter the length of the password (between 8 and 128 characters):");
  passwordLength = parseInt(passwordLength);

  // Validate password length
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    return null; // Return null to indicate an invalid password length
  }

  // Prompt for character types to include
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  // Validate that at least one character type is selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    return null; // Return null to indicate that no character type is selected
  }

  // Build a character set based on selected criteria
  var characterSet = "";
  if (includeLowercase) characterSet += lowercaseChars;
  if (includeUppercase) characterSet += uppercaseChars;
  if (includeNumeric) characterSet += numericChars;
  if (includeSpecial) characterSet += specialChars;

  // Generate the password
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * characterSet.length);
    password += characterSet.charAt(randomIndex);
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password !== null) {
    passwordText.value = password;
  } else {
    alert("Invalid input. Please try again.");
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
