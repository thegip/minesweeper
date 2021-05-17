import './Game.css'

function Square(props) {
  
  const squares = props.board;
  console.log(squares)


  return (
    <div className="container">
      {squares.map((items) => {
        return (
          <div className="row">
            {items.map((subItems) => {
              console.log(subItems)
              return <div className="square"> {subItems.name} </div>;
            })}
          </div>
        );
      })}
    </div>
  );

}



  export default Square