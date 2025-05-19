
let b = true;
function booleanToString(b){
    return String(b)
  }

  console.log( typeof booleanToString(b));
  // ou

  function booleanToString(b){
    return b.toString();
  }