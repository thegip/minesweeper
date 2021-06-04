import Game from './components/Game/Game'
import './App.css'
import {GenerateBoard} from './components/GenerateBoard'

const board = GenerateBoard(10,9,10)
console.log(board)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MINESWEEEPER</h1>
        <div class="gamearea">
          <div>~~menu~~</div>

          <Game board={board}/>
        </div>
      </header>
    </div>
  )
}

export default App