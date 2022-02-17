import './Game.css'
import {useState} from 'react' 

function Square(props){
    let color1 = "rgba(255,255,255,0.06)"
    let color2 = "rgba(255,220,220,0.7)"
    const [color, setColor] = useState(color1)
    const [flagged, setFlagged] = useState(props.square.flagged)
    //const [clicked, setClicked] = useState(props.square.clicked)
    let style = {backgroundColor: color}

    let bomb = <button 
        style={style} 
        className="square" 
        onClick={(e) => props.GameOver(e)}
        onContextMenu={(e) => props.ToggleFlag(e)}
        >
    </button>

    let nonBomb =  <button 
        style={style} 
        className="square" 
        onClick={props.Click}
        onContextMenu={(e) => props.ToggleFlag(e)}
        >
        {props.clicked === true ? props.square.adjacent : ' '}
    </button>


    if(props.square.bomb === true ){
        return bomb
    }else {
        return nonBomb
    }

    //button logic 


}


// if total number of squares - bomber === total clicked squraes {win()}
export default Square