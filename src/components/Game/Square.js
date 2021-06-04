import './Game.css'
import {useState} from 'react' 

function Square(props){
    console.log(props)
    const [count, setCount] = useState(0);


    if(props.square.bomb===true){
        return <button className="square" onClick={() => setCount(count + 1)}>jeff {count}</button>
    }

    if(props.square.bomb===false){
        return <button className="square" onClick={() => { console.log(props.square.id) }}>{props.square.id}</button>
    }
    
}

export default Square