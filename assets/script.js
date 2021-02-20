

// Write password to the #password input
const generateBtn = document.querySelector("#generate")
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
const specialCharachters = '!@#$^&*_~%-()-+';


  function writePassword() {
   var password = generatePassword();
   var passwordText = document.querySelector("#password");


  passwordText.value = password;

};


   function generatePassword() {

   enter = prompt('Please enter the amount of characherts you would like. The number must be between 8 and 128');     
     
   var numbers = confirm ('Will this contain numbers?');

   var upperCase = confirm ('Will this contain upper case letters?');

   var lowerCase = confirm ('Will this contain lower case letters?');

   var special = confirm ('Will this contain special charachters');
  
    var charachters = (special, numbers, upperCase, lowerCase);
    
    var minimumCount = 0;
    var totalLenght = '';
    // var minNumber = '';
    // var minLowerCase = '';
    // var minUpperCase = '';
    // var minSpecialCharachter = '';

    var functionArrays = {
        charachters: function () {
          return String.fromCharCode(Math.floor(Math.random() * specialCharachters.length * 26 + 97));
        }
      };
        
      // //   lowerCase: function () {
      // //     return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
      // //   },

      // //   upperCase: function () {
      // //     return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
      // //   },

      // //   specialCharachter: function () {
      // //     return specialCharachters [Math.floor(Math.random() * specialCharachters.length)]
          
      // //   }
      // // }; 
      
      //  if (charachters === true) {
      //   minNumber = functionArrays.numbers();
      //   minimumCount++;

      // } 
      
      // if (lowerCase === true) {
      //    minLowerCase = functionArrays.lowerCase();
      //    minimumCount++;

      // }

      // if (upperCase === true) {
      //     minUpperCase = functionArrays.upperCase();
      //   minimumCount++;

      // }

      // if (special === true) {
      //     minSpecialCharachter = functionArrays.specialCharachter();
      //     minimumCount++;

        if (charachters === true) {
          totalLenght = functionArrays.charachters();
          minimumCount++;

        }

    

       

       for ( var i = 0; i < parseInt(enter) - minimumCount; i++) {

            var randomNumber = Math.floor(Math.random() * 10);
 

       }
           totalLenght += randomNumber ;
        //  randomPassword += minNumber 
        //  randomPassword += minSpecialCharachter;
        //  randomPassword += minUpperCase;
        //  randomPassword += minLowerCase;
        
       return totalLenght;
};

      
      
    
        
