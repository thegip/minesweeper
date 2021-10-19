import "./InfoContent.css"
import DevWork from "./DevWork/DevWork"

import {useState} from 'react'

function Info() {
    const[showDevWork, setShowDevWork] = useState(false)
    return(
        <div>
            <h1 className="test5">Viktor Gip</h1>
            <h3>Frontend Developer with a passion for tech and design</h3>
            <div>
                <button className="button1">Contact</button>
                <button className="button1">LinkedIn</button>
                <button className="button1">Github</button>
            </div>
            <div>
                <button className="button1">disign work</button>
                <button className="button1">development work</button>
            </div>
            <DevWork/>
            <br/>
        </div>
    )
}

export default Info

