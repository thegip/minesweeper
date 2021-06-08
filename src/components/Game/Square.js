import './Game.css'
import {useState} from 'react' 

function Square(props){
    let color1 = "blue"
    let color2 = "red"

    const [color, setColor] = useState(color1);



    let style = {
        color: "white",
        backgroundColor: color 
    }


    if(props.square.bomb===true){
        return <button style={style} className="square" onClick={ToggleClicked}>bomb</button>
    }

    if(props.square.bomb===false){
        return <button style={style} className="square" onClick={ToggleClicked}>{props.square.adjacent}</button>
    }

    function ToggleClicked(){
        color === color1 ? setColor(color2) : setColor(color1) 
        // if(color === color1){
        //     setColor(color2)
        // }
    }
}


// if total number of squares - bomber === total clicked squraes {win()}
export default Square