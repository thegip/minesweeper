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
                <Square square={subItems}/>
              </div>
            })}
          </div>
        );
      })}
    </div>
  );

}



  export default Board
