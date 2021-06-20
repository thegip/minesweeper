import './Game.css'
import {useState} from 'react' 

//todo
// lift up "isClicked" to sum up in game.js
//cemment  to test git desktop


function Square(props){
    let color1 = "blue"
    let color2 = "red"
    const [color, setColor] = useState(color1)
    const [flagged, setFlagged] = useState(false)
    //const [flag, setFlag] = useState(false)

    

    let style = {
        color: "white",
        backgroundColor: color 
    }

    let bomb = <button 
        style={style} 
        className="square" 
        onClick={(e) => GameOver(e)}
        onContextMenu={(e) => ToggleFlag(e)}
        >
        bomb
    </button>

    let nonBomb =  <button 
        style={style} 
        className="square" 
        onClick={Clicked}
        onContextMenu={(e) => ToggleFlag(e)}
        >
        {props.square.adjacent}
    </button>


    if(props.square.bomb===true){
        return bomb
    }

    if(props.square.bomb===false){
        return nonBomb
    }


    function ToggleFlag(e){
        e.preventDefault()
        color === color1 ? setColor(color2) : setColor(color1) 
        flagged === false ? setFlagged(true) : setFlagged(false)
    }

    function GameOver(e){
        e.preventDefault()
        alert("GAME OVER")
    }

    function Clicked(){
        console.log("kappa")
        props.lift()
    }
}


// if total number of squares - bomber === total clicked squraes {win()}
export default Square