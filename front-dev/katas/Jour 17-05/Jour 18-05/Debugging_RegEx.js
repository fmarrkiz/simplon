
str = "Hello there";
// this isn't quite right - it's not catching all the cases
const cockney = /h/ig;
const replacement = "`";

function cocknify(str){
 let words = str.split(" ");
   
 for (let i = 0; i < words.length; i++ )
if (words[i].startsWith("H" || "h")){
   (words[i].replace(cockney, replacement));   
} else {
    words[i];
} return words.join(" ");


}

console.log(cocknify(str));

// OU juste changer le RegEX
const newWockney = /\bh/ig; // \b pour le début d'un mot


let string = "camelCasing";
 
function solution(string){
  let camel = /[A-Z]/g;
  
 let char = string.split("");
   
 for (let i = 0; i < char.length; i++ )
if (char[i] === (char[i].toUpperCase())){
 char.splice([i-1],0, " ");   
} else {
    char[i];
} return char.join("");

}

console.log(solution(string));