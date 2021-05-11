function Square(props) {
  
  console.log(props)

    return (
      <div>
        <p>this is from component</p>
        {props.squares[0][0].index}
        <br/>
        {props.squares[1][0].index}
      </div>
     
    );
  }



  export default Square