import NumberList from './components/game'
import './App.css'

const numbers = [[1], [2], [3], [4], [5]];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MINESWEEEPEERRR POGGERGES</h1>
        <div class="gamearea">
          <div>header board</div>
          <div>
            square place 
            <br/>
            100 squares
          </div>

          <NumberList numbers={numbers}/>
        </div>
      </header>
    </div>
  );
}

export default App;