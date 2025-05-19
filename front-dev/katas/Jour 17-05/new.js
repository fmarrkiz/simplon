/*
let name = 'patrick gy';
function abbrevName(name){
    let arr = name.split(' ');
      
      return arr.
      
      function firstLetter(name){
        let initial = name.charAt(0).toUpperCase;
        return name.replace(0, initial);
      }
        // code away
    
    }

    console.log(abbrevName(name));

  
let h = 1;
let m = 1;
let s = 1;
    function past(h, m, s){
        let hour = h * (3.6 * (Math.pow(10,6)));
       
        let minute = m * 60000;
        let second = s * 1000;
          return time = hour + minute + second; 
        }

        console.log(past(h,m,s));


        */

let iterable = 'AAAABBBCCDAABBB';

        var uniqueInOrder = function(iterable){
            let arrIterable = Array.from(iterable);
          
for (let i = 0; i < arrIterable.length ; i++) {
          if (arrIterable[i] === arrIterable[i + 1]) {
            arrIterable.splice([i],1);
            
        } else {
            
        }
        }  return arrIterable;
        } 
          console.log(uniqueInOrder(iterable));