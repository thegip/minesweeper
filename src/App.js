import Game from './components/Game'
import './App.css'
import {GenerateBoard} from './components/GenerateBoard'

const board = GenerateBoard(10,5,7)
console.log(board)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MINESWEEEPEERRR POGGERGES</h1>
        <div class="gamearea">
          <div>header board</div>

          <Game board={board}/>
        </div>
      </header>
    </div>
  )
}

export default App;