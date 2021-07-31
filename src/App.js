import Game from './components/Game/Game'
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
      <h1>Viktor Gip</h1>
      <h3>Web Developer</h3>
      
      <br/>
      <h3>try out one of my projects</h3>
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