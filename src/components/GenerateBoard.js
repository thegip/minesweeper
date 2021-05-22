export function GenerateBoard(x,y){
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

    GenerateBombs(temp,kek)

    return(temp)
}

function GenerateBombs(board,length){
    //store x amount of resaults in array
    let temp = Math.floor(Math.random() * length)
    console.log(temp)
    console.log(length)
    

    board[0][0].bomb=true

    
    // loop through 2d array {
    //     if array id ===  random number
    //     bomb = true
    // }


}