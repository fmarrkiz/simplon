/*
put the string all in lower case
convert  string to a new string with only ) and (
in the new string : 
each unique character === "(" 
characters that appear more than once === ")" every time

if 
ex : 
(
*/

let word = "Redece";
function duplicateEncode(word) {
   let a =  word.toLowerCase().split('');
   let CountOf = 0;
let frequency = [];
let b = [];
   for (let i = 0 ; i < a.length; i++) {
    for (let j = 0; j < a.length; i++) {
        if ( a[i] === a[j]) {
            return CountOf += 1;
        } ; 
    } ;


   } console.log(frequency.push(CountOf))



}

console.log(duplicateEncode(word));