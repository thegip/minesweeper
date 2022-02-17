import './Game.css'
import Square from './Square'
import {GenerateBoard} from './GenerateBoard'

let rows = 13
let collumns = 9
let bombs = 10

const board = GenerateBoard(rows,collumns,bombs)
console.log(board)

function Board(props) {
  return (
    <div class="temp">
      <h2>MINESWEEEPER</h2>
      <div className="container">

        {board.map((items, index) => {
          return (
            <div key={index}>
              {items.map((subItems, sIndex) => {
                return <div key={sIndex}>
                  <Square 
                    key={subItems.id.toString()} 
                    square={subItems} Click={Click} ToggleFlag={ToggleFlag} GameOver={GameOver}
                    />
                </div>
              })}
            </div>
          );
        })}

      </div>
    </div>
  );
}

function Click(x,y,setClicked){
  if(!board[x][y].flagged && !board[x][y].clicked){
    console.log("I WAS CLICKED " + board[x][y].id)
    board[x][y].clicked = true
    setClicked(board[x][y].clicked)
  }
}

function ToggleFlag(e, x, y, setFlagged){
  e.preventDefault()
  if(!board[x][y].clicked){
    board[x][y].flagged = !board[x][y].flagged
    setFlagged(board[x][y].flagged)
    console.log("I WAS FLAGGED " + board[x][y].flagged)
  }
}

function GameOver(x, y){
  if(!board[x][y].flagged){
    alert("game over")
  }
}



export default Board
