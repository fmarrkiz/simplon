/* century >=1 && <= 100;
1 et 100 = 1
101 et 200 = 2
201 et 300 = 3
301 et 400 = 4
*/

let year = 1713;

function century(year) {
let rest = year % 100 ;
  if((rest >= 1 && rest < 50)) {
    return  Math.round(year / 100) +1 ;
  } else {
   return Math.round(year / 100);
  }
  }

  console.log(century(year));


  // Best Practice (à comprendre)

  const century1 = year => Math.ceil(year/100);
 


  /////////// Exercice 2

  function whatCentury(year)
{
   let NumYear = Number(year);
let century = (Math.ceil(NumYear /100)).toString();

if ((century.endsWith('11')) 
    || (century.endsWith('12')) 
    || (century.endsWith('13') ) 
    ||(century.endsWith('0'))
    || (century.endsWith('4'))
    ||(century.endsWith('5'))
    || (century.endsWith('6'))
    || (century.endsWith('7'))
    || (century.endsWith('8'))
    ||(century.endsWith('9'))) {

     return century.concat('th');

}else if (century.endsWith('1')) {
   return century.concat('st'); 
} else if (century.endsWith('2')) {
    return century.concat('nd');
} else if (century.endsWith('3')) {
    return century.concat('rd');
}
   
}


console.log (whatCentury(year));

/// Version 3600 fois plus simple

function whatCentury(year) {
    let century = Math.ceil(year / 100);
    if (century > 10 && century < 20) return century + "th";
    switch (century % 10) {
      case 1: return century + "st";
      case 2: return century + "nd";
      case 3: return century + "rd";
      default: return century + "th";
    }
  }