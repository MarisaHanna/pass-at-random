


// Write password to the #password input
const generateBtn = document.querySelector("#generate")
// Add event listener to generate button



function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    
    
    passwordText.value = password;
    
};

generateBtn.addEventListener("click", writePassword)

   
function generatePassword() {

        enter =  parseInt (prompt ('Please enter the number of charachters you would like in your new password. You must choose a number between 8 and 128.'));

        if (isNaN(enter) === true) {
            alert('Please choose a number of charachters greater than 8.');
            return;
        }

        if (enter < 8 || enter > 128) {
            alert('Please choose a number of charachters between 8 and 128.');
            return;

         };

         var upper = confirm ('Would you like to use upper case letters?');

         var lower = confirm ('Would you like lower case letters?');

         var special = confirm ('Would you like to use special charachters?');

         var number = confirm ('Would you like to use numbers?')



          
        questions = [upper, lower, special, number]  
           
        const values = 'ABCDEFGHIJKLMNOPQRSTUVWXYZbcdefghijklmnopqrstuvwxyz~!@#$%^&*()-+/0123456789';


        var totalLength = '';
            

        for (var i = 0; i < enter; ++i) {
            totalLength = totalLength + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
        }

                 return totalLength;
    };
            

                   
            
    
        
           
        
       