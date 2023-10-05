console.log("connected")

function generateRandomPassword(length) {
    // Define character sets for each type of character
    var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    var numberChars = '0123456789';
    var specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';
  
    // Combine all character sets into one string
    var allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;
  
    let password = '';
  
    if (length < 4) {
      return 'Password length should be at least 4 characters';
    }
  
    for (let i = 0; i < length; i++) {
      // Generate a random index to select a character from allChars
      var randomIndex = Math.floor(Math.random() * allChars.length);
  
      // Append the randomly selected character to the password
      password += allChars.charAt(randomIndex);
    }
  
    return password;
  }
  
  var passwordLength = parseInt(prompt('Enter the password length:'));
  var randomPassword = generateRandomPassword(passwordLength);
  
  console.log(`Random Password: ${randomPassword}`);
  
















