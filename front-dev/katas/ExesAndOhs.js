
let str = "xoxozo";

function XO(str) {
   
    function IsX (n) {
        if( n === "x"){
        return 'x'; }
    }
    function IsO (n) {
        if( n === "o"){
        return 'o'; }
    }

    let arr = str.toLowerCase().split('');

   let arrX = arr.filter(IsX);
    let arrO = arr.filter(IsO);
if (!(arr.includes('x') || arr.includes('o'))) {
    return true;
} else if (arrX.length === arrO.length) {
    return true }
 else {
    return false;
}
}

console.log (XO(str));


// solutions

function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
  }