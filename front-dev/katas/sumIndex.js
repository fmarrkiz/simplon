// Attention ma solution ne fonctionne pas dans tous les cas! Problème de random tests? 

numbers =  [1, 2, 3]; 
// )
target =  4;


function twoSum(numbers, target) {
let c = [];
   for (let i = 0 ; i < numbers.length ; i++) {
    for (let j = 0 ; j < numbers.length; j++){
if ( numbers[i] + numbers[i+j] === target) {
let n0 = numbers.indexOf(numbers[i]);
let n1 = numbers.lastIndexOf(numbers[i+j]);
c.push(n0, n1); 
return c;
} 
}


 } 
}

// Solution voulue :

function twoSum(numbers, target) {
    for (var i = 0; i < numbers.length-1; i++) {
        for (var j = i+1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) return [i, j];
        }
    }
}