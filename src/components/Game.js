import './Game.css'

function Square(props) {
  
  const squares = props.board;
  
  return (
    <div className="container">
      {squares.map((items) => {
        return (
          <div className="row">
            {items.map((subItems) => {
              return <div className="square"> {subItems.column} {subItems.row} </div>;
            })}
          </div>
        );
      })}
    </div>
  );

}



  export default Square
