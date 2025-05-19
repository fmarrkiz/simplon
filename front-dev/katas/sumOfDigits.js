n = 456;

function digitalRoot(n) {
 let arr = n.toString().split('');

 if (arr.length === 1){
    return +arr;
 } else { 
   let arr1 = [];
while (arr1.length != 1){
 
 arr1 = arr.reduce((a, b) => (+a + +b)).toString().split('');
} 
  } 
}

  console.log( digitalRoot(n));