import './Game.css'

function Square(props){
    console.log(props)
    return <div className="square">{props.square.id}</div>
}

export default Square