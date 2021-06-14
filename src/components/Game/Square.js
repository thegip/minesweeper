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
            onClick={(e) => ToggleClicked(e)}
            onContextMenu={RightClick}>
                bomb
        </button>
    }

    if(props.square.bomb===false){
        return <button 
        style={style} 
        className="square" 
        onClick={ToggleClicked}>
            {props.square.adjacent}
    </button>
    }

    function ToggleClicked(){
        color === color1 ? setColor(color2) : setColor(color1) 
        // if(color === color1){
        //     setColor(color2)
        // }
    }

    function RightClick(e){
        e.preventDefault()
        console.log("keepo")
    }
}


// if total number of squares - bomber === total clicked squraes {win()}
export default Square