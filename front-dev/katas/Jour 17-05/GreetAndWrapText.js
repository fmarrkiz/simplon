let name = 'bertrand';

function greet(name){
    if (typeof name === 'string'){
    return `Hello, ${name} how are you doing today?`
    
  }
}


//Wrap my test :

const res = wrap('MyTest')

  function wrap(value) {
    
    return {
      value: value,
    }
  }

  console.log(wrap(res));

  // OU

  function wrap(value) {
    return
    {
      value:value 
    };
  }

  //OU

const wrap = value => ({value});

