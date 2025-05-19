n = 35231;

function digitize(n) {

    let funcNum = n => Number(n);
    return arr = Array.from(String(n),funcNum).reverse();
  }

  console.log(digitize(n));



  // OU

  function digitize(n) {
    return String(n).split('').map(Number).reverse()
  }

  //OU

  function digitize(n) {
    return Array.from(String(n), Number).reverse();
  }

  