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
    findingNeighbors(board,x,y)
    

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
    let adjecentBombs = 0


    for(let i=0; i<x; i++){
        for(let j=0; j<y; j++){
            
            if (board[i][j].bomb === true){
                console.log(board[i][j].id, "has abomb")
                adjecentBombs++
            }
            
        }
    }

    console.log(adjecentBombs)
}

function findingNeighbors(myArray, i, j) {
    var rowLimit = myArray.length-1;
    var columnLimit = myArray[0].length-1;
    let adjecentBombs = 0
  
    for(var x = Math.max(0, i-1); x <= Math.min(i+1, rowLimit); x++) {
      for(var y = Math.max(0, j-1); y <= Math.min(j+1, columnLimit); y++) {
        if(x !== i || y !== j) {
            if(myArray[x][y].bomb === true){
                adjecentBombs++
            }

        }
      }
    }
    console.log(adjecentBombs)
  }