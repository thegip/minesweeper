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
                    square={subItems} lift={lift}
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

function lift(column, row){
  //temp++
  console.log(column, row)
  //console.log(board)
}


export default Board
