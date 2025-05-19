# Exercices déjà faits

## Descending Order

```js
function descendingOrder(n){
    function compareNum(a, b) {
        return b - a;
      }
      
        let ArrayN = Array.from(String(n), Number);
        let descendingOrder = ArrayN.sort(compareNum).join('');
return descendingNumber = +descendingOrder;
   // return typeof descendingNumber;
    }
    
    /// Best Practice

    function descendingOrder(n){
        return parseInt(String(n).split('').sort().reverse().join(''))
      }
```

## Swap values

```js
     function swapValues(arr) {
   
        if (arr.length > 2){
          return "Failed swapping numbers";
        } else {
   return [arr[0], arr[1]] = [ arr[1], arr[0]];
        
        }
    }
//use .reverse!!!!!! (attention quand même - destructive)
*/
function swapValues() {
    return arguments[0].reverse();
  }
  console.log(swapValues(arguments));
/*
```
## Removing blank spaces - ma solution

```js


function noSpace (x){
    return x.replaceAll(' ', ''); // ne pas oublier le All pour enlever tous les blank spaces
}
```

### Removing blank spaces - best practice

```js
function noSpace(x){
    return x.replace(/\s/g, '');
  }

```

## String to number - ma solution

```js
const stringToNumber = function(str){
    return +str;
    // put your code here
    
  }

```

### String to number - best practice

```js
 let stringToNumber = function(str){
    return parseInt(str);
  }

```

## Number to string - ma solution

```js
function numberToString(num) { 
  return String (num);
}

numberToString(15);

```

### Number to string - best practice

```js
function numberToString(num) {
return num.toString();
}

```

## Even or Odd? - ma solution

```js
function evenOrOdd(number) {

let EvenNumber = (number % 2 === 0);
    if(EvenNumber) {
       return('Even');
    } else if (!EvenNumber){ 
        return('Odd');
    }
}

let number;

```

### Even or Odd? - Best practice

```js

{
function evenOrOdd(number) {
    return number % 2 === 0 ? 'Even' : 'Odd';
}
}

function boolToWord( bool ){
    return bool ? 'Yes' : 'No';
}
```

## Rendre un nombre négatif - Best practice

```js
function makeNegative(num){
    return -Math.abs(num);
}
```

## Donner le nombre opposé - ma solution

```js
function opposite(number) {
    return (number < 0) ? Math.abs(number) : -Math.abs(number);
}
```

### Donner le nombre opposé - Best practice

```js
function opposite(number) {
    return(-number);
  }
```

## Find the smallest integrerin an array - ma solution

```js
  function findSmallestInt(arr) {
    arr.sort(function(a, b) {
      return a - b;
    });
    //your code here
    return arr[0];
  }
```

### Find the smallest integrer-  la meilleure solution

 ```js
 class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args)
    }
 }
```

## Remove first and last character from a string - ma solution

```js
function removeChar(str){
    let words = str.split('');
   
    let cutWord = words.slice(1, -1);
    
      return solution = cutWord.join('');
    }
```

### Remove first and last character from a string - Best practice

```js
function removeChar(str) {
  return str.slice(1, -1);
}
//Il y a une fonction slice() pour les String!!!!
```

## Reverse a string - ma solution

```js
function solution(str){
    let arrString = str.split('');
   let revString = arrString.reverse();
    return sol = revString.join("");
  }
```

### Reverse a string - la meilleure solution

 ```js
function solution(str){
  return str.split('').reverse().join('');  
}
```

## School Paper work - ma solution

 ```js
function paperwork(n, m) {
 if ( (n < 0) || (m < 0) ) {
   return 0
 }
   {
    let blankPages = (+m * +n);
    return (blankPages);
  }
}
```

### School Paper work - shortest

```js
function paperwork(n, m) {
  return n > 0 && m > 0 ? n * m : 0
}

```

## Sum of positive (in an array)

### ma solution

```js
function positiveSum(arr){
let sum = 0
    let positiveItems = arr.filter((arr) => {
        return arr > 0 });

    for (let i = 0; i < positiveItems.length; i++) {
        sum += positiveItems[i];  
       
    }  return sum;
}
```

### best practices

```js
function positiveSum(arr) {
  let total = 0;    
  for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
    if (arr[i] > 0) {                   // if arr[i] is greater than zero
      total += arr[i];                  // add arr[i] to total
    }
  }
  return total;                         // return total
}
```

 ou

 ```js
function positiveSum(arr) {
   return arr.reduce((a,b) => a + (b > 0 ? b : 0),0);
}
 ```

## Square(n) Sum - ma solution

```js
function squareSum(numbers) {
    let squareNumbers =  numbers.map(SquaredNum);
    function SquaredNum (numbers){
        return (numbers ** 2);
    } 
    return squareNumbers.reduce((a, b) => a + b , 0 ) ;
}
```

### Square(n) Sum - best practices

```js
function squareSum(numbers){
  return numbers.reduce(function(sum, n){
    return (n*n) + sum;
  }, 0)
}
```

## Vowel Vount - ma solution

```js
 function getCount(str) {
    string =  str.replaceAll(' ', '');
  let vowels = /[a, e, i, o, u]/g;
  let vowelsFound = string.match(vowels);
 return vowelsFound === null ? 0 : vowelsFound.length ;
  }
  ```

et donc solution améliorée :

```js
 function getCount(str) {
  let vowels = /[a ,e ,i ,o ,u ]/g;
  return vowelsFound = str.match(vowels).length ;
  ```

### Vowel Vount - clever

```js
function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}
```

## Disenmvowel Trolls - ma solution

```js
  function disemvowel(str) {
    let vowels = (/[aeiou]/gi || []); // /i for not case senstive
let AntiTrolls = str.replace(vowels, '');
return AntiTrolls;

  }
```

### Disenmvowel Trolls - best practice

```js
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}
```

## Square Every Digit

```js
function squareDigits(num){
    let ArrayDigits =  num.toString().split('');
    let squareNumbers =  ArrayDigits.map(SquaredNum); 
    function SquaredNum (ArrayDigits){
        return (ArrayDigits ** 2);

    }
    return +squareNumbers.join("");
}
```

et donc amélioré :

```js
function squareDigits(num){
    let ArrayDigits =  num.toString().split('').map(function SquaredNum (ArrayDigits){
        return (ArrayDigits ** 2)}).join("")
    return +ArrayDigits;
}
```

### Square Every Digit - best practice

```js
function squareDigits(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
```

## Highest and Lowest - ma solution

```js
function highAndLow(numbers) {
let ArrayHighAndLow = numbers.split(' ');

let highN = String (Math.max(...ArrayHighAndLow));
let lowN = String(Math.min(...ArrayHighAndLow));

return highN+' '+lowN;
}
```

### Highest and Lowest - best practice

```js
function highAndLow(numbers){
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}
```

## List Filtering - ma solution

```js
function filter_list(l) {

    return nonStrings = l.filter(Number.isInteger);
}
```

### List Filtering - best practice

```js
function filter_list(l) {
  return l.filter(function(v) {return typeof v == 'number'})
}
```


------

## Debugging exercises

### Greet name

```js
function greet(name){
  return "Hello, " + (name == "Johnny" ? "my love" : name) + "!";
}
```

### Array + Array

```js
//use .reduce!
function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}

// accepts indefinite number of arrays
function arrayPlusArray(...arrays) {
  return [].concat(...arrays).reduce((a,b) => a+b,0)
}

```

### Get a planet name

Via Switch/Case (+break!) or

```js
function getPlanetName(id){
  return {
    1: 'Mercury',
    2: 'Venus',
    3: 'Earth',
    4: 'Mars',
    5: 'Jupiter',
    6: 'Saturn',
    7: 'Uranus',
    8: 'Neptune'
  }[id]
}
```

### Check Alive

```js
function checkAlive(health) {
  return health > 0; // boolean value!!? instead of if/else
}
```


### Closure and Scopes
J'ai juste changé `var` à `let`?? - ça semble especially important pour `for( let i =0...)`
```js
function createFunctions(n) {
  let callbacks = [];

  for (let i=0; i<n; i++) {
    callbacks.push(function() {
      return i;
    });
  }
  
  return callbacks;
}
```

### Is this my tail

```js
//Don't forget index starts at 0 so last character is .length-1!
body = "Fox";
let sub = body.charAt(body.length-1);

//
function correctTail(bod, tail) {
  return bod[bod.length-1] === tail
}
```

### A revérifier pour comprendre

```js
class Dinglemouse {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        if (!this.firstName) {
            return `${this.lastName}`;
        }
        else if (!this.lastName) {
            return `${this.firstName}`;
        }
        else {
            return `${this.firstName} ${this.lastName}`;
        }
    }
}
```

### best practice

```js
class Dinglemouse{

  constructor( firstName, lastName ){
    this._firstName=firstName;
    this._lastName=lastName;
  }
  
  getFullName(){
    return `${this._firstName} ${this._lastName}`.trim();
  }
  
}
```

## A checker bis

### best practice

```js
function getSumOfDigits(integer) {
  return (integer+'').split('').reduce((sum, d) => sum + (+d || 0), 0);
}

//ma solution

function getSumOfDigits(integrer) {
let sum = 0
    let sol =  integrer.toString().split('')
    for (let i = 0; i < sol.length; i++) {
sum += +sol[i];
    } return sum;
}
```