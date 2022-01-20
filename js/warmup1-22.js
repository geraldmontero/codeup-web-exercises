//write a function that accepts a string and checks whether each  character in the string is upperCase or lowerCase and returns "letter  [insert letter] is uppercase/lowercase", accordingly.  Bonus: return "is not a character" if it's not a letter
//
// input example:
var string = "bJIENsdfRAIRVIrsRFAijgR3ar";


var i=0;
var character='';
while (i <= string.length - 1){
    character = string.charAt(i);
    if (!isNaN(character * 1)){
      console.log('character is numeric');
    }else{
        if (character == character.toUpperCase()) {
            console.log(' letter '+ character + ' is uppercase' );
        }
        if (character == character.toLowerCase()){
            console.log(' letter '+ character + ' is lowercase');
        }
    }
    i++;
}