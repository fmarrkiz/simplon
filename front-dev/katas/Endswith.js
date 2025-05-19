/*
We want to be able to call 'toJadenCase()' directly on a string like so:
'most trees are blue'.toJadenCase(); // returns 'Most Trees Are Blue'
For that, we need to add a method to the String prototype:

Object.defineProperty(
    String.prototype,
    'toJadenCase',
    { value :
     function toJadenCase() {
       return this;
     }
    }
  );

  */

str = 'abc';
ending = 'bc';

  function solution(str, ending){
   if (str.endsWith(ending)) {
    return true;
   } else {
    return false;
   }
  }

  console.log(solution(str, ending));

  // solution - You did too much, darling..

  function solution(str, ending){
    return str.endsWith(ending);
  }