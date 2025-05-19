'use strict'

// exercices

let age;

if ( age >= 14 && age <= 90 ){
    alert(bravo);
}

//vérifier à l'extérieur de la plage

if( age > 90 || age < 14 ){
    alert( dommage);
}

if( !(age >= 14 && age <= 90) ){
    alert( dommage);
}

// check the login



let userType = prompt("Who's there?", '')

if (userType == 'Admin') {
let logIn = prompt('Password?', '...');

  if (logIn == '' || logIn == null) {
    alert('Canceled');
  }else if(logIn == 'TheMaster'){
    alert('Welcome!');
  }else {
    alert( 'Wrong password');
} 
} else if (userType == null || userType == '') 
    {alert ('Canceled');
}
else {alert("I don't know you");
}





