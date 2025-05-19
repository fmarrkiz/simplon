// Debugging Syntax (1)

function getMax1() {
    var max = {
     name: 'Max Headroom',
    }
    return max;
  }
  
  function getMax2() {
    return {
      name: 'Max Headroom',
    }
  }

// OU

function getMax1()
{
  var max = {name: 'Max Headroom'}
  return max;
}

function getMax2()
{
// Have your return object on same line
return {name: 'Max Headroom'};
}


// Debugging Suntax (2)

function yourFutureCareer() {
 let career = Math.random();
  
	if (career <= 0.32) {
    return 'FrontEnd Developer';
  } else if (career <= 0.65) {
    return 'BackEnd Developer';
  } else {
    return 'Full-Stack Developer';
  }
}

//Ou

const yourFutureCareer = () => {
  let career = Math.random();
  return `${ career <= 0.32 ? 'FrontEnd' : (career <= 0.65 ? 'BackEnd' : 'Full-Stack') } Developer`;
}