/*
Implement a function that computes the difference between two lists. The function should remove all occurrences of elements from the first list (a) that are present in the second list (b). The order of elements in the first list should be preserved in the result.
Examples

If a = [1, 2] and b = [1], the result should be [2].

If a = [1, 2, 2, 2, 3] and b = [2], the result should be [1, 3].


let a = [2, 1];

let b = [1];

 function arrayDiff(a, b) {
  
    //let a1 = a.filter((n) => {return n != b });
   // let b1 = b.filter((n) => {return n != a });
    
    let newAr = a.concat(b);
    
   return newAr.filter((n) => { (return n = !(a && b)) });
}



  //let solution =  a.forEach(() => (!(a || b)));

// console.log(solution);

console.log(arrayDiff(a, b));
   


//let newArray = a.concat(b).sort(function(a, b) {
        return a - b});
     for (let i = 0 ; i < newArray.length ; i++) {

        if (newArray.indexOf[i] === newArray[i-1]) {
             newArray.shift[i];}
           else { newArray[i]
           }  console.log(newArray);
        }
    }

    return concat = newArray.filter(function(v) { return !== v  });


    //let setArray = new Set(newArray);
   // return solution = [...setArray];


*/


/*
      return sol.reduce((a, b)  => (a + b), 0);                                         
    }
    
      let bro = [4, 6, 7];

      let code = bro.reduce((a, b)  => (a + b), 0);   
      console.log(code);


a = [1,2] 
b = [1]
function arrayDiff(a, b) {
     let setA = new Set (a);
     let newA = Array.from(setA);
  let setB = new Set (b);
    let newB = Array.from(setB);
let newArray = [];


  for (let i = 0; i < newA.length; i++ ) {
    if (newA[i] === newB[i] || newB[i]) {
        newArray.push(newA[i]) ;
        newA.pop(newA[i]);
        newB.pop(newB[i]);
        } return newArray;

   // else 
   //   {  newArray.push(newA[i]);
    //    newArray.push(newB[i]);
  //  } return newArray;
  } 
    }
//}


console.log(arrayDiff(a,b));


//let newArray = a.filter((n) => {!b.includes(n)});
//
// 
// return newAr = a.concat(b);

let newAr = a.concat(b);

let count = 0

*/

a = [4 ,1 ,2 ,2, 5, 3, 3] 
b = [3, 4, 5]

function arrayDiff(a, b) {
for (let i = 0; i < b.length ; i++) {
  
  if (a.includes(b[i])) {
 // let idx = a.indexOf(b[i]);
    for (let j = 0; j < a.length; j++) {
      if(b[i] === a[j]) {
     a.splice (a[j], 1)
  }
}
}
} return a;
}

 /*
 function RemoveItem(a, idx) {
      let j = 0;
      while (j < a.length)  {
        if (a[j] === idx ) {
          a.slice(j, 1);
        } else {
          j++;
        } 
      } return a;
   }} 

}
}

      //if (a.includes(n))
      //{ let idx = a.indexOf(n);
      // return a.slice(idx); 

      /*} //let newNew = newB();

      function RemoveItem(a, idx)
      let i = 0;
      while (i < a.length)  {
        if (a[i] === idx ) {
          a.splice(i, 1);
        } else {
          i++
        }
      }  
     console.log(solution);
    }
  //}
  */
 
console.log(arrayDiff(a, b));

/* {
if(a.length === 0 || b.length === 0){
    return a;
} else  */