'use strict'

let questionTestJS = prompt('Quel est le nom "officiel" de JavaScript', '');
if (questionTestJS == 'ECMAScript') {
   alert( 'Bonne réponse!' );
} else {
    alert( 'Ne sait pas? ECMAScript!' );
}

// Afficher le signe

let givenNumber = prompt('Give me a number and I will give you something', '');

if( givenNumber > 0) {
    alert(1);
} else if(givenNumber < 0) {
    alert(-1);
} else if (givenNumber == 0) { // or } else {}
    alert(0);
}

// Réécrire 'if' en '?'

let a = undefined; 
let b = undefined;

let result = a + b < 4 ? 'Below' : 'Over';


//Réécrire 'if..else' en '?'
//rappel let result = condition ? value1 : value2


let message = (login == 'Employee') ? 'Hello' :
(login == 'Director') ? 'Greetings' :
(login == '') ? 'No login' :
 '';

