function Square(props) {
  
  const squares = props.squares;
  console.log(squares)


  return (
    <div>
      {squares.map((items) => {
        return (
          <ul>
            {items.map((subItems) => {
              console.log(subItems)
              return <li> {subItems.name} </li>;
            })}
          </ul>
        );
      })}
    </div>
  );

}



  export default Square