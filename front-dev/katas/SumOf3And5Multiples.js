/*
all natural numbers (integers?) < a number passed in 
that are multiples of 3 or 5 ---> (n % 5 === 0 || n % 3 === 0)



if (n % 5 === 0 && n % 3 === 0) ---> show it once in the addition
if ( n < 0) ---> return 0
*/

 number = 5;
function solution(number){
    let a = [];
    if (number <0) { 
        return 0}

    else {  
    
    for (let i = 0; i < number; i++) {
if (i % 5 === 0 || i % 3 === 0) {
    a.push(i);
}
} let aSet = new Set(a); 
let newA = Array.from(aSet);
return newA.reduce((a, b) => a + b, 0);
}
}
console.log(solution(number));

// Solution best practice

function solution(number){
    var sum = 0;
    
    for(var i = 1;i< number; i++){
      if(i % 3 == 0 || i % 5 == 0){
        sum += i
      }
    }
    return sum;
  }