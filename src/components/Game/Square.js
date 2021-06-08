import './Game.css'
import {useState} from 'react' 

function Square(props){
    console.log(props)
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("blue");

    let style = {
        color: color
    }


    if(props.square.bomb===true){
        return <button style={style} className="square" onClick={ToggleClicked}>jeff {count}</button>
    }

    if(props.square.bomb===false){
        return <button className="square" onClick={() => { console.log(props.square.id) }}>{props.square.id}</button>
    }

    function ToggleClicked(){
        if (color === "blue" ){
            setColor("red")
           
        }
        if (color === "red" ){
            setColor("blue")
            
        }
    }
}



export default Square