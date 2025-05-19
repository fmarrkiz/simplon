/* replace all the lowercase vowels in a string
a - 1
e - 2
i - 3
o - 4
u - 5

so find where the vowels are 
and which vowels is which
replace them with the corresponding number

*/
let string = 'bonheur';

function encode(string) {

let vowels = /[a,e,i,o,u]/ig;
return Replacement =  string.replace(vowels, vowelsToNum);

function vowelsToNum (vowels){
    switch (vowels){
    case 'a' : 
    return '1';

    case 'e' : 
    return '2';
   
    case 'i' : 
    return '3';

    case 'o' : 
    return '4';

    case 'u':
    return '5';
}
 }
}
  
  console.log(encode(string));



  //


  function decode(string) {

    let numbers = /[1,2,3,4,5]/ig;
    return Replacement =  string.replace(numbers, numToVowels);
    
    function numToVowels (numbers){
        switch (numbers){
        case '1' : 
        return 'a';
    
        case '2' : 
        return 'e';
       
        case '3' : 
        return 'i';
    
        case '4' : 
        return 'o';
    
        case '5':
        return 'u';
    }
     }
    }

    console.log(decode(string));



    ////// Solutions plus simples

    function encode(string){
        var vowelMapping = {'a': 1, 'e': 2, 'i': 3, 'o': 4, 'u': 5};
        return codeStringGivenMapping(string, vowelMapping);
      }
      
      function decode(string){
        var vowelMapping = {'1': 'a', '2': 'e', '3': 'i', '4': 'o', '5': 'u'};
        return codeStringGivenMapping(string, vowelMapping); 
      }
      
      function codeStringGivenMapping(string, mapping){
        return string.split('').map(function(char){
          return mapping[char] || char;
        }).join(''); 
      }

// ou 

// turn vowels into numbers
function encode(string){
    return string.replace(/[aeiou]/g, function (x) { return '_aeiou'.indexOf(x) });
  }
  
  //turn numbers back into vowels
  function decode(string){
    return string.replace(/[1-5]/g, function (x) { return '_aeiou'.charAt(x) });
  }