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
      <button onClick={() => setShowGame(!showGame)}>show game</button>
      {showGame && <Game board={board}/>}
      <div>Project information</div>
    </div>
  )
}

export default App