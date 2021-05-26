export function GenerateBoard(x,y,bombCount){
    let id = 0
    let board = []
    for(let i=0; i<x; i++){
        board[i]=[]
        for(let j=0; j<y; j++){
            board[i][j]={
                id: id,
                column: i,
                row: j,
                adjacent:0,
                bomb: false
            }
            id++
        }
    }
   
    GenerateBombs(board,id,bombCount,x,y)
    CalculateAdjecentBombs(board,x,y)

    return(board)
}

function GenerateBombs(board,length,bombCount,x,y){
    let bombLocations = []
    for(let i=0; i<bombCount; i++){
        bombLocations[i]=Math.floor(Math.random() * length)
    }

    for(let k=0; k<bombCount; k++){
        for(let i=0; i<x; i++){
            for(let j=0; j<y; j++){
                if (board[i][j].id === bombLocations[k]){
                    console.log(board[i][j].id)
                    board[i][j].bomb=true
                }
            }
        }
    }
}

function CalculateAdjecentBombs(board,x,y){
    
    //due to out of index the outer border needs to be calculated by itself

    // CalculateTopLeftCorner()
    // calculateTopRightCorner()
    // CalculateBottomLeftCorner()
    // CalculateBottomRightCorner()

    // CalculateLeftSide()
    // CalculateRightSide()
    // CalculateTopSide()
    // CalculateBottomSide()

    CalculateCenter(board,x,y)
    //check 4 corners induvidually with their own function

    //check each side individually with their own function
    // example of left side is "array[0][1]" going to "array[0][arrey[0].length-1]"

    //change to go from array[1] untill array.length-1
    //same but different for the nested loop
}

function CalculateCenter(board,x,y){

    

    //loop trough the inner part of "board"
    for(let i=1; i<board.length-1; i++){
        for(let j=1; j<board[0].length-1; j++){
            let adjecentBombs = 0
            //check the adjacent squares of board[i][j]
            for (let a=i-1;a<=i+1;a++){
                for (let b=j-1;b<=j+1;b++){
                    if (board[a][b].bomb === true){
                        adjecentBombs++
                    }
                }
            }
            board[i][j].adjacent=adjecentBombs
        }
    }
}