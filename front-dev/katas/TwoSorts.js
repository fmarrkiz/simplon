/*

make the string split in words in an array

create a function that find the number in a string/array element  without destroying it

sort through that function

put everything back in a string if needed

--
words = "is2 Thi1s T4est 3a";
string = "B3tter";

--

function findNumber (string) {

    console.log(string.split(' ')); // veut pas split ce bouffon

   if( a.includes(Number)){  
    }
}

function order(words){
a = [];
    
    
if (words === ''){
    return '';
} else {
  return words.split(' ')
  }
}

  console.log(order(words));



let b = [];
let c = [];

if (n[i] % 2 === 0) {
    i = b.indexOf(n)
}  else if (n[i] % 2 !== 0) {
c.push(n[i])

}

c.sort((a,b) => a + b)


/*
s = ["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"];

function twoSort(s) {

s.sort();
let a = s.slice(0,1).toString();
return a.split('').join('***');


}

console.log(twoSort(s));

// Best Practice

function twoSort(s) {
    return s.sort()[0].split('').join('***');
  }

  */

  a = [118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]


  function isVow(a){

    let vowels = "aeiou";

    for (let i = 0 ; i < a.length ; i++) {
    
      switch (a[i]) {
        case vowels.charCodeAt(0):
           a.splice(a[i], 1, 'a');
          break;

        case vowels.charCodeAt(1):
           a.splice(a[i], 1, 'e'); 
          break;
      
        case vowels.charCodeAt(2):
           a.splice(a[i], 1,'i');  
          break;
          
        case vowels.charCodeAt(3):
           a.splice(a[i], 1, 'o'); 
          break; 

        case vowels.charCodeAt(4):
           a.splice(a[i], 1, 'u');
          break; 
      }
    }
    return a;
  }


 
  console.log(isVow(a));

 