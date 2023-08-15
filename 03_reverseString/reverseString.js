const reverseString = function(string) {
   let lastLetter = "";
   let restWord = "";
   let StringLength = string.length;
   let reversed = "";

   for (let i = 1; i <= StringLength; i++) {
    lastLetter = string.substr(-1);
    restWord = string.slice(0,-1);
    string = restWord;
    reversed += lastLetter;
   }

   return reversed;
};

// Do not edit below this line
module.exports = reverseString;
