export function TestBoard(){
    const squares = [
        [
            {
                index: 11,
                name:"test",
                bomb: true
            },
            {
                index: 12,
                name:"test2",
                bomb: false
            }
        ],
        [
            {
                index: 21,
                name:"test3",
                bomb: true
            },
            {
                index: 22,
                name:"test4",
                bomb: false
            }
        ],
        [
            {
                index: 11,
                name:"test5",
                bomb: true
            },
            {
                index: 12,
                name:"test6",
                bomb: false
            }
        ],
        [
            {
                index: 21,
                name:"test7",
                bomb: true
            },
            {
                index: 22,
                name:"test8",
                bomb: false
            }
        ]
    ]

  return (squares)
}

export function GenerateBoard(x,y){
    
    let temp = []
    for(let i=0; i<x; i++){
        temp[i]=[]
        for(let j=0; j<y; j++){
            temp[i][j]={
                index: 21,
                name:"test7",
                bomb: true
            }
        }
    }

    return(temp)
}