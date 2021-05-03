
import './App.css';

function generateBoard(){
 
  console.log("printed from within function")
  return "returned from function"
}

var temp = generateBoard()

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
            {console.log(temp)}
            {console.log("test")}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
