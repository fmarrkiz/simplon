
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function createPhoneNumber(numbers){
    if (numbers.length === 10 && numbers[0] < 10&& numbers[1] < 10 && numbers[2] < 10 && numbers[3] < 10 && numbers[4] < 10 && numbers[5] < 10 && numbers[6] < 10 && numbers[7] < 10 && numbers[8] < 10 && numbers[9] < 10) {
        let indicative = numbers.slice(0,3).join('');
        let first = numbers.slice(3,6).join('');
        let second = numbers.slice(6).join('');
        return `(${indicative}) ${first}-${second}`;
    } 
  
}

console.log(createPhoneNumber(numbers));


// solutions

function createPhoneNumber(numbers){
    numbers = numbers.join('');
    return '(' + numbers.substring(0, 3) + ') ' 
        + numbers.substring(3, 6) 
        + '-' 
        + numbers.substring(6);
  }


  //ou

  function createPhoneNumber(numbers){
    var format = "(xxx) xxx-xxxx";
    
    for(var i = 0; i < numbers.length; i++)
    {
      format = format.replace('x', numbers[i]);
    }
    
    return format;
  }