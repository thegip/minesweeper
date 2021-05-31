import './Game.css'

function Square(props){
    console.log(props)
    return <button className="square" onClick={() => { console.log(props.square.id) }}>{props.square.id}</button>
}

export default Square