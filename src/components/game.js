function NumberList(props) {
    const numbers = props.numbers;
    return (
      <ul>
        {numbers.map((number) =>
          <ListItem key={number.toString()}
                    value={number} />
        )}
      </ul>
    );
  }

  function ListItem(props) {
    return <li>{props.value}</li>;
  }

  export default NumberList