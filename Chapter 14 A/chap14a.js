 var animals = ["Lion", "Flamingo", "Polar Bear", "Cat", "Wolves"]

 for (var i = 0; i < animals.length; i++) {
     console.log("Awesome " + animals[i]);
 }


 var randomString = "";
 var alphabet = "qazxswedcvfrtgbnhyujmkilop";
 while (randomString.length < 10) {
     console.log(randomString += alphabet.charAt(Math.floor(Math.random() * alphabet.length)));
 }

 var input = "javascript is awesome";
 var output = "";

 for (var i = 0; i < input.length; i++) {
     if (input[i] === "a") {
         output += "4";
     } else if (input[i] === "e") {
         output += "3";
     } else if (input[i] === "i") {
         output += "1";
     } else if (input[i] === "o") {
         output += "0";
     } else {
         output += input[i]
     }
 }