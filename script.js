
// User Variables 

var numConfirm;
var characterConfirm;
var uppercaseConfirm;
var lowercaseConfirm;
var options;

// Password Variables - Characters, Numeric, Alphabetical, & Uppercase Alphabetical

character: ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
number: [1, 2, 3, 4, 5, 6, 7, 8, 9];
alphabet: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
uAlphabet:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S", "T","U","V","W","X","Y","Z"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
//var.method(parameters)

generateBtn.addEventListener("click", function() {
ps = writePassword();
document.getElementbyId("password").placeholder = ps;
});

// Write password to the #password input

function writePassword() {
  var length = prompt("How long do you want your password to be ? Choose between 8 to 128. ");
// if this password is less than 8 characters, restart function
  if (length < 8 || length > 128){
    alert("Password must be between 8 to 128 characters.")
    writePassword();
  } 
  // if password is between 8 to 128 characters, proceed
  else{
    num = confirm("Do want numbers in password?");
    character = confirm("Do you want characters in password?");
    alphabet = confirm("Do you want lowercase letters in password ?");
    uAlphabet = confirm("Do you want Uppercase letters in password ?");
  };

  // if no options are picked for the password
  if(!numConfirm && !characterConfirm && !uppercaseConfirm && !lowercaseConfirm) {
    options = alert("You must meet the requirements for your password.");
  }
  // if 4 options picked as password
  else if (numConfirm && characterConfirm && uppercaseConfirm && lowercaseConfirm) {
    options = character.concat(num, alphabet,uAlphabet);
  }
  // if 3 options picked as password 
  else if (numConfirm && characterConfirm && uppercaseConfirm) {
    options = character.concat(num,uAlphabet);
  }
  else if (numConfirm && characterConfirm && lowercaseConfirm) {
    options = character.concat(num, alphabet,);
  }
  else if (characterConfirm && uppercaseConfirm && lowercaseConfirm) {
    options = character.concat(alphabet,uAlphabet);
  }
  else if (numConfirm && uppercaseConfirm && lowercaseConfirm) {
    options = num.concat(alphabet,uAlphabet);
  }
// if 2 options picked as password 
  else if (numConfirm && characterConfirm) {
  options = character.concat(num);
  }
  else if ( characterConfirm && uppercaseConfirm) {
    options = character.concat(uAlphabet);
  }
  else if (characterConfirm && lowercaseConfirm) {
    options = character.concat(alphabet);
  }
  else if (numConfirm && uppercaseConfirm) {
    options = num.concat(uAlphabet);
  }
  else if (numConfirm &&  lowercaseConfirm) {
    options = num.concat(alphabet);
  }
  else if (uppercaseConfirm && lowercaseConfirm) {
    options = uAlphabet.concat(alphabet);
  }
// 1 option picked for password
  else if (numConfirm){
  options =num;
  }
  else if (characterConfirm){
    options =characters;
    }
  else if (lowercaseConfirm){
  options =alphabet;
  }
  else if (uppercaseConfirm){
    options =uAlphabet;
    };

    var password=[];

  for( var i =0; i < length; i++){
    var passwordOptions = options[Math.floor(Math.random() * options.length)];
    password.push(passwordOptions);
  
  }

    var ps = password.join("");
    UserInput(ps);
    return ps;

};

  var password = writePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;






