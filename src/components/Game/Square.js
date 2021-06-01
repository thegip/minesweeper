import './Game.css'

function Square(props){
    console.log(props)
    if(props.square.bomb===true){
        return <button className="square" onClick={() => { console.log(props.square.id) }}>bomb</button>
    }

    if(props.square.bomb===false){
        return <button className="square" onClick={() => { console.log(props.square.id) }}>{props.square.id}</button>
    }
    
}

export default Square