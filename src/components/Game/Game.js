import './Game.css'
import Square from './Square'

function Board(props) {
  
  const squares = props.board;
  
  return (
    <div className="container">
      {squares.map((items, index) => {
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
  );

}

function lift(liftedValue){
  console.log(liftedValue)
}


  export default Board
