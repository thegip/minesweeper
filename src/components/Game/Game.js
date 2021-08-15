import './Game.css'
import Square from './Square'
import {useEffect} from 'react'
import {GenerateBoard} from './GenerateBoard'

const board = GenerateBoard(10,10,10)
console.log(board)

// make 2 arreys in generate board instead?? 
let temp = 0
function Board(props) {
  
   const squares = props.board
  // const keepo = squares.map(x => x)
  // keepo.shift()
  // keepo.pop()
  // console.log(keepo)
  // keepo.forEach(element => {
  //   element.shift()
  //   element.pop()
    
  // });
  // console.log(keepo)

  console.log(squares)
  return (
    <div class="temp">
       <h2>MINESWEEEPER</h2>

      <div>~~menu~~</div>

      <div className="container">
        {board.map((items, index) => {
          
          return (
            <div key={index}>
              {items.map((subItems, sIndex) => {
                return <div key={sIndex}>
                  <Square key={subItems.id.toString()} square={subItems} lift={lift}/>
                </div>
              })}
            </div>
          );
        })}
      </div>
    </div>
  );

}

function lift(){
  temp++
  console.log(temp)
}


export default Board
