import './Game.css'
import {useState, useEffect} from 'react' 

function Square(props){
    let x = props.square.column
    let y = props.square.row
    let color1 = "rgba(255,255,255,0.06)"
    let color2 = "rgba(255,220,220,0.7)"
    const [color, setColor] = useState(color1)
    const [flagged, setFlagged] = useState(props.square.flagged)
    const [clicked, setClicked] = useState(props.square.clicked)

    useEffect(()=>{
        !flagged ? setColor(color1) : setColor(color2)   
    },[flagged, color1, color2])
    
    let bomb = <button 
        style={{backgroundColor: color}} 
        className="square" 
        onClick={() => props.GameOver(x, y)}
        onContextMenu={(e) => props.ToggleFlag(e, x, y, setFlagged)}
        >
    </button>

    let nonBomb =  <button 
        style={{backgroundColor: color}} 
        className="square" 
        onClick={()=>props.Click(x, y, setClicked)}
        onContextMenu={(e) => props.ToggleFlag(e, x, y, setFlagged)}
        >
        {clicked ? props.square.adjacent : ' '}
    </button>

    if(props.square.bomb === true ){
        return bomb
    }else {
        return nonBomb
    }
}
export default Square