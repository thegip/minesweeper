import './Game.css'
import {useState} from 'react' 

//todo
// lift up "isClicked" to sum up in game.js
//cemment  to test git desktop


function Square(props){
    let color1 = "blue"
    let color2 = "red"
    const [color, setColor] = useState(color1)
    //const [flag, setFlag] = useState(false)

    props.lift(1)

    let style = {
        color: "white",
        backgroundColor: color 
    }


    if(props.square.bomb===true){
        return <button 
            style={style} 
            className="square" 
            onClick={(e) => GameOver(e)}
            onContextMenu={(e) => ToggleFlag(e)}
            >
            bomb
        </button>
    }

    if(props.square.bomb===false){
        return <button 
        style={style} 
        className="square" 
        onClick={Clicked}
        onContextMenu={(e) => ToggleFlag(e)}
        >
        {props.square.adjacent}
    </button>
    }

    function ToggleFlag(e){
        e.preventDefault()
        color === color1 ? setColor(color2) : setColor(color1) 
    }

    function GameOver(e){
        e.preventDefault()
        console.log("keepo")
    }

    function Clicked(){
        console.log("kappa")
    }
}


// if total number of squares - bomber === total clicked squraes {win()}
export default Square