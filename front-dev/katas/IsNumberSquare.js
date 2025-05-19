
n = 26;

var isSquare = function(n){
    
   let nRoot = Math.sqrt(n) ;
   if (Number.isInteger(nRoot)){
    return true;
   } else { return false;
 }
 }


console.log(isSquare(n));

// Best Practice, use modulo

function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
  }