import Game from './components/Game/Game'
import Info from './components/InfoContent/Index'
import './Normalize.css'
import './App.css'
import {GenerateBoard} from './components/GenerateBoard'

const board = GenerateBoard(15,9,10)
console.log(board)

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Info/>
      <h2>MINESWEEEPER</h2>
      <input id="number" type="number" value="42"/>
      <div class="gamearea">
        <div>~~menu~~</div>
        <Game board={board}/>
      </div>
      <div>Project information</div>
    </div>
  )
}

export default App