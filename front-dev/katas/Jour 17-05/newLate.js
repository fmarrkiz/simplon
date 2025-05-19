let numbers = [5, 8, 12, 19, 22];

function sumTwoSmallestNumbers(numbers) {  
    let min1 = Math.min(...numbers);
    let numbersMinus = numbers.filter((numbers) => (numbers !== min1))
    if (numbersMinus.length < numbers.length - 1) {
    
        numbersMinus.push(min1);
      }
   let min2 = Math.min(...numbersMinus);
     return min1 + min2 ;
    }


    console.log(sumTwoSmallestNumbers(numbers));