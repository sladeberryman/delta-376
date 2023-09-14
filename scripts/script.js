$(document).ready(function() {
  
    // Function to convert a name to Pig Latin
    function convertToPigLatin(name) {
      var vowels = ["a", "e", "i", "o", "u"];
      var pigLatinName = "";
      var words = name.split(" ");
  
      // does stuff for each name the user enters
      for (var i = 0; i < words.length; i++) {
        var word = words[i];
        var firstLetter = word[0];
        var restOfWord = word.slice(1);
  
        // Check if the first letter is a vowel
        if (vowels.includes(firstLetter.toLowerCase())) {
          pigLatinName += word + "hay";
        } else {
          pigLatinName += restOfWord + firstLetter.toLowerCase() + "ay";
        }
  
        if (i !== words.length - 1) {
          pigLatinName += " ";
        }
      }
  
      return pigLatinName;
    }
  
    // Function to convert the names to Pig Latin and display the greeting
    function configName() {
      var name = $("#nameInput").val();
      var pigLatinGreeting = convertToPigLatin(name); // Calls pig latin function
  
      // display confusing greeting
      $("#result").text("ellohay " + pigLatinGreeting);
    }
  
    // when they click submit
    $("#submit-btn").click(function(e) {
      e.preventDefault();
      configName(); // Calls both functions
    });
  });