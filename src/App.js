import Game from './components/Game/Game'
import './Normalize.css'
import './App.css'
import {GenerateBoard} from './components/GenerateBoard'

const board = GenerateBoard(10,9,10)
console.log(board)

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <h1>Viktor Gip</h1>
      <h3>Web Developer</h3>
      <br/>
      <h2>MINESWEEEPER</h2>
      <div class="gamearea">
          <div>~~menu~~</div>
          <Game board={board}/>
        </div>
    </div>
  )
}

export default App