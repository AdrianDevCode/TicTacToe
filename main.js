let board = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
            ];
let playerTurn = "X";

function positionState(row, column){
    return board[row][column];
}
function TicTacToe() {
    console.log("**************");
    console.log(board[0]);
    console.log(board[1]);
    console.log(board[2]);
}
function changeState(row, column){
    board[row][column] = playerTurn;
    TicTacToe();
}
function promptUser() {
    let row = parseInt(prompt("enter a row "));
    let column = parseInt(prompt("enter a column "));
    if (playerTurn == "X"){
        playerTurn = "O";
    }else {
        playerTurn = "X";
    }
    if(positionState(row, column) != null){
        console.log("try again ");
       
        let row = parseInt(prompt("enter a row "));
        let column = parseInt(prompt("enter a column "));
    
    }
    changeState(row, column);
}
function checkVictory() {

    var row1 = board[0]; // ["X", null, "O"]
    var row2 = board[1]; // ["X", null, "X"]
    var row3 = board[2]; // ["O", null, "O"]
    var col1 = [ board[0][0], board[1][0], board[2][0] ];  // ["X", "X", "O"]
    var col2 = [ board[0][1], board[1][1], board[2][1] ];  // [null, null, null]
    var col3 = [ board[0][2], board[1][2], board[2][2] ];  // ["O", "X", "O"]
    var diag1 = [ board[0][0], board[1][1], board[2][2] ]; // ["X", null, "O"]
    var diag2 = [ board[0][2], board[1][1], board[2][0] ]; // ["O", null, "O"]

    var winConditions = [row1, row2, row3, col1, col2, col3, diag1, diag2];

    for (var i=0; i<winConditions.length ; i++) {

        var winCondition = winConditions[i]; // ["X", null, "O"]

        var string = "" + winCondition[0] + winCondition[1] + winCondition[2]; 

        if (string == "XXX") {
            return "X wins";
        } else if (string == "OOO") {
            return "O wins";
        }
    }

    return "No one wins" 
}
while(checkVictory() == "No one wins") {
    promptUser();
}
