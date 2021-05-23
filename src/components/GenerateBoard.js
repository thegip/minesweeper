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
    CalculateAdjecentBombs()
    

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

function CalculateAdjecentBombs(){

}