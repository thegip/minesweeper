import './Game.css'
import Square from './Square'

function Board(props) {
  
  const squares = props.board;
  
  return (
    <div className="container">
      {squares.map((items) => {
        return (
          <div >
            {items.map((subItems) => {
              return <div>
                <Square square={subItems} lift={lift}/>
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
