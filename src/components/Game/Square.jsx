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
    let style = {backgroundColor: color}
    useEffect(()=>{
        !flagged ? setColor(color1) : setColor(color2)   
    },[])
    

    let bomb = <button 
        style={style} 
        className="square" 
        onClick={(e) => props.GameOver(x, y)}
        onContextMenu={(e) => props.ToggleFlag(e, x, y, setFlaggedHandeler)}
        >
    </button>

    let nonBomb =  <button 
        style={style} 
        className="square" 
        onClick={()=>props.Click(x, y, setClicked)}
        onContextMenu={(e) => props.ToggleFlag(e, x, y, setFlaggedHandeler)}
        >
        {clicked ? props.square.adjacent : ' '}
    </button>

    function setFlaggedHandeler(flaggedState){
        !flagged ? setColor(color2) : setColor(color1)
        setFlagged(flaggedState)
    }


    if(props.square.bomb === true ){
        return bomb
    }else {
        return nonBomb
    }

    //button logic 


}


// if total number of squares - bomber === total clicked squraes {win()}
export default Square