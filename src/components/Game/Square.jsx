import './Game.css'
import {useState} from 'react' 

//todo
// lift up "isClicked" to sum up in game.js
//cemment  to test git desktop


function Square(props){
    let color1 = "rgba(255,255,255,0.06)"
    let color2 = "rgba(255,220,220,0.7)"
    let color3 = "white"
    const [color, setColor] = useState(color1)
    const [flagged, setFlagged] = useState(props.square.flagged)
    const [clicked, setClicked] = useState(props.square.clicked)

    //content
    let style = {
        //color: "bisque",
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
        {clicked === true ? props.square.adjacent : ' '}
    </button>


    if(props.square.bomb===true){
        return bomb
    }

    if(props.square.bomb===false){
        return nonBomb
    }


    //button logic 
    function ToggleFlag(e){
        e.preventDefault()
        if(!clicked){
            color === color1 ? setColor(color2) : setColor(color1);
            flagged === false ? setFlagged(true) : setFlagged(false)

            if(props.square.flagged===false){
                props.square.flagged = true
            }else{
                props.square.flagged = false
            }

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
        //console.log(props)
        if(!flagged){
            
            setClicked(true)
            props.square.clicked = true
            
        }
        if(props.square.adjacent===0){
             props.lift(props.square.column, props.square.row)
        }
       
    }
}


// if total number of squares - bomber === total clicked squraes {win()}
export default Square