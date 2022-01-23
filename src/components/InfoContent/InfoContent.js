import "./InfoContent.css"
import DevWork from "./DevWork/DevWork"

import {useState} from 'react'

function Info() {
    const[showDevWork, setShowDevWork] = useState(true)
    return(
        <div>
            <h1 className="test5">Viktor Gip</h1>
            <h3>Frontend Developer with a passion for tech and design</h3>
            <div>
                <button className="button1">Contact</button>
                <a className="button1" href="https://www.linkedin.com/in/viktor-gip-052109207/">LinkedIn</a>
                <a className="button1" href="https://github.com/thegip">Github</a>
            </div>
            <div>
                <button className="button1">disign work</button>
                <button className="button1" onClick={() => setShowDevWork(!showDevWork)}>development work</button>
            </div>
            {showDevWork && <DevWork/>}
            <br/>
        </div>
    )
}

export default Info

