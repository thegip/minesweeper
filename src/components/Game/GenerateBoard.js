function Squrae (column, row){
    this.id = "" + column + row;
    this.column = column;
    this.row = row;
    this.adjacent = 0;
    this.bomb = false;
    this.clicked = false;
    this.flagged = false;
}

export function GenerateBoard(x,y,bombCount){
    let board = []

    for(let i=0; i<x; i++){
        board[i]=[]
        for(let j=0; j<y; j++){
            board[i][j]= new Squrae(i,j)
        }
    }
    GenerateBombs(board,bombCount)
    CalculateAdjecentBombs(board)
    return(board)
}

function GenerateBombs(board,bombCount){
    for(let i=0; i<bombCount; i++){
        let temp1=Math.floor(Math.random() * board.length)
        let temp2=Math.floor(Math.random() * board[0].length)

        if (board[temp1][temp2].bomb == false){
            board[temp1][temp2].bomb = true;
        }
        else if (board[temp1][temp2].bomb == true){
            i--
        }
    }
}

function CalculateAdjecentBombs(board){
    //loop trough the inner part of "board"
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[0].length; j++){
            let adjecentBombs = 0
            //check the adjacent squares of board[i][j]
            for (let a=i-1;a<=i+1;a++){
                for (let b=j-1;b<=j+1;b++){
                    if(typeof board[a] === 'undefined') {
                    }
                    else if(typeof board[a][b] === 'undefined'){
                    }
                    else if(board[a][b].bomb === true){
                            adjecentBombs++
                    }
                }
            }
            board[i][j].adjacent=adjecentBombs
        }
    }
}
