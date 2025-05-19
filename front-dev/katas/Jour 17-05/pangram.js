let string = 'The quick brown fox jumps over the lazy dog.';

function isPangram(string){
    let s = string.toLowerCase();

    if ((s.includes('a'))
    && (s.includes('b'))
&& (s.includes('c'))
&& (s.includes('d'))
&& (s.includes('e'))
&& (s.includes('f'))
&& (s.includes('g'))
&& (s.includes('h'))
&& (s.includes('i'))
&& (s.includes('j'))
&& (s.includes('k'))
&& (s.includes('l'))
&& (s.includes('m'))
 && (s.includes('n'))
&& (s.includes('o'))
&& (s.includes('p'))
&& (s.includes('q'))
&& (s.includes('r'))
&& (s.includes('s'))
&& (s.includes('t'))
&& (s.includes('u'))
&& (s.includes('v'))
&& (s.includes('x'))
&& (s.includes('y'))
&& (s.includes('z'))){
    return true;
} else {
    return false;
}

   }

   console.log(isPangram(string));


   // The obviously less tedious answers

   function isPangram(string){
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
      return string.indexOf(x) !== -1;
    });
  }

  // ou

  function isPangram(string){
    return 'abcdefghijklmnopqrstuvwxyz'
      .split('')
      .every((x) => string.toLowerCase().includes(x));
  }

  // ou with RegEx

  function isPangram(string){
    return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
  }
  