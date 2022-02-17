import './Game.css'
import Square from './Square'
import {GenerateBoard} from './GenerateBoard'

const board = GenerateBoard(13,9,10)
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

function Click(){
  console.log("I WAS CLICKED")
}

function ToggleFlag(e){
  e.preventDefault()
  console.log("I WAS FLAGGED")
}

function GameOver(e){
  alert("game over")
}



export default Board
