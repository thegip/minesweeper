export function GenerateBoard(x,y,bombCount){
    let kek = 0
    let temp = []
    for(let i=0; i<x; i++){
        temp[i]=[]
        for(let j=0; j<y; j++){
            temp[i][j]={
                id: kek,
                column: i,
                row: j,
                adjacent:0,
                bomb: false
            }
            kek++
        }
    }
   
    GenerateBombs(temp,kek,bombCount,x,y)

    return(temp)
}

function GenerateBombs(board,length,bombCount,x,y){
    let bombLocations = []
    for(let i=0; i<bombCount; i++){
        bombLocations[i]=Math.floor(Math.random() * length)
    }
    console.log(bombLocations)

    
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