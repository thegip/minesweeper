import Game from './components/Game/Game'
import Info from './components/InfoContent/InfoContent'
import './Normalize.css'
import './App.css'
import {GenerateBoard} from './components/GenerateBoard'
import { useState } from 'react'

const board = GenerateBoard(10,10,10)
console.log(board)



function App() {
  const [showGame, setShowGame] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Info/>
      <h3 className="showGame" onClick={() => setShowGame(!showGame)}>try out a project</h3>
      
      {showGame && <Game board={board}/>}
      <div>Github for this website</div>
    </div>
  )
}

export default App