import Game from './components/Game/Game'
import Info from './components/InfoContent/InfoContent'
import './Normalize.css'
import './App.css'
import {GenerateBoard} from './components/GenerateBoard'

const board = GenerateBoard(10,10,10)
console.log(board)

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Info/>
     
      <Game board={board}/>
      <div>Project information</div>
    </div>
  )
}

export default App