import Game from './components/Game/Game'
import Info from './components/InfoContent/InfoContent'
import './Normalize.css'
import './App.css'

import { useState } from 'react'




function App() {
  const [showGame, setShowGame] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Info/>
      <h3 className="showGame" onClick={() => setShowGame(!showGame)}>try out a project</h3>
      
      {showGame && <Game/>}
      <div>Github for this website</div>
    </div>
  )
}

export default App