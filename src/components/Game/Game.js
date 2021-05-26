import './Game.css'
import Square from './Square'

function Board(props) {
  
  const squares = props.board;
  
  return (
    <div className="container">
      {squares.map((items) => {
        return (
          <div className="row">
            {items.map((subItems) => {
              return <div>
                <Square/>
                <div className="square"> 
                {subItems.column} 
                {subItems.row} 
                Adj: {subItems.adjacent} </div>
              </div>
            })}
          </div>
        );
      })}
    </div>
  );

}



  export default Board
