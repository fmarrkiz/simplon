/*
0.5 l / hours de water

*/

time = 3;
function litres(time) {
    let water = time * 5 / 10; 
 return Math.floor(water);
   
  }

  console.log(litres(time))


  // Best practice

  function litres(time) {
    return Math.floor(time * 0.5); // PAS DE VIRGULE DANS LES NOMBRES EN ANGLAIS
  }
  