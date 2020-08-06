// Assignment Code
var generateBtn = document.querySelector("#generate");
// Characters for function, 
const specialCharacters = ["!@#$%^&()/"];
//const generateButton = document.getElementById( 'generateBtn')

// button action
 generateBtn =  document.getElementById('generate')
generateBtn.addEventListener('click', writePassword)


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// add event listener to generate button
//generateBtn.addEventListener("click", writePassword());
// Prompts quantity and type of characters 
function generatePassword() {
var passswordLength = prompt("Please enter the number of characters you want for your password. Choose a length of at least 8 characters and less the 128.");
var upperCase = confirm("Do you want uppercases in your password?");
var lowerCase = confirm("Do you want lowercases in your password?");
var numbers = confirm("Do you want numbers in your password?");
var specialCharacters = confirm("Do you want special characters in your password?");

//minimum count of characters
var minimumCount = 0;

// empty mimimum of characters
var minimumUpperCase = "";
var minimumLowerCase = "";
var minimumNumbers = "";
var minimumSpecialCharacters = "";

  // Generator functions**
  var functionArray = [
   function getUpperCase() {
    return String.fromCharCode(Math.floor (Math.random() * 26 + 65 ));
    },

     function getLowerCases() {
     return String.fromCharCode(Math.floor (Math.random() * 97 + 122));

    },

   function  getNumbers() {
   return String.fromCharCode(Math.floor (Math.random() * 48 + 57));
    },

    function getSpecialCharacters() {
     return specialCharacters[Math.floor (Math.random() * specialCharacters.length)]
    }

   //getUpperCases function() {
     //return String.fromCharCode(Math.floor ( Math.random() * 26 + 65 )) ;
   //},
   //getLowerCases: function() {
    //return String.fromCharCode(Math.floor (Math.random() * 26 + 97 )) ;
 // },
  //getNumbers: function() {
    //return String.fromCharCode(Math.floor (Math.random() *10 + 48)) ;
  //},
  //getSpecialCharacters: function() {
    //return String.fromCharCode(Math.floor (Math.random() * specialCharacters.length )) ;
  //},

 ];

  // Checks to make sure user selected ok for all and uses empty minimums from above

  if (upperCase === true) {
    minimumNumbers = functionArray.getNumbers(0);
    minimumCount++;

  }

  if (lowerCases === true) {
    minimumLowerCases = functionArray.getLowerCases(1);
    minimumCount++;

  }

  if (numbers === true) {
    minimumUpperCases = functionArray.getUpperCases(2);
    minimumCount++;

  }

  if (special === true) {
    minimumSpecialCharacters = functionArray.getSpecialCharacters(3);
    minimumCount++;

  }

  // empty string variable for the for loop below
  var randomPasswordGenerated = "";

   //loop getting random characters
  for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);

    randomPasswordGenerated += functionArry [randomNumberPicked];

  }
  // insure characters are added to password
  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;


  return randomPasswordGenerated;


}


// Add event listener to generate button
//generate.addEventListener("click", writePassword);

//function myFunction() {
 // alert ("hi")
//}