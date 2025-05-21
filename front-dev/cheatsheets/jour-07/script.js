/* // Exercice 1 
let a = '#';
for( let i = 0; i < 7; i++){
    if( i === 0){
        console.log(a);
    } else {
         let result = ( a += '#'); 
        console.log( result);
    }
}

// Exercice 2



for( let i = 1; i < 100; i++){
let fizz = (i % 3 === 0);
let buzz = (i % 5 === 0);
let fizzbuzz = (fizz && buzz);
    if (fizzbuzz){
        console.log('fizzbuzz');
    }
    else if ( fizz){
        console.log( 'fizz');}
    else if( buzz){
        console.log('buzz');}
    else if (!fizz && !buzz){
        console.log( i );
    }   
}
  */     
// Exercice 3

const WhiteChessPiece = " #";
const BlackChessPiece = "# ";
const newLine = "/n";

//console.log(`${WhiteChessPiece.repeat(4)}`);
//console.log(`${BlackChessPiece.repeat(4)}`);

/*let Chessboard = function Chessboard (x){
    let DoubleRows = (x / 2);
for (let i = 1; i <= DoubleRows; i++){
console.log(`${WhiteChessPiece.repeat(DoubleRows)}`);
console.log(`${BlackChessPiece.repeat(DoubleRows)}`);
}
}
console.log(Chessboard.length);

*/

let piece = { 
    white : ' ',
    black : '#',
    end_of_line : `/n`,
}
function row () {for (let j = 1; j <= 8; j++) {
    console.log(piece[0]);
}

}

for ( let i = 1; i <= 8; i++){
    console.log(row);}

