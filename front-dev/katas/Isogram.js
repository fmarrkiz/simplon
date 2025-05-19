str = 'Isogram'

function isIsogram(str){
  arr1 =  str.toLowerCase().split('');
  set1 = new Set(arr1) ; 
  arr2 = Array.from(set1);
  if (arr1.length === arr2.length){
    return true;} { 
    return false;
    }
    }

  console.log(isIsogram(str));

  // Cleverest answer

  function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}