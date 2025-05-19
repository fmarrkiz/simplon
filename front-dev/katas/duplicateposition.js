
text = "awceAbB";


function duplicateCount (text) {
    let arr = text.toUpperCase().split('');
    let OrganisedArr = arr.sort();
  
    let n = [];
    for ( let i = 0; i < OrganisedArr.length; i++){
      if ( OrganisedArr[i] === OrganisedArr[i + 1]) {
          n.push(OrganisedArr[i]);
      } 
    } return set = new Set(n).size;
  
  }

console.log(duplicateCount(text))


// Best Practice

function duplicateCount(text){
    return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
  }