/*
use loops

rows = en fait colums = nombre de loops = i < row
 and columns 'O' ou 'X' 
 première columns = ligne doit commencer par O

 1ere ligne - impair donc if (!(row % 2 === 0))


*/

let rows = 3;
let = columns = 7;

function chessBoard(rows, columns) {
let chessboard = [];
    for (let i = 1; i < rows; i++){
        if (!(rows % 2 === 0)) {
            for (let j = 1; j < columns; j++) {
                let column = [];
               if (!(columns % 2 === 0)) {
               column[j] = column.push("O");
               } else {
                column[j] = column.push("X");
               } return chessboard.push(column);

                }
            } else {
                for (let j = 1; j < columns; j++) {
                    let column = [];
                   if (!(columns % 2 === 0)) {
                    column[j] = column.push("X");
                    console.log(column);
                   } else {
                    column[j] = column.push("O");
                   } return chessboard.push(column);
            } 
        } 
    } return chessboard;
}
console.log(column);
//console.log(chessBoard(rows, columns))