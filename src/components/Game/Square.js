import './Game.css'
import {useState} from 'react' 

//todo
// lift up "isClicked" to sum up in game.js
//cemment  to test git desktop


function Square(props){
    let color1 = ""
    let color2 = "red"
    const [color, setColor] = useState(color1)
    const [flagged, setFlagged] = useState(false)
    const [clicked, setClicked] = useState(false)

    let style = {
        color: "black",
        backgroundColor: color 
    }

    let bomb = <button 
        style={style} 
        className="square" 
        onClick={(e) => GameOver(e)}
        onContextMenu={(e) => ToggleFlag(e)}
        >
    </button>

    let nonBomb =  <button 
        style={style} 
        className="square" 
        onClick={Click}
        onContextMenu={(e) => ToggleFlag(e)}
        >
        {clicked === true ? props.square.adjacent : ''}
    </button>


    if(props.square.bomb===true){
        return bomb
    }

    if(props.square.bomb===false){
        return nonBomb
    }


    function ToggleFlag(e){
        e.preventDefault()
        if(!clicked){
            color === color1 ? setColor(color2) : setColor(color1);
            flagged === false ? setFlagged(true) : setFlagged(false)
            console.log(color)
        }
    
    }

    function GameOver(e){
        e.preventDefault()
        if(!flagged){
            alert("GAME OVER")
        }
    }

    function Click(){
        if(!flagged){
            
            setClicked(true)
            
        }
        
        props.lift()
    }
}


// if total number of squares - bomber === total clicked squraes {win()}
export default Square