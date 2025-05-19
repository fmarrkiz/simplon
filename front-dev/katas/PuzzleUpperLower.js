s = 'abcjvpwjfopw';

function accum(s) {
let sFinal = [];
let sLow = s.toLowerCase().split('')
    let sUp = s.toUpperCase().split('');
    for (let i = 0; i < s.length; i++) {

        let ajoutL = sLow[i].repeat(i +1);
        let a = sUp[i] + ajoutL;
        sFinal.push(a);
    } return sFinal.join("-");

  
} 

console.log(accum(s))


// Best Practice

function accum(s) {
	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}